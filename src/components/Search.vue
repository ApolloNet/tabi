<template>
  <form
    @submit.stop.prevent="searchFor(country, city)"
    id="form-search"
    class="form"
  >
    <div class="form-item">
      <label for="country" class="form-label">Country</label>
      <input
        v-model="country"
        id="country"
        name="country"
        type="search"
        class="form-text"
        placeholder="Eg. Iceland"
      />
    </div>
    <div class="form-item">
      <label for="city" class="form-label">City</label>
      <input
        v-model="city"
        id="city"
        name="city"
        type="search"
        class="form-text"
        placeholder="Eg. Reykjavik"
      />
    </div>
    <div class="form-item">
      <input type="submit" value="Search" class="form-submit" />
    </div>
  </form>
</template>

<script>
export default {
  name: 'Search',
  props: {
    country: String,
    city: String,
  },
  methods: {
    searchFor(country, city) {
      this.$emit('search-for', { country: country, city: city })
    },
  },
}
</script>
