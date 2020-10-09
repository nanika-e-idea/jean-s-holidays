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
            name: 'winemaker',
            heading: 'Winemaker',
            sub: '醸造家 - ジュリアン・ブローデン',
            href: '#wine'
        }
    } 
}
</script>