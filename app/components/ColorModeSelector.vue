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
  right: 2.5rem;
  z-index: 101;
}

@media screen and (max-width: 768px) {
  .move-right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 5rem;
  }  
}

@media screen and (max-width: 450px) {
  .move-right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 4.8rem;
  }  
}
</style>