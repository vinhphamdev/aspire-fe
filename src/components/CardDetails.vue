<template>
  <div class="wrap pt-6">
    <div class="transactions">
      <button
        class="collapsible1 d-flex justify-space-between"
        @click="collapsible()"
      >
        <div class="d-flex">
          <img src="../assets/card-details.svg" alt="" />
          <p class="ml-3">Card details</p>
        </div>
        <img src="../assets/down-arrow.svg" alt="" class="arrow1" />
      </button>
      <div class="wrap_content">
        <div class="content">
          <ul>
            <li
              v-for="(item, index) in items"
              :key="index"
              class="d-flex justify-space-between"
            >
              <div class="d-flex">
                <div class="circle d-flex align-center justify-center">
                  <img
                    :src="`./src/assets/transactions-icons/${item.icon}.svg`"
                    alt=""
                    class="circle__img"
                  />
                </div>

                <div class="ml-3">
                  <p class="content__label mb-1">{{ item.label }}</p>
                  <p class="content__date mb-3">{{ item.date }}</p>
                  <div class="d-flex align-center">
                    <div class="circle-blue d-flex justify-center align-center">
                      <img
                        src="../assets/transactions-icons/business-and-finance.svg"
                        alt=""
                        class="circle-blue__img"
                      />
                    </div>
                    <p class="content__refund ml-2">Refund on debit card</p>
                  </div>
                </div>
              </div>

              <div>
                <p class="content__amount">+S$ 150</p>
              </div>
            </li>
          </ul>
        </div>
        <button class="btn">
          <p>View all card transactions</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: "file-storage",
          label: "Hamleys",
          date: "20 May 2020",
        },
        {
          icon: "flights",
          label: "Hamleys",
          date: "20 May 2020",
        },
        {
          icon: "megaphone",
          label: "Hamleys",
          date: "20 May 2020",
        },
        {
          icon: "file-storage",
          label: "Hamleys",
          date: "20 May 2020",
        },
      ],
    };
  },

  methods: {
    collapsible() {
      var coll = document.getElementsByClassName("collapsible1");
      var arrow = document.getElementsByClassName("arrow1");
      var i;

      for (i = 0; i < coll.length; i++) {
        var that = coll[i];
        // that.classList.toggle("active");
        var content = that.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
          arrow[0].style.transform = "rotate(0deg)";
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
          arrow[0].style.transform = "rotate(180deg)";
        }
      }
    },
  },
};
</script>


<style scoped>
.collapsible1 {
  background-color: #fafcff;
  color: #222222;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  outline: none;
  font-size: 15px;
  border: 1px solid #f5f5f5;
}

.wrap {
  background: white;
}

.transactions {
  padding: 0px 24px;
}

.wrap_content {
  max-height: 0;
  /* max-height: 498px; */
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  background-color: white;
  border: 1px solid #f0f0f0;
}

.content {
  padding: 24px 18px 0px 18px;
}

.content__label {
  color: #222222;
  font-size: 14px;
}

.content__date {
  font-size: 13px;
  color: #aaaaaa;
}

.content__refund {
  font-size: 12px;
  color: #325baf;
}

.content__amount {
  font-size: 14px;
  color: #01d167;
}

.circle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #009dff1a;
}

.circle__img {
  width: 16px;
  height: 16px;
}

ul > li + li {
  margin-top: 16px;
}

ul > li {
  border-bottom: 1px solid #f5f5f5;
  padding-bottom: 16px;
}

.circle-blue {
  background: #325baf;
  border-radius: 50%;
  width: 24px;
  height: 20px;
}

.btn {
  background: #edfff5;
  border-radius: 8px;
  width: 100%;
  padding: 16px 0px;
}

.btn p {
  color: #01d167;
  font-size: 13px;
}
</style>