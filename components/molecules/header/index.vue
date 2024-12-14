<template>
  <div class="flex flex-col">
    <div class="flex py-5 justify-between">
      <div class="flex gap-10">
        <div class="flex items-center">
          <IconsLogo />
        </div>
        <div class="flex">
          <button class="py-2 px-5 outline-none font-montserrat">
            Главная
          </button>
          <button class="py-2 px-5 outline-none">О нас</button>
          <button class="py-2 px-5 outline-none">Контакты</button>
        </div>
      </div>
      <div class="flex p-2">
        <div class="flex items-center p-5 py-2">Войти</div>
        <AtomesLanguage>
          <template>
            <div><img src="/assets/img/strelka.png" alt="" class= /></div>
          </template>
        </AtomesLanguage>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
