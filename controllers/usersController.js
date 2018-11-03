const db = require("../models");
// const passport = require('../passport');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

module.exports = {

    create: function(req, res) {
      db.Users
        .findOne({username: req.body.username})
        .then(dbUser => {
            console.log("user found");
            console.log(dbUser);
            if (dbUser == null) {
            db.Users
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
          } else {
            console.log("user exists already");
              res.json({
                  validate: false,
                 status: "422",
              
              })
            }
        })
        .catch(err =>{ 
            res.json({
              validate: false,
             status: "422",
          
          });
          
          });
    },

    login: function (req, res) {
        db.Users
           .find({username: req.body.username, password: req.body.password})
           .then(dbUser => {
             console.log("user found");
             console.log(dbUser);
             if (dbUser !== null) {
               let user = dbUser.username;
               jwt.sign({ user }, 'secretkey', { expiresIn: '300s' }, (err, token) => {
                console.log(dbUser)
                   res.json({
                       validate: true,
                       message: 'Welcome ' + dbUser.username,
                       token: token,
                       id: dbUser._id,
                       username: dbUser.username
                   });
               });
           } else {
             console.log("Email Not found");
               res.json({
                   validate: false,
                  status: "422",
               
               });
           }
           
           })
           .catch(err =>{ 
             res.json({
               validate: false,
              status: "422",
           
           });
           
           });
          },


    // let user = dbUser.username;
    // jwt.sign({ user }, 'secretkey', { expiresIn: '300s' }, (err, token) => {
    //     console.log("token: " + token);
    //     res.json({
    //         validate: true,
    //         message: 'Welcome ' + dbUser.username,
    //         token: token,
    //         id: dbUser._id,
    //         username: dbUser.username
    //     });
    // });
    

    // authenticate: function (req, res) {
    //     //   passport.authenticate('local')
    //     //   console.log('logged in', req.user);
          
    //     var userInfo = {
    //           username: req.user.username
    //       };
    //       res.send(userInfo);
    // }

};

