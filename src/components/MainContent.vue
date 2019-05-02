<template>
    <div class="content-wrapper" >
        <div v-if="title">
        <div class="details-wrapper">
            <h1 class= "movie-title">{{title}}</h1>
            <p class="movie-genre">{{genre}}</p>
            <p class="movie-description">{{description}}</p>
            <p class="movie-language"><b>Language :</b> {{language}}</p>
            <p class="movie-director"><b>Director :</b> {{director}}</p>
            <p class="movie-actors"><b>Actors :</b> {{actors}}</p>
            <p class="movie-duration"><b>Duration :</b> {{duration}}</p>
        </div>
        <div class= "image-wrapper">
            <img v-bind:src="poster"/>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "MainContent",
    data(){
        return {
            title : "",
            genre : "",
            description : "",
            language : "",
            director : "",
            actors : "",
            duration : "",
            poster : ""
        };
    },
    mounted() {
       this.$root.$on('movieItemClick', (res) => { 
           this.title = res.Title;
           this.genre = res.Genre
           this.description = res.Plot;
           this.language = res.Language;
           this.director = res.Director;
            this.actors = res.Actors;
            this.duration = res.Runtime;
            this.poster = res.Poster;
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
.details-wrapper{
    width : 60%;
    float:left;
    padding:10px;
}

.image-wrapper {
    width : 35%;
    float : left;
    padding-top:20px

}
.details-wrapper p, .details-wrapper h1 {
    text-align : left;
}
</style>