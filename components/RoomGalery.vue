<template>
  <div class="columns is-multiline">
    <div v-for="room in rooms" class="column is-one-quarter">
        <RoomCard :room="room">
        </RoomCard>
      </div>
  </div>
</template>

<script setup lang="ts">
const roomStore = useRoomStorage();
const rooms = ref()


onMounted(async () => {
  const r = await roomStore.fetchRooms();
  rooms.value = r
})

</script>