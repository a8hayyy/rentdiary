import React from "react"
import './MainSection.css'
import Floor from '../../components/Floor/Floor'

function MainSection({
    id,
    floor,
    click,
}) {
    return(
        <div className='mainsection-main'>
            <div className="mainsection-top">
                <h1>Building Name: {id}</h1>
                <i class="fa-solid fa-gear fa-2x"></i>
            </div>
            <div className="mainsecgtion-floor-container">
            <Floor
                number='2'
                rooms='7'
            />
            <Floor
                number='1'
                rooms='5'
            />
            <Floor
                number='Ground'
                rooms='5'
            />
            <Floor
                number='Basement'
                rooms='5'
            />
            </div>
        </div>
    );
}

export default MainSection;