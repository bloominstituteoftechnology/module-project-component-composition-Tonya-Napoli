import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`

function App() {
  const [apod, setApod] = useState()
  useEffect(() => {
    function fetchPhoto() {
      axios.get(URL)
      .then(res =>{
      console.log(res.data)
      setApod(res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
    }
    //fetchPhoto()
   setApod (
     {
       "copyright": "\nBray Falls & \nChester Hall-Fernandez\n",
      "date": "2023-08-22",
      "explanation": "This nebula had never been noted before. Newly discovered nebulas are usually angularly small and found by professionals using large telescopes. In contrast, the Pistachio Nebula was discovered by dedicated amateurs and, although faint, is nearly the size of the full Moon.  In modern times, amateurs with even small telescopes can create long exposures over sky areas much larger than most professional telescopes can see.  They can therefore discover both previously unknown areas of extended emiss...",
       "hdurl": "https://apod.nasa.gov/apod/image/2308/Pistachio_Falls_2952.jpg",
      "media_type": "image",
       "service_version": "v1",
     "title": "The Pistachio Nebula",
       "url": "https://apod.nasa.gov/apod/image/2308/Pistachio_Falls_960.jpg"
     })
  }, [])
  if (!apod) return 'Fetching Photo of the Day'
  return (
    <section>
      <Card
        title={apod.title}
        text={apod.explanation}
        imageURL={apod.url}
        date={apod.date}
      />
      
    </section>
   
  )
}

export default App

//Read through the instructions in the README.md file to build your NASA
//app! Have fun <span role="img" aria-label='go!'>🚀</span>!
