<template>
 <div class="story wine">
   <zig :data="listData" :reverse="reverseOrder" />
 </div>
</template>

<script>
import DummyImage from '~/assets/image/dummy.png'
import zig from '~/components/Skeleton/Zigzag.vue'
import wine01 from '~/assets/markdown/wine01.md'
import wine02 from '~/assets/markdown/wine02.md'

export default {
 name: 'Wine',
 components: {
   zig,
 },
 data() {
   return {
     listData: [
        {
         image: DummyImage,
         item: '01',
         description: wine01
        },
        {
         image: DummyImage,
         item: '02',
         description: wine02
        }
     ],
     reverseOrder: false
   }
 }
}
</script>

<style>

</style>