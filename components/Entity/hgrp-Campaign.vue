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
            name: 'campaign',
            heading: 'Campaign',
            sub: 'キャンペーン内容',
            href: '#team'
        }
    } 
}
</script>