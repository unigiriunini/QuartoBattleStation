<template>
  <div class="flex justify-center items-center">
    <div class="border px-10 py-10 mt-10 rounded overflow-hidden shadow-lg">
      <table class="table-auto">
        <thead>
          <tr>
            <th>Rank</th>
            <th v-for="column_name in column_names" class="px-4 py-2">{{ getColumnName(column_name) }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(ai, index) in ais" :key="ai.name" :class="index % 2 ? 'bg-gray-100' : ''">
            <td class="px-4 py-2 border">{{ index + 1 }}</td>
            <td v-for="column_name in column_names" class="px-4 py-2 border">{{ ai[column_name] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ['ais'],
  data() {
    return {
      column_names: ['name', 'elo']
    }
  },
  methods: {
    getColumnName(column_name) {
      if (column_name == 'elo') {
        return column_name.toUpperCase()
      } else {
        return column_name.charAt(0).toUpperCase() + column_name.slice(1)
      }
    }
  }
}
</script>
