import { useState } from 'react'
import austinEliteLogo from '/logo.png'
import './App.css'

import Gallery from './components/Gallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="introCard">
        <a href="https://vitejs.dev" target="_blank">
          <img src={austinEliteLogo} className="logo" alt="Austin Elite logo" />
        </a>
        <h1>Austin Elite <br></br>Cleaning Solutions</h1>
      </div>

      <div className="ownersCard">
        <h2 style={{fontWeight: '900', fontSize: '2.3em'}}>We're Macarena and Griselda</h2>
        <div style={{display: 'flex'}}>
          <img src={"owners.jpg"} className="owenersImg" alt="Macarena and Griselda Owners of Austin Elite"/>
          <div style={{ backgroundColor: '#CAF0F8', 
                        borderRadius: '36px',
                        width: '100%', 
                        padding: '2em', 
                        marginLeft: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'left'}}>
          <h4>We're proud Austinites, founders, and dedicated cleaners! Our journey in building this business is rooted in our commitment to family and the Austin community. As both owners and the primary cleaners, we treat each home with the same care as our own, delivering quality you can trust. Beyond cleaning, we also operate a daycare, so we know a thing or two about maintaining a welcoming and spotless environment. By keeping our team family-only, we’re able to guarantee that everyone shares the same commitment to hard work and integrity.</h4>
          </div>
        </div>
        <h4 style={{  backgroundColor: '#90E0EF',
                      borderRadius: '36px',
                      padding: '2em'
                  }}>
        "With us, you’ll always get the best cause we don’t believe in doing anything less!" 
        </h4>
      </div>

      <Gallery/>

      <div className='services'>
        <h2 style={{fontWeight: '900', fontSize: '2.3em'}}>What do we do?</h2>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to poopie poo
        </p>
      </div>
      <p className="read-the-docs">
        2024 Austin Elite & LoneStarDev. All Rights Reserved.
      </p>
    </>
  )
}

export default App
