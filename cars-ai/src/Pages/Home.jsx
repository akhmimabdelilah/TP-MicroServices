import Sidebar from '../Components/Sidebar';
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import { useState } from 'react'
function Home() {
 const [count, setCount] = useState(0)

  return (
   
 <div className="container-fluid flex">
        <div className="row">
          {/* Sidebar */}
 <Sidebar/>
          {/* Main Content */}
          <main className="col-md-10 ms-sm-auto col-lg-10 px-md-4">
            
 <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello MicroServices</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
          </main>
        </div>
      </div>
    
  );
}

export default Home;
