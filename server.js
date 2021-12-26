const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000; 
const Budget = require('./models/budget');

//Static
app.use(express.static("public"));
//Body Parser
app.use(express.json());
app.use(express.urlencoded());

//Index
app.get('/budget', (req, res)=> {
    // res.send('hello world');
    res.render("index.ejs", {Budget: Budget});
})

app.get('/budget/new', (req, res)=> {
    // res.send('hello world');
    res.render("new.ejs");
})

//Show
app.get('/budget/:index', (req, res)=> {
    const item = Budget[req.params.index];
    // res.send('hello world');
    res.render("show.ejs", {item: item});
})

app.post('/newbudget', (req,res)=> {
    console.log(req.body);
    Budget.push(req.body);
    console.log(Budget);
    res.redirect('/budget');
})

app.listen(PORT, ()=>{console.log('listening on port ', PORT)});