<template>
  <section class="certifications">
    <h2>Certifications</h2>
    <p>{{ certifications.summary }}</p>
    <dl class="cert-list">
      <div v-for="cert in certifications.items" :key="cert.short" class="cert">
        <dt>{{ cert.short }}</dt>
        <dd>{{ cert.name }}</dd>
      </div>
    </dl>
  </section>
</template>

<script setup>
defineProps({
  certifications: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.certifications {
  margin-bottom: 62px;
}

.cert-list {
  display: grid;
  row-gap: 12px;
  margin: 0;
}

.cert {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: baseline;
  font-size: 14px;
  line-height: 21px;
}

.cert dt {
  color: var(--color-text);
}

.cert dd {
  grid-column: span 3;
  margin: 0;
  color: var(--color-text-subtle);
}
</style>
