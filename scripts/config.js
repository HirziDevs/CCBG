/* 
 ______     ______     ______     ______    
/\  ___\   /\  ___\   /\  == \   /\  ___\   
\ \ \____  \ \ \____  \ \  __<   \ \ \__ \  
 \ \_____\  \ \_____\  \ \_____\  \ \_____\ 
  \/_____/   \/_____/   \/_____/   \/_____/ 
										    
A Custom Cobblestone and Basalt Generator By @HirziDevs
You can view all the documentation at https://ccbg.znproject.my.id
*/
const config = {};

/*
Generator

Enable or disable the Cobblestone and Basalt Generator by changing this setting 
to "true" to enable it or to "false" to disable it. without quotation mark
*/
config.cobblestone = true
config.basalt = true

/*
Generator Event

Enable or disable the Generator if the block is destroyed or moved by a player, an explosion or a piston
by changing this setting to "true" to enable it or to "false" to disable it. without quotation mark
*/
config.player = true
config.explosion = true
config.piston = true

/*
Block Spawn Delay

Specify the amount of time, in seconds, to wait before spawning a block.
You can set it to values such as 1 or 0.1, etc. if you put negative number it will be set to 0.1
*/
config.delay = 0.5

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

Enable or disable Per Dimension Generator by changing config.enablePerDimensionGenerator 
to "true" to enable it or to "false" to disable it. without quotation mark
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
	{ identifier: "end_stone", chance: 20 },
	{ identifier: "deepslate_iron_ore", chance: 20 },
	{ identifier: "deepslate_gold_ore", chance: 17.5 },
	{ identifier: "deepslate_diamond_ore", chance: 17.5 },
	{ identifier: "deepslate_emerald_ore", chance: 15 },
	{ identifier: "ancient_debris", chance: 10 }
]

/*
Custom Generator

Enable or disable  Custom Generator by changing config.enableCustomGenerator 
to "true" to enable it or to "false" to disable it. without quotation mark
*/
config.enableCustomGenerator = false

config.customGenerator = [
	{
		left_block: ["minecraft:stone"],
		right_block: ["minecraft:dripstone_block"],
		under_block: [],
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

export default config;