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

const config = {
  cobblestone: true,
  basalt: true,
  player: true,
  explosion: true,
  piston: true,
  tools: [
    "minecraft:stone_pickaxe",
    "minecraft:iron_pickaxe",
    "minecraft:golden_pickaxe",
    "minecraft:diamond_pickaxe",
    "minecraft:netherite_pickaxe",
  ],
  delay: 0.5,
  teleportItemAndXP: false,
  enableParticle: false,
  particle: "minecraft:villager_happy",
  enableSound: false,
  sound: "random.orb",
  noPermissionSound: "random.break",
  tags: [],
  players: [],
  blocks: [
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
  enableSummonMobs: false,
  mobs: [
    { identifier: "nothing", chance: 50 },
    { identifier: "minecraft:cow", chance: 30 },
    { identifier: "minecraft:sheep", chance: 20 },
  ],
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
