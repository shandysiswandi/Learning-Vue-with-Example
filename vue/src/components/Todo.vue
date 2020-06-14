<template>
  <div class="card text-white mb-3" :class="{'bg-primary':completed, 'bg-danger':!completed}">
    <div class="card-body" @click="$emit('on-done')">
      <p class="card-text" :class="{completed}">
        {{title}}
        <span>[{{id}}]</span>
      </p>
    </div>
    <div class="card-footer bg-white">
      <div class="btn-group btn-block" role="group" aria-label="Basic example">
        <button @click="$emit('on-delete')" type="button" class="btn btn-sm btn-danger">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: {
    id: Number,
    title: String,
    completed: Boolean
  }
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
