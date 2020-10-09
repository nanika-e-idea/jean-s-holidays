<template>
    <hgrp :name="name" :heading="heading" :sub="sub" :href="href" />
</template>

<script>
import hgrp from '~/components/Skeleton/HeadingGroup.vue'

export default {
    components: {
        hgrp
    },
    data() {
        return {
            name: '', //アンカータグname要素
            heading: 'Titel', //タイトル
            sub: 'サブタイトル', //サブタイトル
            href: '#' //次のセクションのname or リンク先URL
        }
    } 
}
</script>