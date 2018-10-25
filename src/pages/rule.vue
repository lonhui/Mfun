<template>
    <div id="rule">
        <div class="station"></div>
        <div class="text">
            <p class="p1">What are green ore and red ore?</p><br>
            <p>Green ore are incentive ores based on individuals' activities in mfun that can be used to pay for and purchase application services throughout the ecosystem.</p><br>
            <p>If you don't get it within 72 hours the green ore and red ore will disappear.</p><br>
            <p>For a certain period of time, the more mfun you have ,the more red ore you will produce.</p><br>
            <p>The total number of ore is limited, and every two years of production will be reduced by half, over time, access will become more and more difficult,so the advantage of early participation.</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#rule{
    width: 100%;
    height: 100%;
    background: url("../assets/img/bg2.jpg") no-repeat;
    background-size: 100% 100%;
    background-size:cover
}
.station{height: 300px}
.text{
    width: 640px;
    height: 1000px;
    margin: 0 auto;
    background: url("../assets/img/border.png") no-repeat;
    background-size: 100% 100%;
    background-size:cover;
    color: #fff
}
@font-face
{
    font-family: AndaleMo;
    src: url('../../static/font/AndaleMo.ttf')
}
.text p{
    width: 540px;
    margin: 0 auto;
    font-size: 28px;
    line-height: 40px;
    -webkit-text-fill-color: white;
    -webkit-text-stroke: 1px #53cadb;
    font-family:AndaleMo
}
.p1{padding-top: 60px}
</style>
