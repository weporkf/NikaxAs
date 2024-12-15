<template>
  <div class="flex flex-col gap-2">
    <MoleculesHeader />

    <div class="content-box xl:max-w-[1200px] lg:max-w-[922px]">
      <MoleculesCardlist />
      <MoleculesFooter />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.content-box {
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 40px;
  box-sizing: border-box;
}
</style>
