<template>
  <div class="main-welcome">
    <form @submit.prevent="enterChat">
      <div class="field box">
        <label for="name">
          What's your name?
        </label>
        <p v-if="feedback" class="feedback">{{ feedback }}</p>
        <input type="text" name="name" v-model="name">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name: null,
      feedback: null
    }
  },
  methods: {
    enterChat () {
      if (this.name) {
        this.$router.push({ name: 'Chat', params: {name: this.name} })
      } else {
        this.feedback = 'You must enter a name to join.'
      }
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
