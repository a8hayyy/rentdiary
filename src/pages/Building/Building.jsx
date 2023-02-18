import react, {useState} from 'react'
import './Building.css'
import data from '../../assets/list'
import { useParams } from 'react-router-dom'
import Topbar from '../../components/Topbar/Topbar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import MainSection from '../../components/MainSection/MainSection'

function Building() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    let { id } = useParams();
    
    return(
      <div className='building-main'>
      <div className='building-head'>
          <Topbar 
            click={click===true}
            handleClick={handleClick}
            closeMobileMenu={closeMobileMenu}
          />
      </div>
      <div className='building-body'>
          <div className="building-body-left">
            <LeftSidebar
              click={click===true}
              handleClick={handleClick}
              closeMobileMenu={closeMobileMenu}
            />
          </div>
          <div className="building-body-right">
            <MainSection
              id={id}
              click={click===true}
            />
          </div>
      </div>
  </div>
    );
}

export default Building;