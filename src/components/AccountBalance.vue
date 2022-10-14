<template>
  <div class="wrap">
    <div class="d-flex justify-end">
      <img src="../assets/Logo.svg" alt="" />
    </div>
    <p class="text-balance mb-4">Account balance</p>
    <div class="d-flex align-center justify-space-between">
      <div class="d-flex align-center">
        <div class="dollar">
          <p>$$</p>
        </div>
        <p class="ml-3 balance">3,000</p>
      </div>

      <div>
        <button class="d-flex align-center" @click="isShowPopupAddCard = true">
          <img src="../assets/new-card.svg" alt="" />
          <p class="ml-1 btn__text">New card</p>
        </button>
      </div>
    </div>

    <p class="debit mb-7">My debit cards</p>

    <swiper
      :pagination="true"
      :modules="modules"
      class="mySwiper"
      ref="mySwiper"
    >
      <swiper-slide v-for="(slide, index) in sliders" :key="index">
        <div class="card">
          <div class="d-flex justify-end">
            <img src="../assets/logo-white.svg" alt="" />
          </div>
          <p class="my-6 card__name">{{ slide.name }}</p>
          <p class="card__number mb-5">**** **** **** 2020</p>
          <p class="card__date mb-1">
            Thru: 12/20 <span class="card__date ml-8">CVV: ***</span>
          </p>
          <div class="d-flex justify-end">
            <img src="../assets/visa.svg" alt="" />
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <div data-app>
      <v-dialog v-model="isShowPopupAddCard" width="320px">
        <div class="dialog">
          <div class="flex flex-col items-center justify-center">
            <p class="dialog__title">Add new card</p>
            <input
              type="text"
              v-model="nameCard"
              class="dialog__namecard mt-1"
              placeholder="Input card name"
            />
            <button class="dialog__btn" @click="addCard()">Add</button>
          </div>
        </div>
      </v-dialog>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// import { SwiperOptions } from "swiper";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  computed: {
    sliders() {
      return this.$store.state.sliders;
    },
    counter() {
      return this.$store.state.counter;
    },
  },

  data() {
    return {
      isShowPopupAddCard: false,
      nameCard: "",
      swiper: null,
    };
  },

  setup() {
    return {
      modules: [Pagination],
    };
  },

  methods: {
    addCard() {
      this.isShowPopupAddCard = false;
      this.$store.commit("appendCard", { name: this.nameCard });
    },
  },

  mounted() {
    const swiper = new Swiper(".swiper", {
      // ...
    });
    swiper.on("slideChange", function () {
      console.log("slide changed");
    });
  },

  watch: {
    swiper(newValue, oldValue) {
      console.log("newValue", newValue);
    },
  },
};
</script>

<style scoped>
.wrap {
  background: #0c365a;
  padding: 24px;
  position: sticky;
  top: 0;
}

.text-balance {
  color: #ffffff;
  font-size: 14px;
}

.dollar {
  padding: 2px 14px;
  background: #01d167;
  border-radius: 4px;
  width: 40px;
  height: 22px;
}

.dollar p {
  font-size: 12px;
  color: #ffffff;
}

.balance {
  font-size: 24px;
  font-weight: bold;
  color: white;
}

.btn__text {
  font-size: 13px;
  color: #23cefd;
  font-weight: bold;
}

.debit {
  color: white;
  font-size: 13px;
  font-weight: bold;
  margin-top: 30px;
}

.card {
  background: #01d167;
  border-radius: 12px;
  padding: 24px;
  width: 100%;
}

.card__name {
  font-size: 22px;
  color: white;
  font-weight: bold;
  text-align: left;
}

.card__number {
  font-size: 14px;
  color: white;
  font-weight: bold;
  text-align: left;
}

.card__date {
  font-weight: bold;
  color: white;
  font-size: 13px;
  text-align: left;
}

.visa {
  width: 59px;
  height: 20px;
}

/* swiper */
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

/* .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
} */

.dialog {
  padding: 18px 24px;
  background: #edf3ff;
  border-radius: 12px;
  z-index: 99999;
}

.dialog__namecard {
  font-size: 18px;
  line-height: 24px;
  outline: none;
  text-align: center;
  border: 1px solid gray;
  width: 100%;
  padding: 4px 0px;
}

.dialog__btn {
  margin-top: 10px;
  background: black;
  padding: 4px 8px;
  border-radius: 8px;
  color: white;
}
</style>