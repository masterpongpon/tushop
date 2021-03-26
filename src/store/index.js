import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cardList: [
      {
        price: 20000,
        nameProduct: "รถถัง",
        img:
          "https://www.mrlhobby.com/wp-content/uploads/2020/09/tamiya-35055-m41-walker-wip-test-8.jpg"
      },
      {
        price: 10000,
        nameProduct: "เรือดำน้ำ",
        img:
          "https://kapitaennem0.files.wordpress.com/2017/05/c0151c5f0893b3bfeb4eda2deb3a7222.jpg?w=584"
      },
      {
        price: 25000,
        nameProduct: "เฮลิคอปเตอร์",
        img:
          "https://cdn.pixabay.com/photo/2021/01/24/21/58/helicopter-5946667__340.png"
      },
      {
        price: 9500,
        nameProduct: "โล่ตำรวจ",
        img:
          "https://www.grossiste-chinois-import.com/images/full_size/bouclier_police_POLBCLKL01.jpg"
      },
      {
        price: 2000,
        nameProduct: "กระบองตำรวจ",
        img: "https://www.newtv.co.th/images/content/ct_20190702111959469.jpg"
      },
      {
        price: 5000,
        nameProduct: "แก๊สน้ําตา",
        img: "https://www.catdumb.com/wp-content/uploads/2019/05/2-389.jpg"
      },
      {
        price: 200000,
        nameProduct: "M4A1",
        img:
          "https://cdn.shopify.com/s/files/1/0546/8541/products/TIPPMANN_M4_CARBINE_AIRSOFT_RIFLE1_clipped_rev_ROJ17E83UAKZ_2000x.png?v=1575931652"
      },
      {
        price: 2000,
        nameProduct: "รองเท้าคอมแบท",
        img: "https://dy.lnwfile.com/x7f4nw.jpg"
      }
    ],
    product: [],
    tprice: 0
  },
  getters: {
    cList: state => {
      return state.cardList;
    },
    UpProduct: state => value => {
      state.product.push(value);
    },
    proPush: state => {
      return state.product;
    },
    cSum: state => {
      return state.tprice;
    },
  },
  mutations: {
    sum(state) {
      state.tprice = 0;
      for (let i = 0; i < state.product.length; i++) {
        state.tprice = state.tprice + state.product[i].Sum;
      }
    },
    deletez(state) {
      state.tprice = 0;
      state.product = []
    },
  },
  actions: {
  },
  modules: {
  }
})
