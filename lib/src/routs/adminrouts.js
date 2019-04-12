const express=require('express');
const adminRouter=express.Router();
const bookdata=require('../model/bookdata');

function router(nav){
    adminRouter.route('/')
.get((req,res)=>{

    res.render
    ('addbook',
    {
        nav,
        title:"Add book",
    }
    
    );
});

adminRouter.route('/add')
.get((req,res)=>{

    var item = {

        title: req.param('title'),
        author: req.param('author'),
        genre:req.param('genre')
    }

    var book = new bookdata(item);
    book.save();

     res.send("inserting books");

});

return adminRouter;
}
module.exports=router;