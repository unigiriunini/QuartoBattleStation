<template>
  <v-data-table :headers="headers" :items="ais" :items-per-page="10" :loading=loading :loading-text=loadingText></v-data-table>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        { text: 'name', value: 'name' },
        { text: 'ELO', value: 'elo' },
      ],
      ais: [],
      loading: true,
      loadingText: "Loading... Please wait"
    }
  },
  mounted() {
    this.$axios.get('/api/ais')
      .then((res) => {
        this.ais = res.data.ais
        this.loading = false
      }).catch((error) => {
        this.loadingText = "Sorry, something went wrong"
      })
  }
}
</script>
