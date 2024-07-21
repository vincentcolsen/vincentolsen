<template>
  <div id="app" class="container">
      <header></header>
      <ProfileInfo :profile-info="profileinfo" />
      <AboutMe :about="about"  />
      <div class="spacer"></div>
      <WorkExperience :jobs="jobs" />
      <WebpageLinks :webpagelinks="webpagelinks" />
  </div>
</template>

<script>
import ProfileInfo from "@/components/ProfileInfo.vue";
import AboutMe from "@/components/AboutMe.vue";
import WorkExperience from "@/components/WorkExperience.vue";
import WebpageLinks from "@/components/WebpageLinks.vue";

export default {
  name: 'App',
  components: {
    ProfileInfo,
    AboutMe,
    WorkExperience,
    WebpageLinks
  },
  data() {
    return {
      profileinfo: {
          imageSrc: require('@/assets/vinco_3000px.jpg'),
          imageAlt: 'Bilde av Vincent Olsen',
          name: 'Vincent C. Olsen',
          title: 'IT Developer',
      },
      about: {
        title: 'About',
        description: 'Hello, I\'m Vincent. I enjoy building projects from start to finish, exploring every aspect of an application. From styling and creating the frontend, programming the backend, to setting up the platform and infrastructure. And of course, I think about security at every step. Some may call this DevSecOps.'
      },
      jobs: [
        {
          id: 1,
          duration: '2022 - present',
          title: 'IT Consultant – Netcompany',
          description: 'Currently outsourced as a developer and serving as the security manager for the System Development section at Oslo municipality. Responsible for managing security work, including developing a management system for information security and privacy, and leading the Security Champions expert group. Focused on container orchestration with Kubernetes and OpenShift, leveraging a Certified Kubernetes Administrator (CKA) certification, and utilizing Azure for managing secrets. Additionally, working with Spring Boot and Vue for backend and frontend development.',
          technologies: ['Kubernetes', 'Terraform', 'Ansible', 'Spring Boot', 'Vue', 'Python', 'Java', '...']
        },
        {
          id: 2,
          duration: '2021 - 2021',
          title: 'Summer Internship | Big Data & Analytics – Orkla',
          description: 'In-house consultant focusing on machine learning, analytics, and data integration. Analyzed a large amount of data using Gradient Boosting to determine what drove the sales of Orkla Health and Care.',
          technologies: ['Azure Synapse', 'Azure Databricks', 'Web-APIs', 'Python', 'PowerBI']
        },
        {
          id: 3,
          duration: '2018 - 2022',
          title: 'Service Consultant – Norwegian Information Security Forum',
          description: 'Responsible for the preparation and hosting of member meetings held quarterly and an annual large-scale conference. Assisted the board with various tasks, including supplier and participant coordination, administrative work, order processing, design, and member management.',
          technologies: ['Adobe Illustrator', 'Squarespace']
        },
        {
          id: 4,
          duration: '2017 - 2018',
          title: 'System Consultant – Norconsult',
          description: 'Collaborated with the HR department in rolling out the new Workday HR system across the organization. Actively involved in the implementation and integration of the system.',
          technologies: []
        }
      ],
      webpagelinks: [
        {
          id: 1,
          title: 'LinkedIn',
          link: 'https://www.linkedin.com/in/vincentolsen/',
          linktext: '@vincentcolsen'
        },
        {
          id: 2,
          title: 'GitHub',
          link: 'https://github.com/vincentcolsen/',
          linktext: '@vincentcolsen'
        }
      ]
    }
  }
};

</script>

<style>

header {
  height: 10px;
}

body {
  font-family: Inter, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #121212;
  color: #FFFFFF;
  margin: 0;
  padding: 0;
  position: relative;
  min-height: 100%;
}

h1 {
  font-size: 22px;
  margin: 10px 0;
  line-height: 26px;
}

h2 {
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
}

h3 {
  padding-bottom: 5px;
  font-weight: 400;
}

p {
  font-style: normal;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: rgba(255, 255, 255, 0.64);
}

.container {
  padding: 115px 14px;
  -webkit-padding-start: 1rem;
  padding-inline-start: 1rem;
  -webkit-padding-end: 1rem;
  padding-inline-end: 1rem;
  max-width: 500px;
  -webkit-margin-start: auto;
  margin-inline-start: auto;
  -webkit-margin-end: auto;
  margin-inline-end: auto;
}



.spacer {
  padding-top: 35px;
}


</style>
