const {tvShows, actionTvShows,newTvShows} = require('../models/tvShows')



exports.tvShows =(req, res)=>{
    res.send(tvShows)
}

exports.actionTvShows =(req, res)=>{
    res.send(actionTvShows)
}

exports.newTvShows =(req, res)=>{
    res.send(newTvShows)
}

exports.getTvShow =(req, res)=>{
   const tvShowId = req.params.tvShowId
   const findTvShow = tvShows.find((item)=>item.id == tvShowId)
   res.send(findTvShow)

}
