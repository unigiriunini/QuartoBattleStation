<template>
  <v-data-table :headers="headers" :items="ais" :items-per-page="10" :loading=loading :loading-text=loadingText></v-data-table>
</template>

<script>
export default {
  props: ['ais', 'loading', 'loadingText'],
  data () {
    return {
      headers: [
        { text: 'name', value: 'name' },
        { text: 'ELO', value: 'elo' },
      ]
    }
  }
}
</script>
