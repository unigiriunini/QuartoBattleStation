<template>
  <div v-if=records>

    <div class="flex space-x-4 justify-center items-center mt-12">
      <div class="rounded-lg p-5" :class="currentIndex % 2 ? 'bg-yellow-100' : 'bg-white'">先攻: {{ firstAI }}</div>
      <div class="rounded-lg p-5" :class="currentIndex % 2 == 0 ? 'bg-yellow-100' : 'bg-white'">後攻: {{ secondAI }}</div>
    </div>

    <div class="flex justify-center items-center">
      <div class="grid grid-cols-4 gap-10 bg-blue-100 p-12 m-12">
        <div class="flex justify-center items-center rounded-full h-44 w-44" :class="isNewestPiece(cell) ? 'bg-yellow-100' : 'bg-white'" v-for="(cell, index) in gridData" :key="index">
          <img v-if=cell :src=getPieceImage(cell) height="50" width="50" />
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center space-x-4 pb-12">
      <button @click="previousHand()" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">前</button>
      <p>{{ currentIndex + 1 }}手目 {{ currentIndex % 2 ? firstAI : secondAI }}が配置</p>
      <button v-if="records[currentIndex].callingQuarto" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-red-600">{{ currentIndex % 2 ? firstAI : secondAI }}の勝ち</button>
      <button v-else-if="currentIndex >= 15" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-gray-400">引き分け</button>
      <button v-else="" @click="nextHand()" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">次</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['matchId', 'firstAI', 'secondAI'],
  data() {
    return {
      gridData: new Array(16).fill(null),
      records: null,
      currentIndex: null
    }
  },
  async created() {
    const snapshot = await this.$fire.firestore.collection('GameRecords').doc(this.matchId).collection('records').get()
    this.records = snapshot.docs.map((doc) => Object.assign({}, { order: doc.id }, doc.data())).sort((a, b) => a.order - b.order)
    this.currentIndex = 0
  },
  methods: {
    getPieceImage(record) {
      var filename = ''
      filename += record.color  == 'dark' ? 'bk_' : 'wh_'
      filename += record.height == 'tall' ? 'hi_' : 'sh_'
      filename += record.shape  == 'square' ? 'sq_' : 'rd_'
      filename += record.top    == 'solid' ? 'nohole' : 'hole'
      return require('~/assets/' + filename + '.png')
    },
    isNewestPiece(cell) {
      return cell && cell.coordinate_top * 4 + cell.coordinate_left == this.records[this.currentIndex].coordinate_top * 4 + this.records[this.currentIndex].coordinate_left
    },
    nextHand() {
      if (this.currentIndex < 15 && !this.records[this.currentIndex].callingQuarto) {
        this.currentIndex += 1
      }
    },
    previousHand() {
      if (this.currentIndex > 0) {
        this.currentIndex -= 1
      }
    }
  },
  watch: {
    currentIndex: function(value) {
      this.gridData = new Array(16).fill(null)
      for(let i = 0; i <= value; ++i) {
        this.gridData[this.records[i].coordinate_top * 4 + this.records[i].coordinate_left] = this.records[i]
      }
    }
  }
}
</script>
