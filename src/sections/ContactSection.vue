<template>
  <div class="contactContainer">
    <h1>Get in touch 💖</h1>
    <form
      action="https://formspree.io/xaypaewk"
      method="POST"
      class="contactForm"
      @submit="submitForm"
    >
      <label>
        Your name:
        <input
          type="text"
          name="name"
          :class="name.error && 'invalid'"
          v-model="name.value"
        />
      </label>
      <label>
        Your email:
        <input
          type="text"
          name="_replyto"
          :class="email.error && 'invalid'"
          v-model="email.value"
        />
      </label>
      <label>
        Message:
        <textarea
          name="message"
          rows="4"
          :class="message.error && 'invalid'"
          v-model="message.value"
        ></textarea>
      </label>
      <button
        type="submit"
        :disabled="name.error || email.error || name.error || !name.value || !email.value || !message.value"
      >
        Send
      </button>
    </form>
    <p v-if="this.info.showed">{{info.value}}</p>
  </div>
</template>

<script>
import * as yup from 'yup';

const dataSchema = yup.object().shape({
  name: yup
    .string()
    .required()
    .min(3),
  email: yup
    .string()
    .required()
    .email(),
  message: yup
    .string()
    .required()
    .min(3),
});

export default {
  name: "ContactSection",
  data() {
    return {
      name: {
        value: '',
        error: false,
      },
      email: {
        value: '',
        error: false,
      },
      message: {
        value: '',
        error: false,
      },
      info: {
        value: '',
        showed: false,
      },
    };
  },
  methods: {
    submitForm(e) {
      e.preventDefault();

      dataSchema.isValid({
        name: this.name.value,
        email: this.email.value,
        message: this.message.value
      }).then((isValid) => {
        if(isValid) {
          const form = e.target;
          const data = new FormData(form);

          fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
              Accept: 'application/json',
            }
          }).then((res) => {
            form.reset();

            if (res.status === 200) {
              this.info = {
                value: "We are so happy you messaged us 😊",
                showed: true
              };
            } else {
              this.info = {
                value: "Something went wrong, try again later...",
                showed: true
              };
            }

            this.name = { value: '', error: false };
            this.email = { value: '', error: false };
            this.message = { value: '', error: false };
          })
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>
  .contactContainer {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #75dc75;

    h1 {
      color: white;
      font-size: 2.3em;
    }
  }

  .contactForm {
    font-family: 'Manrope', sans-serif;
    display: flex;
    flex-direction: column;
  }

  label {
    display: flex;
    flex-direction: column;
    font-size: 1.1em;
    font-weight: bold;
    margin-bottom: 10px;

    input, textarea {
      font-family: inherit;
      margin-top: 5px;
      width: 250px;
      padding: 10px;
      position: relative;
      border: none;
      border-radius: 4px;

      outline: none;
      appearance: none;
      -webkit-appearance: none;

      transition: box-shadow .3s ease;

      &:focus {
        box-shadow: #53ba53 0px 0px 0px 4px;
      }
    }
  }

  button {
    font-size: 1.1em;
    font-weight: bold;
    margin-top: 20px;
    width: 250px;
    padding: 10px;
    position: relative;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    outline: none;
    appearance: none;
    -webkit-appearance: none;

    transition: box-shadow .3s ease;

    &:hover {
      box-shadow: #53ba53 0px 0px 0px 4px;
    }

  }

</style>