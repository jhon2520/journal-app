import React from 'react';
// import NothingSelected from './NothingSelected';
import SideBar from './SideBar';
import NoteScreen from '../notes/NoteScreen';

const JournalScreen = () => {
    return (
        <div className='journal__main-context'>
            <SideBar/>

            <main>
                {/* <NothingSelected/> */}
                <NoteScreen/>
            </main>
        </div>
    )
}

export default JournalScreen