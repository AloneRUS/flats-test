<template>
  <div class="home">
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand href="#">flats-test</b-navbar-brand>
    </b-navbar>
    <b-container class="mt-2">
      <FlatCard v-for="flat in FLATS" :key="flat.id" :flat="flat" />
    </b-container>
  </div>
</template>

<script>
import FlatCard from "@/components/flat.vue";
import store from "@/store";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    FlatCard
  },
  mounted: () => {
    store.dispatch("GET_FLATS");
    store.dispatch("GET_CITIES");
  },
  computed: {
    ...mapGetters(["FLATS"])
  }
};
</script>
