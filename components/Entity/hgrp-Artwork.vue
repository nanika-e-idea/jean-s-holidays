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
            name: 'artwork',
            heading: 'Artwork',
            sub: 'アーティスト - アンジェラ・ティレル',
            href: '#wine'
        }
    } 
}
</script>