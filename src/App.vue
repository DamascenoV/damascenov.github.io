<script setup lang="ts">
import Dock from './components/ui/dock/Dock.vue';
import DockIcon from './components/ui/dock/DockIcon.vue';
</script>

<template>
  <div class="bg-black h-full w-full md:w-auto md:h-auto">
    <div class="container mx-auto">
      <RouterView />
      <div class="my-6">
        <Dock class="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-6 z-50">
          <DockIcon>
            <RouterLink to="/">
              <v-icon name="fa-home" color="white" scale="2" title="Home" />
            </RouterLink>
          </DockIcon>
          <DockIcon>
            <RouterLink to="me">
              <v-icon name="si-aboutdotme" color="white" scale="2" title="Me" />
            </RouterLink>
          </DockIcon>
          <DockIcon>
            <RouterLink to="projects">
              <v-icon name="io-code-slash" color="white" scale="2" title="Projects" />
            </RouterLink>
          </DockIcon>
          <DockIcon>
            <RouterLink to="cv">
              <v-icon name="fa-folder-open" color="white" scale="2" title="CV" />
            </RouterLink>
          </DockIcon>
        </Dock>
      </div>
    </div>
  </div>
</template>
