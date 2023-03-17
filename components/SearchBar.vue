<template>
  <div class="box">
    <div class="is-flex is-flex-direction-col">
      <label>Stad</label>
      <div class="dropdown" :class="{ 'is-active': isDropDownActive }">
        <div class="dropdown-trigger">
          <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" @click="toggleDropDown()">
            <span>{{ dropDownText }}</span>
            <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <a v-for="city in cities" href="#" class="dropdown-item" @click="selectCity(city)">
              {{ city }}
            </a>
            <hr class="dropdown-divider">
            <a href="#" class="dropdown-item" @click="selectCity(otherText)">
              {{otherText}}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">

const otherText = "Anders";

const cities = ["Amsterdam", "Delft", "Rotterdam", "Utrecht"];

const isDropDownActive = ref(false);
const toggleDropDown = () => { isDropDownActive.value = !isDropDownActive.value }

const dropDownText = ref("Selecteer")

const selectCity = (city: string) => {
  toggleDropDown()
  dropDownText.value = city;
}


</script>