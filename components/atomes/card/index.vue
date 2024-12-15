<template>
  <div>
    <div class="flex flex-col bg-cardBg border border-[#E9EAEB] rounded-md">
      <div class="relative">
        <img
          :src="property.property.img"
          alt=""
          class="rounded-t-md size-full"
        />
      </div>
      <div class="py-3 px-5">
        <div class="">
          <span class="font-semibold text-xl font-noto-serif">{{
            property.property.type
          }}</span>
          <div class="text-textColor text-montserrat">
            {{ property.property.address.street }},
            {{ property.property.address.village }},
            {{ property.property.address.district }},
            {{ property.property.address.region }},
            {{ property.property.address.postal_code }}
          </div>
          <div class="text-textColor font-noto-serif">
            от
            <span class="text-black">{{
              property.property.price_per_day
            }}</span>
            в сутки
          </div>
          <div class="flex gap-1 flex-col text-montserrat">
            <div class="flex gap-1">
              <div class="bg-paramsBgColor px-[5px] rounded">
                <span class="text-cardParamsColor">Спальни: </span
                >{{ property.property.bedrooms }}
              </div>
              <div class="bg-paramsBgColor px-[5px] rounded">
                <span class="text-cardParamsColor">Сан-узлы: </span
                >{{ property.property.bathrooms }}
              </div>
            </div>
            <div class="flex gap-1 text-montserrat">
              <div class="bg-paramsBgColor px-[5px] rounded">
                <span class="text-cardParamsColor">Ремонт: </span
                >{{ property.property.repair }}
              </div>
              <div class="bg-paramsBgColor px-[5px] rounded">
                <span class="text-cardParamsColor">Площадь: </span>
                {{ property.property.area }}
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

<style scoped>
@media (1);
</style>
