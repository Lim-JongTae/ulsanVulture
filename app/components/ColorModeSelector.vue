<template>
  <div class="flex space-x-2 items-center move-right">
    <ColorModeButton />
  </div>
</template>

<script setup>
// Component wrapper for ColorModeButton
</script>

<style scoped>
.move-right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1.5rem;
  z-index: 101;
}

@media screen and (max-width: 768px) {
  .move-right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 4rem;
  }  
}

@media screen and (max-width: 450px) {
  .move-right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 3.8rem;
  }  
}
</style>