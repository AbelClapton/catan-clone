<script setup>
import { ref } from 'vue'
import Thief from '@/components/Thief.vue'
import Settlement from '@/components/Settlement.vue'
import City from '@/components/City.vue'
import Road from '@/components/Road.vue'

const props = defineProps({
  component: String,
});
</script>

<template>
  <div class="spot">
  </div>
</template>


<style scoped>
.spot {
  height: 18px;
  aspect-ratio: 1;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}
</style>
