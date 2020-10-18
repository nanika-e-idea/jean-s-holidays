<template>
 <div class="storyteller">
   <bio :data="listData" />
 </div>
</template>

<script>
import bio from '~/components/Skeleton/Biography.vue'
import Face from '~/assets/image/intro-jean_2.jpg'
import md01 from '~/assets/markdown/biography01.md'

export default {
 name: 'Storyteller',
 components: {
   bio
 },
 data() {
   return {
     listData: [
        {
          image: Face,
          alt: "写真：ジーン長尾",
          biography: md01
        }
     ]
   }
 }
}
</script>

<style>

</style>
