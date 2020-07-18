<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxtjs-typescript-boilerplate
      </h1>
      <h2 class="subtitle">
        List to do example
      </h2>
      <div style="margin-bottom: 1em;">
        <nuxt-link :to="localePath({name: 'index'})">home</nuxt-link>  | <nuxt-link :to="localePath({name: 'i18n'})">i18n</nuxt-link>
      </div>
      <div style="margin-bottom: 1em;">
        <nuxt-link :to="switchLocalePath('en')">EN Locale</nuxt-link> | <nuxt-link :to="switchLocalePath('th')">TH Locale</nuxt-link>
      </div>
      <h3>
        <div v-t="'hello'"></div>
        <div v-t="'hello_from_local'"></div>
      </h3>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  components: {
    Logo: () => import('@/components/Logo.vue')
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
<i18n>
{
  "en": {
    "hello_from_local": "Hello this from local file"
  },
  "th": {
    "hello_from_local": "สวัสดี ข้อความนี้มาจาก local file"
  }
}
</i18n>
