package com.github.tartaricacid.touhoulittlemaid.proxy;

import static com.github.tartaricacid.touhoulittlemaid.config.GeneralConfig.MOB_CONFIG;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Map;

import org.apache.commons.io.IOUtils;

import com.github.tartaricacid.touhoulittlemaid.TouhouLittleMaid;
import com.github.tartaricacid.touhoulittlemaid.api.LittleMaidAPI;
import com.github.tartaricacid.touhoulittlemaid.api.util.ItemDefinition;
import com.github.tartaricacid.touhoulittlemaid.bauble.DrownProtectBauble;
import com.github.tartaricacid.touhoulittlemaid.bauble.ExplosionProtectBauble;
import com.github.tartaricacid.touhoulittlemaid.bauble.ExtraLifeBauble;
import com.github.tartaricacid.touhoulittlemaid.bauble.FallProtectBauble;
import com.github.tartaricacid.touhoulittlemaid.bauble.FireProtectBauble;
import com.github.tartaricacid.touhoulittlemaid.bauble.MagicProtectBauble;
import com.github.tartaricacid.touhoulittlemaid.bauble.ProjectileProtectBauble;
import com.github.tartaricacid.touhoulittlemaid.bauble.TombstoneBauble;
import com.github.tartaricacid.touhoulittlemaid.bauble.UndyingTotemBauble;
import com.github.tartaricacid.touhoulittlemaid.capability.CapabilityPowerHandler;
import com.github.tartaricacid.touhoulittlemaid.client.resources.pojo.CustomModelPackPOJO;
import com.github.tartaricacid.touhoulittlemaid.command.MainCommand;
import com.github.tartaricacid.touhoulittlemaid.compat.neat.NeatCompat;
import com.github.tartaricacid.touhoulittlemaid.compat.patchouli.MultiblockRegistry;
import com.github.tartaricacid.touhoulittlemaid.compat.theoneprobe.TheOneProbeInfo;
import com.github.tartaricacid.touhoulittlemaid.config.VillageTradeConfig;
import com.github.tartaricacid.touhoulittlemaid.config.pojo.VillageTradePOJO;
import com.github.tartaricacid.touhoulittlemaid.crafting.AltarRecipesManager;
import com.github.tartaricacid.touhoulittlemaid.entity.item.EntityChair;
import com.github.tartaricacid.touhoulittlemaid.entity.item.EntityMarisaBroom;
import com.github.tartaricacid.touhoulittlemaid.entity.item.EntityPowerPoint;
import com.github.tartaricacid.touhoulittlemaid.entity.monster.EntityFairy;
import com.github.tartaricacid.touhoulittlemaid.entity.monster.EntityRinnosuke;
import com.github.tartaricacid.touhoulittlemaid.entity.passive.EntityMaid;
import com.github.tartaricacid.touhoulittlemaid.entity.projectile.EntityDanmaku;
import com.github.tartaricacid.touhoulittlemaid.init.MaidItems;
import com.github.tartaricacid.touhoulittlemaid.internal.task.TaskAttack;
import com.github.tartaricacid.touhoulittlemaid.internal.task.TaskAttackDanmaku;
import com.github.tartaricacid.touhoulittlemaid.internal.task.TaskAttackRanged;
import com.github.tartaricacid.touhoulittlemaid.internal.task.TaskFarm;
import com.github.tartaricacid.touhoulittlemaid.internal.task.TaskFeed;
import com.github.tartaricacid.touhoulittlemaid.internal.task.TaskFeedAnimal;
import com.github.tartaricacid.touhoulittlemaid.internal.task.TaskIdle;
import com.github.tartaricacid.touhoulittlemaid.internal.task.TaskShears;
import com.github.tartaricacid.touhoulittlemaid.internal.task.TaskTorch;
import com.github.tartaricacid.touhoulittlemaid.internal.task.VanillaFarmHandler;
import com.github.tartaricacid.touhoulittlemaid.internal.task.VanillaFeedHandler;
import com.github.tartaricacid.touhoulittlemaid.network.MaidGuiHandler;
import com.github.tartaricacid.touhoulittlemaid.network.simpleimpl.ApplyChairSkinDataMessage;
import com.github.tartaricacid.touhoulittlemaid.network.simpleimpl.ApplyMaidSkinDataMessage;
import com.github.tartaricacid.touhoulittlemaid.network.simpleimpl.BeaconAbsorbMessage;
import com.github.tartaricacid.touhoulittlemaid.network.simpleimpl.ChangeMaidTaskMessage;
import com.github.tartaricacid.touhoulittlemaid.network.simpleimpl.GoheiModeMessage;
import com.github.tartaricacid.touhoulittlemaid.network.simpleimpl.MaidHomeModeMessage;
import com.github.tartaricacid.touhoulittlemaid.network.simpleimpl.MaidPickupModeMessage;
import com.github.tartaricacid.touhoulittlemaid.network.simpleimpl.SetBeaconPotionMessage;
import com.github.tartaricacid.touhoulittlemaid.network.simpleimpl.SetMaidSasimonoCRC32;
import com.github.tartaricacid.touhoulittlemaid.network.simpleimpl.StorageAndTakePowerMessage;
import com.github.tartaricacid.touhoulittlemaid.network.simpleimpl.SwitchMaidGuiMessage;
import com.github.tartaricacid.touhoulittlemaid.network.simpleimpl.SyncPowerMessage;
import com.github.tartaricacid.touhoulittlemaid.network.simpleimpl.SyncPowerPointEntityData;
import com.github.tartaricacid.touhoulittlemaid.network.simpleimpl.effect.ClientEffectHandler;
import com.github.tartaricacid.touhoulittlemaid.network.simpleimpl.effect.EffectReply;
import com.github.tartaricacid.touhoulittlemaid.network.simpleimpl.effect.EffectRequest;
import com.github.tartaricacid.touhoulittlemaid.network.simpleimpl.effect.ServerEffectHandler;
import com.github.tartaricacid.touhoulittlemaid.util.ParseI18n;
import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonSyntaxException;

