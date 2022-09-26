import React  from 'react'
import Nav from './Nav'
import {useParams} from 'react-router-dom'

function About() {
    // let {id} = useParams();
    
    return (
        
        <div>
            <Nav />
            <div className='content p-4'>
                <h4 className='display-6 headL'>Version : 1.0.0</h4>
                <h4 className='display-6 headL'>Coded by : Radwa Eid</h4>
                <h4 className='display-6 headL'>Email : radwaeid@gmail.com</h4>
                {/* <h4 className='display-6'>Id : {id}</h4> */}
            </div>
        </div>
    )
}

export default About