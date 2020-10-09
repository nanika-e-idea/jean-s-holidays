<- parent: index.vue !->
<template>
 <div class="temprate">
   <zig :data="listData" :reverse="reverseOrder" />
 </div>
</template>

<script>
import DummyImage from '~/assets/image/dummy.png';
import zig from '~/components/Skeleton/Zigzag.vue'

export default {
 name: 'temprate',
 components: {
   zig
 },
 data() {
   return {
     listData: [
        {
          image: DummyImage,
          item: '1-このセクションのタイトル',
          description:
           '(importしたMarkdownファイルを指定することも可)　このセクションの本文　このセクションの本文　このセクションの本文　このセクションの本文　 このセクションの本文　このセクションの本文　'
        },
        {
          image: DummyImage,
          item: '2-このセクションのタイトル',
          description:
           '(importしたMarkdownファイルを指定することも可)　このセクションの本文　このセクションの本文　このセクションの本文　このセクションの本文　 このセクションの本文　このセクションの本文　'
        },
        {
          image: DummyImage,
          item: '3-このセクションのタイトル',
          description:
           '(importしたMarkdownファイルを指定することも可)　このセクションの本文　このセクションの本文　このセクションの本文　このセクションの本文　 このセクションの本文　このセクションの本文　'
        }
     ],
     reverseOrder: false
   }
 }
}
</script>

<style>

</style>