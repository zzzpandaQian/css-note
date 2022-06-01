<template>
<div>
    <div class="wrap">
      <div class="inner-wrap">
        <div class="item" v-for="(i,index) in l" :key="index">
          {{i}}
        </div>
        </div>
    </div>
        <div class="wrap">
      <div class="inner-wrap2">
        <div class="item2" v-for="(i,index) in l" :key="index">
          {{i}}
        </div>
    </div>
    </div>

</div>
</template>

<script>
export default {
  data(){
    return {
      l: [
        '1'.repeat(10),
        '2'.repeat(10),
        '3'.repeat(10),
        '4'.repeat(10),
        '1'.repeat(10),

      ]
    }
  }
}
</script>

<style lang="scss">
.wrap{
  height: 1rem;
  width: auto;
  outline: 1px solid #222;
  overflow: hidden;
}
.inner-wrap{
  transform: translateY(0);
  animation: roll 2s infinite linear;
}
.inner-wrap2{
  transform: translateY(0);
}
.item,.item2{
  height: 1rem;
}
.item2{
  animation: roll2 1s infinite;
}
.inner-wrap2{
  // steps将动画分步
  animation: roll 4s steps(4) infinite;
}
@keyframes roll{
  0%{
    transform: translateY(0);
  }
  100%{
    transform: translateY(-4rem);
  }
}
@keyframes roll2{
  0%{
    transform: translateY(0);
  }
  // 添加稍微的停顿
  80%,100%{
    transform: translateY(-1rem);
  }
}
</style>
