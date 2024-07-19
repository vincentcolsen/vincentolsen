<template>
  <!--<HelloWorld msg="Vincent sier; hello world"/>-->
  <div id="app" class="container">
      <div class="info">
      <header></header>
      <div class="profile-header">
        <img src="./assets/vinco_3000px.jpg" alt="Bilde av Vincent Olsen" class="avatar">
        <div class="profile-header-text">
          <h1>Vincent C. Olsen</h1>
          <p class="subtitle">IT Developer</p>
        </div>
      </div>
      <section class="about">
        <h2 class="about">About</h2>
        <p class="about">Hello, I'm Vincent. I enjoy building projects from start to finish, exploring every aspect of an application. From styling and creating the frontend, programming the backend, to setting up the platform and infrastructure. And of course, I think about security at every step. Some may call this DevSecOps.</p>
      </section>
      <div class="spacer"></div>
      <section class="work-experience">
        <h2>Work Experience</h2>
        <div class="job">
          <div class="jobspan">
            <p>2022 - present</p>
          </div>
          <div class="project">
            <h2 class="job-title">IT Consultant – Netcompany </h2>
            <p class="job-description">Currently outsourced as a developer and serving as the security manager for the System Development section at Oslo municipality. Responsible for managing security work, including developing a management system for information security and privacy, and leading the Security Champions expert group. Focused on container orchestration with Kubernetes and OpenShift, leveraging a Certified Kubernetes Administrator (CKA) certification, and utilizing Azure for managing secrets. Additionally, working with Spring Boot and Vue for backend and frontend development.</p>
            <ul class="technologies">
              <li>Kubernetes</li>
              <li>•</li>
              <li>Terraform</li>
              <li>•</li>
              <li>Ansible</li>
              <li>•</li>
              <li>Spring Boot</li>
              <li>•</li>
              <li>Vue</li>
              <li>•</li>
              <li>Python</li>
              <li>•</li>
              <li>Java</li>
              <li>...</li>
            </ul>
          </div>
        </div>
        <div class="job">
          <div class="jobspan">
            <p>2021 - 2021</p>
          </div>
          <div class="project">
            <h2 class="job-title">Summer Internship | Big Data & Analytics  – Orkla</h2>
            <p class="job-description">In-house consultant focusing on machine learning, analytics, and data integration. Analyzed a large amount of data using Gradient Boosting to determine what drove the sales of Orkla Health and Care.</p>
            <ul class="technologies">
              <li>Azure Synapse </li>
              <li>•</li>
              <li>Azure Databricks</li>
              <li>•</li>
              <li>Web-APIs</li>
              <li>•</li>
              <li>Python</li>
              <li>•</li>
              <li>PowerBI</li>
            </ul>
          </div>
        </div>
        <div class="job">
          <div class="jobspan">
            <p>2018 - 2022</p>
          </div>
          <div class="project">
            <h2 class="job-title">Service Consultant – Norwegian Information Security Forum</h2>
            <p class="job-description">Responsible for the preparation and hosting of member meetings held quarterly and an annual large-scale conference. Assisted the board with various tasks, including supplier and participant coordination, administrative work, order processing, design, and member management.</p>
            <ul class="technologies">
              <li>Adobe Illustrator</li>
              <li>•</li>
              <li>Squarespace</li>
            </ul>
          </div>
        </div>
        <div class="job">
          <div class="jobspan">
            <p>2017 - 2018</p>
          </div>
          <div class="project">
            <h2 class="job-title">
              System Consultant – Norconsult</h2>
            <p class="job-description">Collaborated with the HR department in rolling out the new Workday HR system across the organization. Actively involved in the implementation and integration of the system.</p>
          </div>
        </div>
      </section>
        <h2>Links</h2>
        <div class="links-container">
          <div class="links-title">
            <p>LinkedIn</p>
          </div>
          <div class="links-url">
            <a href="https://www.linkedin.com/in/vincentolsen/">@vincentcolsen
              <img class="arrow-svg" alt="link to linkedin @vincentcolsen" src="https://bonhomme.lol/arrow-link.svg">
            </a>
          </div>
        </div>
        <div class="links-container">
          <div class="links-title">
            <p>GitHub</p>
          </div>
          <div class="links-url">
            <a href="https://github.com/vincentcolsen">@vincentcolsen
              <img class="arrow-svg" alt="link to linkedin @vincentcolsen" src="https://bonhomme.lol/arrow-link.svg">
            </a>
          </div>
        </div>
      <MainContent msg="Vincent sier; hello world"/>
    </div>
  </div>
</template>

<script>
//import MainContent from './components/Application.vue'

export default {
  name: 'App',
  //components: {
  //  MainContent
  //}
}
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

.profile-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 50px;
}

.avatar {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-right: 48px;
}

.profile-header-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 20px;
  margin-bottom: 5px;
}

.profile-header-text .subtitle {
  font-size: 16px;
  margin-top: 0;
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


.link {
  color: #1E90FF;
  text-decoration: none;
}

.about {
  margin-bottom: 0.5rem;
}

.about h2 {
  line-height: 1.2;
  margin-bottom: 0.1rem;

}


.job {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1920px;
  grid-gap: clamp(4px, calc(-5.09px + 2.42vw), 24px);
  -webkit-padding-start: 0px;
  padding-inline-start: 0px;
  -webkit-padding-end: 0px;
  padding-inline-end: 0px;
  width: 100%;
  -webkit-margin-start: auto;
  margin-inline-start: auto;
  -webkit-margin-end: auto;
  margin-inline-end: auto;
  margin-bottom: 2.5rem;
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

.spacer {
  padding-top: 35px;
}

.links-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1920px;
  grid-gap: 8px;
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
  grid-column: span 1 / span 1;

}

.links-url {
  grid-column: span 3 / span 3;
  transform: translateY(-2px);
}

.arrow-svg {
  margin-left: 0.5rem;
  transform: translateY(2px);
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
