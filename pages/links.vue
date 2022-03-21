<template>
    <div class="links-box">
        <h1 class="page-title">My links:</h1>
        <!-- LINKS LIST -->
        <ul class="links-list">
            <li class="list-item">
                <a href="https://github.com/maxon32" target="_blank" class="link git">GitHub</a>
            </li>
            <li class="list-item">
                <a href="https://linkedin.com/in/maksim-eremeev-6446101a9" target="_blank" class="link linkedin">Linkedin</a>
            </li>
            </li>
            <li class="list-item">
                <a href="https://vk.com/eremeev23" target="_blank" class="link vk">VK</a>
            </li>
            <li class="list-item">
                <a href="https://t.me/maxon_32" target="_blank" class="link telegram">Telegram</a>
            </li>
            <li class="list-item">
                <a href="https://wa.me/79052047245" target="_blank" class="link wa">Whatsapp</a>
            </li>
            <li class="list-item">
                <a href="https://spb.hh.ru/resume/7cc236d6ff0930ca0f0039ed1f767a48484768" target="_blank" class="link hh">HeadHunter</a>
            </li>
            <li class="list-item">
                <a href="tel: +79052047245" target="_blank" class="link call">Call</a>
            </li>
            <li class="list-item">
                <a href="mailto: eremeevmiami94@icloud.com" target="_blank" class="link email">E-mail</a>
            </li>
        </ul>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Links',
    computed: mapGetters(['getTheme']),
}

</script>

<style>
.links-box {
    backdrop-filter: blur(5px);
    height: 88vh;
    max-height: calc(100vh - 100px);
    max-width: 100%;
    padding: 0 15vw;
    margin: 0 auto;
}

.page-title {
    margin: 20px 0;
    font-size: 52px;
}

.links-list {
    margin: 80px auto;
    min-height: 60vh;
    max-height: 70vh;
    list-style: none;
    display: grid;
    grid-auto-flow: row;
    text-align: center;
    grid-template-columns: 1fr 1fr;
}

.link {
    font-size: 2.5em;
    font-weight: 600;
    margin: 4vh 4vw;
    text-decoration: none;
    color: inherit;
    transition: all .3s ease;
}

.git:hover {
    color: #fff;
    text-shadow: 0 0 7px #000;
}
.linkedin:hover {
    color: #0A66C2;
    text-shadow: #0A66C2 0 0 5px;
}
.inst:hover {
    color: #e1306c;
    text-shadow: #e1306c 0 0 5px;
}
.vk:hover {
    color: #1d67b6;
    text-shadow: #1d67b6 0 0 5px;
}
.telegram:hover {
    color: #0088cc;
    text-shadow: #0088cc 0 0 5px;
}
.wa:hover {
    color: #00e676;
    text-shadow: #00e676 0 0 5px;
}
.hh:hover {
    color: #D6001C;
    text-shadow: #D6001C 0 0 5px;
}
.call:hover {
    color: #ebac0c;
    text-shadow: #ebac0c 0 0 5px;
}
.email:hover {
    color: #8EDBF7;
    text-shadow: #8EDBF7 0 0 5px;
}

@media (max-width: 850px) {

    .links-box  {
        text-align: center;
    }
    .links-list {
        height: 100%;
        grid-template-columns: 1fr;
        margin: 40px 0;
    }
}

@media (max-width: 1025px) {

    .links-box {
        max-height: 90vh;
        overflow: hidden;
    }
}
@media (max-width: 770px ) {

    .links-box {
        height: 100vh;
        overflow: hidden;
    }
}

@media (max-width: 440px ) {

    .page-title {
        margin: 10px 0;
    }
    .links-box {
        overflow: visible;
    }
}

@media (max-width: 320px ) {

    .links-box {
        max-height: 150vh;
        overflow: hidden;
    }
}
</style>
