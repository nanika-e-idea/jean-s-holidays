<template>
 <div class="story concept">
   <zig :data="listData" :reverse="reverseOrder" />
 </div>
</template>

<script>
import zig from '~/components/Skeleton/Zigzag.vue'

import DummyImage from '~/assets/image/dummy.png'
import concept01 from '~/assets/markdown/concept01.md'
import concept02 from '~/assets/markdown/concept02.md'
import concept03 from '~/assets/markdown/concept03.md'

export default {
 name: 'Concept',
 components: {
   zig
 },
 data() {
   return {
     listData: [
        {
          image: DummyImage,
          item: '1-このセクションのタイトル',
          description: concept01
        },
        {
          image: DummyImage,
          item: '2-このセクションのタイトル',
          description: concept02
        },
        {
          image: DummyImage,
          item: '3-このセクションのタイトル',
          description: concept03
        }
     ],
     reverseOrder: false
   }
 }
}
</script>

<style>

</style>