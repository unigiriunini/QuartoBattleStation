<template>
  <div class="flex justify-center items-center">
    <div class="border px-10 py-10 mt-10 rounded overflow-hidden shadow-lg">
      <table class="table-auto">
        <thead>
          <tr>
            <th v-for="column_name in column_names" class="px-4 py-2">{{ getColumnName(column_name) }}</th>
            <th class="px-4 py-2">ビジュアライザ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(match, index) in matches" :key="matches.id" :class="index % 2 ? 'bg-gray-100' : ''">
            <td v-for="column_name in column_names" class="px-4 py-2 border">{{ match[column_name] }}</td>
            <td class="px-4 py-2 border w-auto flex justify-center">
              <button @click="showVisualizer(match.id)" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">表示</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <modal name="visualizer">
      <p>WIP</p>
    </modal>
  </div>
</template>

<script>
export default {
  props: ['matches'],
  data() {
    return {
      column_names: ['createdAt', 'firstAI', 'secondAI']
    }
  },
  methods: {
    getColumnName(column_name) {
      const converter = {
        'createdAt': '対戦日時',
        'firstAI': '先攻',
        'secondAI': '後攻'
      }
      return converter[column_name]
    },
    showVisualizer(matchId) {
      this.$modal.show("visualizer")
    }
  }
}
</script>
