<template>
  <div class="aquarium">
    <ActionsButton/>
    <BubblesEffect/>
    <!-- <StatusBar/> -->
    <FishBob/>
  </div>
</template>

<script>
// import StatusBar from '@/components/StatusBars.vue'
import ActionsButton from '@/components/ActionsButton.vue'
import BubblesEffect from '@/components/BubblesEffect.vue'
import FishBob from '@/components/FishBob.vue'
export default {
  components:{
    // StatusBar,
    ActionsButton,
    BubblesEffect,
    FishBob,
  },
 
};
</script>

<style lang="scss" scoped>
.aquarium {
  width: 100;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  background-image: url("@/assets/aquarium.jpg");
  background-size: cover;
}
</style>