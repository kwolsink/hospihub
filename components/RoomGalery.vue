<template>
  <div class="columns is-multiline">
    <div v-for="room in rooms" class="column is-one-quarter">
        <RoomCard :room="room">
        </RoomCard>
      </div>
  </div>
</template>

<script setup lang="ts">
import rooms from "../samples/rooms"
</script>