const express = require("express");
const app = express();
//const path = require('path');
//const { isBusinessHours } = require('./middleware/businessHours'); // Fonction pour vérifier les horaires d'ouverture



// Configuration du moteur de template EJS
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// Définition des routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Accueil' });
});


app.get('/services', (req, res) => {
    res.render('services', { title: 'Nos services' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contactez-nous' });
});


app.listen(3000, ()=>{
    console.log("Mon serveur écoute sur le port 3000!")
}); 


//const moment = require('moment');

const isBusinessHours = (req, res, next) => {
const now = moment();
const isWeekend = now.day() === 0 || now.day() === 6;
const isWithinBusinessHours = !isWeekend && now.hour() >= 9 && now.hour() < 17;

if (!isWithinBusinessHours) {
    res.status(400).send('L application est accessible uniquement pendant les heures ouvrables (du lundi au vendredi, de 9h à 17h).');
    return;
}

next();
};

module.exports = { isBusinessHours };
