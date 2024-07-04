/* 
 ______     ______     ______     ______    
/\  ___\   /\  ___\   /\  == \   /\  ___\   
\ \ \____  \ \ \____  \ \  __<   \ \ \__ \  
 \ \_____\  \ \_____\  \ \_____\  \ \_____\ 
  \/_____/   \/_____/   \/_____/   \/_____/ 
                                                
A Custom Cobblestone and Basalt Generator By @HirziDevs
Documentation : https://ccbg.znproject.my.id
Discord		    : https://discord.znproject.my.id

Custom Generator Configuration

Template:
custom.generators = [
  {
    dimension: [],
    left_block: [],
    right_block: [],
    under_block: [],
    commands: [],
    tags: [],
    players: [],
    particle: false,
    sound: false,
    events: {
        player: true,
        explosion: true,
        piston: true,
    },
    tools: [],
    mobs: [],
    blocks: []
  },
]
*/
const custom = {
  /**
  * @title Enable or Disable Custom Generator
  *
  * @description
  * Enable or disable Custom Generator by changing "enable"
  * to "true" to enable it or to "false" to disable it. without quotation mark
  * add "WATERLOGGED" to left/right/under blocks to support waterlogged blocks
  */
  enable: false,

  /**
  * @title Custom Generator Configurations
  *
  * @description
  * You can add Custom Generator here
  */
  generators: [
    {
      dimension: [
        "minecraft:overworld",
        "minecraft:nether",
        "minecraft:the_end",
      ],
      left_block: ["minecraft:stone"],
      right_block: ["minecraft:dripstone_block"],
      under_block: [],
      commands: [],
      tags: [],
      players: [],
      particle: false,
      sound: false,
      events: {
        player: true,
        explosion: true,
        piston: true,
      },
      tools: [
        "minecraft:iron_pickaxe",
        "minecraft:golden_pickaxe",
        "minecraft:diamond_pickaxe",
        "minecraft:netherite_pickaxe",
      ],
      mobs: [],
      blocks: [
        { identifier: "stone", chance: 14 },
        { identifier: "coal_block", chance: 13 },
        { identifier: "iron_block", chance: 13 },
        { identifier: "copper_block", chance: 12 },
        { identifier: "gold_block", chance: 11 },
        { identifier: "redstone_block", chance: 11 },
        { identifier: "lapis_block", chance: 11 },
        { identifier: "diamond_block", chance: 10 },
        { identifier: "emerald_block", chance: 5 },
      ],
    },
    {
      dimension: [
        "minecraft:overworld",
        "minecraft:nether",
        "minecraft:the_end",
      ],
      left_block: ["minecraft:flowing_water", "minecraft:water", "WATERLOGGED"],
      right_block: ["minecraft:flowing_lava", "minecraft:lava"],
      under_block: ["minecraft:netherite_block"],
      commands: [],
      tags: ["donator"],
      players: [],
      particle: "minecraft:endrod",
      sound: "random.levelup",
      events: {
        player: true,
        explosion: true,
        piston: true,
      },
      tools: [
        "minecraft:iron_pickaxe",
        "minecraft:golden_pickaxe",
        "minecraft:diamond_pickaxe",
        "minecraft:netherite_pickaxe",
      ],
      mobs: [],
      blocks: [
        { identifier: "stone", chance: 30 },
        { identifier: "iron_block", chance: 22.5 },
        { identifier: "gold_block", chance: 15 },
        { identifier: "diamond_block", chance: 12.5 },
        { identifier: "emerald_block", chance: 12.5 },
        { identifier: "netherite_block", chance: 7.5 },
      ],
    },
    {
      dimension: [
        "minecraft:overworld",
        "minecraft:nether",
        "minecraft:the_end",
      ],
      left_block: ["minecraft:flowing_water", "minecraft:water", "WATERLOGGED"],
      right_block: ["minecraft:flowing_lava", "minecraft:lava"],
      under_block: ["minecraft:grass_block"],
      commands: [
        { block: "minecraft:netherite_block", command: `tellraw @a {"rawtext":[{"text":"((PLAYER)) just found a netherite block in custom generator!"}]}` }
      ],
      tags: [],
      players: [],
      particle: false,
      sound: false,
      events: {
        player: true,
        explosion: true,
        piston: true,
      },
      tools: [
        "minecraft:wooden_pickaxe",
        "minecraft:stone_pickaxe",
        "minecraft:iron_pickaxe",
        "minecraft:golden_pickaxe",
        "minecraft:diamond_pickaxe",
        "minecraft:netherite_pickaxe",
      ],
      mobs: [
        { identifier: "nothing", chance: 50 },
        { identifier: "minecraft:cow", chance: 20 },
        { identifier: "minecraft:sheep", chance: 15 },
        { identifier: "minecraft:pig", chance: 10 },
        { identifier: "minecraft:chicken", chance: 5 },
      ],
      blocks: [
        { identifier: "dirt", chance: 20 },
        { identifier: "grass_block", chance: 20 },
        { identifier: "podzol", chance: 17.5 },
        { identifier: "mycelium", chance: 17.5 },
        { identifier: "stone", chance: 15 },
        { identifier: "deepslate", chance: 10 },
      ],
    },
  ],
};

export default custom;
