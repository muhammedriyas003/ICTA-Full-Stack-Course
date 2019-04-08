

const x=require('express');

var app=x();

app.get('/',(req,res)=>{

    res.send('hello.html');
});

app.get('/home',(req,res)=>{

    res.send('welcome to home');
})

app.get('/contact',(req,res)=>{

    res.send('{"name":"tom","age":23},,{"name":"riyas","age":56},,{"name":"manu","age":27},{"name":"kali","age":23}]');
})
app.listen(3000);

