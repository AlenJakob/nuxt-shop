<template>
  <div class="column is-4 box">
    <div class="field">
      <div class="title">Login</div>
    </div>
    <div class="field">
      <input
        class="input"
        type="email"
        placeholder="Email"
        v-model="user.email"
      />
    </div>
    <div class="field">
      <input
        class="input"
        type="password"
        placeholder="Password"
        v-model="user.password"
      />
    </div>
    <div class="field">
      <p class="control">
        <button class="button is-primary" @click.prevent="login">
          Log in
        </button>
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      user: {
        username: 'Alena1',
        email: 'grafuxa@gmail.com',
        password: 'Somepwsd1',
      },
    }
  },
  methods: {
    ...mapActions('register', ['loginUser']),
    login() {
      this.loginUser(this.user)
    },
  },
}
</script>
