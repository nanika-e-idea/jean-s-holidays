<template>
    <ul class="checkpoint">
        <li class="col-sm-12 col-md-5" v-for="(entryVal, entryKey) in iterationData" :key="entryKey" >
          <template v-if="entryVal['href']">
            <a :href="entryVal['href']" target="blank">
              <div class="point" v-bind:class="entryVal['class']">
                <div v-html="entryVal['point']" />
              </div>
            </a>
          </template>
          <template v-else>
            <div class="point" v-bind:class="entryVal['class']">
              <div v-html="entryVal['point']" />
            </div>
          </template>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@import '~/assets/scss/base.scss';
ul.checkpoint{
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100%;
  li{
    margin-bottom: 20px;
    width: 320px; 
    text-align: center;
    .point{
      display: block;
      box-sizing: border-box;
      position: relative;
      margin: 10px auto;
      padding: 6px 12px;
      @include pc {width: 300px;height: 300px};
      @include tab {width: 250px;height: 250px};
      text-align: center;
      background-color: white;
      border: solid 5px $palette-point;
      div{
        box-sizing: border-box;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: calc(100% - 24px);
      }
    }
    .circle{border-radius: 50%}
    .square{border-radius: 0}
    .btncv{
      background-color: $palette-acsent;
      color: white;
      border: none;
      transition-delay: 0.1s;
      transition-duration: 0.2s;
      filter: drop-shadow($shadow);
      &:hover{
        @include pc {
          width: 320px;
          height: 320px; 
          margin: 0 auto;
        }
        @include tab {
          width: 270px;
          height: 270px; 
          margin: 0 auto;
        }
      }
    }
  }
}
</style>

<script>
export default {
 name: 'checkpoint',
 props: {
   data: Array
 },
 computed: {
   iterationData() {
     let data = this.data

     return data
   },

 }
}
</script>
