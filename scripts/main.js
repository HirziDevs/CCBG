/* 
 ______     ______     ______     ______    
/\  ___\   /\  ___\   /\  == \   /\  ___\   
\ \ \____  \ \ \____  \ \  __<   \ \ \__ \  
 \ \_____\  \ \_____\  \ \_____\  \ \_____\ 
  \/_____/   \/_____/   \/_____/   \/_____/ 
                                                
A Custom Cobblestone and Basalt Generator By @HirziDevs
You can view all the documentation at https://ccbg.znproject.my.id
*/
import { system, world } from '@minecraft/server';
import config from './config';

function Generator(generatorBlock) {
    const { dimension, location } = generatorBlock;

    const locations = [
        { x: location.x + 1, y: location.y, z: location.z },
        { x: location.x - 1, y: location.y, z: location.z },
        { x: location.x, y: location.y, z: location.z + 1 },
        { x: location.x, y: location.y, z: location.z - 1 }
    ];

    const Water = ["minecraft:flowing_water", "minecraft:water"];
    const Lava = ["minecraft:flowing_lava", "minecraft:lava"];
    let isCobblestoneGenerator = false;;
    let isBasaltGenerator = false;;
    let isCustomGenerator = false;;
    let customGeneratorID = -1;

    config.customGenerator.forEach((generator, i) => {
        if (
            generator.left_block.includes(dimension.getBlock(locations[0]).type.id) &&
            generator.right_block.includes(dimension.getBlock(locations[1]).type.id)
        ) isCustomGenerator = true;
        if (
            generator.left_block.includes(dimension.getBlock(locations[1]).type.id) &&
            generator.right_block.includes(dimension.getBlock(locations[0]).type.id)
        ) isCustomGenerator = true;
        if (
            generator.left_block.includes(dimension.getBlock(locations[2]).type.id) &&
            generator.right_block.includes(dimension.getBlock(locations[3]).type.id)
        ) isCustomGenerator = true;
        if (
            generator.left_block.includes(dimension.getBlock(locations[3]).type.id) &&
            generator.right_block.includes(dimension.getBlock(locations[2]).type.id)
        ) isCustomGenerator = true;

        if (isCustomGenerator) customGeneratorID = i
    });

    if (
        Water.includes(dimension.getBlock(locations[0]).type.id) &&
        Lava.includes(dimension.getBlock(locations[1]).type.id)
    ) isCobblestoneGenerator = true;
    if (
        Water.includes(dimension.getBlock(locations[1]).type.id) &&
        Lava.includes(dimension.getBlock(locations[0]).type.id)
    ) isCobblestoneGenerator = true;
    if (
        Water.includes(dimension.getBlock(locations[2]).type.id) &&
        Lava.includes(dimension.getBlock(locations[3]).type.id)
    ) isCobblestoneGenerator = true;
    if (
        Water.includes(dimension.getBlock(locations[3]).type.id) &&
        Lava.includes(dimension.getBlock(locations[2]).type.id)
    ) isCobblestoneGenerator = true;

    if (
        dimension.getBlock(locations[0]).isWaterlogged &&
        Lava.includes(dimension.getBlock(locations[1]).type.id)
    ) isCobblestoneGenerator = true;
    if (
        dimension.getBlock(locations[1]).isWaterlogged &&
        Lava.includes(dimension.getBlock(locations[0]).type.id)
    ) isCobblestoneGenerator = true;
    if (
        dimension.getBlock(locations[2]).isWaterlogged &&
        Lava.includes(dimension.getBlock(locations[3]).type.id)
    ) isCobblestoneGenerator = true;
    if (
        dimension.getBlock(locations[3]).isWaterlogged &&
        Lava.includes(dimension.getBlock(locations[2]).type.id)
    ) isCobblestoneGenerator = true;

    if (
        "minecraft:blue_ice" === dimension.getBlock(locations[0]).type.id &&
        Lava.includes(dimension.getBlock(locations[1]).type.id)
    ) isBasaltGenerator = true;
    if (
        "minecraft:blue_ice" === dimension.getBlock(locations[1]).type.id &&
        Lava.includes(dimension.getBlock(locations[0]).type.id)
    ) isBasaltGenerator = true;
    if (
        "minecraft:blue_ice" === dimension.getBlock(locations[2]).type.id &&
        Lava.includes(dimension.getBlock(locations[3]).type.id)
    ) isBasaltGenerator = true;
    if (
        "minecraft:blue_ice" === dimension.getBlock(locations[3]).type.id &&
        Lava.includes(dimension.getBlock(locations[2]).type.id)
    ) isBasaltGenerator = true;

    if (
        dimension.getBlock({
            x: location.x,
            y: location.y - 1,
            z: location.z
        }).type.id !== "minecraft:soul_soil"
    ) isBasaltGenerator = false;

    if (!dimension.getBlock(location).isAir) {
        isCobblestoneGenerator = false;
        isBasaltGenerator = false;
        isCustomGenerator = false;
    }

    if (isCobblestoneGenerator || isBasaltGenerator || isCustomGenerator) {
        if (isCobblestoneGenerator && !config.cobblestone) return;
        if (isBasaltGenerator && !config.basalt) return;
        if (isCustomGenerator && !config.enableCustomGenerator) return;

        let blocks;
        if (config.enablePerDimensionGenerator && !isCustomGenerator) {
            switch (dimension.id) {
                case "minecraft:overworld":
                    blocks = config.overworld;
                    break;
                case "minecraft:nether":
                    blocks = config.nether;
                    break;
                case "minecraft:the_end":
                    blocks = config.the_end;
                    break;
                default:
                    blocks = config.blocks;
            }
        } else blocks = config.blocks;

        if (isCustomGenerator && customGeneratorID !== -1) blocks = config.customGenerator[customGeneratorID].blocks;

        if (blocks.length > 0) {
            let chances = 0;
            let selectedBlock = blocks[0].identifier;

            for (const block of blocks) {
                chances += block.chance;
                if (Math.random() * 100 < chances) {
                    selectedBlock = block.identifier;
                    break;
                }
            }

            config.delay = config.delay < 0 ? 0.1 : config.delay;
            system.runTimeout(() => {
                dimension.runCommand(`setblock ${location.x} ${location.y} ${location.z} ${selectedBlock}`);
            }, config.delay * 20);
        };
    };
};

if (config.player || config.player === null || config.player === undefined) world.afterEvents.playerBreakBlock.subscribe(event => Generator(event.block));

if (config.explosion || config.player === null || config.player === undefined) world.afterEvents.blockExplode.subscribe(event => Generator(event.block));

if (config.piston || config.player === null || config.player === undefined) world.afterEvents.pistonActivate.subscribe(event => {
    const { dimension, location } = event.block;

    const locations = [
        { x: location.x + 1, y: location.y, z: location.z },
        { x: location.x - 1, y: location.y, z: location.z },
        { x: location.x, y: location.y, z: location.z + 1 },
        { x: location.x, y: location.y, z: location.z - 1 },
        { x: location.x, y: location.y + 1, z: location.z },
        { x: location.x, y: location.y - 1, z: location.z }
    ];

    for (const blockLocation of locations) {
        const block = dimension.getBlock(blockLocation);
        if (block.isAir) Generator(block);
    };
});