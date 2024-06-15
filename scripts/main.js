/* 
 ______     ______    ______   
/\  ___\   /\  ___\  /\  ___\   
\ \ \____  \ \ \____ \ \ \__ \  
 \ \_____\  \ \_____\ \ \_____\ 
  \/_____/   \/_____/  \/_____/ 
                                            
A Custom Cobblestone Generator By @HirziDevs

*/
import { world } from '@minecraft/server';
import config from './config';

world.afterEvents.playerBreakBlock.subscribe(event => {
    const Water = ["minecraft:flowing_water","minecraft:water"]
    const Lava = ["minecraft:flowing_lava","minecraft:lava"]
    const { dimension, location } = event.block
    let isCobblestoneGenerator = false
    
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