
<template>
  <div id="create">
    <h1>{{ msg }}</h1>

    <button @click="showModule">Create</button>

    <ShowModules
      v-if="isModule"
      @close="isModule = false"
      @save-task="saveTask"
    />
  </div>
</template>

<script>
import ShowModules from "./ShowModules.vue"
export default {
  components: { ShowModules },

  data() {
    return {
      msg: "My To Do List",
      isModule: false,
    };
  },

  methods: {
    showModule() {
      this.isModule = true;
    },

    saveTask(task) {
      this.$emit("add-task", task);
      this.isModule = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>