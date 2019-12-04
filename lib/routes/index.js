var express = require('express');
var router = express.Router();

//message array
const message=[
  {
    text:"Hi",
    user:"root",
    added:new Date()
  },
  {
    text:"Heyy",
    user:"user",
    added:new Date()
  }
];
/* GET home page. */
//root path that will render the index file from the view
router.get('/', function(req, res,next) {
  res.render('index', { title:'Mini-message-board' ,message:message }); //making the message available to template along with the title
});

router.get('/new',function(req,res,next){
  res.render('form');
})

//using the data from the form
app.post('/new',function(req,res,next){
  message.push({
    text: req.body.messagetext,
    user: req.body.messageuser,
    added: new Date()
  })
  res.redirect('/'); //send user back to the index page after submitting the form
})



module.exports = router;
