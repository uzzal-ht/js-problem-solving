<template>
  <div class="wrapper">
    <div class="filters">
      <ul>
        <li
          v-for="(list, index) in sizeData"
          :key="index"
          @click="clickHandler(list)"
        >
          {{ list }}
        </li>
      </ul>
    </div>

    <div class="output">
      <ul>
        <li v-for="(item, index) in filterData" :key="index">
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          title: "this is title 01",
          sizes: ["5", "15", "6", "7", "8", "9", "10", "11", "12", "13"],
        },
        {
          title: "this is title 02",
          sizes: ["7", "8", "9", "12", "13"],
        },
        {
          title: "this is title 03",
          sizes: ["7", "8", "9", "10", "11", "12", "13"],
        },
      ],
      filterData: [],
    };
  },

  computed: {
    sizeData() {
      return [...new Set(this.data.map((item) => item.sizes).flat().sort((a,b) => a-b))];
      
    },
  },

  methods: {
    clickHandler(list) {
      const filterResult = this.data.filter((element) =>
        element.sizes.includes(list)
      );
      this.filterData = [];
      this.filterData.push(...filterResult);
    },
  },
};
</script>

<style>
ul li {
  list-style: none;
  cursor: pointer;
  margin-right: 10px;
  display: inline-block;
}
</style>
