<template>
  <div>
    <LMap :zoom="zoom" :center="center" style="height: 400px;">
      <LTileLayer :url="url" :attribution="attribution" />
      <LMarker :lat-lng="center" :icon="icon" />
    </LMap>
  </div>
</template>

<script>
import L from 'leaflet'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'

export default {
  name: 'CityMap',
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  props: {
    zoom: {
      type: Number,
      default: 4,
    },
    lat: {
      type: Number,
      required: true,
    },
    long: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      icon: L.icon({
        iconUrl: require('@/assets/images/marker-icon.png'),
        iconRetinaUrl: require('@/assets/images/marker-icon-2x.png'),
        shadowUrl: require('@/assets/images/marker-shadow.png'),
        iconSize: [25, 41],
        iconAnchor: [25, 41],
      }),
    }
  },
  computed: {
    center: function () {
      return L.latLng(this.lat, this.long)
    },
  },
}
</script>
