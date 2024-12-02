<script setup>
const props = defineProps({
    item: {
        type: Object,
        default: () => {}
    }
})
</script>


<template>

    <div class="w-[40px] h-[40px] flex justify-center items-center" :class="item.bg">

        <a :href="item.path" class="">

            <img :src="item.icon_path" :alt="item.icon_description">

        </a>

    </div>

</template>

<style scoped>

</style>