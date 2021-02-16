<template>
    <div>
        <h1>DORBY BARKER</h1>
        <div class="img-container" id="img-2">
          </div>
        <div class="img-container" id="img-1">
          </div>
        <div class="img-container" id="img-3">
          </div>
    </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
@-webkit-keyframes fadeIn {
    from { opacity: 0; }
      to { opacity: 1; }
}
@keyframes fadeIn {
    from { opacity: 0; }
      to { opacity: 1; }
}
body {
    text-align:center;
  }
h1 {
  margin: 0;
  font-size: 4em;
  letter-spacing: .25em;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s;
}
.img-container {
    width: 97vw;
    height: 45vh;
    background-size: cover;
    background-position: center;
  }
#img-2 {
  background-image: url('https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
      display: block;
    -webkit-animation: fadeIn 1s;
    animation: fadeIn 1s;
}
#img-1 {
    background-image: url('https://images.pexels.com/photos/2710178/pexels-photo-2710178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
    display: block;
    -webkit-animation: fadeIn 1.5s;
    animation: fadeIn 1.5s;
  }
#img-3 {
  background-image: url('https://images.pexels.com/photos/1726998/pexels-photo-1726998.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
  transition: 0.2s ease-in-out;
      display: block;
    -webkit-animation: fadeIn 2s;
    animation: fadeIn 2s;
}
</style>
