<template>
  <div id="app">
    <Header />
    <!-- THEME SWITCHER -->
    <input id="checkbox" class="checkbox" type="checkbox" @click="checkTheme">
    <label for="checkbox" class="label-check">
      <span v-show="getTheme">Light theme</span> 
      <span v-show="!getTheme">Dark theme</span> 
    </label>
    <!-- NUXT -->
    <Nuxt />
  </div>
</template>

<script>
// VUEX
import { mapGetters } from 'vuex'
import { mapMutations} from 'vuex'
// COMPONENTS
import Header from '../components/Header'


export default {
  name: 'App',

  components: {
    Header,
  },

  computed: mapGetters(['getTheme']),

  methods: {
    ...mapMutations(['changeTheme']),

    checkTheme() {
      this.changeTheme();

      const body = document.querySelector('body');
      const label = document.querySelectorAll('span');
      const header = document.querySelector('Header');

      if(!this.getTheme) {
        label.forEach(el => {
          el.style.color = '#002029'
        });
        body.style.background = '#fff';
        header.style.background = '#fff';
        body.style.color = '#002029';
      }

      if(this.getTheme) {
        label.forEach(el => {
          el.style.color = '#fff'
        });
        body.style.background = '#002029';
        header.style.background = '#002029';
        body.style.color = '#fff';
      }

    }
  }
}
</script>


<style>
/* FONTS */
@import url('https://fonts.googleapis.com/css2?family=Stick+No+Bills:wght@200;300;400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
/* STYLES */
* {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  position: relative;
  background: #002029;
  color: #fff;
  min-height: 100vh;
}
Footer {
  position: absolute;
  bottom: 0;
  margin: 20px 0 0;
}
/* SHAPES */
#app::before {
  content: '';
  position: absolute;
  top: 20vh;
  left: 12%;
  width: 520px;
  height: 460px;
  background-image: linear-gradient(24deg, #ac39a2e5, #8239ace5);
  border-radius: 40% 60% 40% 70%;
  z-index: -1;
}
#app::after {
  content: '';
  position: absolute;
  top: 50vh;
  left: 62%;
  width: 473px;
  height: 473px;
  background-image: linear-gradient(24deg, #4439ac, #29badf);
  border-radius: 63% 37% 39% 61% / 61% 29% 71% 39% ;
  z-index: -1;
}
/* THEME SWITCHER */
.checkbox {
  position: absolute;
  top: 50px;
  right: 20px;
  opacity: 0;
}
.label-check {
  cursor: pointer;
  position: absolute;
  top: 40px;
  right: 20px;
}
.label-check::before {
  position: absolute;
  content: '';
  left: -50px;
  height: 22px;
  width: 40px;
  background: #002029;
  border: 1px solid #fff;
  border-radius: 15px;
}
.label-check::after {
  position: absolute;
  content: '';
  top: 2px;
  left: -47px;
  height: 18px;
  width: 18px;
  background: #fff;
  border-radius: 50%;
  transition: all .4s ease;
}
.checkbox:checked ~ .label-check::after {
  left: -31px;
  background: #002029;
}
.checkbox:checked ~ .label-check::before {
  background: #fff;
  border-color: #002029;
}

@media (max-width: 1441px) {

  .label-check {
    cursor: pointer;
    position: absolute;
    top: 40px;
    right: 20px;
  }

  #app {
    min-height: 110vh;
  }
  #app::before {
    top: 127px;
    left: 5%;
  }
  #app::after {
    top: 540px;
    left: 60%;
  }
}

@media (max-width: 1025px) {

  #app {
    min-height: 95vh;
  }

  #app::after {
    top: 540px;
    left: 52%;
  }

  .label-check {
    top: 5px;
    right: 20px;
  }
}
@media (max-width: 770px ) {

  .label-check {
    display: none;
  }

  #app::before, #app::after{
    width: 270px;
    height: 270px;
  } 
  #app::after {
    top: 590px;
    left: 52%;
  }

  .checkbox {
    top: 10px;
  }
}
@media (max-width: 440px ) {
  
  #app::after, #app::before {
    width: 240px;
    height: 230px;
  }
  #app::before {
    left: 30px;
  }
  #app::after {
    top: 320px;
    left: 20%;
  }
}
</style>