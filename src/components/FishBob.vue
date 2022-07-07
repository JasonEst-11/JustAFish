<template>
  <div class="bob" :style="'top: ' + bob.top + '%; left: ' + bob.left + '%;'">
    <h5>Bob</h5>
    <img
      src="@/assets/fish.png"
      :class="bob.flip ? 'rotate ' : 'nothing '"
      :style="
        'transition: ' +
        bob.speed +
        's;  width: ' +
        bob.size +
        'px; height: ' +
        bob.size +
        'px;'
      "
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      bob: this.$store.state.bob.bob,
    };
  },
  methods: {
    move() {
      this.$store.commit('MOVE')
    },
  },
  mounted() {
    this.move();
  },
};
</script>

<style lang="scss" scoped>
.bob {
  border-radius: 50%;
  position: absolute;
  transition: 1s linear;
}

.rotate {
  transform: rotateY(180deg);
}
.dead {
  transform: rotateX(180deg);
}
</style>