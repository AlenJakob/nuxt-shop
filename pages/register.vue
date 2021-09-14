<template>
  <div class="column is-4 box">
    <div class="field">
      <input class="input" type="text" placeholder="Username" v-model="user.username" />
    </div>
    <div class="field">
      <input class="input" type="email" placeholder="Email"  v-model="user.email"/>
    </div>
    <div class="field">
      <input class="input" type="password" placeholder="Password"  v-model="user.password"/>
    </div>
    <div class="field">
      <p class="control">
        <button class="button is-success" @click.prevent="register">Register</button>
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
        username: 'Alena',
        email: 'email@strapis.io',
        password: 'Somepwsd',
      },
    }
  },
  methods: {
    ...mapActions('register', ['registerUser']),
    register() {
      this.registerUser(this.user)
    },
  },
}
</script>
