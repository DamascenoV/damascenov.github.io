<script setup lang="ts">
import TextHighlight from '@/components/ui/text-highlight/TextHighlight.vue';
const projects = [
  {
    title: 'GoDrinkWater',
    description: 'TUI - Timer to remember to drink water',
  },
  {
    title: 'UrSave',
    description: 'TUI - Url Saver with fzf',
  },
  {
    title: 'ur_save',
    description: 'TUI - Url Saver with fzf',
  }

]
</script>

<template>
  <div class="flex justify-center text-balance p-10">
    <h1 class="text-4xl font-bold text-center text-balance leading-relaxed">
      <TextHighlight class="highlight rounded-lg">Projects</TextHighlight>
    </h1>
  </div>
</template>

<style scoped>
.highlight {
  background-image: linear-gradient(45deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%);
}
</style>
