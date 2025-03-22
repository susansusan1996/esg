<template>
  <BNavbar v-b-color-mode="'dark'" toggleable="lg" class="my-navbar w-100">
    <BNavbarBrand to="/esg/">ESG助理</BNavbarBrand>
    <BNavbarToggle target="nav-collapse" />
    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav class="ms-auto p-3">
        <BNavItemDropdown text="esg報告書" right>
          <BDropdownItem to="/esg/report">各別公司esg報告書</BDropdownItem>
        </BNavItemDropdown>
        <BNavItemDropdown text="分析" right>
          <BDropdownItem to="/esg/carbon">溫室氣體排放</BDropdownItem>
        </BNavItemDropdown>
      </BNavbarNav>
      <BNavForm class="d-flex search-form">
        <BFormInput class="search-input" placeholder="搜尋" />
        <BButton type="submit" class="search-button">Search</BButton>
      </BNavForm>
    </BCollapse>
  </BNavbar>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";

const emit = defineEmits(["refresh"]);

function refresh() {
  emit("refresh");
}
</script>

<style scoped>
.my-navbar {
  background: linear-gradient(to right, #2f80ed, #56ab2f) !important;
  border-bottom: none;
}

.search-form {
  display: flex;
  align-items: center;
}

.search-input {
  border: 2px solid #ffffff;
  border-radius: 20px;
  padding: 5px 15px;
  color: #333;
  background-color: #f8f9fa;
}

.search-button {
  background: #f5a623;
  border-color: #f5a623;
  color: white;
  margin-left: 10px;
  border-radius: 20px;
  margin-bottom: 10px;
}

.search-button:hover {
  background: #d48806;
  border-color: #d48806;
}
</style>
