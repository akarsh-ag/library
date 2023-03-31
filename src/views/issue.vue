<template>
  <div>
    <app-header title="Issued Books "></app-header>
    <v-list dense>
      <v-list-item v-for="(item, i) in issues" :key="i">
        <v-list-item-avatar tile>
          Return Date: {{ item.returnDate }}
        </v-list-item-avatar>


        <v-list-item-content>
          <v-list-item-title>Book title: {{ item.book.title }}</v-list-item-title>
          <v-list-item-title>Member name: {{ item.member.name }}</v-list-item-title>
          <v-list-item-subtitle>Issue Date: {{ item.issueDate }}</v-list-item-subtitle>
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
                  <v-list-item-title>Return</v-list-item-title>
                  <v-icon>mdi-pencil</v-icon>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Notify</v-list-item-title>
                  <v-icon>mdi-delete</v-icon>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>Approve</v-list-item-title>
                  <v-icon>mdi-air-conditioner</v-icon>
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
import issue from "@/data/issues.json";
import AppHeader from "@/components/AppHeader.vue";
export default {
  components: { AppHeader },
  data() {
    return {
      issues: issue,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>