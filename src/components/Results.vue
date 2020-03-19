<template>
  <div>
    <h2>Results</h2>
    <p v-if="$apollo.loading">Loading...</p>
    <p v-if="!cities">No results</p>
    <div v-for="city in cities" :key="city.id">
      <article class="result">
        <h3 class="result-title">{{city.name}}</h3>
        <p>{{city.country.name}}, {{city.continent.name}}</p>
        <ul class="result-list">
          <li>Population: {{city.population}}</li>
          <li>
            Languages:
            <ul v-for="language in city.country.languages" :key="language.id" class="result-sublist">
              <li>{{language.name}}</li>
            </ul>
          </li>
          <li>
            Currencies:
            <ul v-for="currency in city.country.currencies" :key="currency.id" class="result-sublist">
              <li>{{currency.name}} {{currency.unitSymbols}}</li>
            </ul>
          </li>
          <li><a :href="`https://www.openstreetmap.org/#map=10/${city.location.lat}/${city.location.long}`" target="_blank">Map</a></li>
        </ul>
      </article>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'Results',
  props: {
    city: {
      type: String,
      default: ''
    },
    country: {
      type: String,
      default: ''
    },
  },
  computed: {
    cityName: function () {
      return this.capitalize(this.city)
    },
    countryName: function () {
      return this.capitalize(this.country)
    },
    where: function () {
      const where = {}
      if (this.cityName !== '') {
        where.name = {eq: this.cityName}
      }
      if (this.countryName !== '') {
        where.countryName = {eq: this.countryName}
      }
      return where
    }
  },
  methods: {
    capitalize: function (string) {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    },
  },
  apollo: {
    cities: {
      query: gql`query Cities($where: WhereString!, $limit: Int!) {
        cities(where: $where, limit: $limit) {
          id
          name
          population
          country{
            id
            name
            languages{
              id
              name
            }
            currencies{
              id
              name
              unitSymbols
            }
          }
          continent{
            id
            name
          }
          location{
            lat
            long
          }
        }
      }`,
      variables () {
        return {
          where: this.where,
          limit: 20
        }
      },
      pollInterval: 10000
    }
  }
}
</script>
