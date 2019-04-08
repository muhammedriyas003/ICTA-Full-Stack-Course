

const x=require('express');

var app=x();

app.get('/',(req,res)=>{

    res.send('hello.html');
});

app.get('/home',(req,res)=>{

    res.send('welcome to home');
})

app.get('/contact',(req,res)=>{

    res.send('contact details');
})
app.listen(3000);

