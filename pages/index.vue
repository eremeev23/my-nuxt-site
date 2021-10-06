<template>
    <div class="about-box">
        <!-- PAGE TITLE -->
        <h1 class="title">
            Hello, guest! <br> My name is Maxim.
        </h1>
        <!-- TEXT & SKILLS CONTAINER -->
        <div class="about">
            <!-- TEXT SECTION -->
            <section class="about-section">

                <img class="photo" src="../static/assets/me.png" alt="Me" width="" height="320px">

                <p class="about-text">
                    I am a Junior Frontend Developer.
                    I graduated from St. Petersburg State Transport University, the Faculty of Automation and Intelligent Technologies in 2016. 
                    I started my frontend-developer path a year ago. 
                    I've been studing HTML, CSS, JS and two JS frameworks.
                    I've wroked with Bootstrap, API's, Grid and Flex-box, Objects and Classes, axios promises.
                    Already done about 10 pet-projects, which You can see here 
                    <nuxt-link no-prefetch active-class='active' class="project-link" to="/projects/">Projects</nuxt-link>.
                     Also, You can contact me here 
                     <nuxt-link no-prefetch active-class='active' class="project-link" to="/contact">Contact me</nuxt-link>.
                </p>

            </section>
            <!-- SKILLS SECTION -->
            <section class="skills">

                <h2 class="skills-title">Skills</h2>

                <ul class="skills-list">
                    <li>
                        <div class="item html">HTML</div>
                    </li>
                    <li>
                        <div class="item css">CSS</div>
                    </li>
                    <li>
                        <div class="item js">JavaScript</div>
                    </li>
                    <li>
                        <div class="item vue">Vue.js</div>
                    </li>
                    <li>
                        <div class="item nuxt">Nuxt.js</div>
                    </li>
                    <li>
                        <div class="item react">React</div>
                    </li>
                    <li>
                        <div class="item node">Node.js</div>
                    </li>
                </ul>

            </section>

        </div>
    </div>
</template>

<script>

export default {
    name: 'About'
}

</script>

<style scoped>
.about-box {
    width: 100vw;
    margin: 0 auto;
    min-height: 100vh;
    backdrop-filter: blur(5px);
    padding: 0 15vw;
}

