const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    console.log(`Sup, yo, dey be lookin' at this site...`);
    res.locals.title = 'Ingenious | home';    
    res.render('home');
})

app.get('/services', (req, res) => {
    console.log(`Dey lookin' at services page now, yo...`)
    res.locals.title = 'Ingenious | services'; 
    res.render('services');
})

app.get('/about', (req, res) => {
    console.log(`Now dey lookin' at what you're all about...`)
    res.locals.title = 'Ingenious | about'; 
    res.render('about');
})

app.get('/contact', (req, res) => {
    console.log(`Looks like dey might want to be gettin' in contact, yo...`)
    res.locals.title = 'Ingenious | contact'; 
    res.render('contact')
})

app.listen(port, () => {
    console.log(`Ingenious app listening on port ${port}...`)
})