<template>
  <section class="certifications">
    <h2>Certifications</h2>

    <div v-for="cert in certs" :key="cert.id" class="cert-container">
      <div class="cert-short">
        <p>{{ cert.short }}</p>
      </div>

      <div class="cert-title">
        <p>{{ cert.name }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProfileCertifications",
  props: {
    certs: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>

.cert-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1920px;
  width: 100%;
  margin-inline: auto;
  margin-bottom: -1rem;
  align-items: center;
}

.cert-short {
  flex: 1;
}

.cert-title {
  grid-column: span 3 / span 3;
  transform: translateY(-2px);
}

.cert-title p {
  opacity: 0.7;
}

.certifications {
  margin-bottom: 4rem;
}

</style>