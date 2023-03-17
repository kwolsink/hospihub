<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">
        {{ room.title }}
      </p>
    </div>
    <div class="card-image ">
      <figure class="image is-4by3">
        <img :src="room.images?.at(0)">
      </figure>
    </div>
    <div class="card-content">
      <div class="content is-flex">
        <span class="tag mr-1">{{rentText }}</span>
        <span v-if="room.amountOfRoommates != null" class="tag mr-1">{{ roomMatesText }}</span>
      </div>
      <div class="content">
        {{ room.description }}
      </div>
    </div>
    <footer class="card-footer">
      <NuxtLink class="card-footer-item" :to="`${route.fullPath}/${room.id}`">Meer informatie</NuxtLink>
    </footer>
  </div>
</template>


<script setup="true" lang="ts">
import Room from '~~/shared/types/Room';


const route = useRoute();

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

