<template>
    <footer>
      <div class="container">
      <div class="owner">
        <p class="text_muted">サイト運営/商品販売</p>
        <hr/>
        <p>株式会社リブ・コマース</p>
        <p>大阪市中央区本町4丁目2番12号 <br/>
          野村不動産御堂筋本町ビル<!-- （旧）東芝大阪ビル -->８F billage OSAKA<br/></p>
        <p>>&nbsp;<a href="https://craftwinepark.com/">craftwinepark.com</a></p>
      </div>
      <hr class="spacer">
      <div class="sole">
        <p>@2020 Jean's Holidays/ジーンズ・ホリデーズ</p>
      </div>
      </div>
    </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/base.scss';

footer{
    display: block;
    width: 100%;
    background-color: #222;
    color: white;
    .container{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      margin-top: 20px;
      @include pc{
        .msgalc{width: 50%}
        .owner{width: calc(45% - 50px)}
        .btnspace{width: 50px}
        }
      @include tab{
        .msgalc{width: 90%;text-align: center}
        .owner{width: 90%;margin-top:30px}
        .btnspace{width: 100%}
      }
      .msgalc,.msgalc *{color: $palette-point}
      .owner,.owner *{text-align: center; color: white}
      .btnspace{height: 20px}
      .sole{
        width: 100%;
        text-align: center;
        p{color: white}
      }
      a{color: white}
      //.team{color: $palette-light}
    }
}
</style>
