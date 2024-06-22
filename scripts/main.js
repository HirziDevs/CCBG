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

function Generator(generatorBlock, gamemode, tool) {
    const { dimension, location } = generatorBlock;

    const locations = [
        dimension.getBlock({ x: location.x + 1, y: location.y, z: location.z }),
        dimension.getBlock({ x: location.x - 1, y: location.y, z: location.z }),
        dimension.getBlock({ x: location.x, y: location.y, z: location.z + 1 }),
        dimension.getBlock({ x: location.x, y: location.y, z: location.z - 1 }),
        dimension.getBlock({ x: location.x, y: location.y + 1, z: location.z }),
        dimension.getBlock({ x: location.x, y: location.y - 1, z: location.z })
    ];

    const Water = ["minecraft:flowing_water", "minecraft:water"];
    const Lava = ["minecraft:flowing_lava", "minecraft:lava"];
    let isCobblestoneGenerator = false;
    let isBasaltGenerator = false;
    let isCustomGenerator = false;
    let customGeneratorID = -1;

    config.customGenerator.forEach((generator, i) => {
        if (
            customGeneratorID === -1 &&
            generator.left_block && Array.isArray(generator.left_block) && generator.left_block.length > 0 &&
            generator.right_block && Array.isArray(generator.right_block) && generator.right_block.length > 0
        ) {
            if (
                generator.left_block.includes(locations[0].type.id) &&
                generator.right_block.includes(locations[1].type.id)
            ) isCustomGenerator = true;
            if (
                generator.left_block.includes(locations[1].type.id) &&
                generator.right_block.includes(locations[0].type.id)
            ) isCustomGenerator = true;
            if (
                generator.left_block.includes(locations[2].type.id) &&
                generator.right_block.includes(locations[3].type.id)
            ) isCustomGenerator = true;
            if (
                generator.left_block.includes(locations[3].type.id) &&
                generator.right_block.includes(locations[2].type.id)
            ) isCustomGenerator = true;


            if (
                generator.left_block.includes("WATERLOGGED") && locations[0].isWaterlogged &&
                generator.right_block.includes(locations[1].type.id)
            ) isCustomGenerator = true;
            if (
                generator.left_block.includes("WATERLOGGED") && locations[1].isWaterlogged &&
                generator.right_block.includes(locations[0].type.id)
            ) isCustomGenerator = true;
            if (
                generator.left_block.includes("WATERLOGGED") && locations[2].isWaterlogged &&
                generator.right_block.includes(locations[3].type.id)
            ) isCustomGenerator = true;
            if (
                generator.left_block.includes("WATERLOGGED") && locations[3].isWaterlogged &&
                generator.right_block.includes(locations[2].type.id)
            ) isCustomGenerator = true;


            if (
                generator.left_block.includes(locations[0].type.id) &&
                (generator.right_block.includes("WATERLOGGED") && locations[1].isWaterlogged)
            ) isCustomGenerator = true;
            if (
                generator.left_block.includes(locations[1].type.id) &&
                (generator.right_block.includes("WATERLOGGED") && locations[0].isWaterlogged)
            ) isCustomGenerator = true;
            if (
                generator.left_block.includes(locations[2].type.id) &&
                (generator.right_block.includes("WATERLOGGED") && locations[3].isWaterlogged)
            ) isCustomGenerator = true;
            if (
                generator.left_block.includes(locations[3].type.id) &&
                (generator.right_block.includes("WATERLOGGED") && locations[2].isWaterlogged)
            ) isCustomGenerator = true;


            if (
                generator.under_block && Array.isArray(generator.under_block) && generator.under_block.length > 0 &&
                !generator.under_block.includes(locations[5].type.id)
            ) isCustomGenerator = false;

            if (isCustomGenerator) customGeneratorID = i;
        }
    });

    if (
        Water.includes(locations[0].type.id) &&
        Lava.includes(locations[1].type.id)
    ) isCobblestoneGenerator = true;
    if (
        Water.includes(locations[1].type.id) &&
        Lava.includes(locations[0].type.id)
    ) isCobblestoneGenerator = true;
    if (
        Water.includes(locations[2].type.id) &&
        Lava.includes(locations[3].type.id)
    ) isCobblestoneGenerator = true;
    if (
        Water.includes(locations[3].type.id) &&
        Lava.includes(locations[2].type.id)
    ) isCobblestoneGenerator = true;

    if (
        locations[0].isWaterlogged &&
        Lava.includes(locations[1].type.id)
    ) isCobblestoneGenerator = true;
    if (
        locations[1].isWaterlogged &&
        Lava.includes(locations[0].type.id)
    ) isCobblestoneGenerator = true;
    if (
        locations[2].isWaterlogged &&
        Lava.includes(locations[3].type.id)
    ) isCobblestoneGenerator = true;
    if (
        locations[3].isWaterlogged &&
        Lava.includes(locations[2].type.id)
    ) isCobblestoneGenerator = true;

    if (
        "minecraft:blue_ice" === locations[0].type.id &&
        Lava.includes(locations[1].type.id)
    ) isBasaltGenerator = true;
    if (
        "minecraft:blue_ice" === locations[1].type.id &&
        Lava.includes(locations[0].type.id)
    ) isBasaltGenerator = true;
    if (
        "minecraft:blue_ice" === locations[2].type.id &&
        Lava.includes(locations[3].type.id)
    ) isBasaltGenerator = true;
    if (
        "minecraft:blue_ice" === locations[3].type.id &&
        Lava.includes(locations[2].type.id)
    ) isBasaltGenerator = true;

    if (locations[5].type.id !== "minecraft:soul_soil")
        isBasaltGenerator = false;

    if (!dimension.getBlock(location).isAir) {
        isCobblestoneGenerator = false;
        isBasaltGenerator = false;
        isCustomGenerator = false;
    }

    if (isCobblestoneGenerator || isBasaltGenerator || isCustomGenerator) {
        if (isCobblestoneGenerator && !config.cobblestone) return;
        if (isBasaltGenerator && !config.basalt) return;
        if (isCustomGenerator && !config.enableCustomGenerator) return;

        if (
            (isCobblestoneGenerator || isBasaltGenerator) && gamemode === "survival" && tool &&
            config.tools?.length > 0 && !config.tools.includes(tool.type.id)
        ) return;

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
        if (
            isCustomGenerator && customGeneratorID !== -1 && gamemode === "survival" && tool &&
            config.customGenerator[customGeneratorID]?.tools?.length > 0 &&
            !config.customGenerator[customGeneratorID].tools.includes(tool.type.id)
        ) return;

        if (blocks.length > 0) {
            let blockChances = 0;
            let selectedBlock = blocks[0].chance;

            for (const block of blocks) {
                blockChances += block.chance;
                if (Math.random() * 100 < blockChances) {
                    selectedBlock = block.chance;
                    break;
                }
            }

            selectedBlock = blocks.filter(block => block.chance === selectedBlock)[Math.floor(Math.random() * blocks.filter(block => block.chance === selectedBlock).length)]

            config.delay = config.delay < 0 ? 0.1 : config.delay;
            system.runTimeout(() => {
                dimension.runCommand(`setblock ${location.x} ${location.y} ${location.z} ${selectedBlock}`);
            }, config.delay * 20);

            if (config.enableSummonMobs) {
                let mobs = config.mobs
                if (isCustomGenerator && config.customGenerator[customGeneratorID].mobs?.length > 0)
                    mobs = config.customGenerator[customGeneratorID].mobs

                let mobChances = 0;
                let selectedMob = mobs[0].chance;

                for (const mob of mobs) {
                    mobChances += mob.chance;
                    if (Math.random() * 100 < mobChances) {
                        selectedMob = mob.chance;
                        break;
                    }
                }

                selectedMob = mobs.filter(mob => mob.chance === selectedMob)[Math.floor(Math.random() * mobs.filter(mob => mob.chance === selectedMob).length)]

                system.runTimeout(() => {
                    if (selectedMob !== "nothing") dimension.runCommand(`summon ${selectedMob} ${location.x} ${location.y + 1} ${location.z}`);
                }, config.delay * 20 + 5)
            }
        }
    }
}

if (config.player || config.player === null || config.player === undefined) world.afterEvents.playerBreakBlock.subscribe(event => Generator(event.block, event.player.getGameMode(), event.itemStackAfterBreak));

if (config.explosion || config.player === null || config.player === undefined) world.afterEvents.blockExplode.subscribe(event => Generator(event.block));

if (config.piston || config.player === null || config.player === undefined) world.afterEvents.pistonActivate.subscribe(event => {
    const { dimension, location } = event.block;

    const locations = [
        dimension.getBlock({ x: location.x + 1, y: location.y, z: location.z }),
        dimension.getBlock({ x: location.x - 1, y: location.y, z: location.z }),
        dimension.getBlock({ x: location.x, y: location.y, z: location.z + 1 }),
        dimension.getBlock({ x: location.x, y: location.y, z: location.z - 1 }),
        dimension.getBlock({ x: location.x, y: location.y + 1, z: location.z }),
        dimension.getBlock({ x: location.x, y: location.y - 1, z: location.z })
    ];

    for (const block of locations) if (block.isAir) Generator(block);
});