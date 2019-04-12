const express=require('express');
const chalk=require('chalk');
const path=require('path');



var app=express();const nav=[
    {link:'/books',title:"BOOKS"},
    {link:'/author',title:"AUTHOR"},
    {link:'/addbook',title:"ADMIN"}
];
const booksRouter = require('./src/routs/bookRoutes')(nav);
const adminRouter=require('./src/routs/adminrouts')(nav);

app.set('views','./src/views');
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,"/public")));
app.use('/books',booksRouter);
app.use('/addbook',adminRouter);



app.get('/',(req,res)=>{

    res.render
    ('index',
    {
        nav,
        title:"Library"
    });

});

app.listen(3008,()=>{
    console.log('listening to port '+chalk.red(3008));
});