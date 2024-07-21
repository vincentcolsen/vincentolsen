<template>
  <section class="about">
    <h2 class="about">{{about.title}}</h2>
    <p class="about">{{about.description}}</p>
  </section>
</template>

<script>
export default {
  name: 'AboutMe',
  props: {
    about: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.about {
  margin-bottom: 0.5rem;
}

.about h2 {
  line-height: 1.2;
  margin-bottom: 0.1rem;

}
</style>