import net.minecraft.entity.EnumCreatureType;
import net.minecraft.init.Items;
import net.minecraft.util.ResourceLocation;
import net.minecraft.util.text.translation.I18n;
import net.minecraft.world.biome.Biome;
import net.minecraftforge.common.BiomeDictionary;
import net.minecraftforge.fml.common.Loader;
import net.minecraftforge.fml.common.Mod;
import net.minecraftforge.fml.common.event.FMLInitializationEvent;
import net.minecraftforge.fml.common.event.FMLInterModComms;
import net.minecraftforge.fml.common.event.FMLPostInitializationEvent;
import net.minecraftforge.fml.common.event.FMLPreInitializationEvent;
import net.minecraftforge.fml.common.event.FMLServerStartingEvent;
import net.minecraftforge.fml.common.network.NetworkRegistry;
import net.minecraftforge.fml.common.network.simpleimpl.SimpleNetworkWrapper;
import net.minecraftforge.fml.common.registry.EntityRegistry;
import net.minecraftforge.fml.relauncher.Side;

public class CommonProxy {
    public static final Gson GSON = new GsonBuilder().registerTypeAdapter(ResourceLocation.class, new ResourceLocation.Serializer()).create();
    /**
     * 服务端用模型列表，
     * 这个只会在服务器启动时候读取默认原版的列表，
     * 主要用于刷怪蛋、刷怪笼、自然生成的随机模型，
     * <p>
     * 只有 ResourceLocation 类和基本数据类型，不会导致服务端崩溃
     */
    public static final Map<String, String> VANILLA_ID_NAME_MAP = Maps.newHashMap();
    public static final List<VillageTradePOJO> VILLAGE_TRADE = Lists.newArrayList();
    public static AltarRecipesManager ALTAR_RECIPES_MANAGER;
    public static SimpleNetworkWrapper INSTANCE = null;

    /**
     * 通过输入流读取 CustomModelPackPOJO 对象，并进行二次修饰
     */
    public static CustomModelPackPOJO readModelPack(InputStream input) throws JsonSyntaxException {
        CustomModelPackPOJO pojo = GSON.fromJson(new InputStreamReader(input, StandardCharsets.UTF_8), CustomModelPackPOJO.class);
        return pojo.decorate();
    }

    public void preInit(FMLPreInitializationEvent event) {
        // 获取村民交易的配置
        initTradeList();
        // 初始化默认模型列表
        initModelList();
        // 注册实体
        registerModEntity();
        // 注册实体生成
        registerEntitySpawns();
        // 注册网络通信
        registerMessage();
        // 注册 TOP
        if (Loader.isModLoaded("theoneprobe")) {
            FMLInterModComms.sendFunctionMessage("theoneprobe", "getTheOneProbe", TheOneProbeInfo.class.getName());
        }
    }

    public void init(FMLInitializationEvent event) {
        NetworkRegistry.INSTANCE.registerGuiHandler(TouhouLittleMaid.INSTANCE, new MaidGuiHandler());
        CapabilityPowerHandler.register();
        if (Loader.isModLoaded("patchouli")) {
            MultiblockRegistry.init();
        }
    }

