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
Block Identifier & Chances

The total chances should be 100
If the block you entered does not appear, maybe you have entered an invalid block or there is a typo
you can check the block identifier by using the command "/setblock" in game
*/
config.blocks = [
	{ identifier: "cobblestone", chance: 14 },
	{ identifier: "coal_ore", chance: 13 },
	{ identifier: "iron_ore", chance: 13 },
	{ identifier: "copper_ore", chance: 12 },
	{ identifier: "gold_ore", chance: 11 },
	{ identifier: "redstone_ore", chance: 11 },
	{ identifier: "lapis_ore", chance: 11 },
	{ identifier: "diamond_ore", chance: 10 },
	{ identifier: "emerald_ore", chance: 4 },
	{ identifier: "ancient_debris", chance: 1 }
]

/*
Per Dimension Generator

To Enable Per Dimension Generator, change config.enablePerDimensionGenerator from "false" to "true" without the quotation mark
*/
config.enablePerDimensionGenerator = false

config.overworld = [
	{ identifier: "cobblestone", chance: 14 },
	{ identifier: "coal_ore", chance: 13 },
	{ identifier: "iron_ore", chance: 13 },
	{ identifier: "copper_ore", chance: 12 },
	{ identifier: "gold_ore", chance: 11 },
	{ identifier: "redstone_ore", chance: 11 },
	{ identifier: "lapis_ore", chance: 11 },
	{ identifier: "diamond_ore", chance: 10 },
	{ identifier: "emerald_ore", chance: 5 }
]

config.nether = [
	{ identifier: "basalt", chance: 40 },
	{ identifier: "quartz_ore", chance: 30 },
	{ identifier: "nether_gold_ore", chance: 20 },
	{ identifier: "ancient_debris", chance: 10 },
]

config.the_end = [
	{ identifier: "end_stone", chance: 14 },
	{ identifier: "deepslate_coal_ore", chance: 13 },
	{ identifier: "deepslate_iron_ore", chance: 13 },
	{ identifier: "deepslate_copper_ore", chance: 12 },
	{ identifier: "deepslate_gold_ore", chance: 11 },
	{ identifier: "deepslate_redstone_ore", chance: 11 },
	{ identifier: "deepslate_lapis_ore", chance: 11 },
	{ identifier: "deepslate_diamond_ore", chance: 10 },
	{ identifier: "deepslate_emerald_ore", chance: 4 },
	{ identifier: "ancient_debris", chance: 1 }
]

/*
Custom Generator

To Enable Custom Generator, change config.enableCustomGenerator from "false" to "true" without the quotation mark
To make the generator spawn block, you need to place a block in the middle and break it
*/
config.enableCustomGenerator = true

config.customGenerator = [
	{
		left_block: ["minecraft:stonebrick"], right_block: ["minecraft:dripstone_block"],
		blocks: [
			{ identifier: "stone", chance: 14 },
            { identifier: "coal_block", chance: 13 },
            { identifier: "iron_block", chance: 13 },
            { identifier: "copper_block", chance: 12 },
            { identifier: "gold_block", chance: 11 },
            { identifier: "redstone_block", chance: 11 },
            { identifier: "lapis_block", chance: 11 },
            { identifier: "diamond_block", chance: 10 },
            { identifier: "emerald_block", chance: 5 }
		]
	}
]

export default config