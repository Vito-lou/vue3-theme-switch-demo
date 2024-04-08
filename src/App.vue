<script setup lang="ts">
import ThemeSwitch from './components/ThemeSwitch.vue'
import useTheme from './hooks/useTheme'
const { theme } = useTheme()
</script>

<template>
  <div class="main">
    <h1>{{ theme }}</h1>
    <ThemeSwitch></ThemeSwitch>
    <span>
      follow the system means that when you change your mac system theme setting, the web page would change the theme
      accordingly
    </span>
  </div>

</template>
<style scoped>
.main {
  height: 100vh;
  font-family: serif;
  background: linear-gradient(to bottom, var(--bg1), var(--bg2));
  color: var(--text-color);
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  font-size: 2em;
  padding-top: 1em;
}

.main h1 {
  margin-top: 2em;
}
</style>
