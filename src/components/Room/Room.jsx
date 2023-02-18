import react from 'react'
import './Room.css'

function Room({
    roomNo,
}) {
    return(
        <div className='room-main'>
            {roomNo}
        </div>
    );
}

export default Room;