.about {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
/* PAGE TITLE */
.title {
    margin: 20px 0;
    font-size: 52px;
}
/* TEXT SECTION */
.about-section {
    display: flex;
    align-items: center;
    max-width: 55%;
    padding: 20px 20px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    font-size: 22px;
    line-height: 32px;
    color: #fff;
}
.about-text {
    display: block;
    width: 80%;
    margin: 0 45px;
}
.project-link {
    text-decoration: underline;
    color: #ebac0c;
    font-weight: 700;
}
/* SKILLS SECTION */
.skills {
    margin: 40px 0;
    position: relative;
    min-width: 40%;
    padding: 0 20px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    color: #fff;
    z-index: 10;
}
.skills-title {
    font-size: 27px;
    margin: 10px 0;
}
.skills-list {
    list-style: none;
}
/* SKILLs STATS */
.item {
    position: relative;
    margin: 25px 0;
    font-size: 18px;
    width: 100%;
}
.html::before {
    position: absolute;
    content: '90%';
    top: -20px;
    right: -5px;
}
.html::after {
    position: absolute;
    content: '';
    top: 5px;
    right: 0px;
    height: 10px;
    width: calc(46px*9);
    border-radius: 15px;
    background: #00c000;
}
.css::before {
    position: absolute;
    content: '75%';
    top: -20px;
    right: calc(46px*1.5);
}
.css::after {
    position: absolute;
    content: '';
    top: 5px;
    right: calc(46px*1.5);
    height: 10px;
    width: calc(46px*7.5);
    border-radius: 15px;
    background: #00c000;
}
.js::before {
    position: absolute;
    content: '70%';
    top: -20px;
    right: calc(46px*2);
}
.js::after {
    position: absolute;
    content: '';
    top: 5px;
    right: calc(46px*2);
    height: 10px;
    width: calc(46px*7);
    border-radius: 15px;
    background: #00c000;
}
.vue::before {
    position: absolute;
    content: '65%';
    top: -20px;
    right: calc(46px*2.5);
}
.vue::after {
    position: absolute;
    content: '';
    top: 5px;
    right: calc(46px*2.5);
    height: 10px;
    width: calc(46px*6.5);
    border-radius: 15px;
    background: #56c000;
}
.nuxt::before {
    position: absolute;
    content: '50%';
    top: -20px;
    right: calc(46px*4);
}
.nuxt::after {
    position: absolute;
    content: '';
    top: 5px;
    right: calc(46px*4);
    height: 10px;
    width: calc(46px*5);
    border-radius: 15px;
    background: #acd300;
}
.react::before {
    position: absolute;
    content: '40%';
    top: -20px;
    right: calc(46px*5);
}
.react::after {
    position: absolute;
    content: '';
    top: 5px;
    right: calc(46px*5);
    height: 10px;
    width: calc(46px*4);
    border-radius: 15px;
    background: #d6da00;
}
.node::before {
    position: absolute;
    content: '10%';
    top: -20px;
    right: calc(46px*8);
}
.node::after {
    position: absolute;
    content: '';
    top: 5px;
    right: calc(46px*8);
    height: 10px;
    width: calc(46px*1);
    border-radius: 15px;
    background: #c02d00;
}

@media (max-width: 1960px) {
    .about-box {
        padding: 0 7vw;
    }
}

@media (max-width: 1569px) {

    .about-box {
        width: 100vw;
        margin: 0 auto;
        min-height: 100vh;
        backdrop-filter: blur(5px);
        padding: 0 7vw;
    }
    .about {
        flex-direction: column;
    }
    .about-section, .skills {
        max-width:100%
    }
    .skills {
        width: 80%;
    }
}

@media (max-width: 770px ) {

    .about-box {
        padding: 0 40px;
    }
    .photo {
        display: none;
    }
    .skills {
        width: 100%;
    }
    .item {
        width: 100%;
    }
}

@media (max-width: 420px ) {

    .title {
        margin: 10px 0;
        font-size: 34px;
    }
    .about-box {
        padding: 0 5px;
    }
    .about-text {
        margin: 0 5px;
        font-size: 18px;
        width: 100%;
    }
    .html::after {
        width: calc(25px*9);
    }
    .css::before {
        right: calc(25px*1.5);
    }
    .css::after {
        right: calc(25px*1.5);
        width: calc(25px*7.5);
    }
    .js::before {
        right: calc(25px*2);
    }
    .js::after {
        right: calc(25px*2);
        width: calc(25px*7);
    }
    .vue::before {
        right: calc(25px*2.5);
    }
    .vue::after {
        right: calc(25px*2.5);
        width: calc(25px*6.5);
    }
    .nuxt::before {
        right: calc(25px*4);
    }
    .nuxt::after {
        right: calc(25px*4);
        width: calc(25px*5);
    }
    .react::before {
        right: calc(25px*5);
    }
    .react::after {
        right: calc(25px*5);
        width: calc(25px*4);
    }
    .node::before {
        right: calc(25px*7.5);
    }
    .node::after {
        right: calc(25px*8);
        width: calc(25px*1);
    }
}

@media (max-width: 320px ) {
    
    .title {
        font-size: 32px;
    }
    .about-text {
        margin: 0 5px;
        font-size: 16px;
    }
    .item {
        font-size: 14px;
    }
    .html::after {
        width: calc(21px*9);
    }
    .css::before {
        right: calc(21px*1.5);
    }
    .css::after {
        right: calc(21px*1.5);
        width: calc(21px*7.5);
    }
    .js::before {
        right: calc(21px*2);
    }
    .js::after {
        right: calc(21px*2);
        width: calc(21px*7);
    }
    .vue::before {
        right: calc(21px*2.5);
    }
    .vue::after {
        right: calc(21px*2.5);
        width: calc(21px*6.5);
    }
    .nuxt::before {
        right: calc(21px*4);
    }
    .nuxt::after {
        right: calc(21px*4);
        width: calc(21px*5);
    }
    .react::before {
        right: calc(21px*5);
    }
    .react::after {
        right: calc(21px*5);
        width: calc(21px*4);
    }
    .node::before {
        right: calc(21px*7.5);
    }
    .node::after {
        right: calc(21px*8);
        width: calc(21px*1);
    }
}
</style>