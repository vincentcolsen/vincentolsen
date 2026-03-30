<template>
  <div :class="{'background-dark': !isToggled, 'background-light': isToggled}">
    <header class="app-header">
      <div class="header-content">
        <div class="funmodediv">
          <label class="switch">
            <input type="checkbox" v-model="isToggled" @change="toggleMode">
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </header>
    <div id="app" class="container" >
        <ProfileInfo :profile-info="profileinfo" />
        <AboutMe :about="about"  />
        <div class="spacer"></div>
        <WorkExperience :jobs="jobs" />
        <Certifications :certs="certifications" />
        <WebpageLinks :webpagelinks="webpagelinks" />
    </div>
    <FunMode/>
  </div>
</template>

<script>
import AboutMe from "@/components/AboutMe.vue";
import Certifications from "@/components/Certifications.vue";
import FunMode from "@/components/FunMode.vue";
import ProfileInfo from "@/components/ProfileInfo.vue";
import WebpageLinks from "@/components/WebpageLinks.vue";
import WorkExperience from "@/components/WorkExperience.vue";
import vincentOlsenImage from "@/assets/vincent-olsen.jpg";

export default {
  name: 'App',
  components: {
    AboutMe,
    Certifications,
    FunMode,
    ProfileInfo,
    WebpageLinks,
    WorkExperience
  },
  data() {
    return {
      isToggled: false,
      profileinfo: {
          imageSrc: vincentOlsenImage,
          imageAlt: 'Bilde av Vincent Olsen',
          name: 'Vincent C. Olsen',
          title: 'Senior Platform Engineer',
      },
      about: {
        title: 'About',
        description: 'Hello, I\'m Vincent. I enjoy building projects from start to finish, exploring every aspect of an application. From creating the frontend, programming the backend, to setting up the platform and infrastructure. And of course, I think about security at every step. Some may call this DevSecOps.'
      },
      jobs: [
        {
          id: 0,
          duration: '2026 - present',
          title: 'Senior Platform Engineer – Nimtech',
          description: 'Working with cloud platforms, Kubernetes environments and DevSecOps practices across client projects. Focus on building scalable and secure platform solutions using Kubernetes, Azure and modern CI/CD pipelines.',
          technologies: ['Kubernetes', 'Azure', 'DevSecOps', 'Terraform', 'GitHub Actions']
        },
        {
          id: 1,
          duration: '2022 - 2026',
          title: 'Senior Consultant – Netcompany',
          description: 'Platform engineer in Oslo municipality working on the OpenShift platform Marvin. Responsible for operations, development and observability for a platform hosting around 240 applications. Implemented CI/CD pipelines with GitHub Actions, Terraform and ArgoCD and built monitoring solutions using Prometheus, Grafana and Elastic Stack.',
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
      certifications: [
        {
          id: 0,
          short: "CKA",
          name: "Certified Kubernetes Administrator"
        },
        {
          id: 1,
          short: "CKS",
          name: "Certified Kubernetes Security Specialist"
        },
        {
          id: 2,
          short: "CKAD",
          name: "Certified Kubernetes Application Developer"
        },
        {
          id: 3,
          short: "KCSA",
          name: "Kubernetes and Cloud Native Security Associate"
        },
        {
          id: 4,
          short: "KCNA",
          name: "Kubernetes and Cloud Native Associate"
        }
      ],
      webpagelinks: [
        {
          id: 0,
          title: 'LinkedIn',
          link: 'https://www.linkedin.com/in/vincentolsen/',
          linktext: '@vincentcolsen'
        },
        {
          id: 1,
          title: 'GitHub',
          link: 'https://github.com/vincent-olsen/',
          linktext: '@vincent-olsen'
        }
      ]
    };
  },
  methods: {
    toggleMode() {
      if (this.isToggled) {
        // Do something when toggled on
      } else {
        // Do something when toggled off
      }
    }
  }
};

</script>

<style>
/* General styles */
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

.container {
  padding: 80px 14px;
  max-width: 500px;
  margin: auto;
}

.spacer {
  padding-top: 35px;
}

/* Header styles */
.app-header {
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
}

.funmodediv {
  position: relative;
}

/* Dark mode styles */
.background-dark {
  background-color: #121212;
  color: #FFFFFF;
  min-height: 100vh;
}

/* Light mode styles */
.background-light {
  background-color: #F5F5F5;
  color: #000000;
  min-height: 100vh;
}

.background-light p {
  color: #121212;
}

.background-light .links-url a {
  color: #121212;
}

.background-light .technologies li {
  font-weight: normal;
}

/* Toggle switch stykes */
.switch {
  position: relative;
  display: inline-block;
  width: 34px;
  height: 20px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #F5F5F5;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 3px;
  bottom: 3px;
  background-color: #121212;
  transition: .4s;
}

input:checked + .slider {
  background-color: #121212;;
}

input:checked + .slider:before {
  transform: translateX(14px);
  background-color: #F5F5F5;
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

/* Text styles */
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
</style>
