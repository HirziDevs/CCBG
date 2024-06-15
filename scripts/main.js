/* 
 ______     ______     ______     ______    
/\  ___\   /\  ___\   /\  == \   /\  ___\   
\ \ \____  \ \ \____  \ \  __<   \ \ \__ \  
 \ \_____\  \ \_____\  \ \_____\  \ \_____\ 
  \/_____/   \/_____/   \/_____/   \/_____/ 
                                                
A Custom Cobblestone Generator By @HirziDevs

*/
import { world } from '@minecraft/server';
import config from './config';

world.afterEvents.playerBreakBlock.subscribe(event => {
    const Water = ["minecraft:flowing_water","minecraft:water"]
    const Lava = ["minecraft:flowing_lava","minecraft:lava"]
    const { dimension, location } = event.block
    let isCobblestoneGenerator = false
    let isBasaltGenerator = false
    
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
    }

    if (isCobblestoneGenerator || isBasaltGenerator) {
        if(isCobblestoneGenerator && !config.cobblestone) return
        if(isBasaltGenerator && !config.basalt) return
        let blocks;
        if (config.enablePerDimensionGenerator) {
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
        let chances = 0;
        let selectedBlock = blocks[0].name;

        for (const block of blocks) {
            chances += block.chance;
            if (Math.random() < chances) {
                selectedBlock = block.name;
                break;
            }
        }

        dimension.runCommand(`setblock ${location.x} ${location.y} ${location.z} ${selectedBlock}`)
    }
})