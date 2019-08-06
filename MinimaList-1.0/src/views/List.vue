<template>
	<div>
    <ul>
      <li v-for="(item,index) in pageLists" :key="index">
        {{item.title}}-{{item.content}}
      </li>
    </ul>
	</div>
</template>

<script>
import store from '@/store'
export default {
  store,
  computed: {
    pageLists () {
      return store.state.lists
    }
  }
}
</script>

<style scoped>

</style>
