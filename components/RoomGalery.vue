<template>
  <div class="columns is-multiline">
    <div v-for="room in rooms" class="column is-one-quarter">
        <RoomCard :room="room">
        </RoomCard>
      </div>
  </div>
</template>

<script setup lang="ts">
const rooms = [
  {
    thumbnail: "room.jpeg",
    description: "foo bar",
    title: "Gezellige kamer in het centrum van Amsterdam."
  },
  {
    thumbnail: "room.jpeg",
    description: "foo bar",
    title: "Ongezellige kamer in  centrum van Almere."
  },
  {
    thumbnail: "room.jpeg",
    description: "foo bar",
    title: "foo"
  },
  {
    thumbnail: "room.jpeg",
    description: "foo bar",
    title: "foo"
  },
  {
    thumbnail: "room.jpeg",
    description: "foo bar",
    title: "foo"
  },
  {
    thumbnail: "room.jpeg",
    description: "foo bar",
    title: "foo"
  }
]
</script>