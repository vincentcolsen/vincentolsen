<template>
  <section class="about">
    <h2>{{ about.title }}</h2>
    <p>{{ about.description }}</p>
  </section>
</template>

<script setup>
defineProps({
  about: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.about {
  margin-bottom: 55px;
}
</style>
