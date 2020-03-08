<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <form @submit.prevent="search" class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" v-model="keyword" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
        <div class="collapse navbar-collapse">

            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link exact class="text-info" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="text-warning" to="hello/1">Hello</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="text-danger" to="/test/2">Test</router-link>
                </li>
            </ul>

        </div>
    </nav>
</template>

<script>
    export default {
        name: "NavBar.vue",
        data(){
            return  {
                keyword:""
            }
        },
        methods:{
            search(){
                this.$emit('search', this.keyword)
            }
        }
    }
</script>

<style scoped>

</style>