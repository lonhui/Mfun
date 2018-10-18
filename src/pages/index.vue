<template>
    <div id="index">
      <div class="button">
          <router-link to='/rule'><img src="../assets/img/btn.png"></router-link>
      </div>
      <div class="billboard"><p>The more green ore you have, the more red ore you produce</p></div>
      <div class="text">
          <p>The longer you stay online,</p>
          <p>the more green ore you can get</p>
      </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#index{
    width: 100%;
    height: 100%;
    background: url("../assets/img/bg1.jpg") no-repeat;
    background-size: 100% 100%;
    background-size:cover
}
.button{
    width: 300px;
    height: 150px;
    padding-top: 650px;
    margin-left: 420px;
    display: inline-block
}
.button img{
    width: 100%;
    height: 100%
}
.button img:active {transform: translateY(6px)}
.billboard{
    margin-top: 20px;
    height: 200px;
    color: #FFF;
    background: url("../assets/img/billboard.png") no-repeat;
    background-size: 100% 100%;
    background-size:cover
}
.billboard p{
    width: 600px;
    margin: 0 auto;
    padding-top: 30px;
    font-size: 38px;
    line-height: 45px;
    font-weight: 600
}
.text{
    width: 600px;
    margin: 80px auto 0;
    line-height: 60px;
    font-style:oblique;
    font-size: 38px;
    -webkit-text-fill-color: white;
    -webkit-text-stroke: 1px #53cadb
}
</style>
