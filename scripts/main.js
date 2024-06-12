/* 
 ______     ______     ______     ______   
/\  ___\   /\  ___\   /\  __ \   /\  ___\   
\ \ \____  \ \ \____  \ \ \/\ \  \ \ \__ \  
 \ \_____\  \ \_____\  \ \_____\  \ \_____\ 
  \/_____/   \/_____/   \/_____/   \/_____/ 
                                            
A Custom Cobblestone Ore Generator By @HirziDevs

*/
import { world } from '@minecraft/server';
import config from './config';

world.afterEvents.playerBreakBlock.subscribe(event => {
    const { dimension, location } = event.block
    let isCobblestoneGenerator = false
    
    if (
        ["minecraft:flowing_water","minecraft:water"].includes(dimension.getBlock({
            x: location.x + 1,
            y: location.y,
            z: location.z
        }).type.id) &&
        ["minecraft:flowing_lava","minecraft:lava"].includes(dimension.getBlock({
            x: location.x - 1,
            y: location.y,
            z: location.z
        }).type.id)
    ) isCobblestoneGenerator = true
    if (
        ["minecraft:flowing_water","minecraft:water"].includes(dimension.getBlock({
            x: location.x - 1,
            y: location.y,
            z: location.z
        }).type.id) &&
        ["minecraft:flowing_lava","minecraft:lava"].includes(dimension.getBlock({
            x: location.x + 1,
            y: location.y,
            z: location.z
        }).type.id)
    ) isCobblestoneGenerator = true
    if (
        ["minecraft:flowing_water","minecraft:water"].includes(dimension.getBlock({
            x: location.x,
            y: location.y,
            z: location.z + 1
        }).type.id) &&
        ["minecraft:flowing_lava","minecraft:lava"].includes(dimension.getBlock({
            x: location.x,
            y: location.y,
            z: location.z - 1
        }).type.id)
    ) isCobblestoneGenerator = true
    if (
        ["minecraft:flowing_water","minecraft:water"].includes(dimension.getBlock({
            x: location.x,
            y: location.y,
            z: location.z - 1
        }).type.id) &&
        ["minecraft:flowing_lava","minecraft:lava"].includes(dimension.getBlock({
            x: location.x,
            y: location.y,
            z: location.z + 1
        }).type.id)
    ) isCobblestoneGenerator = true

    if (
        dimension.getBlock({
            x: location.x,
            y: location.y,
            z: location.z
        }).type.id !== "minecraft:air"
    ) isCobblestoneGenerator = false

    if (isCobblestoneGenerator) {
        let chances = 0;
        let selectedBlock = config.blocks[0].name;

        for (const block of config.blocks) {
            chances += block.chance;
            if (Math.random() < chances) {
                selectedBlock = block.name;
                break;
            }
        }

        dimension.runCommand(`setblock ${location.x} ${location.y} ${location.z} ${selectedBlock}`)
    }
})