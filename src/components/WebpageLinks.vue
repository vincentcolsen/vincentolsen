<template>
  <h2>Links</h2>
  <div v-for="webpagelink in webpagelinks" :key="webpagelink.id" class="links-container">
    <div class="links-title">
      <p>{{ webpagelink.title }}</p>
    </div>
    <div class="links-url">
      <a :href="webpagelink.link">{{ webpagelink.linktext}}
        <img class="arrow-svg" src="https://bonhomme.lol/arrow-link.svg">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WebpageLinks',
  props: {
    webpagelinks: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.links-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1920px;
  -webkit-padding-start: 0px;
  padding-inline-start: 0px;
  -webkit-padding-end: 0px;
  padding-inline-end: 0px;
  width: 100%;
  -webkit-margin-start: auto;
  margin-inline-start: auto;
  -webkit-margin-end: auto;
  margin-inline-end: auto;
  margin-bottom: -1rem;
  align-items: center;
}

.links-title {
  flex: 1;
}

.links-url {
  grid-column: span 3 / span 3;
  transform: translateY(-2px);
}

.links-url a {
  color: rgba(255, 255, 255);
  text-decoration: none;
}

.links-url a:hover {
  text-decoration: underline; /* Add underline on hover */
}

.arrow-svg {
  margin-left: 0.5rem;
  transform: translateY(2px);
}
</style>
