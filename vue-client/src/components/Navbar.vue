<template>
  <div class="navbar">
        <h2>
          <span class="logo">Elasticsearch </span>BookSearch
        </h2>
        <DataSearch
          componentId="title"
          iconPosition="right"
          :dataField="[
            'original_title',
            'original_title.search',
            'authors.search',
            'authors.raw',
            'authors.autosuggest',
            'authors'
          ]"
          class="data-search"
          :showClear="false"
          placeholder="Search for book"
        />
      </div>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style scoped>
</style>