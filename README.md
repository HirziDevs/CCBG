# Custom Cobblestone and Basalt Generator
<img alt="CCBG Banner" src="https://media.forgecdn.net/attachments/description/1035052/description_9cff90c6-0aef-4601-9a35-b5cb57bb15b8.png" width="555"/>

Customize your cobblestone and basalt generator with this addon! You can make your cobblestone and basalt generator spawn any block you want. By default, it spawns all Minecraft ores, including ancient debris, making it perfect for SkyBlock and other minigames that utilize cobblestone and basalt generators.

Why choose this addon? Because _it does not add additional blocks or entities that need to be crafted first and also doesn't use command blocks to create a custom generator! This addon also does not use player.json, so it will work with other addons!_ You just need to **make a cobblestone and basalt generator as usual**, and it will work straight away! 

## Preview
Check this video:

<a href="https://www.youtube.com/watch?v=sDB8kqgZz1w">
  <img alt="CCBG Youtube Preview" src="https://api.mcpedl.com/storage/submissions/27564/105/banner_1-520x245.png" width="555"/>
</a>

## Configuration
You can customize which blocks will appear and their chances to appear in the config.js file located in the script folder (CCBG/scripts/config.js).

If you have already added this addon to a world and want to change the config, you need to update the config in the world's behavior pack folder. Alternatively, you can delete the existing pack folder and copy the new one with the updated configuration.

### World Behavior Packs Location
Android:
_Android/data/com.mojang.minecraftpe/files/games/com.mojang/minecraftWorlds/(find your world folder)/behavior_packs/CCBG/scripts/config.js_

Windows:
_(User)/AppData/Local/Packages/Microsoft.MinecraftUWP_8wekb3d8bbwe/LocalState/games/com.mojang/minecraftWorlds/(find your world folder)/behavior_packs/CCBG/scripts/config.js_

### Enable or Disable Generator
You can enable or disable cobblestone or basalt in this configuration.

<img alt="CCBG Generator Configuration" src="https://media.forgecdn.net/attachments/description/1035052/description_4fa1c1a6-4e17-4fe4-8d55-0b800b84b05a.png" width="555"/>

### Customizing Generator Blocks
You can add or remove which blocks will spawn in this configuration. To find block identifier you can use `/setblock` command

<img alt="/setblock for vanilla blocks" src="https://media.forgecdn.net/attachments/description/1035052/description_76c00c5a-e800-4b4d-80b0-fbb8a9ae160b.jpg" width="555"/>

<img alt="CCBG Blocks Configuration" src="https://media.forgecdn.net/attachments/description/1035052/description_6ea41ac8-d812-4e7c-a9cf-81f8054c50f7.png" width="555"/>

### Customizing Per Dimension Generator
You can also create a per-dimension generator, so each dimension has its own generator configuration. To enable this, simply set `config.enablePerDimensionGenerator` from `false` to `true`.

<img alt="CCBG Per Dimension Configuration" src="https://media.forgecdn.net/attachments/description/1035052/description_d47ee02d-c129-4dd5-bc95-c57316265897.png" width="555"/>

### Custom Generator
Do you want a custom generator with the blocks you want? Yes, you can! To enable this, simply set `config.enableCustomGenerator` from `false` to `true`. Then, you can edit the left block, right block, and which blocks it spawns in this configuration.

For your information, you need to break a block in the middle first to make the generator work. You can use all types of blocks. If there is no block, just place one.

<img alt="CCBG Custom Generator Configuration" src="https://media.forgecdn.net/attachments/description/1035052/description_6efe3376-b0d9-4d0c-b159-c4085524f243.png" width="555"/>

You can also add more than one generator by adding another object to the array.

<img alt="CCBG More Than 1 Generator" src="https://media.forgecdn.net/attachments/description/1035052/description_ec4cf442-122f-46dd-9bff-666e18e36f7c.png" width="555"/>

### Custom Block from another Addons
Do you want a custom block from another addon to be spawned in the generator? You can! You just need to add the block identifier. For example, if you want to add `Box` from MonoDeco Addons, you should use `md3:box_md3` as the block identifier.

<img alt="/setblock for custom blocks" src="https://media.forgecdn.net/attachments/description/1035052/description_e3486318-62c3-46b9-95d3-6dfe085d3418.jpg" width="555"/>

<img alt="Custom Block in CCBG" src="https://media.forgecdn.net/attachments/description/1035052/description_1570aa7a-6e1f-4532-a0a1-5f60877b1f77.png" width="555"/>

Thanks for using my addon! If you want to share this addon, please use this page. Thanks!
