import react from 'react'
import './AddBuilding.css'

function AddBuilding({
    turnOffBlur,
}) {
    return(
        <div className='addbuilding-main'>
            <i class="fa-solid fa-xmark fa-2x" onClick={turnOffBlur}></i>
            <div className='addbuilding-main-2'>
            <div className='addbuilding-field' >
                <h2>Name</h2>
                <input type="text" placeholder='Enter name' />
            </div>
            <div className='addbuilding-field'>
                <h2 >Basement</h2>
                <input type="checkbox" />
            </div>
            <div className='addbuilding-field'>
                <h2 >Floors</h2>
                <input type="number" placeholder='Enter floors' />
            </div>
            </div>
            <i class="fa-solid fa-square-check fa-2x" onClick={turnOffBlur}></i>
        </div>
    );
}

export default AddBuilding;