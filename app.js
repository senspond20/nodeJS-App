const express = require('express')
const path = require('path')
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
const today = new Date();
// 0. Home 
app.get('/', (req, res) => {
  app.locals.styleNo = 0;
   res.render('pages/index',{
    title: "HOME | " + siteData.title,
    year : today.getFullYear(),
    month : today.getMonth()+1,
  })  
});

app.get('/cal/:id/:date',(req,res)=>{
  res.json(req.params);
  
});

//1. About
app.get('/about',(req,res) =>{
  app.locals.styleNo = 1;
  res.render('pages/about', {
       title: "About | " + siteData.title,
       address : siteData.address,

   })

});
