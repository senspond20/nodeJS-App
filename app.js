const express = require('express')
const path = require('path');
const { REPL_MODE_SLOPPY } = require('repl');
const PORT = process.env.PORT || 5000
const app = express();

const siteData ={
  title : "nodeJsApp",
  //
  address : "서울특별시 역삼동 테헤란로"
}


// static path 지정
app.use(express.static(path.join(__dirname, 'public')))

// view 템플릿 엔진 set
app.set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  // .engine('.html',require('ejs').renderFile)
  .use(require('express-ejs-layouts'))
  .set('layout', 'layouts/layout')
  .set("layout extractScripts", true); 

  // listening
app.listen(PORT, () => console.log(`Listening on http://localhost:${ PORT }`))


// 라우터 랜더링

app.get('/getym',(req,res)=>{

  const obj ={
    year : req.param('year').slice(0,-1),
    month : req.param('month').slice(0,-1)
  }
  console.log(obj.year + "," + obj.month);
  res.json(obj); 
});


app.get('/cal/:id/:date',(req,res)=>{
  res.json(req.params);
  
});


const today = new Date();
// 0. Home 
app.get('/', (req, res) => {
  app.locals.styleNo = 0;
  // app.locals.months = today.getMonth()+1;
   res.render('pages/index',{
    title: "HOME | " + siteData.title,
    year : today.getFullYear(),
    month : today.getMonth()+1,
    date : today.getDate()
  })  
});


//1. About
app.get('/about',(req,res) =>{
  app.locals.styleNo = 1;
  res.render('pages/about', {
       title: "About | " + siteData.title,
       address : siteData.address,

   })

});
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// login
app.post("/user/login", function(req,res){
  const obj ={
    inputId : req.body.username,
    inputPwd :req.body.password,
  }

  console.log(`${obj.inputId},${obj.inputPwd}`);
  // res.json(obj); 
  // res.send('성공');
  if(obj.inputId == 'admin' && obj.inputPwd == '1234'){
     console.log('비밀번호 일치');
     res.send('ok')
  }else{
     console.log('비밀번호 불일치');
     res.send('fail');
  }
  // res.redirect("/");
});