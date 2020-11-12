<template>
  <div class="main-welcome">
    <form @submit.prevent="AddName">
      <div class="field box">
        <label for="name">
          What's your name?
        </label>
        <input type="text" name="name" v-model="name">
      </div>
    </form>
  </div>
</template>

<script>
import db from '../firebase/init'

export default {
  name: 'Welcome',
  data () {
    return {
      name: null
    }
  },
  methods: {
    AddName () {
      db.collection('users').add({
        name: this.name
      })
        .then(() => {
          this.$router.push({ name: 'Chat' })
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
.main-welcome {
  margin: 20px;
}

.box {
  width: 50%;
  padding: 30px;
  margin: 0 auto;
}

</style>
