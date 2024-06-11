const moment = require('moment');

const isBusinessHours = (req, res, next) => {
const now = moment();
const isWeekend = now.day() === 0 || now.day() === 6;
const isWithinBusinessHours = !isWeekend && now.hour() >= 9 && now.hour() < 17;

if (!isWithinBusinessHours) {
    res.status(400).send('Lapplication est accessible uniquement pendant les heures ouvrables (du lundi au vendredi, de 9h à 17h).');
    return;
}

next();
};

module.exports = { isBusinessHours };
