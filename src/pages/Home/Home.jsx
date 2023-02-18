import React, { useState } from "react"
import './Home.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import Topbar from '../../components/Topbar/Topbar'
import HomeMainSection from '../../components/HomeMainSection/HomeMainSection'

function Home() {  
    const [click, setClick] = useState(false);
    const[blur, setBlur] = useState(false);

    const turnOffBlur = () => setBlur(false);
    const turnOnBlur = () => setBlur(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className='home-main'>
            <div className='home-head'>
                <Topbar 
                  click={click===true}
                  handleClick={handleClick}
                  closeMobileMenu={closeMobileMenu}
                />
            </div>
            <div className='home-body'>
                <div className="home-body-left">
                  <LeftSidebar
                    click={click===true}
                    turnOnBlur={turnOnBlur}
                    handleClick={handleClick}
                    closeMobileMenu={closeMobileMenu}
                    />
                </div>
                <div className="home-body-right">
                  <HomeMainSection
                    click={click===true}
                    isBlur={blur===true}
                    turnOffBlur={turnOffBlur}
                  />
                </div>
            </div>
        </div>
    );
}

export default Home;