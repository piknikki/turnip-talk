<template>
  <div class="add-message box">
    <h4>new message</h4>
    <form @submit.prevent="AddMessage">
      <label for="newMessage">Lettuce hear it: </label>
      <input name="newMessage" type="text" v-model="newMessage">
    </form>
  </div>
</template>

<script>
import db from '../firebase/init'

export default {
  name: 'NewMessage',
  data () {
    return {
      newMessage: null
    }
  },
  methods: {
    AddMessage () {
      db.collection('messages').add({
        content: this.newMessage,
        user: this.user,
        timestamp: new Date()
      })
    }
  }
}
</script>

<style scoped>

</style>
