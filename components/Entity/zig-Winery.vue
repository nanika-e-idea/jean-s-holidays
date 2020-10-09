<- parent: index.vue !->
<template>
    <zig :data="listData" :reverse="reverseOrder" />
</template>

<script>
import DummyImage from '~/assets/image/dummy.png'
import zig from '~/components/Skeleton/Zigzag.vue'
import md01 from '~/assets/markdown/winery01.md'
import md02 from '~/assets/markdown/winery02.md'
import md03 from '~/assets/markdown/winery03.md'
import md04 from '~/assets/markdown/winery04.md'

export default {
 name: 'Story',
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
        }
     ],
     reverseOrder: true
   }
 }
}
</script>
