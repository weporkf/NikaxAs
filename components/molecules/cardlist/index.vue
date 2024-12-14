<template>
  <div class="grid grid-cols-2 gap-5">
    <AtomesCard
      v-for="(property, idx) in properties"
      :key="idx"
      :property="property"
    />
  </div>
</template>

<script setup lang="ts">
import properties from '../../../data/properties.json';

interface Props {
  type: string;
  address: {
    street: string;
    village: string;
    district: string;
    region: string;
    postal: string;
  };
  price_per_day: string;
  bedrooms: number;
  bathrooms: number;
  repair: string;
  area: string;
  img: string;
}

const props = defineProps<Props>();
</script>

<style scoped></style>
