<template>
  <div class="bg-[linear-gradient(72.06deg,_#242424_6.11%,_#19161C_93.75%)]">
    <div class="flex py-5 px-10 justify-between content-box">
      <div class="flex gap-10">
        <div class="flex items-center">
          <IconsLogo />
          <div class="px-3">
            <span class="font-noto-serif text-2xl text-white">AS</span>
            <span class="font-monteCarlo text-2xl text-yellow-300">groupe</span>
          </div>
        </div>
        <div class="flex">
          <div class="flex items-center">
            <button
              class="py-2 px-5 outline-none font-montserrat text-headerTextColor text-base font-normal"
            >
              Главная
            </button>
          </div>
          <div class="flex items-center">
            <button
              class="py-2 px-5 outline-none font-montserrat text-headerTextColor text-base"
            >
              О нас
            </button>
          </div>
          <div class="flex items-center">
            <button
              class="py-2 px-5 outline-none font-montserrat text-headerTextColor text-base"
            >
              Контакты
            </button>
          </div>
        </div>
      </div>
      <div class="flex gap-3">
        <div
          class="flex items-center px-3 py-2 font-montserrat text-headerTextColor text-base"
        >
          Войти
        </div>
        <AtomesLanguage>
          <template #icon>
            <svg-arrow class="size-3" />
          </template>
        </AtomesLanguage>
        <div class="flex justify-center">
          <div class="flex justify-center items-center">
            <img
              src="/assets/img/menu.png"
              alt=""
              class="w-6 h-6 cursor-pointer"
              @click="toggleMenu"
            />
            <div v-if="isMenuOpen" class="flex flex-col items-center">
              <button class="py-2 px-5 outline-none font-montserrat">
                Главная
              </button>
              <button class="py-2 px-5 outline-none font-montserrat">
                О нас
              </button>
              <button class="py-2 px-5 outline-none font-montserrat">
                Контакты
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
.content-box {
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
}
</style>
