<script setup lang="ts">
import TextHighlight from '../components/ui/text-highlight/TextHighlight.vue';
import TextGenerateEffect from '../components/ui/text-generate-effect/TextGenerateEffect.vue';

const date = new Date();
const birthDate = new Date('1995-07-04');
let age = date.getFullYear() - birthDate.getFullYear();
const month = date.getMonth() - birthDate.getMonth();

if (month < 0 || (month === 0 && date.getDate() < birthDate.getDate())) {
  age--;
}

const words = `Hey there! I’m Victor Damasceno, a ${age}-year-old originally from Salvador, Bahia, Brazil, now based in Portugal.\n
My programming journey kicked off in 2019, starting with C, C++, and C#. But as I stepped into the professional world, I dove into PHP and JavaScript, primarily working with Laravel and Vue.js.\n
Beyond coding, I’m big into Neovim – I can spend hours customizing my setup to get everything just right. When I’m not deep into programming, you can usually find me jamming on my guitar to some heavy metal, gaming (mainly FPS games), or bingeing anime (Hunter X Hunter and Berserk are top-tier in my book). I also have a thing for tattoos and cars, so I’m always looking for new ink.\n
It’s all about pushing limits, whether that’s in code, music, or life.
`
</script>

<template>
  <div class="flex justify-center text-balance p-10">
    <h1 class="text-4xl font-bold text-center text-balance leading-relaxed">
      <TextHighlight class="highlight rounded-lg">About Me</TextHighlight>
      <TextGenerateEffect :words=words class="text-white text-sm mt-5 lg:text-2xl" />
    </h1>
  </div>
</template>

<style scoped>
.highlight {
  background-image: linear-gradient(45deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%);
}
</style>
