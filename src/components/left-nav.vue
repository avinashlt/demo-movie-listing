<template>
    <div class="left-nav-wrapper">
        <input type="text">
        <ul class="movie-list">
            <li v-for= "movie in movies" class="movie-item">
                <p>{{movie.name}}</p>
                <p>{{movie.year}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name : 'LeftNav',
     data(){
        return {    
            "movies":[{
                name : "Avengers",
                id  : 10,
                year : "2018"
            },{
                name : "King in the ring",
                id  : 10,
                year : "2017"
            },{
                name : "Survival",
                id  : 10,
                year : "2016"
            },{
                name : "Sing a song",
                id  : 10,
                year : "2011"
            },{
                name : "Millions",
                id  : 10,
                year : "2013"
            },{    
                name : "Spider man",
                id  : 10,
                year : "2010"
            },
        ]}
    }

}
</script>


<style scoped>
.left-nav-wrapper {
    background: gray;
    width: 30%;
    height: 100vh;
    float: left;
}
.movie-list {
    list-style-type: none;
    padding: 0
}
.movie-item {
    border: 1px solid black;
    border-bottom: none;
}
    
</style>