    public void postInit(FMLPostInitializationEvent event) {
        // 注册饰品
        LittleMaidAPI.registerBauble(ItemDefinition.of(MaidItems.ULTRAMARINE_ORB_ELIXIR), new ExtraLifeBauble());
        LittleMaidAPI.registerBauble(ItemDefinition.of(Items.TOTEM_OF_UNDYING), new UndyingTotemBauble());
        LittleMaidAPI.registerBauble(ItemDefinition.of(MaidItems.EXPLOSION_PROTECT_BAUBLE), new ExplosionProtectBauble());
        LittleMaidAPI.registerBauble(ItemDefinition.of(MaidItems.FIRE_PROTECT_BAUBLE), new FireProtectBauble());
        LittleMaidAPI.registerBauble(ItemDefinition.of(MaidItems.MAGIC_PROTECT_BAUBLE), new MagicProtectBauble());
        LittleMaidAPI.registerBauble(ItemDefinition.of(MaidItems.PROJECTILE_PROTECT_BAUBLE), new ProjectileProtectBauble());
        LittleMaidAPI.registerBauble(ItemDefinition.of(MaidItems.FALL_PROTECT_BAUBLE), new FallProtectBauble());
        LittleMaidAPI.registerBauble(ItemDefinition.of(MaidItems.DROWN_PROTECT_BAUBLE), new DrownProtectBauble());
        LittleMaidAPI.registerBauble(ItemDefinition.of(MaidItems.TOMBSTONE_BAUBLE), new TombstoneBauble());

        // 注册女仆模式
        LittleMaidAPI.registerTask(new TaskAttack());
        LittleMaidAPI.registerTask(new TaskAttackRanged());
        LittleMaidAPI.registerTask(new TaskAttackDanmaku());
        LittleMaidAPI.registerTask(new TaskFarm());
        LittleMaidAPI.registerTask(new TaskFeed());
        LittleMaidAPI.registerTask(new TaskIdle());
        LittleMaidAPI.registerTask(new TaskShears());
        LittleMaidAPI.registerTask(new TaskTorch());
        LittleMaidAPI.registerTask(new TaskFeedAnimal());

        // 注册 FarmHandler 和 FeedHandler
        LittleMaidAPI.registerFarmHandler(new VanillaFarmHandler());
        LittleMaidAPI.registerFeedHandler(new VanillaFeedHandler());

        // 注册祭坛合成
        ALTAR_RECIPES_MANAGER = new AltarRecipesManager();

        if (Loader.isModLoaded("neat")) {
            NeatCompat.init();
        }
    }

    @Mod.EventHandler
    public void serverStarting(FMLServerStartingEvent event) {
        event.registerServerCommand(new MainCommand());
    }

    /**
     * 初始化默认的交易列表
     */
    private void initTradeList() {
        InputStream input = this.getClass().getClassLoader().getResourceAsStream("assets/touhou_little_maid/village/village_trade.json");
        if (input != null) {
            try {
                // 将其转换为 pojo 对象
                VILLAGE_TRADE.addAll(VillageTradeConfig.getPOJO(input));
            } catch (IOException e) {
                TouhouLittleMaid.LOGGER.warn("Fail to parse village trade config file");
            }
        }
        // 别忘了关闭输入流
        IOUtils.closeQuietly(input);
    }

    /**
     * 初始化默认的模型列表
     */
    void initModelList() {
        VANILLA_ID_NAME_MAP.clear();
        InputStream input = this.getClass().getClassLoader().getResourceAsStream("assets/touhou_little_maid/maid_model.json");
        if (input != null) {
            try {
                // 将其转换为 pojo 对象
                CustomModelPackPOJO pojo = readModelPack(input);
                pojo.getModelList().forEach(m -> VANILLA_ID_NAME_MAP.put(m.getModelId().toString(), ParseI18n.parse(m.getName())));
            } catch (JsonSyntaxException e) {
                TouhouLittleMaid.LOGGER.warn("Fail to parse model pack in domain {}", TouhouLittleMaid.MOD_ID);
            }
        }
        // 别忘了关闭输入流
        IOUtils.closeQuietly(input);
    }

