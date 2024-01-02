//const fb = require('firebase');
const db = require('../config/configFirebase');
const { ref, set, onValue } = require('firebase/database');


const usersRef = ref(db, '/users');

const fbController = (req, res) => {
    set(usersRef, {
        thien2: "18"

    });
    res.render('test.ejs');
}

const homeController = (req, res) => {

    res.render('test.ejs');
}

module.exports = { homeController, fbController };
