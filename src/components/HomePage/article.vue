<script setup>

import {computed} from "vue";
import { useHomeItemsStore } from "@/stores/homeStore.js";

const darkTheme = (computed(()=> useHomeItemsStore().themeCheck))

const props = defineProps({
    item: {
        type: Object,
        default: () => {}
    }
})
</script>


<template>

    <div class="flex flex-col items-center px-[20px] py-[20px] h-auto w-[387px] rounded-2xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] max-xl:w-[350px]"
         :class="darkTheme ? 'bg-[#202434]' : 'bg-white'">

        <img :src="item.image" :alt="item.image_description" class="rounded-2xl h-[500px]">

        <div class="flex flex-col mt-[18px]">

            <a class="linear font-red_display font-bold text-[22px] text-[#2A86E5] leading-[26.4px] tracking-[0.5px] max-xl:text-center" href="/">{{ item.text }}</a>

            <div class="flex items-center justify-center mt-[10px]">

                <div class="mr-[22px] flex">

                    <img src="@/assets/icons/article/human.svg" alt="human icon">

                    <p class="linear uppercase font-red_display font-bold text-[14px] text-[#B3B3B1] leading-[14px] tracking-[0.5px] ml-[6px]">

                        {{item.author}}

                    </p>

                </div>

            </div>

        </div>

    </div>
    
</template>

<style scoped>

.linear {
  background: -webkit-linear-gradient(#0DD0BA, #001F3F);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}

</style>