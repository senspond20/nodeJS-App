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
  .engine('.html',require('ejs').renderFile)
  .use(require('express-ejs-layouts'));
 
// listening
app.listen(PORT, () => console.log(`Listening on http://localhost:${ PORT }`))


// 라우터 랜더링

// Home
app.get('/', (req, res) => {
  res.render('pages/index',{title: "HOME | " + siteData.title})
});

// About
app.get('/about',(req,res) =>{
  res.render('pages/about', {
       title: "About | " + siteData.title,
    address : siteData.address
   })
});
