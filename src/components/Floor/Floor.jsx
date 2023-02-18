import react from 'react'
import './Floor.css'
import Room from '../Room/Room';

function Floor({
    number,
    rooms
}) {
    return(
        <div className='floor-main'>            
            <div className='floor-number'>
                <p>{number}{(number==='Basement') ? '' : 'floor'}</p>
            </div>
            <div className='floor-room-container'>
            <Room 
                roomNo={6}
            />
            <Room 
                roomNo={7}
            />
            <Room 
                roomNo={8}
            />
            <Room 
                roomNo={9}
            />
            <Room 
                roomNo={10}
            />
            <Room 
                roomNo={11}
            />
            </div>
        </div>
    );
}

export default Floor;