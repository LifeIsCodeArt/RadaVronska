<script setup>
const props = defineProps({
    item: {
        type: Object,
        default: () => {}
    }
})

import { ref } from "vue";

const underline = ref(false)
</script>


<template>

    <li @mouseenter="underline = true" @mouseleave="underline = false" class="listStyle font-bold font-red_display text-[20px] leading-[26px] tracking-[0.5px] mb-[21px] flex flex-col items-center relative">

        <a href="/" class="">{{item.text}}</a>

        <p v-show="underline" class="mt-[5px] w-[24px] h-[5px] bg rounded-xl"></p>

    </li>

</template>

<style scoped>

.bg{
    background: linear-gradient(90deg, #0DD0BA 0%, #2A86E5 100%);
}

</style>