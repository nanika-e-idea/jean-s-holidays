<template>
<div>
  <a v-bind:name = "name" v-bind:id = "name"></a>
  <div class="h-grp">
    <h3>{{heading}}</h3>
    <span class="h-sub">{{sub}}</span>
  </div>
<div class="arrow"><a v-on:click='scroll2(href)'>skip</a></div>
</div>
</template>
<script>
export default {
  name: 'HeadingGroup',
  props: {
    name: String,
    heading: String,
    sub: String,
    href: String
  },
  computed: {
    quoted: function() {
      return "'" + this.href + "'"
    }
  },
  methods: {
    scroll2 (target) {
      //console.log('---ここで他の処理を行う---')
 
        this.$scrollTo(target)
      }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/base.scss';
.h-grp{
  padding-top: 15px;
  padding-bottom: 10px;
  width: 500px;
  max-width: 90%;
  margin: auto;
  background-color: $palette-dark;
  text-align: center;
  h3{
    margin-top: 10px;
    margin-bottom: 0;
    font-size: 2rem;
    line-height: 2rem;
    color: $palette-point;
  }
  .h-sub{
    margin-top: 0;
    font-size: 1rem;
    line-height: 1rem;
    color: white;
    font-family: $headingfont;
  }
}
.arrow{
  position: relative;
  box-sizing: border-box;
  margin: auto;
  width: 120px;
  height: 40px;
  border-top: solid 40px $palette-dark;
  border-left: solid 60px transparent;
  border-right: solid 60px transparent;
  text-align: center;
  font-size: 16px;
  font-weight: 800;
  color: $palette-dark;
  &:hover{
    border-top: solid 40px $palette-point;
  }
  a{
    display: block;
    margin: -40px -60px;
    width: 120px;
    height: 40px;
    cursor: pointer;
  }
}
</style>