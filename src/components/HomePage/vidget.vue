<script setup>
import {computed} from "vue";

const props = defineProps({
    item: {
        type: Object,
        default: () => {}
    }
})

const rating = computed(() => localStorage.getItem("currentRating"))
</script>


<template>

    <li class="w-[20px] h-full border-l border-[#70707026] flex items-center justify-center text-[12px] leading-[14.4px] tracking-[0.5px] font-red_display">

        <button>{{item}}</button>

    </li>

</template>

<style scoped>
    .border{
        border-left: 1px solid rgba(255, 255, 255, 0.5);
    }
</style>