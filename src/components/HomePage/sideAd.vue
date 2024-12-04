<script setup>
</script>

<template>
  <div class="z-[1] w-[310px] h-[508px] rounded-[42px] flex justify-center items-center border border-blue-100">
    <div class="relative bg-adsImage bg-cover bg-top w-[300px] h-[498px] rounded-[42px] flex justify-center items-center px-4">
      <div class="absolute inset-0 rounded-[42px] blur-overlay"></div>
      <div class="relative z-[10] flex flex-col justify-between text-[#FAF0E6]">
        <p class="linear text-start text-[18px] font-red_display font-semibold leading-[32px] tracking-[1.5px] mt-4">
          <span class="text-blue-500">Мистецтво — це найбільший учитель людства, воно вчить</span>
          <br>
          <span class="text-yellow-500">думати, любити і розуміти.</span>
        </p>
        <p class="linear text-end text-[18px] font-bold font-red_display tracking-[1.5px] pt-4">
          Олександр Довженко
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

.blur-overlay {
  position: absolute;
  inset: 0;
  backdrop-filter: blur(3px);
  z-index: 1;
  border-radius: inherit;
}

.linear {
  background: linear-gradient(180deg, #FFD700 0%, #FF4500 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.border{

  background: linear-gradient(180deg, #FFD700 0%, #FF4500 100%);

}
</style>
