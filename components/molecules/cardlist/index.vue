<template>
  <div class="grid grid-cols-2 gap-4 mobilev">
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
  bedrooms?: number;
  bathrooms?: number;
  repair?: string;
  area?: string;
  img: string;
}

const props = defineProps<Partial<Props>>();
</script>

<style scoped>
@media screen and (max-width: 481px) {
  .mobilev {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
