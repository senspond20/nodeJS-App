
    const axios = require('axios');
    async function getData(){
        return await axios.get("http://localhost:5000/cal/senshig/2020-07-09");
    }
  
  const data =  getData();
console.log(data);
 
