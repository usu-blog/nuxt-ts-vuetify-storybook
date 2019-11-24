<template>
  <div>
    <h1>test</h1>
    <p>{{ state.count }}</p>
    <v-btn @click="mutations.increment">add</v-btn>
  </div>
</template>

<script lang="ts">
import { createComponent, reactive } from '@vue/composition-api'
export default createComponent({
  setup() {
    const state = reactive({
      count: 0
    })

    const mutations = {
      increment() {
        state.count++
      }
    }

    return {
      state,
      mutations
    }
  }
})
</script>
