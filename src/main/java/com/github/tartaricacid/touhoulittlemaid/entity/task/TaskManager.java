package com.github.tartaricacid.touhoulittlemaid.entity.task;

import com.github.tartaricacid.touhoulittlemaid.entity.task.instance.TaskAttack;
import com.github.tartaricacid.touhoulittlemaid.entity.task.instance.TaskIdle;
import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
import net.minecraft.util.ResourceLocation;

import java.util.List;
import java.util.Map;
import java.util.Optional;

public final class TaskManager {
    private static final Map<ResourceLocation, IMaidTask> TASK_MAP = Maps.newHashMap();
    private static final List<IMaidTask> TASK_INDEX = Lists.newArrayList();
    private static final IMaidTask IDLE_TASK = new TaskIdle();

    static {
        registerTask(IDLE_TASK);
        registerTask(new TaskAttack());
    }

    /**
     * 注册 Task
     */
    public static void registerTask(IMaidTask task) {
        TASK_MAP.put(task.getUid(), task);
        TASK_INDEX.add(task);
    }

    /**
     * 获取 Task
     */
    public static Optional<IMaidTask> findTask(ResourceLocation uid) {
        return Optional.ofNullable(TASK_MAP.get(uid));
    }

    /**
     * 默认 Task
     */
    public static IMaidTask getIdleTask() {
        return IDLE_TASK;
    }

    public static Map<ResourceLocation, IMaidTask> getTaskMap() {
        return TASK_MAP;
    }

    public static List<IMaidTask> getTaskIndex() {
        return TASK_INDEX;
    }
}