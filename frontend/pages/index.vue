<template>
  <ScoreBoard :ais=ais :loading=loading :loadingText=loadingText />
</template>

<script>
export default {
  asyncData({ $axios, $config }) {
    return $axios.get(
      '/api/ais',
      {
        credentials: true,
        auth: {
          username: $config.BASIC_USER,
          password: $config.BASIC_PASSWORD
        }
      })
      .then((res) => {
        return { 'ais': res.data.ais, 'loading': false, 'loadingText': '' }
      }).catch((error) => {
        return { 'ais': [], 'loading': true, 'loadingText': 'Sorry, something went wrong' }
      })
  }
}
</script>
