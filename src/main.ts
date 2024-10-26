import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import App from './App.vue'
import './assets/index.css'
import { OhVueIcon, addIcons } from "oh-vue-icons"
import {
  ViFileTypeGo,
  ViFileTypeElixir,
  ViFileTypeBlade,
  ViFileTypeVue,
  ViFileTypeFlutter,
  LaBrainSolid,
  SiNeovim,
  FaPhoenixFramework,
  ViFileTypeLua,
  SiGithub,
  SiLinkedin,
  BiX,
  SiAboutdotme,
  IoCodeSlash,
  FaFolderOpen
} from "oh-vue-icons/icons"

import Main from './view/Main.vue'
import Me from './view/Me.vue'

addIcons(
  ViFileTypeGo,
  ViFileTypeElixir,
  ViFileTypeBlade,
  ViFileTypeVue,
  ViFileTypeFlutter,
  LaBrainSolid,
  SiNeovim,
  FaPhoenixFramework,
  ViFileTypeLua,
  SiGithub,
  SiLinkedin,
  BiX,
  SiAboutdotme,
  IoCodeSlash,
  FaFolderOpen
)

const routes = [
  { path: '/', component: Main },
  { path: '/me', component: Me },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

createApp(App).use(router).component("v-icon", OhVueIcon).mount('#app')
