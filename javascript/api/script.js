fetch("https://randomuser.me/api/")
.then((rawdata)=> rawdata.json())
.then((data)=>console.log(data.results[0].name))
.catch((err)=>console.log(err))