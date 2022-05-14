const movieHelper = require('../helper/movieHelper')

class MovieController{
    async getMovieList(req, res){
        try{
            const {page} = req.body;
            const movielist = new movieHelper()
            const result = await movielist.movielist(page);
            res.status(200).json({
                message: "Success",
                data: result
            })
        }catch (error){
            res.status(500).json(error)
        }
    }

    async getMovieUpComing(req, res){
        try{
            const {page} = req.body;
            const movielist = new movieHelper()
            const result = await movielist.movieupcoming(page);
            res.status(200).json({
                message: "Success",
                data: result
            })
        }catch(error){
            res.status(500).json(error)
        }
    }

    async getMovieDetail(req, res){
        try{
            const {id} = req.body;
            const movielist = new movieHelper()
            const result = await movielist.moviedetail(id);
            res.status(200).json({
                message: "Success",
                data: result
            })
        }catch(error){
            res.status(500).json(error)
        }
    }
}

module.exports = MovieController