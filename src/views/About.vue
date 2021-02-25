<template>
  <div>
    <b-table
      sticky-header
      :items="proPush"
      :fields="fields"
      head-variant="light"
      outlined
    >
    </b-table>
    <b-container class="bv-example-row bv-example-row-flex-cols">
      <b-row align-h="end">
        <b-col cols="auto">
          <p>ราคารวม = {{ cSum }}</p>
        </b-col>
        <b-col cols="auto">
          <b-button variant="info" href="/about">ลบสินค้าทั้งหมด</b-button>
        </b-col>
        <b-col cols="auto">
          <b-button variant="success" @click="$bvModalshow('bv-modal-example')"
            >Payment</b-button
          >
        </b-col>
      </b-row>
    </b-container>
    <b-modal id="bv-mdal-example" hide-footer>
      <template #modal-title> <strong>Congratulations</strong> </template>
      <div class="d-block text-center">
        <p class="lead">Payment Complete</p>
      </div>
      <b-container class="bv-example-row bv-example-row-flex-cols">
        <b-row align-h="center">
          <b-button
            class="col-3"
            block
            @click="$bvModal.hide('bv-modal-example')"
          >
            Close
          </b-button>
        </b-row>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    product: Array,
    tprice: Number
  },
  computed: {
    ...mapGetters(["proPush","cSum"])
  },
  data() {
    return {
      fields: ["nameProduct", "price", "num", "Sum"]
    };
  }
};
</script>
