<template>
  <b-card no-body class="overflow-hidden my-4">
    <b-row no-gutters>
      <b-col md="4">
        <b-card-img
          src="https://kvartirka.com/blog/wp-content/uploads/2020/01/CTjBGLa2AdB1W7UbfBMMYdaTp9FxuUfBv7Cn-1024x631.jpg"
          alt="Image"
          class="rounded-0"
        ></b-card-img>
        <like :flat="flat" />
      </b-col>
      <b-col md="8" class="d-flex flex-column">
        <b-card-body :title="flat.attributes.title">
          <b-card-text>
            <ul class="text-left">
              <li>
                <b>Площадь:</b>
                {{ flat.attributes.area + flat.attributes.unit }}
              </li>
              <li><b>Комнатность:</b> {{ flat.attributes.rooms }}</li>
              <li>
                <b>Агент:</b>
                {{ flat.relationships.attributes.first_name }}
                {{ flat.relationships.attributes.middle_name }}
                {{ flat.relationships.attributes.last_name }}
              </li>
            </ul>
          </b-card-text>
        </b-card-body>
        <b-card-footer>
          {{ CITIES(flat.attributes.address.city) }},
          {{ flat.attributes.address.street }}, д.{{
            flat.attributes.address.house
          }}, кв.{{ flat.attributes.address.room }}
        </b-card-footer>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import Like from "@/components/like.vue";
import { mapGetters } from "vuex";

export default {
  name: "FlatCard",
  components: {
    Like
  },
  props: {
    flat: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(["CITIES"])
  }
};
</script>
<style>
ul {
  list-style: none;
}
</style>
