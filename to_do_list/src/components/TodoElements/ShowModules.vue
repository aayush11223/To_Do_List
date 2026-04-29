
<template>
  <div id="overlay">
    <div id="divModule">
      <h2>Add To do List</h2>

      <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="Enter your task here" v-model="task" />

        <br /><br />

        <div id="btns">
          <button type="submit">Add</button>
          <button type="button" @click="$emit('close')">Close</button>
          <!-- here,it's parent is CreateBtn.vue and it used there. -->
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: "",
    };
  },

  methods: {
    handleSubmit() {
      if (this.task !== "") {
        this.$emit("save-task", this.task);
        // in save-task, it's parent is CreateBtn.vue and it is called to close the module
        this.task = "";
      }
    },
  },
};
</script>

<style scoped>
#overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

#divModule {
  width: 600px;
  height: 300px;
  background: white;
  border-radius: 10px;
  padding-top: 50px;
  margin-top: 50px;
}

#btns {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>