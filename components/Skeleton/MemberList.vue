<template>
    <ul class="memberlist">
        <li v-for="(entryVal, entryKey) in iterationData" :key="entryKey" >
            <div class="face"><img :src="entryVal['image']"/></div>
            <h5 v-html="entryVal['name']" />
            <p class="text-muted" v-html="entryVal['role']" />
            <div class="introduction">
                <div v-html="entryVal['introduction']" />
            </div>
        </li>
    </ul>
</template>

<script>
export default {
 name: 'Memberlist',
 props: {
   data: Array
 },
 computed: {
   iterationData() {
     let data = this.data

     return data
   }
 },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/base.scss';
.memberlist{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style-type: none;
  margin: 0;
  margin-top: 0;
  padding: 0;
  width: 100%;
  li{
    position: relative;
    margin: 0;
    width: 180px;
    height: 300px;
    text-align: center;
    transition-duration: 0.2s;
    .face{
      box-sizing: border-box;
      border-radius: 50%;
      overflow: hidden;
      margin: 40px auto 20px;
      padding: 0;
      width: 120px;
      height: 120px;
      border: solid 3px $palette-point;
      transition-duration: 0.2s;
      img{
        width: 100%;
        margin: 0;
      }
    }
    .introduction{
      display: none;
      width: 0;
      height: 0;
      div{
        visibility: hidden;
        font-size: 0;
      }
    }
  }
  li:hover{
    //margin-top: -40px; 
    //width: 200px;
    transition-duration: 0.3s;
    .face{
        width: 160px;
        height: 160px;
        margin: 10px auto 10px;
      transition-duration: 0.3s;
    }
    .introduction{
      display: block;
      position: absolute;
      top: 5px;
      left: 5px;
      width: 170px;
      height: 170px;
      //@include pc {top: -20px;left: -10px;width: 200px;height: 200px};
      //@include tab {top: -20px;left: -10px;width: 200px;height: 200px};
      //@include sp {top: 0;left: 20px;width: 160px;height: 160px};
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.9);
      transition-duration: 0.3s;
      div{
        &::before{
          position: relative;
        }
        position: absolute;
        visibility: visible;
        top: 50%;
        transform: translateY(calc(10px - 50%));
        width: 100%;
        @include pc {font-size: 1rem;font-weight: 500};
        @include tab {font-size: 1rem;font-weight: 500};
        @include sp {font-size: 0.8rem;font-weight: 500};
        text-align: center;
        transition-duration: 0.3s;
      }
    }
  }
}
</style>