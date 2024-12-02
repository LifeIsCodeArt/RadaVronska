<script setup>
import { useHomeItemsStore } from "@/stores/homeStore.js";
import { computed } from "vue";

const darkTheme = (computed(()=> useHomeItemsStore().themeCheck))
</script>

<template>
  <div class="flex justify-between">

    <div class="">

      <p class="mt-12 my-6 uppercase linear text-[42px] leading-[54px] tracking-[0.5px] font-red_display font-black max-md:text-center max-md:text-[35px] max-md:leading-[45.5px]"
         >
        Рада Вронська
      </p>
      <span class="linear text-[42px] leading-[54px] tracking-[0.5px] font-red_display font-black max-md:text-center max-md:text-[35px] max-md:leading-[45.5px]">ЧАРІВНА НИТКА ДОЛІ</span>
    </div>

    <div class="h-full shadow-[0_0_32px_rgba(8,_112,_184,_0.7)] rounded-xl">
      <img src="@/assets/images/author/RadaVronska.jpg" class="rounded-xl">
    </div>

  </div>
</template>

<style>

.linear {
  background: -webkit-linear-gradient(#0DD0BA, #00008B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}

.background{
  background: linear-gradient(90deg, #0DD0BA 0%, #2A86E5 100%)
}
</style>