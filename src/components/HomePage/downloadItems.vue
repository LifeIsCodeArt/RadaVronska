<script setup>
const props = defineProps({
    item: {
        type: Object,
        default: () => {}
    }
})
</script>


<template>

    <a class="flex items-center py-[7px] pl-[13px] border border-white bg-inherit rounded-xl hover:bg-gradient-to-r hover:from-[#0DD0BA] hover:to-[#2A86E5] hover:ease-in-out hover:duration-500"
       :href="item.link">

        <img :src="item.icon" :alt="item.icon_description" class="mr-[5px] pb-[2px]">

        <span class="font-red_display leading-[18px] tracking-[0.5px] font-normal text-[14px] text-white pr-[16.17px]">{{item.text}}</span>

    </a>

</template>

<style scoped>
.background{
    background: linear-gradient(90deg, #0DD0BA 0%, #2A86E5 100%)
}
</style>