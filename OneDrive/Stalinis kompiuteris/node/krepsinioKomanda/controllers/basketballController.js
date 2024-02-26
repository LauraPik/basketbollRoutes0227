const fs  = require('fs');
const Players = require('./../models/playersModule');
const { match } = require('assert');
const APIFeatures = require('./../utilities/apiTools');

exports.checkBody = (req, res, next)=>{

    if(!req.body.firstname || !req.body.lastname){
      return res.status(400).json({
        status: 'Failed',
        message:"Missing name and lastname"
      })
    }
  
    next()
  }

  exports.aliasTop10Players = (req, res, next)=>{
    req.query.limit = '10';
    req.query.sort = "-ranking, lastname";
    req.query.fields = "name, lastname, team, ranking";
    next();
  }

  exports.getAllPlayers = async(req, res)=>{
    try{
        const playersData = new APIFeatures(Players.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate()

        const players = await playersData.query
        res
      .status(200).json({
        status: "sucess",
        results: players.length,
        data: {
          players
        },
      });

    }catch(err){
        res.status(404).json({
            status: 'failed',
            message: err.message
          })

    }
  }

exports.createPlayer = async(req, res)=>{
    
        try {
          const newPlayer = await Players.create(req.body);
          res.status(201).json({
            status: "success",
            message: "New player is created",
            data: { 
                newPlayer 
            },
          });
        } catch (err) {
          res.status(404).json({
            status: "failed",
            message: err.message,
          });
        }
    
};

exports.getPlayer = async(req, res)=>{
  // findandupdate mongo db funkcija, nekurta
  try{
    const player = await Players.findById(req.params.id);
    res.status(200)
      .json({
        status: "success",
        message: "player is founded",
        data:{
          player

        }
      });
  }catch(err){
    res.status(404).json({
      status: 'failed',
      message: err
    })
   
  }
};

exports.getTeamOfPlayers = async(req, res)=>{
  // findandupdate mongo db funkcija, nekurta
  try{
    // req.params.teamName paima is routo :teamName
    const player = await Players.find({ team: req.params.teamName });
    console.log(req.params.teamName)
    res.status(200)
      .json({
        status: "success",
        message: "Team is successfully found",
        results: player.length,
        data:{
          player

        }
      });
  }catch(err){
    res.status(404).json({
      status: 'failed',
      message: err.message
    })
   
  }
};