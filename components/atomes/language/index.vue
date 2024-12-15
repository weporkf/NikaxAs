<template>
  <div class="flex items-center gap-1 p-1">
    <svg-flag class="size-6 language-icon" />
    <div class="text-headerTextColor px-1 text-[18px] leading-6 language_text">
      Ру
    </div>
    <slot name="icon" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@media screen and (max-width: 481px) {
  .language_text {
    display: none;
  }
}
</style>
