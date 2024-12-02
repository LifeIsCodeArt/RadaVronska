<script setup>
import {useHomeItemsStore} from '@/stores/homeStore.js'
import BioRada from "@/components/HomePage/bioRada.vue";
import Article from '@/components/HomePage/article.vue'
import SideAd from '@/components/HomePage/sideAd.vue'
import SideIcon from '@/components/HomePage/sideBarIcon.vue'

import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const store = useHomeItemsStore()

const darkTheme = (computed(()=> useHomeItemsStore().themeCheck))

const articles = computed(()=> store.articleItems)

const articles2 = computed(()=> store.articleItems2)

const articles3 = computed(()=> store.articleItems3)

const articles4 = computed(()=> store.articleItems4)

const sideIcons = computed(()=> store.sideIcons)

const showButton = ref(false);

const scrollToHeader = () => {
  const header = document.getElementById("Header");
  if (header) {
    header.scrollIntoView({ behavior: "smooth" });
  }
};

const handleScroll = () => {
  showButton.value = window.scrollY > 300;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

</script>

<template >

    <div class=" pt-[44px] px-[375px] pb-[140px] max-xl:min-w-[768px] max-xl:my-0 max-xl:mx-auto max-xl:px-[24px] max-md:min-w-[350px] max-md:my-0 max-md:mx-0 max-md:px-[15px] relative" :class="darkTheme ? 'bg-[#0E1219]' : 'bg-white '">

        <div class="left-0 top-[10%] xl:absolute max-xl:hidden max-sl:block">

            <ul class="flex flex-col">

                <SideIcon v-for="item in sideIcons" :item="item" :key="item.id"/>

            </ul>

        </div>

        <div class="flex justify-between">

            <div class="mr-[39px] w-[815px] max-xl:mr-0 max-xl:pr-0 max-xl:w-[736px] max-md:mr-[5px] max-md:w-full max-md:pr-0 max-md:mx-auto">

                <div>

                    <div id="Menu" class="text-[14px] text-[#707070] leading-[18px] tracking-[0.5px] font-red_display font-normal flex items-center align-baseline max-md:block  max-md:text-center max-md:h-[36px] max-md:w-full">
                            Головна  <span class="pt-[1px] px-[4px] h-[18px]">></span>

                      <span class="font-bold text-center w-auto h-[18px] text-[#001F3F]"> Рада Вронська</span>

                    </div>

                  <bio-rada class="mb-40"/>

                    <h1 class="linear uppercase text-[42px] leading-[54px] tracking-[0.5px] font-red_display font-black max-md:text-center max-md:text-[35px] max-md:leading-[45.5px]">

                      Рада Вронська – мисткиня

                    </h1>

                    <div class="w-[720px] h-[8px] background rounded-3xl mt-[9px]"></div>

                </div>

                <div id="About" class="text-[20px] text-[#707070] leading-[32px] tracking-[0.5px] font-red_display font-normal mt-[20px] mb-[60px]"
                     :class="darkTheme ? 'text-white' : 'text-[#707070]'">

                  <span class="font-bold">Рада Вронська</span> – мисткиня, чия творчість розкриває перед нами дивовижний світ художнього вираження. Її роботи відзначаються глибоким емоційним наповненням і різноманітними техніками, що захоплять кожного, хто побачить їх. На цьому сайті ви знайдете багатий вибір її робіт <span class="font-bold">Рада Вронська</span> — це справжня чарівниця, чиї полотна здатні зачарувати, надихати та відкривати нові горизонти для кожного.

                </div>

                <div class="flex flex-col">

                    <div class="flex flex-col mb-[20px]">

                        <h2 class="linear uppercase text-[42px] leading-[54px] tracking-[0.5px] font-red_display font-black max-md:text-center max-md:text-[35px] max-md:leading-[45.5px]">
                          Роботи Ради Вронської
                        </h2>

                        <div class="w-[640px] h-[8px] background rounded-3xl mt-[9px]"></div>

                    </div>


                  <div id="Works" class="flex flex-col my-12">

                    <h3 class=" linear uppercase text-[36px] leading-[54px] tracking-[0.5px] font-red_display font-black max-md:text-center max-md:text-[35px] max-md:leading-[45.5px]">
                      Нитковий живопис
                    </h3>

                    <div class="w-[460px] h-[8px] background rounded-3xl mt-[9px]"></div>

                  </div>


                    <div class="grid grid-rows-2 grid-flow-col gap-4  max-xl:h-full max-md:flex max-md:flex-col">

                        <Article v-for="item in articles" :item="item" :key="item.id" />

                    </div>


                  <div class="flex flex-col my-12">

                    <h3 class="linear uppercase text-[36px] leading-[54px] tracking-[0.5px] font-red_display font-black max-md:text-center max-md:text-[35px] max-md:leading-[45.5px]">
                      Текстильне мистецтво
                    </h3>

                    <div class="w-[550px] h-[8px] background rounded-3xl mt-[9px]"></div>

                  </div>

                  <div class="w-full grid grid-rows-2 grid-flow-col gap-4  max-xl:h-full max-md:flex max-md:flex-col">

                        <Article v-for="item in articles2" :item="item" :key="item.id" />

                  </div>

                  <div class="flex flex-col my-12">

                    <h3 class="linear uppercase text-[36px] leading-[54px] tracking-[0.5px] font-red_display font-black max-md:text-center max-md:text-[35px] max-md:leading-[45.5px]">
                      Бісероплетіння
                    </h3>

                    <div class="w-[370px] h-[8px] background rounded-3xl mt-[9px]"></div>

                  </div>

                  <div class="w-full grid grid-rows-3 grid-flow-col gap-4  max-xl:h-full max-md:flex max-md:flex-col">

                    <Article v-for="item in articles3" :item="item" :key="item.id" />

                  </div>

                  <div class="flex flex-col my-12">

                    <h3 class="linear uppercase text-[36px] leading-[54px] tracking-[0.5px] font-red_display font-black max-md:text-center max-md:text-[35px] max-md:leading-[45.5px]">
                      Вишивка
                    </h3>

                    <div class="w-[215px] h-[8px] background rounded-3xl mt-[9px]"></div>

                  </div>

                  <div class="w-full grid grid-rows-3 grid-flow-col gap-4  max-xl:h-full max-md:flex max-md:flex-col">

                    <Article v-for="item in articles4" :item="item" :key="item.id" />

                  </div>

                </div>

            </div>

            <SideAd class="max-xl:hidden mt-4"/>

        </div>

      <button
          v-if="showButton"
          @click="scrollToHeader"
          class="fixed bottom-5 right-5 p-3.5 px-4 text-base background text-white border-0 cursor-pointer rounded-[50%]"
      >
        Наверх
      </button>

    </div>

</template>

<style>

.linear {
    background: -webkit-linear-gradient(#0DD0BA, #001F3F);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

}

.background{
    background: linear-gradient(90deg, #0DD0BA 0%, #2A86E5 100%)
}
</style>