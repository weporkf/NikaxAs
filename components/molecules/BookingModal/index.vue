<template>
    <div
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
        <div
            class="bg-white rounded-lg p-4 sm:p-6 max-w-md w-full mx-2 sm:mx-4"
        >
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-lg sm:text-xl font-noto-serif">
                    Забронировать квартиру
                </h2>
                <button
                    @click="$emit('close')"
                    class="text-gray-500 hover:text-gray-700"
                >
                    ✕
                </button>
            </div>

            <p class="mb-4 sm:mb-6 text-montserrat text-sm sm:text-base">
                Для бронирования напишите нам в WhatsApp:
                <br />
                <span class="font-semibold">{{ phone }}</span>
            </p>

            <a
                :href="`https://wa.me/${phoneForWhatsapp}`"
                target="_blank"
                class="bg-[#25D366] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-md flex items-center justify-center gap-2 hover:bg-[#22c35e] transition-colors font-montserrat text-sm sm:text-base w-full"
            >
                Написать в WhatsApp
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

defineEmits(['close']);

const props = defineProps<{
    phone: string;
}>();

// Форматируем номер для WhatsApp (убираем все кроме цифр)
const phoneForWhatsapp = computed(() => {
    return props.phone.replace(/[^0-9]/g, '');
});
</script>
