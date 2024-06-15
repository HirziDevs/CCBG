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

/*
Per Dimension Generator

To Enable Per Dimension Generator, change config.enablePerDimensionGenerator from "false" to "true" without the quotation mark
*/
config.enablePerDimensionGenerator = false

config.overworld = [
	{ name: "cobblestone", chance: 0.14 },
	{ name: "coal_ore", chance: 0.13 },
	{ name: "iron_ore", chance: 0.13 },
	{ name: "copper_ore", chance: 0.12 },
	{ name: "gold_ore", chance: 0.11 },
	{ name: "redstone_ore", chance: 0.11 },
	{ name: "lapis_ore", chance: 0.11 },
	{ name: "diamond_ore", chance: 0.1 },
	{ name: "emerald_ore", chance: 0.05 }
]

config.nether = [
	{ name: "basalt", chance: 0.4 },
	{ name: "quartz_ore", chance: 0.3 },
	{ name: "nether_gold_ore", chance: 0.2 },
	{ name: "ancient_debris", chance: 0.1 },
]

config.the_end = [
	{ name: "deepslate", chance: 0.14 },
	{ name: "deepslate_coal_ore", chance: 0.13 },
	{ name: "deepslate_iron_ore", chance: 0.13 },
	{ name: "deepslate_copper_ore", chance: 0.12 },
	{ name: "deepslate_gold_ore", chance: 0.11 },
	{ name: "deepslate_redstone_ore", chance: 0.11 },
	{ name: "deepslate_lapis_ore", chance: 0.11 },
	{ name: "deepslate_diamond_ore", chance: 0.1 },
	{ name: "deepslate_emerald_ore", chance: 0.04 },
	{ name: "ancient_debris", chance: 0.01 }
]

export default config