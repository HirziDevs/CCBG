/* 
 ______     ______     ______     ______    
/\  ___\   /\  ___\   /\  == \   /\  ___\   
\ \ \____  \ \ \____  \ \  __<   \ \ \__ \  
 \ \_____\  \ \_____\  \ \_____\  \ \_____\ 
  \/_____/   \/_____/   \/_____/   \/_____/ 
                                                
A Custom Cobblestone and Basalt Generator By @HirziDevs

*/
import { world } from '@minecraft/server';
import config from './config';

world.afterEvents.playerBreakBlock.subscribe(event => {
    const Water = ["minecraft:flowing_water", "minecraft:water"]
    const Lava = ["minecraft:flowing_lava", "minecraft:lava"]
    const { dimension, location } = event.block
    let isCobblestoneGenerator = false
    let isBasaltGenerator = false
    let isCustomGenerator = false
    let customGeneratorID = -1

    config.customGenerator.forEach((generator, i) => {
        if (
            generator.left_block.includes(dimension.getBlock({
                x: location.x + 1,
                y: location.y,
                z: location.z
            }).type.id) &&
            generator.right_block.includes(dimension.getBlock({
                x: location.x - 1,
                y: location.y,
                z: location.z
            }).type.id)
        ) isCustomGenerator = true
        if (
            generator.left_block.includes(dimension.getBlock({
                x: location.x - 1,
                y: location.y,
                z: location.z
            }).type.id) &&
            generator.right_block.includes(dimension.getBlock({
                x: location.x + 1,
                y: location.y,
                z: location.z
            }).type.id)
        ) isCustomGenerator = true
        if (
            generator.left_block.includes(dimension.getBlock({
                x: location.x,
                y: location.y,
                z: location.z + 1
            }).type.id) &&
            generator.right_block.includes(dimension.getBlock({
                x: location.x,
                y: location.y,
                z: location.z - 1
            }).type.id)
        ) isCustomGenerator = true
        if (
            generator.left_block.includes(dimension.getBlock({
                x: location.x,
                y: location.y,
                z: location.z - 1
            }).type.id) &&
            generator.right_block.includes(dimension.getBlock({
                x: location.x,
                y: location.y,
                z: location.z + 1
            }).type.id)
        ) isCustomGenerator = true

        if (isCustomGenerator) customGeneratorID = i
    })

    if (
        Water.includes(dimension.getBlock({
            x: location.x + 1,
            y: location.y,
            z: location.z
        }).type.id) &&
        Lava.includes(dimension.getBlock({
            x: location.x - 1,
            y: location.y,
            z: location.z
        }).type.id)
    ) isCobblestoneGenerator = true
    if (
        Water.includes(dimension.getBlock({
            x: location.x - 1,
            y: location.y,
            z: location.z
        }).type.id) &&
        Lava.includes(dimension.getBlock({
            x: location.x + 1,
            y: location.y,
            z: location.z
        }).type.id)
    ) isCobblestoneGenerator = true
    if (
        Water.includes(dimension.getBlock({
            x: location.x,
            y: location.y,
            z: location.z + 1
        }).type.id) &&
        Lava.includes(dimension.getBlock({
            x: location.x,
            y: location.y,
            z: location.z - 1
        }).type.id)
    ) isCobblestoneGenerator = true
    if (
        Water.includes(dimension.getBlock({
            x: location.x,
            y: location.y,
            z: location.z - 1
        }).type.id) &&
        Lava.includes(dimension.getBlock({
            x: location.x,
            y: location.y,
            z: location.z + 1
        }).type.id)
    ) isCobblestoneGenerator = true

    if (
        "minecraft:blue_ice" === dimension.getBlock({
            x: location.x + 1,
            y: location.y,
            z: location.z
        }).type.id &&
        Lava.includes(dimension.getBlock({
            x: location.x - 1,
            y: location.y,
            z: location.z
        }).type.id)
    ) isBasaltGenerator = true
    if (
        "minecraft:blue_ice" === dimension.getBlock({
            x: location.x - 1,
            y: location.y,
            z: location.z
        }).type.id &&
        Lava.includes(dimension.getBlock({
            x: location.x + 1,
            y: location.y,
            z: location.z
        }).type.id)
    ) isBasaltGenerator = true
    if (
        "minecraft:blue_ice" === dimension.getBlock({
            x: location.x,
            y: location.y,
            z: location.z + 1
        }).type.id &&
        Lava.includes(dimension.getBlock({
            x: location.x,
            y: location.y,
            z: location.z - 1
        }).type.id)
    ) isBasaltGenerator = true
    if (
        "minecraft:blue_ice" === dimension.getBlock({
            x: location.x,
            y: location.y,
            z: location.z - 1
        }).type.id &&
        Lava.includes(dimension.getBlock({
            x: location.x,
            y: location.y,
            z: location.z + 1
        }).type.id)
    ) isBasaltGenerator = true

    if (
        dimension.getBlock({
            x: location.x,
            y: location.y - 1,
            z: location.z
        }).type.id !== "minecraft:soul_soil"
    ) isBasaltGenerator = false

    if (
        dimension.getBlock({
            x: location.x,
            y: location.y,
            z: location.z
        }).type.id !== "minecraft:air"
    ) {
        isCobblestoneGenerator = false
        isBasaltGenerator = false
        isCustomGenerator = false
    }

    if (isCobblestoneGenerator || isBasaltGenerator || isCustomGenerator) {
        if (isCobblestoneGenerator && !config.cobblestone) return
        if (isBasaltGenerator && !config.basalt) return
        if (isCustomGenerator && !config.enableCustomGenerator) return

        let blocks;
        if (config.enablePerDimensionGenerator && !isCustomGenerator) {
            switch (event.dimension.id) {
                case "minecraft:overworld":
                    blocks = config.overworld
                    break;
                case "minecraft:nether":
                    blocks = config.nether
                    break;
                case "minecraft:the_end":
                    blocks = config.the_end
                    break;
                default:
                    blocks = config.blocks
            }
        } else blocks = config.blocks

        if (isCustomGenerator && customGeneratorID !== -1) blocks = config.customGenerator[customGeneratorID].blocks

        let chances = 0;
        let selectedBlock = blocks[0].identifier;

        for (const block of blocks) {
            chances += block.chance;
            if (Math.random() * 100 < chances) {
                selectedBlock = block.identifier;
                break;
            }
        }

        dimension.runCommand(`setblock ${location.x} ${location.y} ${location.z} ${selectedBlock}`)
    }
})