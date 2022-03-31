import { useState } from 'react';
import './App.css';

function App() {
   const [count,setCount] = useState([])

  const handleChange = (e) => {
     setCount(e.split(",").filter((tag)=>tag.trim() !== ""))

  }
  const handleCase = (e) => {
if(e.key == "Enter"){
  setTimeout(()=>{
    e.target.value = "";
  },10)
  randomSelect();
}
  } 
  const randomSelect = () => {
    const interval = setInterval(() => {
      const randomTag = pickRandomTag();
      high(randomTag)
      setTimeout(()=>{
        unhigh(randomTag)
      },100)
    }, 100);

    setTimeout(()=>{
      clearInterval(interval);
      setTimeout(()=>{
        const randomTag = pickRandomTag()
        high(randomTag);
      },100)
    }, 300)
  }
  
const pickRandomTag = () => {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)]
}

const high = (tag) => {
tag.classList.add("highlight")
}
const unhigh = (tag) => {
  tag.classList.remove("highlight")
  }
 

  return (
    <>
    <div className="container">
      <h3>Enter all of the choices divided by a comma (,)
        <br /> press enter when you are done
      </h3>
      <textarea id="textarea" placeholder='enter choice here' onKeyUp={(e)=>handleCase(e)} onChange={(e)=>handleChange(e.target.value)}></textarea>
      <div id="tags">
        {count.map((e)=>{
          return(
          <span className="tag">{e}</span>
          )
        })
        }

      </div>
    </div>
</>
  );
}

export default App;
