<template>
    <NuxtLink :to="`/property/${propertyId}`">
        <div
            class="flex flex-col bg-cardBg border border-[#E9EAEB] rounded-md h-full hover:shadow-md transition-shadow"
        >
            <div class="relative aspect-[4/3]">
                <img
                    :src="property.images[0]"
                    alt=""
                    class="rounded-t-md w-full h-full object-cover"
                />
            </div>
            <div class="py-3 px-5 flex flex-col gap-1">
                <div class="sm-text flex flex-col gap-1">
                    <span class="font-semibold text-xl font-noto-serif">{{
                        property.type
                    }}</span>

                    <div class="text-textColor font-noto-serif flex gap-2">
                        <div>
                            <span class="text-black">{{
                                property.prices.default
                            }}</span>
                            в будни
                        </div>
                        <div>
                            <span class="text-black">{{
                                property.prices.weekend
                            }}</span>
                            в выходные
                        </div>
                    </div>

                    <div class="py-1 text-montserrat scroll-container">
                        <div class="flex flex-wrap gap-1">
                            <div
                                v-for="(tag, index) in property.tags"
                                :key="index"
                                class="bg-paramsBgColor px-[5px] rounded flex flex-nowrap items-center"
                            >
                                {{ tag }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
interface Price {
    default: string;
    weekend: string;
}

interface Property {
    type: string;
    prices: Price;
    images: string[];
    tags: string[];
}

defineProps<{
    property: Property;
    propertyId: number;
}>();
</script>

<style scoped>
@media screen and (max-width: 320px) {
    .sm-text {
        font-size: 13px;
        line-height: 15px;
    }
}

@media (max-width: 768px) {
    .scroll-container {
        display: flex;
        flex-wrap: nowrap; /* Запрещаем перенос элементов */
        overflow-x: auto; /* Добавляем горизонтальный скролл */
        gap: 10px; /* Расстояние между элементами */
    }

    .scroll-container > .flex {
        flex-shrink: 0; /* Запрещаем сжатие вложенных flex-элементов */
    }
}
</style>
