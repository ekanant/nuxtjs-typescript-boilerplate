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
      <div class="row m-0">
        <div v-for="(todo, i) in listTodos" :key="todo.id" class="col-sm-6 text-left">
          {{i+1}}. <label>{{todo.title}} <input v-model="todo.completed" type="checkbox"/></label>
        </div>
      </div>
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
import { getTodos, Todo } from '@/api/todo'
export default Vue.extend({
  components: {
    Logo: () => import('@/components/Logo.vue')
  },
  data () {
    const listTodos:Todo[] = []
    return {
      listTodos
    }
  },
  async created () {
    this.listTodos = await getTodos()
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
