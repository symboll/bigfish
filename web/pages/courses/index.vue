<template>
  <div>
    <v-row>
      <v-col>
        <v-card
          v-for="item in course.data"
          :key="item._id"
          class="mx-auto"
          max-width="344"
        >
          <v-img :src="item.cover" height="200px"></v-img>
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-actions>
            <v-btn text>Share</v-btn>
            <v-btn color="purple" text> Explore </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios }) {
    const course = await $axios.$get('/courses')
    return {
      course,
    }
  },
}
</script>
<style scoped></style>
