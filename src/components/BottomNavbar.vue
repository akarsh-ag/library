<template>
  <v-bottom-navigation app v-model="value">
    <v-btn value="recent" @click="$router.push('/books')">
      <span>Books</span>

      <v-icon>mdi-book  </v-icon>
    </v-btn>

    <v-btn value="Author" @click="$router.push('/author')">
      <span>authors</span>

      <v-icon>mdi-badge-account</v-icon>
    </v-btn>

    <v-btn value="nearby">
      <span>Members</span>

      <v-icon>mdi-train-car-autorack</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>