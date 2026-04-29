<template>
  <div id="wholeList">
    <div id="workList">
      <h2>List of Works</h2>
      <table class="todo_table">
        <tr>
          <th><h3>Work</h3></th>
          <th><h3>Action</h3></th>
        </tr>
        <tr v-for="(item, index) in posts" :key="index">
          <td>{{ item.title }}</td>
          <td id="icon">
            <font-awesome-icon :icon="['fas', 'edit']" id="edit" />
            <font-awesome-icon :icon="['fas', 'trash']" id="trash" />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      error: null,
    };
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        this.posts = json;
        this.loading = false;
      })
      .catch((err) => console.error("Error fetching data:", err));
  },
};
</script>

<style scoped>
#wholeList {
  display: flex;
  justify-content: center;
  align-items: center;
}
#workList {
  margin-top: 50px;
  width: 80%;
  height: auto;
  border: 1px solid black;
  border-radius: 5px;
}
.todo_table {
  width: 80%;
  text-align: center;
  border-collapse: collapse;
  margin: 30px;
  margin-left: 110px;
}
td {
  border: 1px solid black;
  border-collapse: collapse;
  border-right: none;
  border-left: none;
  padding: 10px;
}
#edit {
  color: green;
  margin-right: 35px;
}
#edit:hover {
  color: rgb(37, 225, 37);
  cursor: pointer;
}
#trash {
  color: rgb(193, 5, 5);
}
#trash:hover {
  color: red;
  cursor: pointer;
}
</style>

