// 19 hexagons

<script setup>
import { ref, onMounted } from 'vue'
import Hexagon from '@/components/Hexagon.vue'
import Spot from '@/components/Spot.vue'

const hexMap = ref([3,4,5,4,3])

</script>

<template>
  <div class="main">
    <div class="hexagon-container">
      <div
        class="hexagon-container__row"
        v-for="(row, index) in hexMap"
        :key="index"
      >
        <Hexagon v-for="index in row" :key="index" />
      </div>
    </div>

    <div class="spot-container">
      <div class="spot-container__row">
        <Spot />
        <Spot />
        <Spot />
      </div>
      <div class="spot-container__row">
        <Spot />
        <Spot />
        <Spot />
        <Spot />
      </div>
      <div class="spot-container__row">
        <Spot />
        <Spot />
        <Spot />
        <Spot />
      </div>
      <div class="spot-container__row">
        <Spot />
        <Spot />
        <Spot />
        <Spot />
        <Spot />
      </div>
      <div class="spot-container__row">
        <Spot />
        <Spot />
        <Spot />
        <Spot />
        <Spot />
      </div>
      <div class="spot-container__row">
        <Spot />
        <Spot />
        <Spot />
        <Spot />
        <Spot />
        <Spot />
      </div>
      <div class="spot-container__row">
        <Spot />
        <Spot />
        <Spot />
        <Spot />
        <Spot />
        <Spot />
      </div>
      <div class="spot-container__row">
        <Spot />
        <Spot />
        <Spot />
        <Spot />
        <Spot />
      </div>
      <div class="spot-container__row">
        <Spot />
        <Spot />
        <Spot />
        <Spot />
        <Spot />
      </div>
      <div class="spot-container__row">
        <Spot />
        <Spot />
        <Spot />
        <Spot />
      </div>
      <div class="spot-container__row">
        <Spot />
        <Spot />
        <Spot />
        <Spot />
      </div>
      <div class="spot-container__row">
        <Spot />
        <Spot />
        <Spot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hexagon-container {
  width: 100%;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 0;
}

.hexagon-container__row {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: -18px;
}

.spot-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.spot-container__row {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 54px;
}

.spot-container__row:nth-child(2n+3) {
  margin-top: 25px;
}
</style>
