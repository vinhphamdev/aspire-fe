<template>
  <ul class="items d-flex justify-space-around py-2">
    <li
      v-for="(menu, index) in menus"
      :key="index"
      class="item d-flex flex-column align-center"
    >
      <img
        :src="`./src/assets/navigation-icons/${menu.icon}.svg`"
        alt=""
        class="mb-1"
      />
      <p class="label">{{ menu.label }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          icon: "Home",
          label: "Home",
        },
        {
          icon: "Payment",
          label: "Cards",
        },
        {
          icon: "Payment",
          label: "Payments",
        },
        {
          icon: "Credit",
          label: "Credit",
        },
        {
          icon: "Profile",
          label: "Profile",
        },
      ],
    };
  },
};
</script>


<style scoped>
.items {
  position: fixed;
  background: white;
  /* padding: 9px 31px; */
  bottom: 0;
  left: 0;
  right: 0;
  height: 56px;
  box-shadow: 0px -3px 6px #00000014;
  z-index: 9999;
}

.item {
  list-style: none;
}

img {
  width: 23.99px;
  height: 23.43px;
}

.label {
  color: #dddddd;
  font-size: 13px;
}
</style>
