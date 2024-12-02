<script setup>

import {useHomeItemsStore} from '@/stores/homeStore.js'

import DownloadItem from '@/components/HomePage/downloadItems.vue'
import TemplateItem from '@/components/HomePage/templates.vue'
import TemplateBurgerItem from '@/components/HomePage/templatesBurger.vue'
import VidgetItem from '@/components/HomePage/vidget.vue'

import {computed, onMounted, ref} from "vue";

const props = defineProps({
    item: {
        type: Object,
        default: () => {}
    }
})

const downloadedItems = computed(()=> useHomeItemsStore().downloadItems)

const templatesItems = computed(()=> useHomeItemsStore().templatesItems)


const darkTheme = (computed(()=> useHomeItemsStore().themeCheck))

const showModal = ref(false)

const underline = ref(false)

const currentRating = ref(5.2)

const rating = computed(() => currentRating.value)

const mouseInEvent = (id) => {

    currentRating.value = id

    console.log(currentRating.value)

}

</script>


<template>

    <div class="h-[234px] rounded-[40px] max-xl:h-[226px] max-md:min-w-[350px] max-md:h-[174px]" :class="showModal ? 'shadow-none' : ''">

    <div class="w-full h-[184px] rounded-[42px]  pr-[59px] flex items-center justify-between relative bg-mainImage  max-xl:bg-cover max-xl:bg-no-repeat max-xl:bg-left max-xl:pr-[30px]
                max-md:pr-[20px] max-md:min-w-[330px]  max-md:h-[129px] max-md:bg-center max-md:pr-[15px]">

        <div class="absolute w-full h-full bg-[#161C3A] opacity-80 z-[5] rounded-[42px]"></div>
        
        <div class="flex ml-[56px] items-center z-[10] max-xl:ml-[30px] max-md:ml-[20px]">

            <img :src="item.avatar" :alt="item.avatar_description" class=" rounded-xl max-md:w-[89px] max-md:h-[89px]">

                <div class="ml-[24px] flex flex-col  max-md:ml-[15px]">

                    <h2 class="text-[30px] tracking-[0.5px] leading-[36px] font-red_display font-bold text-white max-xl:text-[35px] max-xl:leading-[42px] max-md:text-[24px] max-md:leading-[28.8px]">

                        {{item.header}}

                    </h2>

                    <div class="h-[28px] flex  gap-4 mt-[10px] max-xl:hidden">

                        <DownloadItem v-for="item in downloadedItems" :item="item" :key="item.id" />

                    </div>

                </div>

        </div>

        <div class="flex items-center z-[10] max-xl:hidden">

            <div class="mr-[12px]">

                <img :src="item.total" alt="" class="">
                
            </div>

            <div class="text-white">

                <h2 class="font-red_display font-extrabold text-[24px] leading-[21.17px]">Players</h2>

                <p class="font-red_display font-medium text-[16px] leading-[21.17px]">

                    {{item.total_votes}} votes

                </p>

                <div class="flex">

                    <p class="font-red_display font-medium text-[16px] leading-[21.17px]">Your rating:
                        <span class="text-[#F9B936] text-[20px] leading-[26.46px] align-middle">{{rating}}</span></p>

                </div>

            </div>

        </div>

    </div>
    
    <div class="ml-[56px] mr-[33px] mt-[7px] flex items-center justify-between max-xl:hidden">

        <ul class="flex">
            
            <li class="my-[3px] text-[#707070]">{{item.header}}</li>

            <TemplateItem v-for="item in templatesItems" :item="item" :key="item.id"/>
            
        </ul>

        <ul id="vidget" class="h-[35px] mb-[5px]  flex rounded-3xl bg-gradient-to-r to-[#FCC539] from-[#DC4A19]">

            <li class=" w-[52px] h-full flex items-center justify-center rounded-l-2xl text-black ">

                <span class="font-red_display font-bold text-[12px] leading-[14.4px] tracking-[0.5px] text-white">Note</span>

            </li>

            <VidgetItem @click="mouseInEvent(item)" v-for="item in useHomeItemsStore().itemsVidget" :item="item" :key="item.index" class="font-bold font-red_display"
                        :class="darkTheme ? ( rating >= item ? 'text-white bg-inherit': 'text-white bg-[#183A5D]') : ( rating >= item ? 'text-white bg-inherit': 'text-[#707070] bg-[#EBF6F5] ')"/>

        </ul>

    </div>

    <div class="hidden max-xl:block max-xl:flex max-xl:justify-center max-xl:items-center max-xl:mt-[10px]">

        <p class="font-red_display font-medium text-[20px] leading-[26.46px]" :class="darkTheme ? 'text-white' : 'text-[#707070]'">

            More info

        </p>

        <div class="cursor-pointer w-[20px] h-[15.3px] border-t-[2px] border-b-[2px] flex items-center justify-center ml-[10px]"
             @click="showModal = !showModal" :class="darkTheme ? 'border-white' : 'border-[#707070]'">

            <span class="w-full h-[2px] " :class="darkTheme ? 'bg-white' : 'bg-[#707070]'"></span>

        </div>

        <div v-show="showModal" class="absolute w-full h-[60%] bottom-[330px] max-md:bottom-[-15px] max-md:h-[90.5%]" :class="darkTheme ? 'bg-[#0E1219]' : 'bg-white'">

            <ul class="flex flex-col items-center ">

                <li @mouseenter="underline = true" @mouseleave="underline = false" class="listStyle font-bold font-red_display text-[20px] leading-[26px] tracking-[0.5px] mb-[21px] flex flex-col items-center relative" >{{item.header}}

                    <div v-show="underline" class="mt-[5px] w-[24px] h-[5px] bg rounded-xl"></div>


                </li>


                <TemplateBurgerItem v-for="item in templatesItems" :item="item" :key="item.id" class="mb-[12px]"/>

            </ul>

        </div>

    </div>

    </div>
</template>

<style scoped>

.listStyle{
    background: -webkit-linear-gradient(#0DD0BA, #2A86E5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

}

.bg{
    background: linear-gradient(90deg, #0DD0BA 0%, #2A86E5 100%);
}

.linear{
    background: linear-gradient(270deg, #FCC539 0%, #DC4A19 100%);

}


#vidget li:last-child{
    width: 37px;
    border-radius: 0 40% 40% 0;
    padding-right: 10px;
}

#vidget{

}
</style>