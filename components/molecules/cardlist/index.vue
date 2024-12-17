<template>
    <div class="container mx-auto px-2 sm:px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AtomesCard
                v-for="(property, index) in properties"
                :key="index"
                :property="property"
                :property-id="index"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import properties from '../../../data/properties.json';

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
</script>

<style scoped>
.container {
    max-width: 1280px;
}
</style>
