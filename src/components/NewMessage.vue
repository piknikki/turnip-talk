<template>
  <div class="add-message box">
    <form @submit.prevent="addMessage">
      <div class="field is-horizontal">
        <label for="new-message">Lettuce hear it: </label>
          <input class="input" name="new-message" type="text" v-model="newMessage">
          <p class="feedback has-text-danger" v-if="feedback">{{ feedback }}</p>
      </div>
    </form>
  </div>
</template>

<script>
import db from '../firebase/init'

export default {
  name: 'NewMessage',
  props: ['name'],
  data () {
    return {
      newMessage: null,
      feedback: null
    }
  },
  methods: {
    addMessage () {
      if (this.newMessage) {
        db.collection('messages').add({
          content: this.newMessage,
          name: this.name,
          timestamp: Date.now()
        })
          .catch(err => console.log(err))
        this.newMessage = null
        this.feedback = null
      } else {
        this.feedback = 'you must enter a message in order to send one.'
      }
    }
  }
}
</script>

<style scoped>
.add-message {
  padding: 30px;
  width: 50%;
  text-align: left;
  margin: 20px auto;
}

label {
  padding-right: 20px;
}

.feedback {
  padding: 20px 0;
}

</style>
