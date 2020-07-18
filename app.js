const express = require('express')

const path = require('path')
const PORT = process.env.PORT || 5000

const app = express();

  // .use(express.static(path.join(__dirname, 'public')))

// 템플릿 엔진 세팅
app.set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .engine('.html',require('ejs').renderFile)
 
// 리스닝시
app.listen(PORT, () => console.log(`Listening on http://localhost:${ PORT }`))


const siteData ={
  title : "nodeJs",
  //
}

// 라우터 랜더링
app.get('/', (req, res) => {
  res.render('pages/index',{title: "HOME |" + siteData.title})
})

app.get('/about',(req,res)=>{
  res.render('pages/about',{title: "About |" + siteData.title})
})


