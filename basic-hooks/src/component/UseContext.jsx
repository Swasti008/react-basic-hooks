import { useContext ,useState,useEffect} from "react";
import React from "react";
import { ToggleTheme } from "../App";

function UseContext(){
  const theme = useContext(ToggleTheme);
  const [like ,setLike]=useState(0);
  const [Content,showContent]=useState(false)
  const themeStyle = {
    backgroundColor: theme?"black":"white",
    color:theme?"pink":"blue",
    padding:"60px",
    margin:"60px"
  }
  const handleLike =()=>{
    setLike(like+1)
  }
    useEffect(()=>{
    alert("Content button clicked.")
  },[])
  const handleContent =()=>{
    showContent((prev)=>!prev)
  }

  return(
    <div style={themeStyle}>
    {Content && <div>Amidst the city's chaos, a quaint cafe stood, its ivy-covered walls offering solace. Inside, the air hummed with the aroma of coffee and pastries, enveloping patrons in warmth. In this hidden sanctuary, time slowed, offering a moment of bliss amidst the rush outside.</div>}
    <button onClick={handleContent}>Content</button>
      <p>{like}</p>
      <button onClick={handleLike}>Like</button>
    </div>
  )
}

export default UseContext;