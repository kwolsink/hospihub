<template>
  <div class="room-form">
    <div class="field">
      <label class="label">Titel</label>
      <div class="control">
        <input v-model="roomData.title" class="input" type="text" placeholder="e.g. Mooie kamer in het centrum van de stad">
      </div>
    </div>

    <div class="field">
      <label>Stad</label>
      <div class="control">
        <div class="select">
          <select v-model="selected">
            <option>Delft</option>
            <option>Utrecht</option>
            <option>Amsterdam</option>
            <option>Rotterdam</option>
            <option>Anders</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Beschrijving</label>
      <div class="control">
        <textarea v-model="roomData.description" class="textarea" placeholder="Plaats hier uw beschrijving"></textarea>
      </div>
    </div>

    <div class="field">
      <label class="label">Foto's (u kunt tot 5 foto's uploaden)</label>
      <div class="file has-name">
        <label class="file-label">
          <input class="file-input" type="file" name="picture">
          <span class="file-cta">
            <span class="file-label">
              Kies een bestand...
            </span>
          </span>
          <span class="file-name">
            placeholder
          </span>
        </label>
      </div>
    </div>

    <div class="field">
      <label class="label">Huur (per maand)</label>
      <div class="control">
        <input v-model="roomData.rent" class="input" type="number">
      </div>
    </div>

    <div class="field">
      <label class="label">Borg (eenmalig)</label>
      <div class="control">
        <input v-model="roomData.deposit" class="input" type="number">
      </div>
    </div>


    <div class="field">
      <label class="label">Aantal huisgenoten</label>
      <div class="control">
        <input v-model="roomData.amountOfRoommates" class="input" type="number">
      </div>
    </div>

    <div class="field">
      <p class="control">
        <button class="button is-success" @click="placeRoom()">
          Plaats advertentie
        </button>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">

const roomStore = useRoomStorage()
const selected = ref()

const roomData = ref({
  title: "",
  rent: 0,
  deposit: 0,
  availableFrom: new Date().toISOString(),
  images: [],
  amountOfRoommates: 0,
  description: ""
})


const placeRoom = async () => {
  const rd = roomData.value
  await roomStore.createRoom(rd.title, rd.rent,rd.deposit, rd.availableFrom, rd.amountOfRoommates, rd.description, rd.images)
}

</script>