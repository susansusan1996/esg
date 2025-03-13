<template>
  <div class="container-fluid p-4 bg-light text-dark">
    <!-- Navigation Tabs -->
    <b-nav tabs class="mt-3 bg-white rounded p-2 shadow-sm">
      <b-nav-item href="#" class="text-success">Top5 in TW</b-nav-item>
      <b-nav-item href="#" class="text-success">Top5 Worldwide</b-nav-item>
      <b-nav-item href="#" class="text-success">Top5 in X Country</b-nav-item>
      <b-nav-item href="#" class="text-success">Top5 in X Continent</b-nav-item>
      <b-nav-item href="#" class="text-success">Selected Peers</b-nav-item>
    </b-nav>

    <b-row class="mt-4">
      <!-- Sidebar -->
      <b-col md="3">
        <b-card class="mb-3 bg-white text-dark border-0 shadow-sm">
          <h5 class="text-success">GRI</h5>
          <b-list-group>
            <b-list-group-item
              class="bg-light text-dark border-success"
              v-for="i in 5"
              :key="`gri-${i}`"
              >GRI-{{ i }}
            </b-list-group-item>
          </b-list-group>
        </b-card>
        <b-card class="bg-white text-dark border-0 shadow-sm">
          <h5 class="text-success">SASB</h5>
          <b-list-group>
            <b-list-group-item
              class="bg-light text-dark border-success"
              v-for="i in 5"
              :key="`sasb-${i}`"
              >SASB-{{ i }}
            </b-list-group-item>
          </b-list-group>
        </b-card>
      </b-col>

      <!-- Main Content -->
      <b-col md="9">
        <b-card bg-variant="white" text-variant="dark" class="shadow-sm">
          <h4 class="text-success">Comparison Historical Performance</h4>
          <div class="p-4 bg-light text-center text-dark rounded shadow-sm">
            Graph Placeholder
          </div>
        </b-card>

        <b-card class="mt-3 bg-white text-dark border-0 shadow-sm">
          <b-card-header class="bg-success text-light font-weight-bold"
            >GRI-1 Index Comparison
          </b-card-header>
          <b-table striped bordered hover responsive class="table-success">
            <thead>
              <tr>
                <th>Company 1</th>
                <th>Company 2</th>
                <th>Company 3</th>
                <th>Company 4</th>
                <th>Company 5</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="year in [2020, 2021, 2022, 2023, 2024]" :key="year">
                <td colspan="5" class="text-center">{{ year }}</td>
              </tr>
            </tbody>
          </b-table>
        </b-card>
      </b-col>
    </b-row>

    <!-- Summary & Details -->
    <b-row class="mt-4">
      <b-col md="3" v-for="i in 4" :key="`company-${i}`">
        <b-card
          bg-variant="success"
          text-variant="light"
          class="text-center shadow-sm"
        >
          <b-card-title>#{{ i }} Company Name</b-card-title>
          <b-card-text>Description with Reference Link</b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "ESGDashboard",
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f5f9f6;
}
</style>
