<template>
    <div class="content-wrapper">
        <h1 class= "movie-title"></h1>
        <p class="movie-genre"></p>
        <p class="movie-description"></p>
        <p class="movie-language">Language : {{description}}</p>
        <p class="movie-director">Director : {{director}}</p>
        <p class="movie-actors">Actors : {{}}</p>
        <p class="movie-duration">Duration : {{}}</p>
    </div>
</template>

<script>
import MovieListingApi from '../services/api/MoviesListing'
export default {
    name : "MainContent",
    data(){
        return {
            description : "",
            director : ""
        };
    },
    mounted() {
       this.$root.$on('movieItemClick', (res) => { 
           this.description = res.Title;
           this.director = res.Director;
        // MovieListingApi.getMovie('123').then(res => this.description = res)
        })
    }
}
</script>

<style scoped>
.content-wrapper{
    float: left;
    background: lightblue;
    width: 70%;
    height: 100vh;
}
</style>