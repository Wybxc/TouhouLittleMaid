package com.github.tartaricacid.touhoulittlemaid.client.renderer.entity.layer;

import com.github.tartaricacid.touhoulittlemaid.client.model.BedrockModel;
import com.github.tartaricacid.touhoulittlemaid.client.renderer.entity.EntityMaidRenderer;
import com.github.tartaricacid.touhoulittlemaid.entity.passive.EntityMaid;
import com.mojang.blaze3d.matrix.MatrixStack;
import net.minecraft.client.Minecraft;
import net.minecraft.client.renderer.IRenderTypeBuffer;
import net.minecraft.client.renderer.entity.layers.LayerRenderer;
import net.minecraft.client.renderer.model.ItemCameraTransforms;
import net.minecraft.client.renderer.model.ModelRenderer;
import net.minecraft.enchantment.IVanishable;
import net.minecraft.item.ItemStack;
import net.minecraft.util.math.vector.Vector3f;

public class LayerMaidBackItem extends LayerRenderer<EntityMaid, BedrockModel<EntityMaid>> {
    private final EntityMaidRenderer renderer;

    public LayerMaidBackItem(EntityMaidRenderer renderer) {
        super(renderer);
        this.renderer = renderer;
    }

    @Override
    public void render(MatrixStack matrixStack, IRenderTypeBuffer bufferIn, int packedLightIn, EntityMaid maid, float limbSwing, float limbSwingAmount, float partialTicks, float ageInTicks, float netHeadYaw, float headPitch) {
        ItemStack stack = maid.getMaidInv().getStackInSlot(0);
        if (!renderer.getMainInfo().isShowBackpack() || maid.isSleeping() || maid.isInvisible()) {
            return;
        }

        if (stack.getItem() instanceof IVanishable) {
            matrixStack.pushPose();
            matrixStack.mulPose(Vector3f.ZP.rotationDegrees(180.0F));
            if (getParentModel().hasBackpackPositioningModel()) {
                ModelRenderer renderer = getParentModel().getBackpackPositioningModel();
                matrixStack.translate(renderer.x * 0.0625, 0.0625 * (renderer.y - 23 + 8), 0.0625 * (renderer.z + 4));
            } else {
                matrixStack.translate(0, -0.5, 0.25);
            }
            matrixStack.translate(0, -0.625, -0.2);
            Minecraft.getInstance().getItemInHandRenderer().renderItem(maid, stack, ItemCameraTransforms.TransformType.FIXED, false, matrixStack, bufferIn, packedLightIn);
            matrixStack.popPose();
        }
    }
}
