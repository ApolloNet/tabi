<template>
  <footer class="footer-main">
    <div class="wrapper">
      <h2>Inspiration</h2>
      <p v-if="$apollo.loading">Loading...</p>
      <p>
        <span v-for="country in countries" :key="country.id" class="footer-link">
          <a
            :href="country.id"
            @click.stop.prevent="searchFor({country: country.name, city: ''})"
          >
            {{country.name}}
          </a>
        </span>
      </p>
    </div>
  </footer>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'Footer',
  data () {
    return {
      countries: null
    }
  },
  methods: {
    searchFor (searchObject) {
      this.$emit('search-for', searchObject)
    }
  },
  apollo: {
    countries: {
      query: gql`query {
        countries {
          id
          name
        }
      }`
    }
  }
}
</script>
