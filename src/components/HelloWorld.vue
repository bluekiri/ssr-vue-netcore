<template>
    <div>
        <h1> Hello World!</h1>
        <button v-on:click="hola">Say hi</button>
    </div>
</template>
<script>
export default{
    name: "Hello",
    methods: {
        hola: function(event){
            alert("Hello, hola, hallo, ciao, olá, hej, salut!!");
        }
    }
};
</script>