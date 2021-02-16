<template>
    <div>

        <h1>DORBY BARKER</h1>

        <div id="img-container">
            <!-- <img id="splash" src="https://images.pexels.com/photos/2710178/pexels-photo-2710178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"> -->
        </div>


    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return
    }
}
</script>

<style scoped>
body {
        text-align:center;
    }
#img-container {
    width: 97vw;
    height: 50vh;
    /* background-color: red; */
    background-image: url('https://images.pexels.com/photos/2710178/pexels-photo-2710178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
    background-size: cover;
    background-position: center;
    border-radius: 3px;
}
</style>