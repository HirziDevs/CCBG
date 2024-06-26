/* 
 ______     ______     ______     ______    
/\  ___\   /\  ___\   /\  == \   /\  ___\   
\ \ \____  \ \ \____  \ \  __<   \ \ \__ \  
 \ \_____\  \ \_____\  \ \_____\  \ \_____\ 
  \/_____/   \/_____/   \/_____/   \/_____/ 
										    
A Custom Cobblestone and Basalt Generator By @HirziDevs
Documentation : https://ccbg.znproject.my.id
Discord		  : https://discord.znproject.my.id
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
Tools

Tools that must be used to break the block in order to make the generator spawn 
the tools can be disabled by removing all the items in the array.

Example code to disable tools:
config.tools = []
*/
config.tools = [
	"minecraft:stone_pickaxe",
	"minecraft:iron_pickaxe",
	"minecraft:golden_pickaxe",
	"minecraft:diamond_pickaxe",
	"minecraft:netherite_pickaxe",
]

/*
Block Spawn Delay

Specify the amount of time, in seconds, to wait before spawning a block.
You can set it to values such as 1 or 0.1, etc. if you put negative number it will be set to 0.1
*/
config.delay = 0.5

/*
Teleport Item and XP

Teleport item and XP to upper or bellow block if there is nothing at above or below
INFO: if there is a hopper or minecart hopper, the item will not be teleported becouse there is a bug that
	  can crash or force close your minecraft

Enable or disable teleport item and XP by changing config.teleportItemAndXP
to "true" to enable it or "false" to disable it. without quotation mark
*/
config.teleportItemAndXP = false

/*
Particle

Show particle when the block is destroyed

Enable or disable particle by changing config.enableParticle
to "true" to enable it or "false" to disable it. without quotation mark
*/
config.enableParticle = false
config.particle = "minecraft:villager_happy"

/*
Sound

Play sound when the block is destroyed

Enable or disable sound by changing config.enableSound
to "true" to enable it or "false" to disable it. without quotation mark
*/
config.enableSound = false
config.sound = "random.orb"
config.noPermissionSound = "random.break"

/*
Required Tags

Specify the tags that player must have to use the generator

Example:
config.tags = ["operator","donator"]
*/
config.tags = []

/*
Players

Specify the players that can use the generator

Example:
config.players = ["HirziGamingYT", "player2"]
*/
config.players = []

/*
Block Identifier & Chances

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
Summon Mobs

Enable or disable summon mobs when player break block by changing config.enableSummonMobs
to "true" to enable it or "false" to disable it. without quotation mark
*/
config.enableSummonMobs = false

config.mobs = [
	{ identifier: "nothing", chance: 50 },
	{ identifier: "minecraft:cow", chance: 30 },
	{ identifier: "minecraft:sheep", chance: 20 }
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

Custom Generator are moved to custom-generator.js
*/

export default config;