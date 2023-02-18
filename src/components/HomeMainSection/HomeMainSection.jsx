import react from 'react'
import './HomeMainSection.css'
import AddBuilding from '../AddBuilding/AddBuilding'

function HomeMainSection({
    click,
    isBlur,
    turnOffBlur
}){
    return(
        <>
            {
                isBlur && (
                    <div className='homemainsection-overlay'>
                        <AddBuilding
                            turnOffBlur={turnOffBlur}
                        />
                    </div>
                )
            }
            <div className={click ? 'homemainsection-hide' : 'homemainsection-main'}>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
            <h1>This is Home Main Section</h1>
        </div>
        </>
    );
}

export default HomeMainSection;