import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
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
  FaFolderOpen,
  FaHome
} from "oh-vue-icons/icons"

import Main from './view/Main.vue'
import Me from './view/Me.vue'
import Projects from './view/Projects.vue'

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
  FaFolderOpen,
  FaHome
)

const routes = [
  { path: '/', component: Main },
  { path: '/me', component: Me },
  { path: '/projects', component: Projects },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).component("v-icon", OhVueIcon).mount('#app')
