<template>
<div>
  <router-view/>
  <Foot/>
</div>
  
</template>

<script>
import Foot from '../src/components/Foot/Foot'

export default {
  name: 'App',
  components: {
    Foot
  }
}
</script>

<style lang='stylus'>

</style>
