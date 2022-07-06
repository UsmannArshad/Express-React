import React,{useEffect} from "react";
import axios from 'axios'
const App=()=>{
  useEffect(()=>{
    console.log("gg")
    axios.get('/api/users').then(response=>{
      console.log(response.data)
    })
})
  return(
    <>
    <div>App</div>
    </>
  )
}

export default App;
