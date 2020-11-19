<template>
  <div id="app">
    <div class="div1">
      <div class="hi">
        <kinesis-container>
          <kinesis-element :strength="100">
            <img src="../assets/hello.png" width="100" height="100"
          /></kinesis-element>
          <kinesis-element :strength="100"> <h1>SQUADS</h1></kinesis-element>
          <kinesis-element :strength="70">
            get your teams managed,
          </kinesis-element>
          <kinesis-element :strength="90"> efficiently </kinesis-element>
        </kinesis-container>
      </div>
      <div class="gif">
        welcome...
        <p>they both are very happy that ypu came here</p>
        <img src="../assets/jerry.gif" />
      </div>
      <div class="pages">
        <h2>what pages do we have?</h2>
        <ul>
          <li>
            <h3>tasks</h3>
            assign tasks on specific dates
          </li>
          <li>
            <h3>chat</h3>
            group chat and induvidual member chat
          </li>
          <li>
            <h3>login</h3>
            login to our website
          </li>
          <li>
            <h3>profiles</h3>
            meet our team members
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
import { KinesisContainer, KinesisElement } from "vue-kinesis";

export default {
  name: "App",
  components: {
    // HelloWorld,
    KinesisContainer,
    KinesisElement,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
.div1 {
  
  padding-left: 20px;
  padding-bottom: 50px;
  background-image: url("../assets/name.jpg");
  background-size: cover;
}
.hi {
  font-size: 50px;
}
.gif {
  margin-top: 50px;
  padding-top: 100px;
  font-size: 20px;
}
.pages {
  margin-top: 30px;
  font-style: oblique;
  font-weight: 200;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 25px;
}
</style>
x`