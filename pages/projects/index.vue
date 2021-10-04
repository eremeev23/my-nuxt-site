<template>
  <div class="projects-box">
    <!-- PROJECTS LIST -->
    <ul class="projects-list">
      <!-- PROJECT ITEM -->
      <li v-for="project in getProjects" :key="project.id" class="item">
        <!-- CARF CONTAINER -->
        <div class="card">

          <a :href="project.link" class="project-link" target="_blank">
              <!-- INNER BLOCK -->
              <div class="project-info">
                <!-- PROJECT TITLE AND DESCRIPTION -->
                <h1 class="project-title">
                  {{ project.title }}
                </h1>

                <p class="description">
                   {{project.description}} 
                </p>
                
              </div>
              <!-- CARD IMAGE -->
            <img class="image" :src=project.image :alt="project.title" width="390px" height="460px">

          </a>
        </div>
      </li>

    </ul>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Projects',
  computed: mapGetters(['getProjects'])
}
</script>

<style>
.projects-box {
  min-height: 185vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(5px);
}
.projects-box::after {
  content: '';
  position: absolute;
  top: 115vh;
  left: 22%;
  transform: translateY(-45%);
  width: 420px;
  height: 360px;
  background-image: linear-gradient(45deg, #12c2e9, #c471ed, #f64f59);
  border-radius: 40% 60% 40% 70%;
  filter: blur(5px);
  transform: rotate(90deg);
  z-index: -1;
}

.projects-list {
  list-style: none;
  margin: 40px 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 60px;
}

.card {
  cursor: pointer;
  position: relative;
  width: 390px;
  height: 460px;
  border-radius: 15px;
  padding: 0;
  transition: all .4s ease;
  overflow: hidden;
}
.card:hover {
  transform: translateY(-15px);
  box-shadow: 0 30px 55px #000;
}

.project-link {
  position: relative;
  text-decoration: none;
  color: #232323;
}

.image {
  border: 1px solid #002029;
  border-radius: 15px;
}

.project-info {
  z-index: 100;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: -40px;
  width: 390px;
  min-height: 120px;
  background: rgba(0, 0, 0, 0.6);
  transition: all .5s ease;
}
.project-title {
  margin: 15px 20px 10px;
  color: #fff; 
  font-weight: 600;
}
.description {
  display: none;
  margin: 15px 20px;
  max-width: 90%;
  color: #fff;
  font-size: 22px;
  font-weight: 400;
  transition: all 1s ease;
}
.card:hover .description {
  display: inline-block;
}
.card:hover .project-info {
  bottom: -5px;
  border-radius: 15px;
}

@media (max-width: 1440px) {
  .projects-list {
    grid-gap: 0 10px;
  }
  .item {
    max-height: 470px;
  }
}

@media (max-width: 1024px) {

  .projects-box::after {
    display: none;
  }
  .projects-box {
    min-height: 120vh;
  }
  .item, .image, .card {
    max-width: 280px;
    max-height: 390px;
  }
  .projects-list {
    max-height: 1490px;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px 40px;
  }
}

@media (max-width: 770px ) {

  .projects-box {
    max-width: 100%;
  }
  .projects-list {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .projects-box {
    width: 118vw;
    min-height: 140vh;
  }
  .project-info {
    max-width: 100%;
  }
  .project-title {
    font-size: 20px;
  }
  .description {
    max-width: 80%;
    font-size: 16px;
  }
}

@media (max-width: 440px ) {
  
    .projects-list {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  .project-info {
    min-height: 100px;
  }
  .item {
    max-height: 330px;
  }
  .image, .card {
    max-height: 320px;
  }
}
</style>