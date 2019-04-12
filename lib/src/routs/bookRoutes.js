const express = require('express');
const booksRouter = express.Router();
const bookdata = require('../model/bookdata');



function router(nav) {
    // var books=[

    //     {
    //         title:"da vinci code",
    //         genre:"Mystery thriller",
    //         author:"Dan brown"
    //     }
    //     ,
    //     {
    //         title:"alchemist",
    //         genre:"novel",
    //         author:"Paulo Coelho"
    //     }
    //     ,
    //     {
    //         title:"half girlfriend",
    //         genre:"love",
    //         author:"chetan"
    //     }
    //     ,
    //     {
    //         title:"Baalyakaala saghi",
    //         genre:"novel",
    //         author:"Basheer"
    //     }
    //     ,
    //     {
    //         title:"Balarama",
    //         genre:"kids item",
    //         author:"malayala manorama"
    //     }
    // ]


    // var contents=[

    //     {
    //         title:"The Da Vinci Code is a 2006 American mystery thriller film directed by Ron Howard, written by Akiva Goldsman, and based on Dan Brown's 2003 best-selling novel of the same name. The first in the Robert Langdon film series, the film stars Tom Hanks, Audrey Tautou, Sir Ian McKellen, Alfred Molina, Jürgen Prochnow, Jean Reno, and Paul Bettany. In the film, Robert Langdon, a professor of religious iconography and symbology from Harvard University, is the prime suspect in the grisly and unusual murder of Louvre curator Jacques Saunière. In the body, the police find a disconcerting cipher and start an investigation.[3] A noted British Grail historian named Sir Leigh Teabing tells them that the actual Holy Grail is explicitly encoded in Leonardo da Vinci's wall painting, The Last Supper. Also searching for the Grail is a secret cabal within Opus Dei, an actual prelature of the Holy See, who wish to keep the true Grail a secret to prevent the destruction of Christianity"


    //     }
    //     ,
    //     {
    //         title:"alchemist"
    //     }
    //     ,
    //     {
    //         title:"half girlfriend"
    //     }
    //     ,
    //     {
    //         title:"Baalyakaala saghi"
    //     }
    //     ,
    //     {
    //         title:"Balarama"
    //     }
    // ]
    booksRouter.route('/')
        .get((req, res) => {

            bookdata.find()
                .then((books) => {
                    res.render
                        ('books',
                        {
                            nav,
                            title: "Books", books
                        }

                        );
                });
        });
    booksRouter.route('/:id')

        .get((req, res) => {

            const id = req.params.id;
            bookdata.findOne({ _id: id })
                .then((book) => {

                    res.render('book',
                        {
                            nav,
                            title: "Book",
                            book
                        });
                });

            });   
            
            booksRouter.route('/single/root')
                .get((req, res) => {

                    res.send("hello single  rrot books");
                });

            return booksRouter;
        
            }
    
module.exports = router;
        