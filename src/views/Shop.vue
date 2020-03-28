<template>
  <div class="home">
		<Sidebar/>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/shared/navigation/Sidebar'

export default {
  name: 'Shop',
  components: { Sidebar }
}
</script>
