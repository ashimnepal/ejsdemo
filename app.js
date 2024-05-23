	const express = require('express')
	const app = new express()
	//We need to builtin package path to handle the file paths
	const path = require('path')
	// To use public folder for all static resources use this line of code
	app.use(express.static('public'))

// set the view engine as ejs for using ejs file
app.set('view-engine', 'ejs')


	const port = 4000 //Giving out the port number
	app.listen(port, ()=>{
	console.log(`App listening on port ${port}`)
	})


// create a route for rendering home.ejs file

app.get('/home',(req,res)=>{
    res.render('home.ejs', {name:"Conestoga Students"})
})


// create a route for rendering home.ejs file

app.get('/about',(req,res)=>{
    res.render('about.ejs')
})


// create a route for rendering home.ejs file

app.get('/support',(req,res)=>{
    res.render('support.ejs')
})

// create a route for rendering home.ejs file

app.get('/contact',(req,res)=>{
    res.render('contact.ejs')
})
   