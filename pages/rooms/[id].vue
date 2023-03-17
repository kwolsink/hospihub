<template>
  <div>
    <RoomFull :room="room"></RoomFull>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const room = {
  title: "Leuke kamer in roffa",
  description: "lorem fjpewf aope fjja pfjoa ejopfjaew ofejp afef",
  images: ["room.jpeg", "room.jpeg","room.jpeg","room.jpeg","room.jpeg"]
}


</script>