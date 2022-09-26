import React from 'react'

function User(props) {
    return (
                           
                    <tr  className='align-middle mb-4'  key={props.user.id}>               
                        <td>{props.user.name}</td>
                        <td>{props.user.phone}</td>
                        <td>{props.user.mobile}</td>
                        <td>{props.user.address}</td>
                        <td>{props.user.email}</td>
                        <td><button className='btn btn-danger ' type='button' onClick={()=>props.deleteFun(props.user.id)}>Delete</button></td>
                        <td><a className='btn text-white editbtn' type='button' href={`/edit/${props.user.id}`}>Edit</a></td>
                    </tr>            
        
        
        
        
    )
}

export default User