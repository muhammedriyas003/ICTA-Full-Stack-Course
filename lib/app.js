const express=require('express');
const chalk=require('chalk');
const path=require('path');
const booksRouter=express.Router();

var app=express();

app.set('views','./src/views');
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,"/public")));



app.get('/',(req,res)=>{

    res.render
    ('index',
    {
        nav:[
            {link:'/books',title:"BOOKS"},
            {link:'/authors',title:"AUTHORS"}
        ],
        title:"Library"
    });

});

booksRouter.route('/')
.get((req,res)=>{

    res.render
    ('index',
    {
        nav:[
            {link:'/books',title:"BOOKS"},
            {link:'/authors',title:"AUTHORS"}
        ],
        title:"Books"
    });
});

booksRouter.route('/single')
.get((req,res)=>{

    res.send("hello single books");
});

booksRouter.route('/single/root')
.get((req,res)=>{

    res.send("hello single  rrot books");
});

app.use('/books',booksRouter);

app.listen(3008,()=>{
    console.log('listening to port '+chalk.red(3008));
});