    private void registerModEntity() {
        EntityRegistry.registerModEntity(new ResourceLocation(TouhouLittleMaid.MOD_ID, "entity.passive.maid"), EntityMaid.class, "touhou_little_maid.maid", 0, TouhouLittleMaid.INSTANCE, 80, 3, true, 0x4a6195, 0xffffff);
        EntityRegistry.registerModEntity(new ResourceLocation(TouhouLittleMaid.MOD_ID, "entity.projectile.danmaku"), EntityDanmaku.class, "touhou_little_maid.danmaku", 1, TouhouLittleMaid.INSTANCE, 64, 10, true);
        EntityRegistry.registerModEntity(new ResourceLocation(TouhouLittleMaid.MOD_ID, "entity.item.marisa_broom"), EntityMarisaBroom.class, "touhou_little_maid.marisa_broom", 2, TouhouLittleMaid.INSTANCE, 80, 3, true);
        EntityRegistry.registerModEntity(new ResourceLocation(TouhouLittleMaid.MOD_ID, "entity.item.chair"), EntityChair.class, "touhou_little_maid.chair", 3, TouhouLittleMaid.INSTANCE, 160, 3, true);
        EntityRegistry.registerModEntity(new ResourceLocation(TouhouLittleMaid.MOD_ID, "entity.monster.rinnosuke"), EntityRinnosuke.class, "touhou_little_maid.rinnosuke", 4, TouhouLittleMaid.INSTANCE, 80, 3, true, 0x515a9b, 0x535353);
        EntityRegistry.registerModEntity(new ResourceLocation(TouhouLittleMaid.MOD_ID, "entity.item.power_point"), EntityPowerPoint.class, "touhou_little_maid.power_point", 5, TouhouLittleMaid.INSTANCE, 160, 20, true);
        EntityRegistry.registerModEntity(new ResourceLocation(TouhouLittleMaid.MOD_ID, "entity.monster.fairy"), EntityFairy.class, "touhou_little_maid.fairy", 6, TouhouLittleMaid.INSTANCE, 80, 3, true, 0x171c20, 0xffffff);
    }

    private void registerEntitySpawns() {
        EntityRegistry.addSpawn(EntityRinnosuke.class, MOB_CONFIG.rinnosukeSpawnProbability, 1, 1, EnumCreatureType.MONSTER, BiomeDictionary.getBiomes(BiomeDictionary.Type.FOREST).toArray(new Biome[0]));
        EntityRegistry.addSpawn(EntityFairy.class, MOB_CONFIG.maidFairySpawnProbability, 2, 6, EnumCreatureType.MONSTER, BiomeDictionary.getBiomes(BiomeDictionary.Type.PLAINS).toArray(new Biome[0]));
    }

    private void registerMessage() {
        INSTANCE = NetworkRegistry.INSTANCE.newSimpleChannel(TouhouLittleMaid.MOD_ID);
        INSTANCE.registerMessage(SwitchMaidGuiMessage.Handler.class, SwitchMaidGuiMessage.class, 0, Side.SERVER);
        INSTANCE.registerMessage(MaidPickupModeMessage.Handler.class, MaidPickupModeMessage.class, 1, Side.SERVER);
        INSTANCE.registerMessage(ChangeMaidTaskMessage.Handler.class, ChangeMaidTaskMessage.class, 2, Side.SERVER);
        INSTANCE.registerMessage(MaidHomeModeMessage.Handler.class, MaidHomeModeMessage.class, 3, Side.SERVER);
        INSTANCE.registerMessage(GoheiModeMessage.Handler.class, GoheiModeMessage.class, 4, Side.SERVER);
        INSTANCE.registerMessage(ApplyMaidSkinDataMessage.Handler.class, ApplyMaidSkinDataMessage.class, 5, Side.SERVER);
        INSTANCE.registerMessage(ApplyChairSkinDataMessage.Handler.class, ApplyChairSkinDataMessage.class, 6, Side.SERVER);
        INSTANCE.registerMessage(SetMaidSasimonoCRC32.Handler.class, SetMaidSasimonoCRC32.class, 7, Side.SERVER);
        INSTANCE.registerMessage(SyncPowerMessage.Handler.class, SyncPowerMessage.class, 8, Side.CLIENT);
        INSTANCE.registerMessage(SyncPowerPointEntityData.Handler.class, SyncPowerPointEntityData.class, 9, Side.CLIENT);
        INSTANCE.registerMessage(StorageAndTakePowerMessage.Handler.class, StorageAndTakePowerMessage.class, 10, Side.SERVER);
        INSTANCE.registerMessage(SetBeaconPotionMessage.Handler.class, SetBeaconPotionMessage.class, 11, Side.SERVER);
        INSTANCE.registerMessage(ServerEffectHandler.class, EffectRequest.class, 12, Side.SERVER);
        INSTANCE.registerMessage(ClientEffectHandler.class, EffectReply.class, 13, Side.CLIENT);
        INSTANCE.registerMessage(BeaconAbsorbMessage.Handler.class, BeaconAbsorbMessage.class, 14, Side.CLIENT);
    }

    /**
     * 重新复写一遍原版本地化方法
     */
    public String translate(String key, Object... format) {
        return I18n.translateToLocalFormatted(key, format);
    }
}
