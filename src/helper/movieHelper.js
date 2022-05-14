const axios = require("axios");

class MovieHelper{
    async movielist(page){
        try{
            const data = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=" + process.env.APP_TMDB_KEY+ "&page=" + page);
            return data.data
        }catch(error){
            console.log(error)
        }
    }

    async movieupcoming(page){
        try{
            const data = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=" + process.env.APP_TMDB_KEY+ "&page=" + page);
            return data.data
        }catch(error){
            console.log(error)
        }
    }

    async moviedetail(id){
        try{
            const data = await axios.get("https://api.themoviedb.org/3/movie/"+ id +"?api_key=" + process.env.APP_TMDB_KEY);
            return data.data
        }catch(error){
            console.log(error)
        }
    }
}

module.exports = MovieHelper;