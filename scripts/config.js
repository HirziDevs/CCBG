/* 
 ______     ______     ______     ______    
/\  ___\   /\  ___\   /\  __ \   /\  ___\   
\ \ \____  \ \ \____  \ \ \/\ \  \ \ \__ \  
 \ \_____\  \ \_____\  \ \_____\  \ \_____\ 
  \/_____/   \/_____/   \/_____/   \/_____/ 
                                            
A Custom Cobblestone Ore Generator By @HirziDevs

*/
const config = {}

/*
Block Name & Chances

Notes:
The total chances should be 1
If the block you entered does not appear, maybe you have entered an invalid block or there is a typo
you can check the block name by using the command "/setblock" in game
*/
config.blocks = [
    { name: "cobblestone", chance: 0.2 },
    { name: "coal_ore", chance: 0.15 },
    { name: "iron_ore", chance: 0.125 },
    { name: "gold_ore", chance: 0.125 },
    { name: "redstone_ore", chance: 0.1 },
    { name: "lapis_ore", chance: 0.1 },
    { name: "copper_ore", chance: 0.1 },
    { name: "diamond_ore", chance: 0.05 },
    { name: "emerald_ore", chance: 0.045 },
    { name: "ancient_debris", chance: 0.005 },
]


export default config