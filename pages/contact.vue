<template>
  <div class="contact-box" @submit.prevent="sendMessage">

      <form class="form">

          <h1 class="form-title">Here you can send me a message</h1>

          <div class="input-box">
            <input id="name" v-model="companyName" class="input-name" name="name" type="text" autocomplete='off' required>
            <label for="name" class="label-name"><span class="label-text">Name</span></label>
          </div>

          <div class="input-box">
            <input id="email" v-model="companyEmail" class="input-email" name="email" type="email" autocomplete='off' required>
            <label for="email" class="label-email"><span class="label-text">E-mail</span></label>
          </div>

          <textarea v-model="message" class="input-text" name="message" placeholder="Type message..." required></textarea>

          <button type="submit" class="submit">Send</button>

      </form>

  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Contact',
    data() {
        return {
            companyName: '',
            companyEmail: '',
            message: ''
        }
    },
    methods: {
        sendMessage() {
            axios.post(`https://portfolio-df2fb-default-rtdb.europe-west1.firebasedatabase.app/posts.json`, 
            {   messages: {
                    company: this.companyName,
                    message: this.message,
                    email: this.companyEmail
                }
            })
            this.companyName = '';
            this.companyEmail = '';
            this.message = '';
        },
    }
}
</script>

<style>
.contact-box {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100vw;
    margin: 0 auto;
    min-height: 100vh;
    backdrop-filter: blur(5px);
}
/* FORM */
.form {
    padding: 30px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
}

.form-title {
    margin: 20px 0;
    font-size: 36px;
}
/* INPUTS */
.input-box {
    position: relative;
    width: 500px;
    height: 64px;
    margin: 10px 0;
    overflow: hidden;
}
.input-name, .input-email {
    position: absolute;
    bottom: 0;
    outline: none;   
    min-height: 100%;
    width: 100%;
    font-size: 18px;
    color: #ebac0c;
    background-color: inherit;
    padding: 25px 10px 0;

}
.label-name, .label-email {
    pointer-events: none;
    position: absolute;
    display: inline-block;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    border-bottom: 1px solid #ebac0c;
    transition: all .3s ease;
}
.label-name::after, .label-email::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    height: 100%;
    width: 100%;
    transform: translateX(-100%);
    border-bottom: 3px solid #29badf;
    transition: all .5s ease;
}
.label-text {
    position: absolute;
    bottom: 5px;
    left: 0;
    font-size: 18px;
    transition: all .3s ease;
}
.input-name:focus + .label-name .label-text, .input-email:focus + .label-email .label-text,
.input-name:valid + .label-name .label-text, .input-email:valid + .label-email .label-text {
    transform: translateY(-180%);
    font-size: 14px;
    color: #29badf;
}
.input-name:focus + .label-name::after, .input-email:focus + .label-email::after,
.input-name:focus + .label-name::after, .input-email:focus + .label-email::after {
    transform: translateX(0%);
}
/* TEXT AREA */
.input-text {
    outline: none; 
    margin: 20px 0;
    padding: 10px;
    min-height: 320px;
    max-width: 500px;
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(3px);
    color: #000;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    box-shadow: inset 1px 1px 4px #002029;
}
.input-text::placeholder {
    color: rgba(0, 0, 0, 0.7);
}
/* BUTTON */
.submit {
    max-width: 240px;
    margin: 20px 0;
    padding: 15px 45px;
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: #FFF;            
    border-radius: 8px;
    background-image: linear-gradient(to right, #8239ac 0%, #4439ac  51%, #29badf  100%)
}
.submit:hover {
    background-position: right center;
    box-shadow: 0 0 20px #29badf;
    text-decoration: none;
}

@media (max-width: 440px ) {
    .form-title {
        font-size: 20px;
    }
    .contact-box {
        display: flex;
        align-items: flex-start;
    }
    .form {
        padding: 20px 20px;
        max-height: 50%;
    }
    .contact-box {
        width: 90vw;
    }
    .input-box {
        max-width: 318px;
        margin: 0;
    }
    .input-text {
        max-width: 318px;
        margin: 40px 0;
    }
    .submit {
        min-width: 318px;
        margin: 0;
    }
}
</style>