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
import { system, world, MinecraftDimensionTypes } from "@minecraft/server";
import type { Block, Player, ItemStack } from "@minecraft/server";
import config from "./config";
import customGenerator from "./custom-generator";

function Generator(
  generatorType: number,
  generatorBlock: Block,
  player?: Player,
  tool?: ItemStack,
  previousBlock?: string
) {
  if (generatorType === 0 && config.disableGeneratorTag && player.hasTag(config.disableGeneratorTag)) return;
  const { dimension, location } = generatorBlock;

  const locations = [
    dimension.getBlock({ x: location.x + 1, y: location.y, z: location.z }),
    dimension.getBlock({ x: location.x - 1, y: location.y, z: location.z }),
    dimension.getBlock({ x: location.x, y: location.y, z: location.z + 1 }),
    dimension.getBlock({ x: location.x, y: location.y, z: location.z - 1 }),
    dimension.getBlock({ x: location.x, y: location.y + 1, z: location.z }),
    dimension.getBlock({ x: location.x, y: location.y - 1, z: location.z }),
  ].filter((block) => block !== undefined);

  const Water = ["minecraft:flowing_water", "minecraft:water"];
  const Lava = ["minecraft:flowing_lava", "minecraft:lava"];
  let isCobblestoneGenerator = false;
  let isBasaltGenerator = false;
  let isCustomGenerator = false;
  let customGeneratorID = -1;

  customGenerator.generators.forEach((generator, i) => {
    if (
      customGeneratorID < 0 &&
      generator.left_block &&
      Array.isArray(generator.left_block) &&
      generator.left_block.length > 0 &&
      generator.right_block &&
      Array.isArray(generator.right_block) &&
      generator.right_block.length > 0
    ) {
      if (
        generator.left_block.includes(locations[0].type.id) &&
        generator.right_block.includes(locations[1].type.id)
      )
        isCustomGenerator = true;
      if (
        generator.left_block.includes(locations[1].type.id) &&
        generator.right_block.includes(locations[0].type.id)
      )
        isCustomGenerator = true;
      if (
        generator.left_block.includes(locations[2].type.id) &&
        generator.right_block.includes(locations[3].type.id)
      )
        isCustomGenerator = true;
      if (
        generator.left_block.includes(locations[3].type.id) &&
        generator.right_block.includes(locations[2].type.id)
      )
        isCustomGenerator = true;

      console.log(locations[0].isWaterlogged);

      if (
        generator.left_block.includes("WATERLOGGED") &&
        locations[0].isWaterlogged &&
        generator.right_block.includes(locations[1].type.id)
      )
        isCustomGenerator = true;
      if (
        generator.left_block.includes("WATERLOGGED") &&
        locations[1].isWaterlogged &&
        generator.right_block.includes(locations[0].type.id)
      )
        isCustomGenerator = true;
      if (
        generator.left_block.includes("WATERLOGGED") &&
        locations[2].isWaterlogged &&
        generator.right_block.includes(locations[3].type.id)
      )
        isCustomGenerator = true;
      if (
        generator.left_block.includes("WATERLOGGED") &&
        locations[3].isWaterlogged &&
        generator.right_block.includes(locations[2].type.id)
      )
        isCustomGenerator = true;

      if (
        generator.left_block.includes(locations[0].type.id) &&
        generator.right_block.includes("WATERLOGGED") &&
        locations[1].isWaterlogged
      )
        isCustomGenerator = true;
      if (
        generator.left_block.includes(locations[1].type.id) &&
        generator.right_block.includes("WATERLOGGED") &&
        locations[0].isWaterlogged
      )
        isCustomGenerator = true;
      if (
        generator.left_block.includes(locations[2].type.id) &&
        generator.right_block.includes("WATERLOGGED") &&
        locations[3].isWaterlogged
      )
        isCustomGenerator = true;
      if (
        generator.left_block.includes(locations[3].type.id) &&
        generator.right_block.includes("WATERLOGGED") &&
        locations[2].isWaterlogged
      )
        isCustomGenerator = true;

      if (
        generator.under_block &&
        Array.isArray(generator.under_block) &&
        generator.under_block.length > 0 &&
        !generator.under_block.includes(locations[5].type.id)
      )
        isCustomGenerator = false;

      if (isCustomGenerator) customGeneratorID = i;
    }
  });

  if (
    Water.includes(locations[0].type.id) &&
    Lava.includes(locations[1].type.id)
  )
    isCobblestoneGenerator = true;
  if (
    Water.includes(locations[1].type.id) &&
    Lava.includes(locations[0].type.id)
  )
    isCobblestoneGenerator = true;
  if (
    Water.includes(locations[2].type.id) &&
    Lava.includes(locations[3].type.id)
  )
    isCobblestoneGenerator = true;
  if (
    Water.includes(locations[3].type.id) &&
    Lava.includes(locations[2].type.id)
  )
    isCobblestoneGenerator = true;

  if (locations[0].isWaterlogged && Lava.includes(locations[1].type.id))
    isCobblestoneGenerator = true;
  if (locations[1].isWaterlogged && Lava.includes(locations[0].type.id))
    isCobblestoneGenerator = true;
  if (locations[2].isWaterlogged && Lava.includes(locations[3].type.id))
    isCobblestoneGenerator = true;
  if (locations[3].isWaterlogged && Lava.includes(locations[2].type.id))
    isCobblestoneGenerator = true;

  if (
    "minecraft:blue_ice" === locations[0].type.id &&
    Lava.includes(locations[1].type.id)
  )
    isBasaltGenerator = true;
  if (
    "minecraft:blue_ice" === locations[1].type.id &&
    Lava.includes(locations[0].type.id)
  )
    isBasaltGenerator = true;
  if (
    "minecraft:blue_ice" === locations[2].type.id &&
    Lava.includes(locations[3].type.id)
  )
    isBasaltGenerator = true;
  if (
    "minecraft:blue_ice" === locations[3].type.id &&
    Lava.includes(locations[2].type.id)
  )
    isBasaltGenerator = true;

  if (locations[5].type.id !== "minecraft:soul_soil") isBasaltGenerator = false;

  if (!dimension.getBlock(location)!.isAir) {
    isCobblestoneGenerator = false;
    isBasaltGenerator = false;
    isCustomGenerator = false;
  }

  if (isCobblestoneGenerator || isBasaltGenerator || isCustomGenerator) {
    let generator = false

    if (isCustomGenerator && customGenerator.enable) generator = true
    if (!generator && isCobblestoneGenerator && config.cobblestone) generator = true
    if (!generator && isBasaltGenerator && config.basalt) generator = true

    if (!generator) return;

    let blocks = []
    if (isCobblestoneGenerator) blocks = config.cobblestoneGeneratorblocks
    else if (isBasaltGenerator) blocks = config.basaltGeneratorblocks

    if (config.enablePerDimensionGenerator && !isCustomGenerator) {
      switch (dimension.id) {
        case MinecraftDimensionTypes.overworld:
          blocks = config.overworld;
          break;
        case MinecraftDimensionTypes.nether:
          blocks = config.nether;
          break;
        case MinecraftDimensionTypes.theEnd:
          blocks = config.the_end;
          break;
      }
    }

    let tags: string[] = config.tags;
    let players: string[] = config.players;
    let particle: any = config.particle;
    let sound: any = config.sound;
    let commands: any = config.commands;
    let enableParticle = config.enableParticle;
    let enableSound = config.enableSound;
    let enableCommands = config.enableCommands;
    if (isCustomGenerator && customGenerator.enable) {
      blocks = customGenerator.generators[customGeneratorID].blocks;

      if (customGenerator.generators[customGeneratorID].tags)
        tags = customGenerator.generators[customGeneratorID].tags;

      if (customGenerator.generators[customGeneratorID].players)
        players = customGenerator.generators[customGeneratorID].players;

      if (customGenerator.generators[customGeneratorID].commands) {
        enableCommands = true;
        commands = customGenerator.generators[customGeneratorID].commands;
      }

      if (customGenerator.generators[customGeneratorID].particle) {
        enableParticle = true;
        particle = customGenerator.generators[customGeneratorID].particle;
      }

      if (customGenerator.generators[customGeneratorID].sound) {
        enableSound = true;
        sound = customGenerator.generators[customGeneratorID].sound;
      }

      if (customGenerator.generators[customGeneratorID].events)
        switch (generatorType) {
          case 0:
            if (!customGenerator.generators[customGeneratorID].events.player)
              return;
            break;
          case 1:
            if (!customGenerator.generators[customGeneratorID].events.explosion)
              return;
            break;
          case 2:
            if (!customGenerator.generators[customGeneratorID].events.piston)
              return;
            break;
        }

      if (
        generatorType === 0 &&
        player.getGameMode() === "survival" &&
        tool &&
        customGenerator.generators[customGeneratorID]?.tools?.length > 0 &&
        !customGenerator.generators[customGeneratorID].tools.includes(
          tool.type.id
        )
      )
        return;

      if (
        customGenerator.generators[customGeneratorID].dimension?.length > 0 &&
        !customGenerator.generators[customGeneratorID].dimension.includes(
          dimension.id
        )
      )
        return;
    }

    if (generatorType === 0) {
      if (tags.length > 0) {
        let hasTag = false;
        for (let i = 0; i < tags.length; i++)
          if (player.hasTag(tags[i])) hasTag = true;

        if (!hasTag && enableSound && config.noPermissionSound)
          player.playSound(config.noPermissionSound)
        if (!hasTag) return;
      }
      if (players.length > 0 && !players.includes(player.name)) {
        player.playSound(config.noPermissionSound)
        return;
      }
    }

    if (blocks.length > 0) {
      let blockChances = 0;
      let totalBlockChances = blocks.reduce(
        (total, block) => total + block.chance,
        0
      );
      let selectedBlock: string | number = blocks[0].chance;

      for (const block of blocks) {
        blockChances += block.chance;
        if (Math.random() * totalBlockChances < blockChances) {
          selectedBlock = block.chance;
          break;
        }
      }

      selectedBlock = blocks.filter((block) => block.chance === selectedBlock)[
        Math.floor(Math.random() * blocks.filter((block) => block.chance === selectedBlock).length)
      ].identifier.toLowerCase();

      config.delay = config.delay < 0 ? 0.1 : config.delay;
      let itemLocation = location.y;

      if (locations[5].isAir) itemLocation = location.y - 1;
      if (locations[4].isAir) itemLocation = location.y + 1;
      // if(locations[5].type.id === "minecraft:hopper") itemLocation = location.y - 0.25

      system.runTimeout(() => {
        if (config.teleportItemAndXP) {
          if (
            player &&
            player.getGameMode() === "survival" &&
            locations[5].type.id !== "minecraft:hopper" &&
            dimension.getEntities({
              location: location,
              maxDistance: 3,
              type: "minecraft:hopper_minecart",
            }).length === 0
          )
            dimension.runCommand(
              `execute positioned ${location.x} ${itemLocation} ${location.z} run tp @e[r=2,type=minecraft:item] ~~~`
            );

          if (player && player.getGameMode() === "survival")
            dimension.runCommand(
              `execute positioned ${location.x} ${itemLocation} ${location.z} run tp @e[r=2,type=minecraft:xp_orb] ${player.location.x} ${player.location.y} ${player.location.z}`
            );
        }

        if (enableCommands && commands) {
          for (const command of commands) {
            if (previousBlock && (command.block === previousBlock || command.block === "*")) dimension.runCommand(command.command.replaceAll("((PLAYER))", player.name));
            else if (command.block === "*" && !previousBlock) dimension.runCommand(command.command);
          }
        }
        if (enableParticle && particle) {
          dimension.spawnParticle(particle.toLowerCase(), { x: location.x, y: location.y + 1.5, z: location.z });
          dimension.spawnParticle(particle.toLowerCase(), { x: location.x + 1, y: location.y + 1.5, z: location.z });
          dimension.spawnParticle(particle.toLowerCase(), { x: location.x + 1, y: location.y + 1.5, z: location.z + 1 });
          dimension.spawnParticle(particle.toLowerCase(), { x: location.x, y: location.y + 1.5, z: location.z + 1 });
        }
        if (enableSound && sound)
          dimension.playSound(sound.toLowerCase(), location)
        dimension.runCommand(
          `setblock ${location.x} ${location.y} ${location.z} ${selectedBlock}`
        );
      }, config.delay * 20);

      if (config.enableSummonMobs) {
        let mobs = config.mobs;
        if (
          isCustomGenerator &&
          customGenerator.generators[customGeneratorID].mobs?.length > 0
        )
          mobs = customGenerator.generators[customGeneratorID].mobs;

        if (mobs.length > 0) {
          let mobChances = 0;
          let totalMobChances = mobs.reduce((total, mob) => total + mob.chance, 0);
          let selectedMob: string | number = mobs[0].chance;

          for (const mob of mobs) {
            mobChances += mob.chance;
            if (Math.random() * totalMobChances < mobChances) {
              selectedMob = mob.chance;
              break;
            }
          }

          selectedMob = mobs.filter((mob) => mob.chance === selectedMob)[
            Math.floor(Math.random() * mobs.filter((mob) => mob.chance === selectedMob).length)
          ].identifier.toLowerCase();

          system.runTimeout(() => {
            if (selectedMob !== "nothing")
              dimension.runCommand(
                `summon ${selectedMob} ${location.x} ${location.y + 1} ${location.z}`
              );
          }, config.delay * 20 + 5);
        }
      }
    }
  }
}

if (config.player !== false)
  world.beforeEvents.playerBreakBlock.subscribe((event) => {
    const previousBlock = `${event.block.type.id}`;

    system.runTimeout(() =>
      Generator(0, event.block, event.player, event.itemStack, previousBlock),
      1)
  });

if (config.explosion !== false)
  world.afterEvents.blockExplode.subscribe((event) =>
    Generator(1, event.block)
  );

if (config.piston !== false)
  world.afterEvents.pistonActivate.subscribe((event) => {
    const { dimension, location } = event.block;

    const locations = [
      dimension.getBlock({ x: location.x + 1, y: location.y, z: location.z }),
      dimension.getBlock({ x: location.x - 1, y: location.y, z: location.z }),
      dimension.getBlock({ x: location.x, y: location.y, z: location.z + 1 }),
      dimension.getBlock({ x: location.x, y: location.y, z: location.z - 1 }),
      dimension.getBlock({ x: location.x, y: location.y + 1, z: location.z }),
      dimension.getBlock({ x: location.x, y: location.y - 1, z: location.z }),
    ];

    for (const block of locations) {
      if (!block) return;
      if (block.isAir) Generator(2, block);
    }
  });
