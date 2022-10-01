// 6 Spots
// 6 Roads
// 1 Resource
// 1 Thief Spot
// 1 Number

<script setup>
import { ref } from 'vue'

</script>

<template>
  <div class="hexagon"></div>
</template>

<style scoped>
.hexagon {
  background-color: gray;
  width: 70px;
  margin-inline: 1px;
  height: calc(70px * 1.1547);
  display: inline-block;
  font-size: initial; 
  clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
}
</style>
