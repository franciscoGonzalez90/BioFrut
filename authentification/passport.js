// config/passport.js

// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;

// load up the user model
var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');

// creando conexion de Base de Datos
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:''

});

connection.query('USE gestion');

// expose this function to our app using module.exports
module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
     
        done(null, user.IdPerfil);
        
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        connection.query("SELECT usuario.nombre, usuario.apellido, perfil.IdPerfil, perfil.Login, perfil.Password, cargo.nombre as 'cargo' FROM usuario,perfil,cargo WHERE usuario.IdPerfil=perfil.IdPerfil AND usuario.IdCargo=cargo.IdCargo AND perfil.IdPerfil="+ id, function(err, rows){
            done(err, rows[0]);
        });
    });

 

    passport.use(
        'local-login',
        new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'username',
            passwordField : 'password',
            passReqToCallback: true
       // allows us to pass back the entire request to the callback
        },
        function(req, username, password, done) { // callback with email and password from our form
            connection.query("SELECT usuario.nombre, usuario.apellido, perfil.IdPerfil, perfil.Login, perfil.Password, cargo.nombre as 'cargo' FROM usuario,perfil,cargo WHERE usuario.IdPerfil=perfil.IdPerfil AND usuario.IdCargo=cargo.IdCargo AND perfil.Login='"+username+"';",function(err, rows){
               
                // if(rows[0].Password !== undefined || rows[0].Password !== null){
                var hash = bcrypt.hashSync(rows[0].Password);
                // }
                // console.log(bcrypt.compareSync(password,rows[0].Password));
                // if (err){
                //     return done(err);
                // }
                if (!rows.length) {
                    return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
                }

                // if the user is found but the password is wrong
                if (!(bcrypt.compareSync(password,hash))){

                    return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
              
              }
               
                // all is well, return successful user
                return done(null, rows[0]);
                
            });
        })
    );



    //  passport.use(
    //     'api-login',
    //     new LocalStrategy({
    //         // by default, local strategy uses username and password, we will override with email
    //         usernameField : 'username',
    //         passwordField : 'password',
    //         passReqToCallback : true // allows us to pass back the entire request to the callback
    //     },
    //     function(req, username, password, done) { // callback with email and password from our form
    //         connection.query("select * from perfil where Login = '" + username + "';",function(err, rows){
    //             var hash = bcrypt.hashSync(rows[0].Password);
    //             // console.log(bcrypt.compareSync(password,rows[0].Password));
    //             if (err){
    //                 return done(err);
    //             }
    //             if (!rows.length) {
    //                 return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
    //             }

    //             // if the user is found but the password is wrong
    //             if (!(bcrypt.compareSync(password,hash))){

    //                 return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
              
    //         }
    //             // all is well, return successful user
    //             return done(null, rows[0]);
    //             // console.log(rows[0].password);
    //         });

    //     })
    // );
};
