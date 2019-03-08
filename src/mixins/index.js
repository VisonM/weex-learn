// let stream = weex.requireModule("stream")
import axios from "axios"

export default {
  methods: {
    async Axios (api) {
      return await axios.get(`http://localhost:4000${api}`)
    },

  },
}
