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
            name: 'wine',
            heading: 'Wine',
            sub: 'ワイン紹介',
            href: '#winery'
        }
    }
}
</script>
