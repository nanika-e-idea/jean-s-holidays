<template>
 <div class="story concept">
   <mag :data="listData" :reverse="reverseOrder" />
 </div>
</template>

<script>
import mag from '~/components/Skeleton/Magazin.vue'

import image01 from '~/assets/image/lodi-vinyards.jpg'
import image02 from '~/assets/image/intro-bill_and_jean_2.jpg'
import image03 from '~/assets/image/intro-rippon_vineyard.jpg'

import concept01 from '~/assets/markdown/concept01.md'
import concept02 from '~/assets/markdown/concept02.md'
import concept03 from '~/assets/markdown/concept03.md'

export default {
 name: 'Concept',
 components: {
   mag
 },
 data() {
   return {
     listData: [
        {
          image: image01,
          imageclass: 'small',
          alt: '写真：ローダイのブドウ畑',
          item: '01',
          description: concept01
        },
        {
          image: image02,
          imageclass: 'small',
          alt: '写真：ビルとジーン',
          item: '02',
          description: concept02
        },
        {
          image: image03,
          imageclass: 'small',
          alt: '写真：ニュージーランドのブドウ畑',
          item: '03',
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
