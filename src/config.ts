/* 
 ______     ______     ______     ______    
/\  ___\   /\  ___\   /\  == \   /\  ___\   
\ \ \____  \ \ \____  \ \  __<   \ \ \__ \  
 \ \_____\  \ \_____\  \ \_____\  \ \_____\ 
  \/_____/   \/_____/   \/_____/   \/_____/ 
                        
A Custom Cobblestone and Basalt Generator By @HirziDevs
Documentation : https://ccbg.znproject.my.id
Discord		    : https://discord.znproject.my.id
*/

const config = {
  /**
   * @title Generator
   *
   * @description
   * Enable or disable the Cobblestone and Basalt Generator by changing this setting
   * to "true" to enable it or to "false" to disable it. without quotation mark
   */
  cobblestone: true,
  basalt: true,

  /**
   * @title Disable Generator Tag
   *
   * @description
   * If player have this tag, the generator will not be generated for that player
   */
  disableGeneratorTag: "disableGenerator",

  /**
   * @title Generator Event
   *
   * @description
   * Enable or disable the Generator if the block is destroyed or moved by a player, an explosion or a piston
   * by changing this setting to "true" to enable it or to "false" to disable it. without quotation mark
   */
  player: true,
  explosion: true,
  piston: true,

  /**
   * @title Tools
   *
   * @description
   * Tools that must be used to break the block in order to make the generator spawn
   * the tools can be disabled by removing all the items in the array.
   */
  tools: [
    "minecraft:stone_pickaxe",
    "minecraft:iron_pickaxe",
    "minecraft:golden_pickaxe",
    "minecraft:diamond_pickaxe",
    "minecraft:netherite_pickaxe",
  ],

  /**
   * @title Block Spawn Delay
   *
   * @description
   * Specify the amount of time, in seconds, to wait before spawning a block.
   * You can set it to values such as 1 or 0.1, etc. if you put negative number it will be set to 0.1
   */
  delay: 0.5,

  /**
   * @title Teleport Item and XP
   *
   * @description
   * Teleport item and XP to upper or bellow block if there is nothing at above or below
   * INFO: if there is a hopper or minecart hopper, the item will not be teleported becouse there is a bug that
   *	  can crash or force close your minecraft
   * Enable or disable teleport item and XP by changing "teleportItemAndXP"
   * to "true" to enable it or "false" to disable it. without quotation mark
   */
  teleportItemAndXP: false,

  /**
   * @title Particle
   *
   * @description
   * Show particle when the block is destroyed
   * Enable or disable particle by changing "enableParticle"
   * to "true" to enable it or "false" to disable it. without quotation mark
   */
  enableParticle: false,
  particle: "minecraft:villager_happy",

  /**
   * @title Sound
   *
   * @description
   * Play sound when the block is destroyed
   * Enable or disable sound by changing "enableSound"
   * to "true" to enable it or "false" to disable it. without quotation mark
   */
  enableSound: false,
  sound: "random.orb",
  noPermissionSound: "random.break",

  /**
   * @title Required Tags
   *
   * @description
   * Specify the tags that player must have to use the generator
   */
  tags: [],

  /**
   * @title Players
   *
   * @description
   * Specify the players that can use the generator
   */
  players: [],

  /**
   * @title Block Identifier & Chances for Cobblestone Generator
   *
   * @description
   * If the block you entered does not appear, maybe you have entered an invalid block or there is a typo
   * you can check the block identifier by using the command "/setblock" in game
   */
  cobblestoneGeneratorblocks: [
    { identifier: "cobblestone", chance: 14 },
    { identifier: "coal_ore", chance: 13 },
    { identifier: "iron_ore", chance: 13 },
    { identifier: "copper_ore", chance: 12 },
    { identifier: "gold_ore", chance: 11 },
    { identifier: "redstone_ore", chance: 11 },
    { identifier: "lapis_ore", chance: 11 },
    { identifier: "diamond_ore", chance: 10 },
    { identifier: "emerald_ore", chance: 4 },
    { identifier: "ancient_debris", chance: 1 },
  ],

  /**
   * @title Block Identifier & Chances for Basalt Generator
   *
   * @description
   * If the block you entered does not appear, maybe you have entered an invalid block or there is a typo
   * you can check the block identifier by using the command "/setblock" in game
   */
  basaltGeneratorblocks: [
    { identifier: "basalt", chance: 40 },
    { identifier: "quartz_ore", chance: 30 },
    { identifier: "nether_gold_ore", chance: 20 },
    { identifier: "ancient_debris", chance: 10 },
  ],

  /**
   * @title Summon Mobs
   *
   * @description
   * Enable or disable summon mobs when player break block by changing "enableSummonMobs"
   * to "true" to enable it or "false" to disable it. without quotation mark
   */
  enableSummonMobs: false,

  mobs: [
    { identifier: "nothing", chance: 50 },
    { identifier: "minecraft:cow", chance: 30 },
    { identifier: "minecraft:sheep", chance: 20 },
  ],

  /**
   * @title Commands
   *
   * @description
   * Enable or disable commands by changing "enableCommands"
   * to "true" to enable it or "false" to disable it. without quotation mark
   * You can use ((PLAYER)) placeholder to use player name in the command!
   * You can use * to run commands on any block in the generator!
   * INFO: 
   *  SPECIFIC BLOCK COMMAND ONLY WORKS IF PLAYER DESTROY THE BLOCK! 
   *  SO YOU CANNOT USE ((PLAYER)) IF THE BLOCK IS NOT DESTROYED BY PLAYER
   */
  enableCommands: false,

  commands: [
    { block: "*", command: `tellraw @a {"rawtext":[{"text":"Hey! someone is using custom generator!"}]}` },
    { block: "minecraft:ancient_debris", command: `tellraw @a {"rawtext":[{"text":"((PLAYER)) just found an ancient debris in custom generator!"}]}` }
  ],

  /**
   * @title Per Dimension Generator
   *
   * @description
   * Enable or disable Per Dimension Generator by changing "enablePerDimensionGenerator"
   * to "true" to enable it or to "false" to disable it. without quotation mark
   */
  enablePerDimensionGenerator: false,

  overworld: [
    { identifier: "cobblestone", chance: 14 },
    { identifier: "coal_ore", chance: 13 },
    { identifier: "iron_ore", chance: 13 },
    { identifier: "copper_ore", chance: 12 },
    { identifier: "gold_ore", chance: 11 },
    { identifier: "redstone_ore", chance: 11 },
    { identifier: "lapis_ore", chance: 11 },
    { identifier: "diamond_ore", chance: 10 },
    { identifier: "emerald_ore", chance: 5 },
  ],

  nether: [
    { identifier: "basalt", chance: 40 },
    { identifier: "quartz_ore", chance: 30 },
    { identifier: "nether_gold_ore", chance: 20 },
    { identifier: "ancient_debris", chance: 10 },
  ],

  the_end: [
    { identifier: "end_stone", chance: 20 },
    { identifier: "deepslate_iron_ore", chance: 20 },
    { identifier: "deepslate_gold_ore", chance: 17.5 },
    { identifier: "deepslate_diamond_ore", chance: 17.5 },
    { identifier: "deepslate_emerald_ore", chance: 15 },
    { identifier: "ancient_debris", chance: 10 },
  ],
};

export default config;
