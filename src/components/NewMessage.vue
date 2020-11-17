<template>
  <div class="add-message box">
    <h4>new message</h4>
    <form @submit.prevent="AddMessage">
      <div class="field is-horizontal">
        <label for="newMessage">Lettuce hear it: </label>
        <div class="control">
          <input name="newMessage" type="text" v-model="newMessage">
        </div>
      </div>
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
        name: this.name,
        timestamp: new Date()
      })
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

</style>
