<template>
    <div class="col-md-9">
        <div class="row">
            <div v-for="(data, i) in datas" :key="i" class="col-md-4">
                <div class="card">
                    <h2>{{data.title}}</h2>
                    <img :src="data.image" class="card-img-top" alt="">
                    <div class="card-body">
                        <p class="card-text">{{data.description}}</p>
                    </div>
                    <strong>{{data.price}}</strong>
                    <button @click="addToCart(data)" class="btn btn-primary">Add</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            addToCart(item){
                this.$emit("addNewItemToCart", item)
            }
        },
        props: ['datas']
    }
</script>

<style scoped>

</style>