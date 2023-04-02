<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" @click="isMenuActive = !isMenuActive">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': isMenuActive}">
      <div class="navbar-start">
        <NuxtLink to="/" class="navbar-item">
          Home
        </NuxtLink>

        <NuxtLink to="/rooms" class="navbar-item">
          Zoek een kamer
        </NuxtLink>

        <NuxtLink to="/submit-room" class="navbar-item">
          Plaats een kamer
        </NuxtLink>

        <NuxtLink v-if="authToken !== ''" to="/profile" class="navbar-item has-text-info">
          Profiel
        </NuxtLink>

      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <div v-if="authToken === ''" class="buttons-logged-out">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light" @click="loginModalOpen = true">
                Log in
              </a>
            </div>
            <div v-else class="buttons-logged-in">
              <a class="button is-light" @click="() => pbLogout()">
                Log uit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <LoginModal :modalOpen="loginModalOpen" @close="loginModalOpen = false"></LoginModal>
  </div>

</template>


<script setup lang="ts">

const nuxtApp = useNuxtApp()
const loginModalOpen = ref(false)
const authToken = usePBAuth()

const isMenuActive = ref(false)


</script>
