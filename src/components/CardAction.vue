<template>
  <ul class="cards d-flex space-x-5">
    <li
      v-for="(card, index) in cards"
      :key="index"
      class="card d-flex flex-column align-center"
      @click="action(card.icon)"
    >
      <img
        :src="`./src/assets/card-action/${card.icon}.svg`"
        alt=""
        class="card__img mb-2"
      />
      <p class="card__label">{{ card.label }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          icon: "freeze",
          label: "Freeze card",
        },
        {
          icon: "limit",
          label: "Set spend limit",
        },
        {
          icon: "gpay",
          label: "Add to GPay",
        },
        {
          icon: "replace",
          label: "Replace card",
        },
        {
          icon: "cancel",
          label: "Cancel card",
        },
      ],
    };
  },

  methods: {
    action(value) {
      switch (value) {
        case "cancel":
          this.$store.commit("cancel");
        default:
          break;
      }
    },
  },
};
</script>

<style scoped>
.cards {
  padding: 20px 31px;
  background-color: #edf3ff;
  border-top-right-radius: 27px 27px;
  border-top-left-radius: 27px 27px;
}

.card__img {
  width: 32px;
  height: 32px;
}

.card__label {
  font-size: 13px;
  color: #0c365a;
  text-align: center;
}
</style>