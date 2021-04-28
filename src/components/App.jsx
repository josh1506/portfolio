import React, { useState, useEffect } from 'react';
import ReactHowler from 'react-howler'
import { AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faVolumeMute } from '@fortawesome/free-solid-svg-icons'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'

import About from './pages/About'
import Contact from './pages/Contact';
import Landing from './pages/Landing';
import Projects from './pages/Projects';
import NavBar from './common/NavBar';
import music from './assets/Canals.mp3'
import './assets/styles/main.css'

function App(props) {
    const [onMusicPlay, setOnMusicPlay] = useState(false)
    const [onModalShow, setOnModalShow] = useState(true)
    const [showButton, setShowButton] = useState(false)
    const history = useHistory();

    const handleModalClick = () => {
        history.push('/')
        setOnModalShow(false)
        setOnMusicPlay(true)
    }

    useEffect(() => {
        setTimeout(() => {
            setShowButton(true)
        }, 1000);
    }, [])

    return (
        <React.Fragment>
            <ReactHowler
                src={[music]}
                playing={onMusicPlay}
                loop={true}
                volume={0.5}
            />
            {onModalShow ? 
                <div className='landing-modal'>
                    <h1>My Portfolio</h1>
                    <p>Click the button to open</p>
                    <img src='devPhoto' alt="wallpaper"/>
                    <img src='devPhoto' alt="background"/>
                        {showButton && <button onClick={handleModalClick}>Click here to enter</button>}
                </div> :
                
                <div className='d-flex' style={{width: '80vw'}}>
                    <NavBar />
                        <Route render={({location}) =>
                            <AnimatePresence exitBeforeEnter>
                                <Switch location={location} key={location.key}>
                                    <Route path='/about' component={About}/>
                                    <Route path='/projects' component={Projects}/>
                                    <Route path='/contact' component={Contact}/>
                                    <Route path='/' component={Landing}/>
                                    <Redirect to='/' />
                                </Switch>
                            </AnimatePresence>
                        }/>
                    <FontAwesomeIcon icon={onMusicPlay ? faMusic : faVolumeMute} className="music-btn" size='2x' onClick={() => setOnMusicPlay(!onMusicPlay)}/>
                </div>
            }
        </React.Fragment>
    );
}

export default App;