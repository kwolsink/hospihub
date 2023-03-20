<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">
        {{ room.metadata.data.title }}
      </p>
    </div>
    <div class="card-image ">
      <figure class="image is-4by3">
        <img :src="room.metadata.data.images?.at(0)">
      </figure>
    </div>
    <div class="card-content">
      <div class="content is-flex">
        <span class="tag mr-1">{{rentText }}</span>
        <span v-if="room.metadata.data.amountOfRoommates != null" class="tag mr-1">{{ roomMatesText }}</span>
      </div>
      <div class="content">
        {{ room.metadata.data.description }}
      </div>
    </div>
    <footer class="card-footer">
      <NuxtLink class="card-footer-item" :to="`${route.fullPath}/${room.id}`">Meer informatie</NuxtLink>
    </footer>
  </div>
</template>


<script setup="true" lang="ts">
import {Room} from '~~/shared/types/Room';


const route = useRoute();

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

