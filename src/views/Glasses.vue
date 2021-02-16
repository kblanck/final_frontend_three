<template>
<div>
    <h2>Glasses</h2>
    <div class="main-container">
        <div id="glasses-div" v-for="glass in glasses" :key="glass.id">
            <img id="glasses-show" 
                    :src="glass.img_url" />
            <h3>{{ glass.name }}</h3>
            <h4>${{ glass.price }}</h4>
            <br/>
            <details><summary>Edit</summary>
                <form @submit="updateGlasses" :id="glass.id" method="put">
                <label htmlFor="name">Name</label>
                <br />
                <input
                    type="text"
                    v-model="updatedGlasses.name"
                />
                <br />
                <label htmlFor="price">Price</label>
                <br />
                <input
                    type="text"
                    v-model="updatedGlasses.price"
                />
                <br />
                <label htmlFor="description">Description</label>
                <br />
                <input
                    type="text"
                    v-model="updatedGlasses.description"
                />
                <br />
                <label htmlFor="img_url">Image URL</label>
                <br />
                <input
                    type="text"
                    v-model="updatedGlasses.img_url"
                />
                <br />
                <label htmlFor="Inventory">Inventory</label>
                <br />
                <input
                    type="text"
                    v-model="updatedGlasses.inventory"
                />
                <br />
                <button type="submit">Edit</button>
                </form>
            </details>
            <button class="button" id="delete-button" v-on:click="deleteGlasses(glass.id)">
                Delete
            </button>
            <button class="button" id="add-to-cart" v-on:click="buyGlasses(glass.id)">
                Add to Cart
            </button>
        </div>
    </div>
    <AddGlasses/>
 </div>

</template>

<script>
import axios from 'axios'
import AddGlasses from '../components/AddGlasses.vue'

export default {
    name: 'Glasses',
    components: {
        AddGlasses
    },
    data() {
        return {
            glasses: [],
            updatedGlasses: {
                name: null,
                price: null,
                description: null,
                img_url: null,
                inventory: null
            },
            cart: [],
        }
    },
    methods: {
        getGlasses() {
            axios.get('http://localhost:3000/glasses')
            .then(response => {
                this.glasses = response.data;
            })
            .catch(error => {
                console.log(error)
            })
        },
        deleteGlasses(id) {
            if (confirm("Are you sure you want to delete?")) {
                axios.delete('http://localhost:3000/glasses/' + id)
                .then((response) => {
                    console.log(response)
                    this.getGlasses();
                })
            } else {
                return;
            }
        },
        updateGlasses(event) {
            event.preventDefault();
            const id = event.target.id
            axios.put('http://localhost:3000/glasses/' + id, this.updatedGlasses)
            .then(response => {
                console.log(response)
                this.getGlasses();
            }).catch(error => {
                console.log(error.message)
            })
        },
        buyGlasses(glasses_id) {
            let glassesId = {
                glasses_id: glasses_id
            }
            axios.put('http://localhost:3000/bought', glassesId)
            .then(response => {
                alert('Added to cart!')
                this.cart.push(glasses_id);
                console.log(response)
                console.log(this.cart)
            })
        },
        showCart() {
            let numberOfGlasses = this.cart.length
            if (numberOfGlasses === 0) {
                alert('Your cart is empty!')
            } else {
                alert(`You have ` + numberOfGlasses + ` pair(s) of glasses in your cart.`)
            }
        }
    },
    mounted() {
            this.getGlasses()
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
body {
    text-align:center;
}

.main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    -webkit-animation: fadeIn 1s;
    animation: fadeIn 1s;
}

#glasses-div {
    width: 20vw;
    padding: 1em;
    margin: 1em;
    border-radius: 5px;
}

#glasses-show {
    width: 15vw;
}

h1 {
    padding-top: 0; 
    margin-top: 0;
    margin-bottom: .5em;
    letter-spacing: .3em;
    font-size: 3em;
}

h3, h4 {
    margin: 0;
    padding: 0;
}

details summary::-webkit-details-marker {
  display:none;
}

details summary {
    margin: 0 auto;
  width: 3em;
  background-color: white;
    border: 1px solid #2c3e50;
  border-radius: 3px;
  cursor: pointer;
  list-style: none;
}

#edit-button {
    background-color: #eee;
    color: #2c3e50;
    border: 1px solid #2c3e50;
    border-radius: 3px;
    margin: .5em;
}

#delete-button {
    background-color: red;
    color: white;
    border: 1px solid red;
    border-radius: 3px;
    font-size: 1em;
}

#add-to-cart {
    margin: .5em;
    background-color:#eee;
    color: #2c3e50;
    border: 1px solid#eee;
    border-radius: 3px;
    font-size: 1em;
}

</style>