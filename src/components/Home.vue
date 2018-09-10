<template>
    <div id="app">
        <h1>home</h1>
        <p>{{ msg }}</p>
        <Hello/>
    </div>
</template>
<script>
import Hello from './HelloWorld'
export default {
  components: { Hello },
  props: ['msg']
};

</script>
<style scope="scoped">
    body {
    background-color: royalblue;
    }
</style>


