# Свои рецепты Алтаря

## 1.16.5
Touhou Little Maid in 1.16.5 use datapack to add altar recipes

**Пожалуйста, убедитесь, что вы знаете, как использовать ванильный датапак Minecaft**

```json
{
  // Фиксированный тип
  "type": "touhou_little_maid:altar_crafting",
  "output": {
    // Имя типа энтити
    "type": "minecraft:item",
    // Доп. NBT данные для энтити
    "nbt": {
      "Item": {
        "id": "touhou_little_maid:hakurei_gohei",
        "Count": 1
      }
    }
  },
  // Кол-во силы для крафта
  "power": 0.15,
  // Вы можете записать до 6 параметров, это ингредиенты для рецепта
  "ingredients": [
    {
      "tag": "forge:rods/wooden"
    },
    {
      "tag": "forge:rods/wooden"
    },
    {
      "tag": "forge:rods/wooden"
    },
    {
      "item": "minecraft:paper"
    },
    {
      "item": "minecraft:paper"
    },
    {
      "item": "minecraft:paper"
    }
  ]
}
```

## 1.12.2
Touhou Little Maid in 1.12.2 added compability to `CraftTweaker`, use `CraftTweaker` to add/edit altar recipes

**Before using this function, please make sure you have understood the basic script writing method for `CraftTweaker`.**

```js
// Simplified template for recipes for importing related ZenClass
import mods.touhoulittlemaid.Altar;

// Adding item recipes
// First parameter: String, is the recipe ID, recommend you write in the format of xxxx:xxxx, and make sure it does not share names with other receipes
// Second parameter: Float, is the necessary power point required for crafting
// Third parameter: IItemStack, is the output item for the recipe
// Other parameters: IIngredient, you can write up to 6 parameters, is the input for the recipe
Altar.addItemCraftRecipe("touhou_little_maid:craft_camera", 0.2,
                         <touhou_little_maid:camera>*2,
                         <ore:blockGlass>, <ore:sand>, <minecraft:diamond_sword>);

// Example for changable parameter
Altar.addItemCraftRecipe("touhou_little_maid:craft_apple", 0.2,
                         <touhou_little_maid:apple>*2,
                         <ore:blockGlass>);

// Example for spawn maid
Altar.addMaidSpawnCraftRecipe("test:replace_maid", 0.5, 
                              <minecraft:grass>, <minecraft:grass>, <minecraft:grass>);

// Example for maid revive
// This recipes can only write 1-5 items, the garage kit items are directly forced to be embedded in the recipes
Altar.addMaidReviveCraftRecipe("test:reborn_maid", 0.3, 
                               <minecraft:grass>, <minecraft:grass>, <minecraft:grass>);

// Example for spawn other mob
// Third parameter: entity id
Altar.addEntitySpawnCraftRecipe("test:spawn_pig", 0.2, "minecraft:pig", 
                                <minecraft:stone>, <minecraft:stone>, <minecraft:stone>);

// To delete a recipe, you can delete through recipe id, this is also why we mentioned you need to set unique recipe id above
// There is only one parameter, which is recipe id, you can check the included recipe ID through JEI
Altar.removeRecipe("touhou_little_maid:craft_camera");
```
