<script setup>

</script>


<template>

    <div class="z-[1] w-[310px] h-[508px] rounded-[42px] flex justify-center items-center border border-blue-100">

        <div class="bg-adsImage bg-center w-[300px] h-[498px] relative flex justify-center items-center rounded-[42px] z-[2] px-4">

            <div class="absolute w-full h-full background_effect z-[5] rounded-[42px] opacity-55"></div>

            <div class="flex flex-col justify-around z-[10] text-[#FAF0E6]">

                <p class="linear text-start text-[18px] font-red_display font-semibold leading-[32px] tracking-[1.5px] mb-10">

                  <span class="text-blue-500">Мистецтво — це найбільший учитель людства, воно вчить</span>
                  <br>
                  <span class="text-yellow-500">думати, любити і розуміти.</span>

                </p>

                <p class="linear text-end text-[18px] font-bold font-red_display tracking-[1.5px]">Олександр Довженко</p>

            </div>

        </div>

    </div>

</template>

<style scoped>
.background_effect {

  background: linear-gradient(to bottom, #cc6699 0%, #ff6666 100%);

}
.border{

  background: linear-gradient(180deg, #808080 46%, #808080 50%);

}

.linear {

  background: linear-gradient(180deg, #0DD0BA 0%, #2A86E5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}

</style>