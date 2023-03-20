<template>
  <div class="room-full">
    <section class="section title">
      <h1>{{ room.metadata.data.title }}</h1>
    </section>

    <section class="section images">
      <div class="columns">
        <figure v-for="image in room.metadata.data.images" class="column image room-image">
          <img :src="`../${image}`">
        </figure>
      </div>
    </section>
    <div class="is-flex is-flex-direction-column">
      <div class="tags">
        <span class="tag mr-1">{{ rentText }}</span>
        <span v-if="room.metadata.data.description != null" class="tag mr-1">{{ roomMatesText }}</span>
      </div>
      <div class="description">
        <h3>Beschrijving</h3>
        <p>{{ room.metadata.data.description }}</p>
      </div>
      <section class="reaction-section mt-5">
        <button v-if="!firebase?.currentUser" class="button is-primary m-5" @click="firebase?.signInWithGoogle()">
        Log in om te reageren
        </button>
        <ReactionForm v-else/>
      </section>

      
    </div>
  </div>
</template>

<script setup lang="ts">
import {Room} from '~~/shared/types/Room';

const firebase = ref()

onMounted(async () => {
  firebase.value = useFirebaseAuth()
}) 


const props = defineProps({
  room: {
    type: Object as PropType<Room>,
    required: true
  }
});
const rentText = computed(() => {
  if (props.room.metadata.data.rent != null) {
    return `€${props.room.metadata.data.rent} p/m`
  }
  return "Huur onbekend"
});


const roomMatesText = computed(() => {
  if (props.room.metadata.data.amountOfRoommates === 1) {
    return `${props.room.metadata.data.amountOfRoommates} huisgenoot`;
  }
  return `${props.room.metadata.data.amountOfRoommates} huisgenoten`;
});

</script>

<style scoped>
.room-image {
  max-width: 350px;
  height: auto;
}
</style>