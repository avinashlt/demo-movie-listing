<template>
    <div class="left-nav-wrapper">
        <input type="text" class="search-box" placeholder="search">
        <ul class="movie-list">
            <li v-for= "(movie, index) in filteredMovies" v-bind:movie="movie.name" class="movie-item" @click = "movieItemClick(movie.name)" :key = "componentKey">
                <p class ="movie-name">{{movie.name}}</p>
                <p class= "movie-year">{{movie.year}}</p>
            </li>
        </ul>
    <div class="pagination-wrapper">
        <button :disabled = "rangeFirst <= 0" :class= "{disabledBtn:rangeFirst <= 0}" @click="previousPagination">previous</button>
            Page 1
        <button @click = "nextPagination">Next</button>
        <div>Total : {{movies.length}} </div>
    </div>
    </div>

</template>

<script>
import MovieListingApi from '../services/movie'
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
                name : "Sky",
                id  : 10,
                year : "2018"
            },{
                name : "Game of thrones",
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
                name : "Break point",
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
            },
        ],
        rangeFirst : 0,
        rangeLast : 10,
        componentKey: 0 }
    },
    created() {
        this.firstSetOfRecords();
    },
    methods : {
        forceRerender() {
            this.componentKey += 1;  
        },
        movieItemClick(item) {
            MovieListingApi.getMovie(item).then(res => 
            {
                this.$root.$emit('movieItemClick', res)
            });
        },
        firstSetOfRecords() {
            this.filteredMovies = this.movies.slice(this.rangeFirst,this.rangeLast)
        },
        nextPagination() {
            this.componentKey += 1;  
            this.rangeFirst +=  10; this.rangeLast += 10
            this.filteredMovies = this.movies.slice( this.rangeFirst ,this.rangeLast)
        },
        previousPagination() {
            this.componentKey += 1;  
            this.rangeFirst -=  10; this.rangeLast -= 10
            this.filteredMovies = this.movies.slice( this.rangeFirst ,this.rangeLast)
        }
    }

}
</script>


<style scoped>
.left-nav-wrapper {
    background: gray;
    width: 30%;
    height: 100vh;
    float: left;
    overflow-y : scroll;
    position : relative;
}

.pagination-wrapper {
    position : static;
    bottom : 0;
    left : 25%;
}

.pagination-wrapper button {
    width: 100px;
    height: 30px;
    border: 1px solid;
    border-radius: 5px;
    text-shadow: none;
}
.movie-list {
    list-style-type: none;
    padding: 0
}
.movie-item {
    border: 1px solid black;
    border-bottom: none;
    height : 45px;
}

.search-box{
    width: 150px;
    height : 25px;
    border : 1px solid black;
    border-radius : 5px;
    margin-top : 10px;
}
    
.movie-item p {
    margin : 0;
}
.movie-name{
    text-align : left;
    padding: 10px 0 0 20px;
    float: left;
}
.movie-year {
    text-align : right;
    padding : 10px 20px;
}
.disabledBtn {
    background : #d8d8d8;
}
</style>