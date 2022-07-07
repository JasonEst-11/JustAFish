<template>
    <div class="dropdown m-1">
      <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Actions
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li v-if="getSize < 150"><a class="dropdown-item" @click="feed" >Feed Bob</a></li>
        <li v-else-if="getSize >= 150"><a class="dropdown-item" @click="diet" >Bob diet</a></li>
      </ul>
    </div>
</template>

<script>
export default {
  methods:{
    feed(){
      this.$store.dispatch('feed');
    },
    diet(){
      this.$store.dispatch('diet');
    }
  },
  computed:{
    getSize(){
      return this.$store.state.bob.bob.size;
    }
  }
};
</script>

<style lang="scss" scoped>
.dropdown {
  top: 0%;
  left: 0%;
  position: absolute;
}
</style>