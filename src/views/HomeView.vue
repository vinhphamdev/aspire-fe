<template>
  <account-balance />
  <div class="z2">
    <card-action />
    <transactions />
  </div>
  <navigation />
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import AccountBalance from "../components/AccountBalance.vue";
import CardAction from "../components/CardAction.vue";
import Navigation from "../components/Navigation.vue";
import Transactions from "../components/Transactions.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    AccountBalance,
    CardAction,
    Navigation,
    Transactions,
  },
});
</script>
<style scoped>
.z1 {
  /* z-index: 1; */
}

.z2 {
  z-index: 999;
  position: relative;
}
</style>
