var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index-2', { title: 'Express' });
});

router.get('/analytics',function(req,res,next){
  res.render('analytics',{title:'Express'});
});

router.get('/lock',function(req,res,next){
  res.render('lock',{title:'Express'});
});

router.get('/login',function(req,res,next){
  res.render('login',{title:'Epress'});
});

router.get('/password-recovery',function(req,res,next){
  res.render('password-recovery',{title:'Epress'});
});

router.get('/product-edit',function(req,res,next){
  res.render('product-edit',{title:'Epress'});
});

router.get('/product-list',function(req,res,next){
  res.render('product-list',{title:'Epress'});
});

router.get('/product-payment',function(req,res,next){
  res.render('product-payment',{title:'Epress'});
});

router.get('/register',function(req,res,next){
  res.render('register',{title:'Epress'});
});

router.get('/User',function(req,res,next){
  res.render('User',{title:'Epress'});
});

router.get('/widgets',function(req,res,next){
  res.render('widgets',{title:'Epress'});
});


module.exports = router;
