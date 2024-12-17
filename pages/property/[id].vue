<template>
    <div class="container mx-auto px-2 sm:px-4 py-4 sm:py-8">
        <!-- Слайдер -->
        <div class="mb-4 sm:mb-8">
            <MoleculesPropertySlider :images="property.images" />
        </div>

        <!-- Информация о квартире -->
        <div class="grid md:grid-cols-2 gap-4 sm:gap-8">
            <div>
                <h1 class="text-xl sm:text-2xl font-noto-serif mb-3 sm:mb-4">
                    {{ property.type }}
                </h1>

                <!-- Цены -->
                <div class="mb-6 font-noto-serif">
                    <div
                        class="flex flex-col sm:flex-row gap-2 sm:gap-4 text-base sm:text-lg"
                    >
                        <div>
                            <span class="font-semibold">{{
                                property.prices.default
                            }}</span>
                            <span class="text-textColor"> в будни</span>
                        </div>
                        <div>
                            <span class="font-semibold">{{
                                property.prices.weekend
                            }}</span>
                            <span class="text-textColor"> в выходные</span>
                        </div>
                    </div>
                </div>

                <!-- Теги -->
                <div class="mb-6 sm:mb-8">
                    <h2 class="text-lg sm:text-xl mb-2 sm:mb-3 font-noto-serif">
                        Характеристики:
                    </h2>
                    <ul class="space-y-1.5 sm:space-y-2">
                        <li
                            v-for="(tag, index) in property.tags"
                            :key="index"
                            class="flex items-center gap-2 text-montserrat text-sm sm:text-base"
                        >
                            <div class="w-2 h-2 bg-primary rounded-full"></div>
                            {{ tag }}
                        </li>
                    </ul>
                </div>

                <!-- Кнопка бронирования -->
                <button
                    @click="showModal = true"
                    class="w-full sm:w-auto bg-primary text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-md hover:bg-primary/90 transition-colors font-montserrat text-sm sm:text-base"
                >
                    Забронировать
                </button>
            </div>
        </div>

        <!-- Модальное окно -->
        <BookingModal
            v-if="showModal"
            @close="showModal = false"
            phone="+7 (999) 999-99-99"
        />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import properties from '~/data/properties.json';
import BookingModal from '~/components/molecules/BookingModal/index.vue';

const route = useRoute();
const showModal = ref(false);

// Получаем данные о квартире по ID
const property = properties[Number(route.params.id)];

// Перенаправляем на главную, если квартира не найдена
if (!property) {
    navigateTo('/');
}
</script>
