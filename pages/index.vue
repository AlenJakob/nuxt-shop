<template>
  <section class="section">
    <div class="columns is-mobile">
      <card title="Free" icon="github">
        <a href=""> Here comes products </a>
      </card>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'
import { mapActions } from 'vuex'
export default {
  name: 'HomePage',
  data() {
    return {
   
    }
  },
  components: {
    Card,
  },
  methods: {
    ...mapActions('register', ['registerUser']),
  },
  mounted() {
    this.registerUser(this.user)
  },
}
</script>
