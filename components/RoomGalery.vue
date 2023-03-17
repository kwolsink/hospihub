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
    id: "test1",
    thumbnail: "room.jpeg",
    description: "foo bar",
    title: "Gezellige kamer in het centrum van Amsterdam."
  },
  {
    id: "test2",
    thumbnail: "room.jpeg",
    description: "foo bar",
    title: "Ongezellige kamer in  centrum van Almere."
  },
  {
    id: "test3",
    thumbnail: "room.jpeg",
    description: "foo bar",
    title: "foo"
  },
  {
    id: "test3",
    thumbnail: "room.jpeg",
    description: "foo bar",
    title: "foo"
  },
  {
    id: "test3",
    thumbnail: "room.jpeg",
    description: "foo bar",
    title: "foo"
  },
  {
    id: "test3",
    thumbnail: "room.jpeg",
    description: "foo bar",
    title: "foo"
  }
]
</script>