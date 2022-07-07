<template>
  <div class="statusbar">
    Health
    <div class="progress m-1">
      <div
        class="progress-bar bg-danger"
        role="progressbar"
        style="width: 80%"
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
      >80%</div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.statusbar{
    position: absolute;
    top: 0%;
    right: 0%;
    width: 40%;
}
.progress{
    background-color: rgb(255,255,255,0.5);
}
.progress-bar{
  transition: 1s;
}
</style>