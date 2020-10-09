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
            name: 'winery',
            heading: 'Winery',
            sub: 'ワイナリー紹介',
            href: '#winemaker'
        }
    } 
}
</script>