<template>
  <div :id="eleId">
    <img :src="iconImg" :style="styleObj" alt="图标">
    <p class="icon_title">{{info.name}}</p>
  </div>
</template>

<script>
import uuidv1 from 'uuid/v1'
import iconDefaultSrc from '@/assets/images/PPC.png'

export default {
  name: 'PIcon',

  props: {
    iconImg: {
      type: String,
      default: iconDefaultSrc
    },

    info: {
      type: [Object],
      default: () => {
        return {
          name: '学员服务',
          link: ''
        }
      }
    },

    width: {
      type: Number,
      default: 50
    }
  },

  computed: {
    eleId () {
      return `${uuidv1()}`.replace(/-/g, '')
    },

    styleObj () {
      return {
        width: `${this.width - 2 * this.imgPd}px`,
        padding: `${this.imgPd}px ${this.imgPd}px 2px`
      }
    }
  },

  data () {
    return {
      imgPd: 12
    }
  }
}
</script>

<style scoped>
.icon_title {
  text-align: center;
  color: #999;
  font-size: 15px;
  font-weight: 600;
}
</style>
