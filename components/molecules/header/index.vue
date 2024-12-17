<template>
    <div
        class="bg-[linear-gradient(72.06deg,_#242424_6.11%,_#19161C_93.75%)] flex w-svw"
    >
        <div class="flex py-5 px-10 justify-between content-box w-full">
            <div class="flex gap-10">
                <div class="flex items-center">
                    <a href="/"> <IconsLogo /></a>
                </div>
                <div class="flex header_buttons">
                    <div class="flex items-center">
                        <a
                            href="/"
                            class="pt-2 px-5 outline-none font-montserrat text-headerTextColor text-base font-normal"
                        >
                            Главная
                        </a>
                    </div>
                    <!-- <div class="flex items-center">
                        <button
                            class="pt-2 px-5 outline-none font-montserrat text-headerTextColor text-base"
                        >
                            О нас
                        </button>
                    </div>
                    <div class="flex items-center">
                        <button
                            class="pt-2 px-5 outline-none font-montserrat text-headerTextColor text-base"
                        >
                            Контакты
                        </button>
                    </div> -->
                </div>
            </div>
            <!-- <div class="flex gap-3">
                <div
                    class="flex items-center px-3 py-2 font-montserrat text-headerTextColor text-base header_buttons"
                >
                    Войти
                </div>
                <AtomesLanguage class="mobile_language">
                    <template #icon>
                        <svg-arrow class="size-3" />
                    </template>
                </AtomesLanguage>
                <div class="flex justify-center header_menu items-center gap-1">
                    <svg-menu
                        class="w-6 h-6 cursor-pointer"
                        @click="toggleMenu"
                    />
                    <span v-if="isMenuOpen" class="text-white">666</span>
                </div>
            </div> -->
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
@media screen and (max-width: 768px) {
    .content-box {
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
    }
}

@media screen and (min-width: 768px) {
    .header_menu {
        display: none;
    }
}
@media screen and (max-width: 768px) {
    .header_buttons {
        display: none;
    }
}

@media screen and (max-width: 320px) {
    .mobile_language {
        display: none;
    }
}
</style>
