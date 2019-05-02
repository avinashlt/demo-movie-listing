import axios from 'axios'

export default {
    getMovie(item) {
        return axios.get('/?t='+ item + '&' + 'apikey=45930b6e' )
            .then( res => res.data);
    }
}