<template>
  <div>
    <v-row>
      <v-col cols="10">
        <h3>{{ title }}</h3>
      </v-col>
      <v-col cols="2">
        <v-btn>+</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-text-field
        label="Append outer"
        append-outer-icon="mdi-map-marker"
      ></v-text-field>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>