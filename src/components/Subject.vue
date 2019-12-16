<template>
  <p>
    <span class="s_item" :class="isActive(s)" v-for="s in subs" :key="s">{{s}}</span>
  </p>
</template>

<script>
export default {
  name: 'TheSubject',

  props: {
    subjects: {
      type: Array,
      default: () => {
        return []
      }
    }
  },

  data () {
    return {
      subs: ['语', '数', '英', '物', '化']
    }
  },

  methods: {
    isActive (subjectName) {
      if (this.subjects.find(x => x.indexOf(subjectName) >= 0)) {
        return 's_active'
      }

      return 's_inactive'
    }
  }
}
</script>

<style scoped>
.s_item {
  padding: .25rem;
  margin: .125rem;
  border-radius: 4px;
  font-size: 14px;
}

.s_active {
  color: #fff;
  background-color: #ff9900;
}

.s_inactive {
  color: #8a8a8a;
  background-color: #dedede;
}
</style>
