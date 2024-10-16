import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
import { OhVueIcon, addIcons } from "oh-vue-icons";
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
  BiX
} from "oh-vue-icons/icons";

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
  BiX
)

createApp(App).component("v-icon", OhVueIcon).mount('#app')
