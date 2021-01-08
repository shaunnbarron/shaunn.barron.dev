<template>
  <a :href="href" target="_blank" rel="noreferrer">
    <div class="text-center">
      <img :src="src" :alt="name" height="30px;" style="height: 30px" />
      <div>{{ name }}</div>
    </div>
  </a>
</template>

<script>
export default {
  name: "TechLogoLink",
  props: {
    src: {
      required: true,
      type: String
    },
    name: {
      required: true,
      type: String
    },
    href: {
      required: true,
      type: String
    }
  }
};
</script>

<style scoped>
img {
  display: inline;
}
</style>
