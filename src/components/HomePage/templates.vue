<script setup>
const props = defineProps({
    item: {
        type: Object,
        default: () => {}
    }
})
</script>


<template>

    <li class="ml-[19px] font-red_display font-normal text-[16px] text-[#707070] leading-[26px] border-l border-[#707070] pl-[17px] my-[3px]">

        {{item.text}}

    </li>
    
</template>

<style scoped>

</style>