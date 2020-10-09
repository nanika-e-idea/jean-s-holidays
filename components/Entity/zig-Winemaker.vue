<template>
 <div class="story winemaker">
   <zig :data="listData" :reverse="reverseOrder" />
 </div>
</template>

<script>
import DummyImage from '~/assets/image/dummy.png'
import zig from '~/components/Skeleton/Zigzag.vue'
import md01 from '~/assets/markdown/winemaker01.md'
import md02 from '~/assets/markdown/winemaker02.md'
import md03 from '~/assets/markdown/winemaker03.md'
import md04 from '~/assets/markdown/winemaker04.md'
import md05 from '~/assets/markdown/winemaker05.md'

export default {
 name: 'wimemaker',
 components: {
   zig
 },
 data() {
   return {
     listData: [
        {
          image: DummyImage,
          item: '01',
          description: md01
        },
        {
          image: DummyImage,
          item: '02',
          description: md02
        },
        {
          image: DummyImage,
          item: '03',
          description: md03
        },
        {
          image: DummyImage,
          item: '04',
          description: md04
        },
        {
          image: DummyImage,
          item: '05',
          description: md05
        }
     ],
     reverseOrder: true
   }
 }
}
</script>

<style>

</style>