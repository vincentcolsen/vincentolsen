<template>
  <section class="work-experience">
    <h2>Work Experience</h2>
    <div v-for="job in jobs" :key="job.id" class="job">
      <div class="jobspan">
        <p>{{ job.duration }}</p>
      </div>
      <div class="project">
        <h2 class="job-title">{{ job.title }}</h2>
        <p class="job-description">{{ job.description }}</p>
        <ul class="technologies">
          <li v-for="(tech, index) in job.technologies" :key="index">
            {{ tech }}<span v-if="index < job.technologies.length - 1"> • </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WorkExperience',
  props: {
    jobs: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.work-experience {
  margin-bottom: 20px;
}

.job {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1920px;
  padding-inline-start: 0px;
  padding-inline-end: 0px;
  width: 100%;
  margin-inline-start: auto;
  margin-inline-end: auto;
  margin-bottom: 2.5rem;
}

.jobspan {
  flex: 1;

}

.project {
  grid-column: span 3 / span 3;
}

.technologies {
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
}

.technologies li {
  background-color: transparent;
  padding: 0;
  border-radius: 0;
  font-style: normal;
  font-size: 15px;
  font-weight: lighter;
  line-height: 21px;
}

@media (max-width: 600px) {
  .job {
    display: block;
  }

  .jobspan, .project {
    max-width: none;
    width: 100%;
  }
}
</style>
