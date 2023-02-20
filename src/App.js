import './App.css';
import React, {useState} from 'react'

//data
const Data = [
  {
      id:0,
      quote:
      `"we all need people who will give us feedback,thats how we improve..."`,
      author: '-Bill Gate'
  },
  {
      id:1,
      quote:
      `"Live goes on, stay pushing no matter what it takes..."`,
      author: '-the streets'
  },
  {
      id:2,
      quote:
      `"God bless our every day input,amen..."`,
      author: '-Inspiration 101'
  },
  {
      id:3,
      quote:
      `"everyday we wake up with the hope of a better day..."`,
      author: '-hope 101'
  },
  {
      id:4,
      quote:
      `"The only way to do great work is to love what you do..."`,
      author: '-Bill Gate'
  },
  {
      id:5,
      quote:
      `"The only way to do great work is to love what you do..."`,
      author: '-Food flex'
  },
  {
      id:6,
      quote:
      `"Test mad money first, then tell me if money is'nt everything..."`,
      author: '-Dey play'
  },
]


function App() {

  const[essay,setessay] = useState({
    quotes:'Test mad money first, then tell me if money isnt everything...',
    author:'-Dey play'
  })

  const handleclick = (e)=>{
    const Random = Math.floor(Math.random()*Data.length);
    setessay({
      quotes:Data[Random].quote,
      author:Data[Random].author
    })
  }
  
  return <>
       <div className='quote-container'>
         <h1 className="heading">Quotes</h1>
        <div className="quotedom">
            <p className="quotes"
             type="quote"
             name='quote'
             id="quote"
             value={essay.quotes}>{essay.quotes}</p> 

            <h4 className="author"
            type="author"
            name='author'
            id="author"
            value={essay.author}>{essay.author}</h4>
        </div>
        <button className="btn" value='submit' onClick={handleclick}>New Quotes</button>
       </div>
  </>
}


export default App;
