<script setup lang="ts">
import TextHighlight from '@/components/ui/text-highlight/TextHighlight.vue';
import BentoGrid from '@/components/ui/bento-grid/BentoGrid.vue'
import BentoGridItem from '@/components/ui/bento-grid/BentoGridItem.vue'
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
    description: 'TUI - Url Saver with fzf (Rust version)',
  },
  {
    title: 'Pelnance',
    description: 'Personal Finances Management',
  },
  {
    title: 'Django-Chat-UIKit',
    description: 'Chat webapp'
  }
]
</script>

<template>
  <div class="flex justify-center text-balance p-10">
    <h1 class="text-4xl font-bold text-center text-balance leading-relaxed">
      <TextHighlight class="highlight rounded-lg">Projects</TextHighlight>
    </h1>
  </div>
  <BentoGrid class="mx-auto max-w-4xl">
    <BentoGridItem v-for="(item, index) in projects" :key="index"
      :class="index === 3 || index === 6 ? 'md:col-span-2' : ''">
      <template #header>
        <div class="flex size-full animate-pulse space-x-4">
          <div class="flex size-full flex-1 rounded-md bg-zinc-800"></div>
        </div>
      </template>

      <template #title>
        <strong>{{ item.title }}</strong>
      </template>

      <template #icon>
        <v-icon name="si-github" scale="1.5" title="Github" color="white" />
      </template>

      <template #description>
        <p>{{ item.description }}</p>
      </template>
    </BentoGridItem>
  </BentoGrid>
</template>

<style scoped>
.highlight {
  background-image: linear-gradient(45deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%);
}
</style>
