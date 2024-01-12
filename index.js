const allfunction =async(url,config,data)=>{
  return await axios(url,config,data)
} 

//const getapi =()=>{
 // allfunction('https://jsonplaceholder.typicode//.com/posts')
 // .then((res)=>console.log(res.data))
  //.catch((err)=>console.log(err))
//} 
//getapi();

//const postapi =()=>{
  //allfunction('https://jsonplaceholder.typicode.com/posts',{
    //method:'post',
   // data:JSON.stringify({
   // title: 'foo',
    //body: 'bar',
    //userId: 1,
    //})
  //})
  //.then((res)=>console.log(res.data))
  //.catch((err)=>console.log(err))
//} 
//postapi();

//const putapi =()=>{
  //allfunction('https://jsonplaceholder.typicode.com/posts/1',{
   // method:'put',
    //data:JSON.stringify({
    //  id:1,
    //title: 'foo',
    //body: 'bar',
   // userId: 1,
    //})
  //})
//  .then((res)=>console.log(res.data))
  //.catch((err)=>console.log(err))
//} 
//putapi();


//const patchapi =()=>{
 // allfunction('https://jsonplaceholder.typicode.com/posts/1',{
   // method:'patch',
    //data:JSON.stringify({
  //  title: 'foo',
  //  })
//  })
 // .then((res)=>console.log(res.data))
//  .catch((err)=>console.log(err))
//} 
//patchapi();

const deleteapi =()=>{
  allfunction('https://jsonplaceholder.typicode.com/posts/1',{
    method:'DELETE'
  })
  .then((res)=>console.log(res.data))
  .catch((err)=>console.log(err))
} 
deleteapi();