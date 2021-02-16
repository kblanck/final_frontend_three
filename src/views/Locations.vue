<template>
    <div>
        <h2>Locations</h2>
        <li id="locations" v-for="location in locations" :key="location.id">
            <h3>{{ location.area }}</h3>
            <h4>{{ location.address }} </h4>
            <h4>{{ location.city }}, {{ location.state }} {{ location.zip }} </h4>

        </li>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Locations',
    data() {
        return {
            locations: []
        }
    },
    methods: {
        getLocations() {
            axios.get('http://localhost:3000/locations')
            .then(response => {
                this.locations = response.data
            })
            .catch(error => {
                console.log(error)
            })
        }
    },
    mounted() {
        this.getLocations()
    }
}
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
#locations {
    padding: 1em;
    -webkit-animation: fadeIn 1s;
    animation: fadeIn 1s;
}
</style>