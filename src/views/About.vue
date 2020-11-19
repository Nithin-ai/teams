<template>
  <div class="parent">
    <div class="div1"></div>
    <div class="div2">
      <h1>LOGIN</h1>
      <form>
        <p>enter your username</p>
        <input required type="text" id="username" />
        <p>enter your password</p>
        <input required type="text" id="password" />
        <p></p>
        <router-link to="/">
          <button class="button">GO</button>
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.parent {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  font-size: 20px;
}

.div1 {
  grid-area: 1 / 1 / 6 / 6;
  background-image: url("../assets/mac.jpg");
  background-size: cover;
  background-position:center center ;
 
}
.div2 {
  grid-area: 3 / 3 / 4 / 4;
  background:-moz-linear-gradient(rgb(218, 215, 214),rgb(179, 178, 178));
  margin-top: 50px;
}
.button {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
 
}
</style>
