<template>
    <div class="section-title">
      <div class="text-left text-3xl mb-2">{{title}}</div>
      <hr class="mb-4">
    </div>
</template>

<script>
  export default {
    name: "SectionTitle",
    props: {
      title: {
        type: String,
        required: true
      }
    }
  };

</script>

<style scoped>
  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    padding: 0;
  }
</style>
