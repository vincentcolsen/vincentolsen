<template>
  <header class="app-header">
    <ThemeToggle />
  </header>
  <main class="container">
    <ProfileInfo :profile="profile" />
    <AboutMe :about="about" />
    <WorkExperience :jobs="jobs" />
    <ProfileCertifications :certifications="certifications" />
    <WebpageLinks :links="links" />
  </main>
</template>

<script setup>
import AboutMe from '@/components/AboutMe.vue'
import ProfileCertifications from '@/components/ProfileCertifications.vue'
import ProfileInfo from '@/components/ProfileInfo.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
import WebpageLinks from '@/components/WebpageLinks.vue'
import WorkExperience from '@/components/WorkExperience.vue'
import { about, certifications, jobs, links, profile } from '@/content/profile.js'
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
}

.container {
  max-width: 500px;
  margin: 0 auto;
  padding: 80px 14px;
}
</style>
