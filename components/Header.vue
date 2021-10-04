<template>
    <div class="navigation">
        <!-- HEADER -->
        <header class="nav">
            <!-- LOGO -->
            <nuxt-link exact no-prefetch to="/" class="logo">M E</nuxt-link>
            <!-- NAVIGATION MENU -->
            <ul class="nav-menu">

                <li class="nav-item" @click="toggleLink">
                    <nuxt-link exact no-prefetch active-class='active' class="nav-link active-link" to="/">About me</nuxt-link>
                </li>
                <li class="nav-item" @click="toggleLink">
                    <nuxt-link no-prefetch active-class='active' class="nav-link" to="/projects/">Projects</nuxt-link>
                </li>
                <li class="nav-item" @click="toggleLink">
                    <nuxt-link no-prefetch active-class='active' class="nav-link" to="/links">Links</nuxt-link>
                </li>
                <li class="nav-item" @click="toggleLink">
                    <nuxt-link no-prefetch active-class='active' class="nav-link" to="/contact">Contact me</nuxt-link>
                </li>

            </ul>
            <!-- OPEN/CLOSE BUTTONS -->
            <div class="burger-button" @click="openMenu">
                <span class="burger"></span>
            </div>
            <div v-show="openedMenu" class="close-menu-box" @click="closeMenu">
                <span class="close-menu"></span>
            </div>

        </header>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Header',

    data() {
        return{
            openedMenu: false
        }
    },

    computed: mapGetters(['getTheme']),

    methods: {
        // OPEN MENU METHOD
        openMenu() {
            const header = document.querySelector('.nav');
            const navMenu = document.querySelector('.nav-menu');
            const logo = document.querySelector('.logo');
            const menuItem = document.querySelectorAll('.nav-item');
            const burgerButton = document.querySelector('.burger-button');
            logo.style = 'display: none';
            burgerButton.style = 'display: none'
            header.style = 'height: 100vh; transition: all 1s ease;';
            header.classList.add('full-screen');
            navMenu.style = 'display: flex; flex-direction: column; justify-content: space-evenly; align-items:center; height: 100%; width: 100%; animation: downMenu .4s;'
            menuItem.forEach(item => {item.style = 'text-align: center;'});
            this.openedMenu = !this.openedMenu;
        },
        // CLOSE MENU METHOD
        closeMenu() {
            const header = document.querySelector('.nav');
            const navMenu = document.querySelector('.nav-menu');
            const logo = document.querySelector('.logo');
            const burgerButton = document.querySelector('.burger-button');
            logo.style = 'display: block';
            burgerButton.style = 'display: flex'
            header.style = 'height: 100px; transition: all .3s ease;';
            header.classList.add('full-screen');
            navMenu.style = 'display: none'
            this.openedMenu = !this.openedMenu;
        },
        // TOGGLE LINKS
        toggleLink() {
            if(this.openedMenu === true) {
                const header = document.querySelector('.nav');
                const navMenu = document.querySelector('.nav-menu');
                const logo = document.querySelector('.logo');
                const burgerButton = document.querySelector('.burger-button');
                logo.style = 'display: block';
                burgerButton.style = 'display: flex'
                header.style = 'height: 100px; transition: all .3s ease;';
                header.classList.add('full-screen');
                navMenu.style = 'display: none'
                this.openedMenu = !this.openedMenu;
            }
        }
    },
}
</script>

<style scoped>
/* LOGO FONT IMPORT */
@import url('https://fonts.googleapis.com/css2?family=Stick+No+Bills:wght@200;300;400;500;600;700;800&display=swap');
/* MAIN CONTAINER */
.navigation {
    background: none;
}
.nav {
    height: 100px;
    margin: 0 auto;
    display: flex;
    max-width: 70%;
    justify-content: space-between;
    align-items: center;
}
/* LOGO */
.logo {
    cursor: pointer;
    font-family: 'Stick No Bills', sans-serif;;
    font-size: 52px;
    text-decoration: none;
    color: #0096c0;
    transition: all .3s ease;
}
.logo:hover {
    text-shadow: 0 0 25px #00a8d6;
}
/* BURGER BUTTON */
.burger-button {
    border-radius: 4px;
    height: 34px;
    width: 36px;
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: none;
    transition: all .5s ease;
}
.burger {
    cursor: pointer;
    position: relative;

}
.burger, .burger::before, .burger::after {
    display: inline-block;
    width: 24px;
    height: 2px;
    border-radius: 15px;
    background: #0096c0;
    transition: all .3s ease;
}
.burger::before {
    position: absolute;
    content: '';
    top: -7px;
}
.burger::after {
    position: absolute;
    content: '';
    top: 7px;
}
/* NAVIGATION MENU */
.nav-menu {
    display: flex;
    list-style: none;
}
.nav-item {
    margin: 0 20px;
}
.nav-link {
    font-weight: 700;
    font-size: 20px;
    color: #0096c0;
    text-decoration: none;
    transition: all .3s ease;
}
.nav-link:hover {
    color: #ac39a3;
}
/* CLOSE NAVIGATION BUTTON */
.close-menu-box {
    position: absolute;
    top: 14px;
    right: 15%;
    cursor: pointer;
    width: 40px;
    height: 40px;
}
.close-menu {
    position: absolute;
    top: 80%;
    left: 50%;
    cursor: pointer;
    width: 32px;
    height: 2px;
    background: #0096c0;
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
}
.close-menu::after {
    content: '';
    position: absolute;
    cursor: pointer;
    width: 32px;
    height: 2px;
    background: #0096c0;
    transform: rotate(90deg);
}
.full-screen {
    height: 100vh;
}
.active {
    color: #ac39a3;
}
/* ANIMATIONS */
@keyframes downMenu {
    from {height: 0%}
    to {height: 100%}
}

@media (max-width: 850px) {

    .nav-menu {
        display: none;
    }
    .burger-button {
        display: flex;
    }
    .burger-button:hover {
        border: 2px solid #007697;
    }
    .navigation{
        backdrop-filter: blur(10px);
        background: #002029a1;
    }
}

@media (max-width: 1024px) {

    .nav {
        max-width: 80%;
    }
    .close-menu-box {
        right: 10%;
    }
    
}

@media (max-width: 769px ) {

    .nav {
        max-width: 90%;
    }
    .close-menu-box {
        right: 5%;
    }
    .navigation{
        backdrop-filter: blur(10px);
        background: #002029a1;
    }
}
</style>