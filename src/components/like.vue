<template>
  <b-button
    variant="like"
    :class="'mt-2 ml-2' + (flat.attributes.liked ? ' liked' : '')"
    v-b-tooltip.hover.right="flat.attributes.likes || '0'"
    href="#"
    @click="changeLike()"
  >
    <b-icon-hand-thumbs-up />
  </b-button>
</template>

<script>
import store from "@/store";

export default {
  name: "Like",
  props: {
    flat: {
      type: Object,
      required: true
    }
  },
  methods: {
    async changeLike() {
      await store.dispatch("PUT_LIKE", this.flat.id);
      this.$forceUpdate();
    }
  }
};
</script>

<style>
.btn-like {
  position: absolute;
  left: 0;
  opacity: 0.55;
  background-color: #fff !important;
}

.btn-like:hover {
  opacity: 0.85;
}

.btn-like.liked {
  background-color: #28a745 !important;
  color: #fff;
  opacity: 0.85;
}

.btn-like.liked:hover {
  color: #fff;
  opacity: 0.55;
}
</style>
