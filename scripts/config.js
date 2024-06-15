/* 
 ______     ______     ______     ______    
/\  ___\   /\  ___\   /\  == \   /\  ___\   
\ \ \____  \ \ \____  \ \  __<   \ \ \__ \  
 \ \_____\  \ \_____\  \ \_____\  \ \_____\ 
  \/_____/   \/_____/   \/_____/   \/_____/ 
                                            
A Custom Cobblestone and Basalt Generator By @HirziDevs

*/
const config = {}

/*
Generator
Enable or Disable Cobblestone and Basalt Generator
change to "true" to enable
change to "false" to disable
without quotation mark
*/
config.cobblestone = true
config.basalt = true

/*
Block Name & Chances

Notes:
The total chances should be 1
If the block you entered does not appear, maybe you have entered an invalid block or there is a typo
you can check the block name by using the command "/setblock" in game
*/
config.blocks = [
	{ name: "cobblestone", chance: 0.14 },
	{ name: "coal_ore", chance: 0.13 },
	{ name: "iron_ore", chance: 0.13 },
	{ name: "copper_ore", chance: 0.12 },
	{ name: "gold_ore", chance: 0.11 },
	{ name: "redstone_ore", chance: 0.11 },
	{ name: "lapis_ore", chance: 0.11 },
	{ name: "diamond_ore", chance: 0.1 },
	{ name: "emerald_ore", chance: 0.04 },
	{ name: "ancient_debris", chance: 0.01 }
]


export default config