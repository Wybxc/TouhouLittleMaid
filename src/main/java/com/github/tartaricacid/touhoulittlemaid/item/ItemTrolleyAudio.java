package com.github.tartaricacid.touhoulittlemaid.item;

import com.github.tartaricacid.touhoulittlemaid.TouhouLittleMaid;
import com.github.tartaricacid.touhoulittlemaid.entity.item.EntityTrolleyAudio;
import com.github.tartaricacid.touhoulittlemaid.init.MaidItems;
import net.minecraft.client.resources.I18n;
import net.minecraft.client.util.ITooltipFlag;
import net.minecraft.entity.player.EntityPlayer;
import net.minecraft.item.Item;
import net.minecraft.item.ItemStack;
import net.minecraft.util.EnumActionResult;
import net.minecraft.util.EnumFacing;
import net.minecraft.util.EnumHand;
import net.minecraft.util.math.BlockPos;
import net.minecraft.world.World;
import net.minecraftforge.fml.relauncher.Side;
import net.minecraftforge.fml.relauncher.SideOnly;

import javax.annotation.Nullable;
import java.util.List;

/**
 * @author TartaricAcid
 * @date 2020/2/2 23:10
 **/
public class ItemTrolleyAudio extends Item {
    public ItemTrolleyAudio() {
        setTranslationKey(TouhouLittleMaid.MOD_ID + ".trolley_audio");
        setMaxStackSize(1);
        setCreativeTab(MaidItems.MAIN_TABS);
    }

    @Override
    public EnumActionResult onItemUse(EntityPlayer player, World worldIn, BlockPos pos, EnumHand hand, EnumFacing facing, float hitX, float hitY, float hitZ) {
        if (facing == EnumFacing.UP && hand == EnumHand.MAIN_HAND) {
            EntityTrolleyAudio trolleyAudio = new EntityTrolleyAudio(worldIn);
            trolleyAudio.setPosition(pos.getX() + hitX, pos.getY() + hitY, pos.getZ() + hitZ);
            if (!worldIn.isRemote) {
                worldIn.spawnEntity(trolleyAudio);
            }
            player.getHeldItemMainhand().shrink(1);
            return EnumActionResult.SUCCESS;
        }
        return super.onItemUse(player, worldIn, pos, hand, facing, hitX, hitY, hitZ);
    }

    @SideOnly(Side.CLIENT)
    @Override
    public void addInformation(ItemStack stack, @Nullable World worldIn, List<String> tooltip, ITooltipFlag flagIn) {
        tooltip.add(I18n.format("tooltips.touhou_little_maid.chair.place.desc"));
        tooltip.add(I18n.format("tooltips.touhou_little_maid.chair.destroy.desc"));
    }
}
