<template>
  <div>
    <LMap
      :zoom="zoom"
      :center="center"
      style="height: 400px"
    >
      <LTileLayer
        :url="url"
        :attribution="attribution"
      />
      <LMarker :lat-lng="center"/>
    </LMap>
  </div>
</template>

<script>
import { latLng } from 'leaflet'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})

export default {
  name: 'CityMap',
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  props: {
    zoom: {
      type: Number,
      default: 4
    },
    lat: {
      type: Number,
      required: true
    },
    long: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }
  },
  computed: {
    center: function () {
      return latLng(this.lat, this.long)
    }
  }
}
</script>