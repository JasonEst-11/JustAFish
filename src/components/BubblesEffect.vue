<template>
  <div>
    <div class="bubble1" id="drag"></div>
    <div class="bubble2"></div>
    <div class="bubble3"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bubble1 {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 10%;
  top: 100%;
  border-radius: 50%;
  background-image: linear-gradient(
    to top right,
    rgb(10, 163, 235, 0.5),
    rgba(2, 56, 92, 0.2)
  );
  animation: bubbleUp 5s infinite;
}
.bubble2 {
  position: absolute;
  width: 25px;
  height: 25px;
  left: 10%;
  top: 100%;
  border-radius: 50%;
  background-image: linear-gradient(
    to top right,
    rgb(10, 163, 235, 0.5),
    rgba(2, 56, 92, 0.2)
  );
  animation: bubbleUp 3s infinite;
}
.bubble3 {
  position: absolute;
  width: 30px;
  height: 30px;
  left: 10%;
  top: 100%;
  border-radius: 50%;
  background-image: linear-gradient(
    to top right,
    rgb(10, 163, 235, 0.5),
    rgba(2, 56, 92, 0.2)
  );
  animation: bubbleUp 4s infinite;
}
@keyframes bubbleUp {
  from {
    top: 80%;
  }
  to {
    top: -10%;
  }
}
</style>