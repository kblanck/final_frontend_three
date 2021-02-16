<template>
<div id="container">
    <div id="add-glasses">
        <h3>Add a Pair to the Database</h3>
        <form @submit="addGlasses" method="post">
            <input 
                type="text" 
                id="name" 
                placeholder="name"
                v-model="newGlasses.name"
            />
            <br/>
            <input 
                type="text" 
                id="price" 
                placeholder="price"
                v-model="newGlasses.price"
            />
            <br/>
            <input 
                type="textarea" 
                id="description" 
                placeholder="description"
                v-model="newGlasses.description"
            />
            <br/>
            <input 
                type="text" 
                id="img_url" 
                placeholder="image URL"
                v-model="newGlasses.img_url"
            />
            <br/>
            <input 
                type="text" 
                id="inventory" 
                placeholder="inventory"
                v-model="newGlasses.inventory"
            />
            <br/>
            <button type="submit" id="add-button">Add</button>
        </form>
    </div>
</div>
</template>


<script>
import axios from 'axios'

export default {
    props: [],
    name: 'AddGlasses',
    data() {
        return {
            glasses: [],
            newGlasses: {
                name: null,
                price: null,
                description: null,
                img_url: null,
                inventory: null
            }
        }
    },
    methods: {
        addGlasses(e) {
          e.preventDefault();
          axios.post('http://localhost:3000/glasses', this.newGlasses)
          .then(response => {
              this.glasses = response.data;
          })
        }  
    },
    mounted() {
        axios.get('http://localhost:3000/glasses')
        .then(response => {
            this.glasses = response.data;
        })
        .catch(error => {
            console.log(error)
        })
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
#container {
    display: flex;
    justify-content: center;
    -webkit-animation: fadeIn 1s;
    animation: fadeIn 1s;
}

#add-glasses {
    width: 25%;
    height: auto;
    padding: 1em;
    border: 1px solid rgb(158, 158, 158);
    border-radius: 8px;
    margin-bottom: 2em;
}

input[type=text] {
    font-size: .9em;
    margin: .2em;
}

input[type=textarea] {
    height: 10vh;
    font-size: .9em;
    margin: .2em;
}

#add-button {
    margin: .5em;
    background-color: white;
    color: #2c3e50;
    border: 1px solid#2c3e50;
    border-radius: 3px;
    font-size: 1em;
}

</style>