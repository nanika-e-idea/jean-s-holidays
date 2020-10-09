<template>
 <div class="story wine">
   <mag :data="listData" :reverse="reverseOrder" />
 </div>
</template>

<script>
import imgAurulent from '~/assets/image/aurulent.jpg'
import imgArgent from '~/assets/image/argent.jpg'

import mag from '~/components/Skeleton/Magazin.vue'
import wine01 from '~/assets/markdown/wine01.md'
import wine02 from '~/assets/markdown/wine02.md'

export default {
 name: 'Wine',
 components: {
   mag,
 },
 data() {
   return {
     listData: [
        {
         image: '',
         alt: '',
         item: '01',
         description: wine01
        },
        {
         image: '',
         alt: '',
         item: '02',
         description: wine02
        }
     ],
     reverseOrder: true
   }
 }
}
</script>

<style>

</style>