<template>
  <div>
    <header class="header-main">
      <div class="wrapper">
        <div class="branding">
          <h1 class="branding-title">旅 Tabi</h1>
          <p class="branding-slogan">Inspiration for your trips</p>
        </div>
        <Search
          @search-for="searchObject = $event"
          :country="country"
          :city="city"
        />
      </div>
    </header>
    <main class="content-main">
      <div class="wrapper">
        <Results :country="country" :city="city" />
      </div>
    </main>
    <Footer @search-for="searchObject = $event" />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Results from '@/components/Results.vue'
import Search from '@/components/Search.vue'

export default {
  name: 'App',
  components: {
    Footer,
    Results,
    Search,
  },
  data: function () {
    return {
      searchObject: '',
    }
  },
  computed: {
    country: function () {
      return this.searchObject.country
    },
    city: function () {
      return this.searchObject.city
    },
  },
}
</script>
