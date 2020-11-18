<template>
  <div>
    <div class="main-chat">
      <div class="box chat-history" v-if="messagesArray.length > 0">
        <ul class="messages" v-chat-scroll>
          <li class="main-msg" v-for="msg in messagesArray" :key="msg.id">
            <span class="has-text-primary">{{ msg.name }}</span>
            <span class="has-text-grey-dark">{{ msg.content }}</span>
            <span class="has-text-grey time">{{ msg. timestamp }}</span>
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
import moment from 'moment'

export default {
  name: 'Chat',
  props: ['name'],
  components: {NewMessage},
  data () {
    return {
      messagesArray: []
    }
  },
  created () {
    let ref = db.collection('messages').orderBy('timestamp')

    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
          let doc = change.doc
          this.messagesArray.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format('lll')
          })
        }
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
  margin: 0 10px;
}

.main-chat .time {
  display: block;
  font-size: 0.8em;
}

.messages {
  max-height: 300px;
  overflow: auto;
  max-width: 600px;
  text-align: left;
  margin: 0 auto;
  padding: 20px;
}

.messages::-webkit-scrollbar {
  width: 3px;
}

.messages::-webkit-scrollbar-track {
  background: #ddd;
}

.messages::-webkit-scrollbar-thumb {
  background: #aaa;
}
</style>
