<template>
  <div>
    <div class="main-chat box">
      <div v-if="messages.length > 0">
        <ul class="main-msg" v-for="msg in messages" :key="msg.id">
          <li>
            <span class="has-text-primary">{{ msg.name }}</span>
            <span class="has-text-grey-dark">{{ msg.content }}</span>
            <span class="has-text-grey time">{{ msg. timestamp | formatDate }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div>What's up, {{ name }}?</div>
    <NewMessage v-bind:name="name"/>
  </div>
</template>

<script>
import db from '../firebase/init'
import NewMessage from './NewMessage'

export default {
  name: 'Chat',
  props: ['name'],
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
  margin: 20px auto;
}

.main-msg {
  padding: 10px;
}

.main-chat span {
  font-size: 1.4em;
  margin: 5px 10px;
}

.main-chat .time {
  display: block;
  font-size: 1.2em;
}
</style>
