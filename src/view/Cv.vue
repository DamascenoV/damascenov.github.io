<script setup lang="ts">
import TextHighlight from '@/components/ui/text-highlight/TextHighlight.vue';
</script>

<template>
  <div class="flex justify-center text-balance p-10">
    <h1 class="text-4xl font-bold text-center text-balance leading-relaxed">
      <TextHighlight class="highlight rounded-lg">CV</TextHighlight>
    </h1>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
    <aside class="md:col-span-1">
      <section class="mb-6">
        <h2 class="text-xl font-semibold text-white border-b border-gray-700 pb-2 mb-4">CONTACTS</h2>
        <ul class="space-y-2">
          <li><a href="https://linkedin.com/in/victor-c-damasceno" class="text-white-500 hover:underline">LinkedIn</a>
          </li>
          <li><a href="https://github.com/damascenov" class="text-white-500 hover:underline">GitHub</a></li>
          <li>Almada, Portugal</li>
        </ul>
      </section>
      <section class="mb-6">
        <h2 class="text-xl font-semibold text-white border-b border-gray-700 pb-2 mb-4">EDUCATION</h2>
        <div class="mb-4">
          <p class="font-semibold">ES23 Ruy Luís Gomes</p>
          <p>2011-2014</p>
          <p>Professional technical photography course</p>
        </div>
        <div>
          <p class="font-semibold">IEFP</p>
          <p>2019-2020</p>
          <p>Computer Programmer</p>
        </div>
      </section>
      <section class="mb-6">
        <h2 class="text-xl font-semibold text-white border-b border-gray-700 pb-2 mb-4">SKILLS</h2>
        <ul class="list-disc list-inside space-y-1">
          <li>Full Stack Development</li>
          <li>Cloud Computing (Azure)</li>
          <li>Agile & Scrum Methodologies</li>
          <li>CI/CD</li>
          <li>Test-Driven Development</li>
          <li>APIs Development</li>
          <li>Data Structure & Algorithms</li>
          <li>Problem Solving & Debugging</li>
          <li>Version Control (Git)</li>
          <li>98-375 MTA</li>
          <li><a href="https://refactoring.guru/cert/r/MTQxNDk2" class="text-white-500 hover:underline">Dive Into
              Refactoring</a></li>
          <li><a href="https://courses.edx.org/certificates/03c32a46434249faa02d1fa56610c1de"
              class="text-white-500 hover:underline">LFS158x: Introduction to Kubernetes</a></li>
        </ul>
      </section>
    </aside>
    <main class="md:col-span-2 space-y-6">
      <section>
        <h2 class="text-xl font-semibold text-white border-b border-gray-700 pb-2 mb-4">ABOUT ME</h2>
        <p class="mb-10">
          I am a software developer, driven by a strong enthusiasm for learning and constructing innovative solutions.
          Specializing in backend, I’m an enthusiastic team player committed to ongoing learning
          and excellence, with a primary goal of continuous skill improvement.
        </p>
      </section>
      <section>
        <h2 class="text-xl font-semibold text-white border-b border-gray-700 pb-2 mb-4">EXPERIENCE</h2>
        <div class="mb-6">
          <h3 class="text-lg font-semibold">Junior Software Developer</h3>
          <p>Damascode Agency</p>
          <p>12/2020 - 09/2021</p>
          <ul class="list-disc list-inside ml-4 mt-1 space-y-1">
            <li>Laravel / PHP Programming</li>
            <li>Wordpress / CMS Development</li>
            <li>Implementation of landing pages using VueJS</li>
            <li>MySQL Database Management</li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold">Software Developer</h3>
          <p>Landbell Software, S.A.</p>
          <p>12/2021 - 10/2024</p>
          <ul class="list-disc list-inside ml-4 mt-1 space-y-1">
            <li>Backend Developer using Laravel / PHP</li>
            <li>Frontend Developer using VueJS/Typescript</li>
            <li>MongoDB / Redis / MySQL Database Management</li>
            <li>Cloud Computing (Azure)</li>
            <li>Docker / Docker Compose</li>
            <li>Proven experience in integrating external services through REST and SOAP protocols</li>
            <li>Proficient in unit testing and test-driven development</li>
            <li>Developed a mobile app using Flutter/Dart</li>
            <li>Agile practitioner, contributing to efficient and collaborative project workflows</li>
          </ul>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.highlight {
  background-image: linear-gradient(45deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%);
}
</style>
