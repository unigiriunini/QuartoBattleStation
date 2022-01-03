<template>
  <ScoreBoard :ais=ais :loading=loading :loadingText=loadingText />
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      loadingText: 'Now loading...',
    }
  },
  asyncData({ $fire }) {
    return $fire.firestore.collection('AIs').get().then((snapshot) => {
      return {
        ais: snapshot.docs.map((doc) => { return { name: doc.id, elo: doc.data().ELO } })
      }
    }).catch((error) => {
      return { loadingText: 'Sorry, something went wrong' }
    })
  }
}
</script>
