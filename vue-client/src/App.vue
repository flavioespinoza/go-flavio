<template>
  <div id="app">
    <ReactiveBase app="good-books-yj" credentials="gBgUqs2tV:3456f3bf-ea9e-4ebc-9c93-08eb13e5c87c">
      <h1>Hello from ReactiveBase 👋</h1>
      <div class="navbar">
        <h2>
          <span class="logo">Bs</span>BookSearch
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
    </ReactiveBase>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
