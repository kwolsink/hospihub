<template>
  <div class="room-full">
    <section class="section title">
      <h1>{{ room?.title }}</h1>
    </section>

    <section class="section images">
      <div class="columns">
        <figure v-for="image in room?.images" class="column image room-image">
          <img :src="`../${image}`">
        </figure>
      </div>
    </section>
    <div class="is-flex is-flex-direction-column">
      <div class="tags">
        <span class="tag mr-1">{{ rentText }}</span>
        <span v-if="room.amountOfRoommates != null" class="tag mr-1">{{ roomMatesText }}</span>
      </div>
      <div class="description">
        <h3>Beschrijving</h3>
        <p>{{ room?.description }}</p>
      </div>
      <section class="reaction-section mt-5">
        <button v-if="!firebase.isAuthenticated()" class="button is-primary m-5" @click="firebase.signInWithGoogle()">
        Log in om te reageren
        </button>
        <ReactionForm v-else/>
      </section>

      
    </div>
  </div>
</template>

<script setup lang="ts">
import Room from '~~/shared/types/Room';

const firebase = useFireBase()


const props = defineProps({
  room: {
    type: Object as PropType<Room>,
    required: true
  }
});
const rentText = computed(() => {
  if (props.room.rent != null) {
    return `€${props.room.rent} p/m`
  }
  return "Huur onbekend"
});


const roomMatesText = computed(() => {
  if (props.room.amountOfRoommates === 1) {
    return `${props.room.amountOfRoommates} huisgenoot`;
  }
  return `${props.room.amountOfRoommates} huisgenoten`;
});

</script>

<style scoped>
.room-image {
  max-width: 350px;
  height: auto;
}
</style>