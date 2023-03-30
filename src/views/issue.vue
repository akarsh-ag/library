<template>
  <div>
    <app-header title="Issue"></app-header>
    <v-list dense>
      <v-list-item v-for="(item, i) in books" :key="i">
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>

        

        <v-list-item-icon>
          <div>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn text v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item>
                  <v-list-item-title>Edit</v-list-item-title>
                  <v-icon>mdi-pencil</v-icon>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Delete</v-list-item-title>
                  <v-icon>mdi-delete</v-icon>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Issue</v-list-item-title>
                  <v-icon>mdi-air-conditioner</v-icon>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Return</v-list-item-title>
                  <v-icon>mdi-snake</v-icon>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import booksList from "@/data/books.json";
import AppHeader from "@/components/AppHeader.vue";
export default {
  components: { AppHeader },
  data() {
    return {
      books: booksList,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>