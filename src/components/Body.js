import React from 'react'
import User from './User'

function Body(props) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                <table class="table">
                <thead className='table-borderless'>                        
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Mobile </th>
                        <th scope="col">Address </th>
                        <th scope="col">Mail </th>
                        <th colSpan={2} scope="col">Actions </th>
                </thead>
                <tbody>
                    
                        {props.userData.map((user)=>(
                            <User key={user.id} user={user} deleteFun={props.deleteFun}/>
                            ))
                        }
                    
                </tbody>
                </table>  
                </div>
            </div>
        </div>
    )
}

export default Body