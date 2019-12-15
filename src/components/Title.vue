<template>
  <div :class="['header', tClass]" :id="'header-' + eleId">
    <span :id="'span1-' + eleId">{{title}}</span>
    <span :id="'span2-' + eleId">&nbsp;</span>
    <span :id="'span3-' + eleId">&nbsp;</span>
  </div>
</template>

<script>
import uuidv1 from 'uuid/v1'

export default {
  name: 'TheTitle',

  props: {
    title: {
      type: String,
      default: '这是一个标题'
    },
    tClass: {
      type: String,
      default: ''
    }
  },

  computed: {
    eleId () {
      return `${uuidv1()}`.replace(/-/g, '')
    }
  },

  mounted () {
    let eleHeader = document.getElementById(`header-${this.eleId}`)
    let eleSpan1 = document.getElementById(`span1-${this.eleId}`)
    let eleSpan2 = document.getElementById(`span2-${this.eleId}`)
    let eleSpan3 = document.getElementById(`span3-${this.eleId}`)

    const headerW = eleHeader.clientWidth
    const span1W = eleSpan1.clientWidth
    const span2W = eleSpan2.clientWidth

    eleSpan3.style.width = `${headerW - span1W - span2W}px`
  }
}
</script>

<style scoped>
.header {
  color: #333;
  line-height: 2.25rem;
  display: flex;
}

.header>span {
  display: inline-table;
}

.header>span:nth-child(1) {
  border-bottom: 2px solid #009380;
}

.header>span:nth-child(2) {
  width: 10px;
  border-bottom: 2px solid #f6ab00;
}

.header>span:nth-child(3) {
  width: 49%;
  border-bottom: 2px solid #dcdcdc;
}
</style>
