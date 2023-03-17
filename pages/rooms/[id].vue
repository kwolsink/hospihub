<template>
  <div class="columns is-centered is-multiline m-2">
    <div class="column is-four-fifths">
      <NuxtLink class="button" to="/rooms">Terug</NuxtLink>
    </div>
    <div class="column is-four-fifths">
      <RoomFull v-if="room != null" :room="room"></RoomFull>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { useRoomStore } from '~~/stores/roomstore';

const route = useRoute()
const roomStore = useRoomStore();

const room = computed(() => {
  return roomStore.getRoomById(route.params.id as string)
})



</script>