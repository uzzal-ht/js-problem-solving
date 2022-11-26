<!-- Please remove this file from your project -->
<template>
  <div>
    <div class="filters">
      <div>
        <div>Sizes</div>
        <label v-for="size in allSizes" :key="size">
          <input type="checkbox" v-model="filters['sizes']" :value="size" />
          {{ size }}
        </label>
      </div>
    </div>
    <pre>{{ filters }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          title: "this is title 01",
          styles: ["filter-style-Low 1"],
          colors: ["filter-color-White"],
          sizes: ["5", "6", "7", "8", "9", "10", "11", "12", "13"],
        },
        {
          title: "this is title 02",
          styles: ["filter-style-Boot"],
          colors: [
            "filter-color-Black",
            "filter-color-Red",
            "filter-color-Blue",
          ],
          sizes: ["7", "8", "9", "12", "13"],
        },
        {
          title: "this is title 03",
          styles: ["filter-style-Gat"],
          colors: ["filter-color-Black", "filter-color-Red"],
          sizes: ["7", "8", "9", "10", "11", "12", "13"],
        },
      ],
      filters: {
        sizes: [],
      },
    };
  },
  computed: {
    products() {
      return this.data.map((product) => ({
        ...product,
        tags: this.tags(product),
      }));
    },
    filteredProducts() {
      return this.products.filter(this.x(this.filters.sizes));
    },
    allSizes() {
      return this.getAll("sizes");
    },
  },
  methods: {
    tags(product) {
      return [].concat(product.sizes);
    },
    getAll(prop) {
      return [
        ...new Set(
          [].concat.apply(
            [],
            this.data.map((item) => item[prop])
          )
        ),
      ];
    },
  },
};
</script>

