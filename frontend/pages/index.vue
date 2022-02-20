<template>
  <EloList :ais=ais />
</template>

<script>
export default {
  data() {
    return {
      ais: [],
      snapshots: []
    }
  },
  created() {
    this.snapshots.push(
      this.$fire.firestore.collection('AIs').onSnapshot((snapshot) => {
        this.ais = snapshot.docs.map((doc) => { return { name: doc.id, elo: doc.data().ELO } }).sort((a, b) => b.elo - a.elo)
      })
    )
  },
  mounted() {
    window.addEventListener("beforeunload", this.unsubscribeSnapshots)
  },
  beforeDestroy() {
    this.unsubscribeSnapshots()
    window.removeEventListener("beforeunload", this.unsubscribeSnapshots)
  },
  methods: {
    unsubscribeSnapshots() {
      console.log(`Unsubscribe ${this.snapshots.length} snapshots`)
      this.snapshots.forEach((unsubscribe) => unsubscribe())
    }
  }
}
</script>
