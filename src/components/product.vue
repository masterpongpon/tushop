<template>
  <div class="hello">
    <b-card
      border-variant="dark"
      :header="nameProduct"
      align="center"
      style="height: 40rem"
    >
      <b-card-img :src="img"></b-card-img>
      <b-card-text> ราคา : {{ price }} ฿ </b-card-text>
      <label for="demo-sb">{{ textp }}</label>
      <b-form-spinbutton
        id="demo-sb"
        v-model="nump"
        min="1"
        max="100"
      ></b-form-spinbutton>
      <div>
        <b-button class="mt-3" @click="addToCart" variant="outline-dark">{{ textbutton }}</b-button>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    price: Number,
    nameProduct: String
  },
  data() {
    return {
      modalShow: false,
      nump: 1,
      textbutton: "หยิบใส่ตะกร้า",
      textp: "จำนวน",
    };
  },
  methods: {
    addToCart() {
      this.$emit("update-cart", {
        nameProduct: this.nameProduct,
        price: this.price,
        num: this.nump,
        Sum: this.price * this.nump
      });
      this.$bvModal.show("bv-modal-example")
    }
  }
};
</script>