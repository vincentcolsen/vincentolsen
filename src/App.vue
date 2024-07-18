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
        <p class="about">As an IT consultant at Netcompany, I work with modern technologies like Kubernetes, Terraform, Ansible, Python, among others. In my current project, I hold the position of security officer, responsible for securing systems, in addition to actively working with DevOps. My background in IT provides me with a solid foundation to tackle various challenges in my work.</p>
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
            <p class="job-description">Outsourced to Oslo municipality as DevSecOps.</p>
            <ul class="technologies">
              <li>Kubernetes</li>
              <li>•</li>
              <li>Terraform</li>
              <li>•</li>
              <li>Ansible</li>
              <li>•</li>
              <li>Kafka</li>
            </ul>
          </div>
        </div>
        <div class="job">
          <div class="jobspan">
            <p>2021 - 2021</p>
          </div>
          <div class="project">
            <h2 class="job-title">Summer Intern – Orkla</h2>
            <p class="job-description">Big Data & Analytics. Worked on analyzing a lot of data through Gradient Boosting to see what drove the sale of Orkla Health and Care. We used serverless SQL in Azure to create a connection between all the data points, and python to transform the data.</p>
            <ul class="technologies">
              <li>Azure </li>
              <li>•</li>
              <li>Python</li>
            </ul>
          </div>
        </div>
        <div class="job">
          <div class="jobspan">
            <p>2018 - 2022</p>
          </div>
          <div class="project">
            <h2 class="job-title">Service Consultant – Norwegian Information Security Forum</h2>
            <p class="job-description">Preparation and hosting before / during member meetings four times a year, as well as a larger conference once a year. Otherwise various tasks for the board; involves contact with suppliers and participants, various administrative work, orders, design, member management, etc.</p>
          </div>
        </div>
      </section>
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
  padding-bottom: 5px;
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

@media (max-width: 400px) {
  .job {
    display: block;
  }

  .jobspan, .project {
    max-width: none;
    width: 100%;
  }
}
</style>
