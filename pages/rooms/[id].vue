<template>
  <div>
    <RoomFull v-if="room != null" :room="room"></RoomFull>
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