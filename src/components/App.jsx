import React from 'react';
import Landing from './pages/Landing';
import About from './pages/About'

import './assets/styles/main.css'

function App(props) {
    return (
        <div className='d-flex' style={{width: '80vw'}}>
            {/* <Landing /> */}
            <About />
        </div>
    );
}

export default App;