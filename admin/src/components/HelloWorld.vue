<template>
  <div class="hello">
    <div>{{ count }} {{ object.foo }}</div>
    <button @click="handleClick">btn</button>
  </div>
</template>

<script lang="ts">
// import { Options, Vue } from 'vue-class-component'

// @Options({
//   props: {
//     msg: String
//   }
// })
// export default class HelloWorld extends Vue {
//   msg!: string
// }
import { ref, reactive } from 'vue'
export default {
  setup () {
    const count = ref(0)
    const object = reactive({ foo: 'bar' })
    const handleClick = () => {
      count.value++
    }
    return {
      count,
      object,
      handleClick
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
