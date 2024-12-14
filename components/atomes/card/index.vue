<template>
  <div class="size-full">
    <div
      class="flex flex-col bg-[#f2f2f2] max-w-[500px] border border-[#E9EAEB] rounded-md"
    >
      <div class="relative">
        <img
          :src="property.property.img"
          alt=""
          class="w-[500px] h-[280px] rounded-t-md"
        />
      </div>
      <div class="py-3 px-5">
        <div>
          <span class="font-semibold text-xl">{{
            property.property.type
          }}</span>
          <div class="text-[#7C8185] text-base leading-5">
            {{ property.property.address.street }},
            {{ property.property.address.village }},
            {{ property.property.address.district }},
            {{ property.property.address.region }},
            {{ property.property.address.postal_code }}
          </div>
          <div class="text-[#7C8185]">
            от
            <span class="text-black">{{
              property.property.price_per_day
            }}</span>
            в сутки
          </div>
          <div class="flex flex-col gap-1">
            <div class="flex gap-1">
              <div class="bg-[#c0c0c0] px-[5px]">
                Спальни: {{ property.property.bathrooms }}
              </div>
              <div class="bg-[#c0c0c0] px-[5px]">
                Сан-узлы: {{ property.property.bathrooms }}
              </div>
            </div>
            <div class="flex gap-1">
              <div class="bg-[#c0c0c0] px-[5px]">
                Ремонт: {{ property.property.repair в}}
              </div>
              <div class="bg-[#c0c0c0] px-[5px]">
                Площадь: {{ property.property.area }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ property: any }>();
</script>

<style scoped></style>
