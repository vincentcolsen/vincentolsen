<template>
  <section class="work-experience">
    <h2>Work Experience</h2>
    <div v-for="job in jobs" :key="job.title" class="job">
      <p>{{ job.period }}</p>
      <div class="job-details">
        <h3>{{ job.title }}</h3>
        <p>{{ job.description }}</p>
        <ul v-if="job.technologies.length" class="technologies">
          <li v-for="(tech, index) in job.technologies" :key="tech">
            {{ tech }}<span v-if="index < job.technologies.length - 1" aria-hidden="true"> • </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  jobs: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped>
.work-experience {
  margin-bottom: 20px;
}

.job {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 2.5rem;
}

.job-details {
  grid-column: span 3;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding: 0;
  list-style: none;
}

.technologies li {
  font-size: 15px;
  font-weight: 300;
  line-height: 21px;
}

@media (max-width: 600px) {
  .job {
    display: block;
  }
}
</style>
