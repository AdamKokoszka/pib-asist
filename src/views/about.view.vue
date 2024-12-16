<script setup lang="ts">
import shuffle from 'lodash-es/shuffle'
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components';
import VChart from 'vue-echarts';
import ToggleSwitch from 'primevue/toggleswitch'
import { ref } from 'vue'

const array = [1, 2, 3, 4]
const shuffledArray = ref(shuffle(array))
const checked = ref()

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

const option = ref({
  title: {
    text: 'Traffic Sources',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines'],
  },
  series: [
    {
      name: 'Traffic Sources',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        {
          value: 320,
          name: 'Direct'
        },
        {
          value: 310,
          name: 'Email'
        },
        {
          value: 234,
          name: 'Ad Networks'
        },
        {
          value: 135,
          name: 'Video Ads'
        },
        {
          value: 1548,
          name: 'Search Engines'
        },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(232,232,232,0.5)'
        }
      }
    }
  ]
})
</script>

<template>
  <div>
    <div class="block w-full text-sm
                sm:w-20
                md:w-40 md:text-xl
                lg:w-72">

      <p>Response block</p>
    </div>

    <div class="block w-full text-sm sm:w-20 md:w-40 md:text-xl lg:w-72">
      <p>Response block w</p>
    </div>

    <p>{{ shuffledArray }}</p>

    <ToggleSwitch v-model="checked"
                  class="mt-3"
                  binary />

    <v-chart class="mt-20"
             :option="option"
             style="height: 400px"
             autoresize />
  </div>
</template>
