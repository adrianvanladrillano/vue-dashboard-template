<template>
  <div>
    <h1 class="font-weight-medium">{{title}}</h1>
    <p class="text--secondary">{{description}}</p>
  </div>
</template>
<script>
export default {
  props: ['title', 'description']
}
</script>