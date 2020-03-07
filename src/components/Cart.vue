<template>
    <div class="col-sm-3">
        <ul class="list-group">
            <li class="text-center bg-dark text-white font-weight-bold list-group-item">Cart</li>
            <li class="list-group-item my-1" v-for="(data,i) in datas" :key="i"> <button class="btn btn-danger mr-2" @click="removeItemFromCart(i)">x</button>{{data.title}} <span class="float-right">{{data.price}}</span></li>

            <li class="text-white list-group-item bg-dark">Total <span class="float-right">{{totalPrice}}</span></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Cart",
        props:['datas'],
        computed:{
            totalPrice() {
                var total = 0
                this.datas.forEach(s=>{
                    total += parseFloat(s.price)
                })
                return total


            }
        },
        methods:{
            removeItemFromCart(i){
                this.datas.splice(i, 1)
            }
        }
    }
</script>

<style scoped>

</style>