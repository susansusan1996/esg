<template>
  <div class="esg-home">
    <header class="header">
      <h1 class="title">溫室氣體排放比較圖</h1>
    </header>
    <b-card class="p-4 shadow">
      <b-form>
        <b-row class="align-items-center mb-3">
          <b-col cols="2" class="text-end fw-bold">
            <label for="year">年度</label>
          </b-col>
          <b-col cols="6">
            <b-form-input
              id="year"
              v-model="year"
              disabled="true"
              required
            ></b-form-input>
          </b-col>
          <b-col cols="4" class="text-end">
            <b-button
              :disabled="isSubmitDisabled"
              @click="drawChart"
              class="cta-button"
            >
              送出
            </b-button>
          </b-col>
        </b-row>

        <b-row class="align-items-center">
          <b-col cols="2" class="text-end fw-bold">
            <label for="input2">公司 (可選多家)</label>
          </b-col>
          <b-col cols="6">
            <multiselect
              id="tagging"
              v-model="value"
              tag-placeholder="Add this as new tag"
              placeholder="Search or add a tag"
              label="name"
              track-by="code"
              :options="options"
              :multiple="true"
              :taggable="true"
              @tag="addTag"
            ></multiselect>
          </b-col>
        </b-row>
      </b-form>
    </b-card>
    <b-card>
      <canvas id="myChart" width="400" height="200"></canvas>
    </b-card>
  </div>
</template>

<script setup>
import { computed, nextTick, onMounted, ref } from "vue";
import axios from "axios";
import Chart from "chart.js/auto"; // 使用 chart.js 自動引入所需模組
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.css";

const year = ref("112");
let value = ref([]);
let options = ref([
  // { name: "Vue.js", code: "vu" },
]);
let labels = ref([]);
let number = ref([]);

const isSubmitDisabled = computed(() => {
  return !(year.value && value.value);
});

let rawData = ref([]);

function getData() {
  axios
    .get("/api/twse", { responseType: "json" }) // 確保回應為 JSON
    .then((response) => {
      console.log(response.data); // 測試數據是否正常
      rawData.value = response.data;
      options.value = response.data.map((company) => ({
        name: company["公司名稱"],
        code: company["公司代號"],
      }));
    })
    .catch((error) => console.error(error));
}

function drawChart() {
  const filteredData = rawData.value.filter((company) =>
    value.value.some((data) => company["公司名稱"] === data.name),
  );

  labels.value = filteredData.map((company) => company["公司名稱"]);
  number.value = filteredData.map(
    (company) => company["溫室氣體排放密集度(噸CO2e/單位)"],
  );

  nextTick();
  createChart();
}

getData();

let myChart;

function createChart() {
  let ctx = document.getElementById("myChart").getContext("2d");
  if (myChart) {
    myChart.destroy();
  }
  myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels.value,
      datasets: [
        {
          label: "溫室氣體排放密集度(噸CO2e/單位)",
          data: number.value,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        x: {
          stacked: true, // 設定 X 軸為堆疊
        },
        y: {
          stacked: true, // 設定 Y 軸為堆疊
        },
      },
    },
  });
}

onMounted(() => {
  createChart();
});

function addTag(newTag) {
  const tag = {
    name: newTag,
    code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
  };
  this.options.push(tag);
  this.value.push(tag);
}
</script>

<style scoped>
.header {
  padding: 2rem;
  background: linear-gradient(to right, #56ab2f, #a8e063);
  color: white;
  border-radius: 0 0 20px 20px;
}

.cta-button {
  background: #56ab2f;
}

.cta-button:hover {
  background: #3d8b1e;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
}

.subtitle {
  font-size: 1.2rem;
  margin-top: 0.5rem;
}

.esg-home {
  text-align: center;
  font-family: Arial, sans-serif;
}
</style>
