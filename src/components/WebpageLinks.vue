<template>
  <section>
    <h2>Links</h2>
    <dl class="link-list">
      <div v-for="link in links" :key="link.label" class="link">
        <dt>{{ link.label }}</dt>
        <dd>
          <a :href="link.href">
            {{ link.text }}
            <ArrowLinkIcon class="link-icon" />
          </a>
        </dd>
      </div>
    </dl>
  </section>
</template>

<script setup>
import ArrowLinkIcon from '@/components/ArrowLinkIcon.vue'

defineProps({
  links: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped>
.link-list {
  display: grid;
  row-gap: 12px;
  margin: 26px 0 0;
}

.link {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: baseline;
}

.link dt {
  font-size: 14px;
  line-height: 21px;
  color: var(--color-text);
}

.link dd {
  grid-column: span 3;
  margin: 0;
}

.link a {
  color: var(--color-link);
  text-decoration: none;
}

.link a:hover {
  text-decoration: underline;
}

.link-icon {
  margin-left: 0.5rem;
  vertical-align: -2px;
}
</style>
