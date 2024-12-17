<template>
    <div class="relative">
        <div class="overflow-hidden rounded-lg">
            <div class="relative aspect-[4/3]">
                <img
                    :src="images[currentSlide]"
                    :alt="`Фото ${currentSlide + 1}`"
                    class="w-full h-full object-cover"
                />
            </div>
        </div>

        <!-- Кнопки навигации -->
        <button
            @click="prevSlide"
            class="absolute w-[30px] h-[30px] flex items-center justify-center left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 p-1.5 sm:p-2 rounded-full"
        >
            <
        </button>

        <button
            @click="nextSlide"
            class="absolute w-[30px] h-[30px] flex items-center justify-center right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 p-1.5 sm:p-2 rounded-full"
        >
            >
        </button>

        <!-- Индикаторы -->
        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            <button
                v-for="(_, index) in images"
                :key="index"
                @click="currentSlide = index"
                class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"
                :class="currentSlide === index ? 'bg-primary' : 'bg-white/60'"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    images: string[];
}>();

const currentSlide = ref(0);

const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % props.images.length;
};

const prevSlide = () => {
    currentSlide.value =
        currentSlide.value === 0
            ? props.images.length - 1
            : currentSlide.value - 1;
};
</script>
