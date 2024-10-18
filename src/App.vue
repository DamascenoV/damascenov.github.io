<script setup lang="ts">
import CardContainer from './components/ui/card-inspira/CardContainer.vue';
import CardBody from './components/ui/card-inspira/CardBody.vue';
import CardItem from './components/ui/card-inspira/CardItem.vue';
import AnimatedBeam from './components/ui/animated-beam/AnimatedBeam.vue';
import { HoverCard, HoverCardTrigger, HoverCardContent } from './components/ui/hover-card';
import Dock from './components/ui/dock/Dock.vue';
import DockIcon from './components/ui/dock/DockIcon.vue';

import { ref } from 'vue';
const containerRef = ref<HTMLElement>();
const div1Ref = ref<HTMLElement>();
const div2Ref = ref<HTMLElement>();
const div3Ref = ref<HTMLElement>();
const div4Ref = ref<HTMLElement>();
const div5Ref = ref<HTMLElement>();
const div6Ref = ref<HTMLElement>();
const div7Ref = ref<HTMLElement>();
</script>

<template>
  <div class="bg-black h-full w-full md:w-auto md:h-auto">
    <div class="container mx-auto">
      <CardContainer class="my-6">
        <CardBody
          class="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-zinc-950 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem :translateZ="50" class="text-xl font-bold text-neutral-600 dark:text-white">
            DamascenoV
          </CardItem>
          <CardItem as="p" translateZ="60" class="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
            I'm Software Developer that ships bugs to prodution.
          </CardItem>
          <div class="flex justify-between items-center mt-4">
            <CardItem :translateZ="100">
              <img src="https://avatars.githubusercontent.com/u/104433352?v=4" class="rounded rounded-full size-24" />
            </CardItem>
            <CardItem :translateZ="20" as="a" href="https://github.com/DamascenoV" target="__blank"
              class="px-2 py-2 rounded-xl text-xs font-normal dark:text-white">
              <v-icon name="si-github" scale="1.5" title="Github" />
            </CardItem>
            <CardItem :translateZ="20" as="a" href="https://linkedin.com/in/victor-c-damasceno" target="__blank"
              class="px-2 py-2 rounded-xl text-xs font-normal dark:text-white">
              <v-icon name="si-linkedin" scale="1.5" title="Linkedin" />
            </CardItem>
            <CardItem :translateZ="20" as="a" href="https://x.com/devic_damasceno" target="__blank"
              class="px-2 py-2 rounded-xl text-xs font-normal dark:text-white">
              <v-icon name="bi-x" scale="1.5" title="X" />
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      <div class="flex flex-col items-center justify-center text-white">
        <div class="flex flex-col">
          <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/non">
            Skills
          </h2>
        </div>
        <div class="flex flex-col">
          <span class="text-sm text-pretty tracking-tighter sm:text-xl xl:text-2xl/none">
            hover the icons to see some information
          </span>
        </div>
      </div>
      <div
        class="relative flex h-[450px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background bg-zinc-950 md:shadow-xl"
        ref="containerRef">
        <div class="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
          <div class="flex flex-row items-center justify-between">
            <HoverCard>
              <HoverCardTrigger as-child>
                <div
                  class="z-10 flex size-12 items-center justify-center rounded-full border-2 bg-black p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:text-black"
                  ref="div1Ref">
                  <v-icon name="vi-file-type-go" animation="pulse" scale="1.5" title="Go lang" />
                </div>
              </HoverCardTrigger>
              <HoverCardContent class="w-160 z-40 text-white">
                <div class="flex justify-between space-x-4 backdrop-blur-lg border rounded-lg p-8">
                  <div class="space-y-1">
                    <h4 class="text-sm font-semibold">
                      Golang
                    </h4>
                    <p class="text-sm">
                      Current learning Go, build two projects with and reading/coding the books: <br>
                      - <a href="https://interpreterbook.com/">Writing An Interpreter In Go</a><br>
                      - <a href="https://compilerbook.com/">Writing An Compiler In Go</a>
                    </p>
                    <div class="flex items-center pt-2">
                      <span class="text-xs text-muted-foreground">
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger as-child>
                <div
                  class="z-10 flex size-12 items-center justify-center rounded-full border-2 bg-black p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
                  ref="div5Ref">
                  <v-icon name="vi-file-type-blade" animation="pulse" scale="1.5" title="Laravel" />
                </div>
              </HoverCardTrigger>
              <HoverCardContent class="w-160 z-40 text-white">
                <div class="flex justify-between space-x-4 backdrop-blur-lg border rounded-lg p-8">
                  <div class="space-y-1">
                    <h4 class="text-sm font-semibold">
                      Laravel/PHP
                    </h4>
                    <p class="text-sm">
                      Worked with Laravel/PHP, building many REAL-WORLD applications. <br>
                    </p>
                    <div class="flex items-center pt-2">
                      <span class="text-xs text-muted-foreground">
                        First language that I learned
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
          <div class="flex flex-row items-center justify-between">
            <HoverCard>
              <HoverCardTrigger as-child>
                <div
                  class="z-10 flex size-12 items-center justify-center rounded-full border-2 bg-black p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:text-black"
                  ref="div2Ref">
                  <v-icon name="vi-file-type-elixir" animation="pulse" scale="1.5" title="Elixir" />
                </div>
              </HoverCardTrigger>
              <HoverCardContent class="w-160 z-40 text-white">
                <div class="flex justify-between space-x-4 backdrop-blur-lg border rounded-lg p-8">
                  <div class="space-y-1">
                    <h4 class="text-sm font-semibold">
                      Elixir
                    </h4>
                    <p class="text-sm">
                      Currently learning Elixir and the Phoenix Framework. <br>
                      I've fallen in love with the language and its ecosystem. <br>
                    </p>
                    <div class="flex items-center pt-2">
                      <span class="text-xs text-muted-foreground">
                        Brazil Mentioned
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger as-child>
                <div
                  class="z-10 flex size-16 items-center justify-center rounded-full border-2 bg-black p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
                  ref="div4Ref">
                  <v-icon name="la-brain-solid" color="pink" animation="flash" hover scale="3" title="Me Brain" />
                </div>
              </HoverCardTrigger>
              <HoverCardContent class="w-160 z-40 text-white">
                <div class="flex justify-between space-x-4 backdrop-blur-lg border rounded-lg p-8">
                  <div class="space-y-1">
                    <h4 class="text-sm font-semibold">
                      Me (Victor Damasceno)
                    </h4>
                    <p class="text-sm">
                      Born in Brazil and now living in Portugal, I proudly embrace my inner nerd. <br> I have a passion
                      for coding, gaming, anime, and, of course, heavy music. <br> When it comes to coding, I’m great at
                      starting personal projects (finishing them is another story!). <br> As for gaming, I may not be
                      the best, but I always have fun. <br> In anime, a few hold a special place in my heart, like
                      Hunter x Hunter, Berserk, and One Piece. <br> And when it comes to music, while heavy metal is my
                      first love, I actually enjoy all kinds of music. I even played guitar in a metal band when I was
                      younger!
                    </p>
                    <div class="flex items-center pt-2">
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger as-child>
                <div
                  class="z-10 flex size-12 items-center justify-center rounded-full border-2 bg-black p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
                  ref="div6Ref">
                  <v-icon name="vi-file-type-vue" animation="pulse" scale="1.5" title="VueJs" />
                </div>
              </HoverCardTrigger>
              <HoverCardContent class="w-160 z-40 text-white">
                <div class="flex justify-between space-x-4 backdrop-blur-lg border rounded-lg p-8">
                  <div class="space-y-1">
                    <h4 class="text-sm font-semibold">
                      VueJS
                    </h4>
                    <p class="text-sm">
                      Used a lot in my professional carrier. <br>
                    </p>
                    <div class="flex items-center pt-2">
                      <span class="text-xs text-muted-foreground">
                        Much better than REACT
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
          <div class="flex flex-row items-center justify-between">
            <HoverCard>
              <HoverCardTrigger as-child>
                <div
                  class="z-10 flex size-12 items-center justify-center rounded-full border-2 bg-black p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:text-black"
                  ref="div3Ref">
                  <v-icon name="vi-file-type-lua" animation="pulse" scale="1.5" title="Lua" />
                </div>
              </HoverCardTrigger>
              <HoverCardContent class="w-160 z-40 text-white">
                <div class="flex justify-between space-x-4 backdrop-blur-lg border rounded-lg p-8">
                  <div class="space-y-1">
                    <h4 class="text-sm font-semibold">
                      Lua
                    </h4>
                    <p class="text-sm">
                      I used to configure the greatest text editor of all time (Neovim) <br>
                    </p>
                    <div class="flex items-center pt-2">
                      <span class="text-xs text-muted-foreground">
                        Brazil Mentioned
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger as-child>
                <div
                  class="z-10 flex size-12 items-center justify-center rounded-full border-2 bg-black p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
                  ref="div7Ref">
                  <v-icon name="vi-file-type-flutter" animation="pulse" scale="1.5" title="Flutter" />
                </div>

              </HoverCardTrigger>
              <HoverCardContent class="w-160 z-40 text-white">
                <div class="flex justify-between space-x-4 backdrop-blur-lg border rounded-lg p-8">
                  <div class="space-y-1">
                    <h4 class="text-sm font-semibold">
                      Dart/Flutter
                    </h4>
                    <p class="text-sm">
                      Builded a APP with. <br>
                      Nothing to say... <br>
                    </p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>

        <AnimatedBeam :containerRef="containerRef" :fromRef="div1Ref" :toRef="div4Ref" :curvature="-75"
          :endYOffset="-10" />
        <AnimatedBeam :containerRef="containerRef" :fromRef="div2Ref" :toRef="div4Ref" />
        <AnimatedBeam :containerRef="containerRef" :fromRef="div3Ref" :toRef="div4Ref" :curvature="75"
          :endYOffset="10" />
        <AnimatedBeam :containerRef="containerRef" :fromRef="div5Ref" :toRef="div4Ref" :curvature="-75"
          :endYOffset="-10" :reverse="true" />
        <AnimatedBeam :containerRef="containerRef" :fromRef="div6Ref" :toRef="div4Ref" :reverse="true" />
        <AnimatedBeam :containerRef="containerRef" :fromRef="div7Ref" :toRef="div4Ref" :curvature="75" :endYOffset="10"
          :reverse="true" />
      </div>
      <div class="my-6">
        <Dock class="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-6 z-50">
          <DockIcon>
            <v-icon name="si-aboutdotme" color="white" scale="2" title="Flutter" />
          </DockIcon>
          <DockIcon>
            <v-icon name="io-code-slash" color="white" scale="2" title="Flutter" />
          </DockIcon>
          <DockIcon>
            <v-icon name="fa-folder-open" color="white" scale="2" title="Flutter" />
          </DockIcon>
        </Dock>
      </div>
    </div>
  </div>
</template>
