<template>
  <div>
    <div class="main-chat box">
      <div v-if="messages.length > 0">
        <div class="main-msg" v-for="msg in messages" :key="msg.id">
          {{ msg.user }}: {{ msg.content }}
        </div>
      </div>
    </div>
    <NewMessage />
  </div>
</template>

<script>
import db from '../firebase/init'
import NewMessage from './NewMessage'

export default {
  name: 'Chat',
  components: {NewMessage},
  data () {
    return {
      messages: []
    }
  },
  created () {
    db.collection('messages').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let message = doc.data()
          message.id = doc.id
          this.messages.push(message)
        })
      })
  }
}
</script>

<style scoped>
.main-chat {
  padding: 30px;
  width: 50%;
  text-align: left;
  margin: 0 auto;
}

.main-msg {
  padding: 10px;
}
</style>
