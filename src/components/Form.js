import React from 'react'
import {useState} from 'react'


function Form(props) {

    const [newName,setNewName] = useState('')
    const [newPhone,setNewPhone] = useState('')
    const [newMobile,setNewMobile] = useState('')
    const [newEmail,setNewEmail] = useState('')
    const [newAddress,setNewAddress] = useState('')

    const [nameError,setNameError] = useState('')

    const checkInputs = ()=>{
        if(!newName){
            setNameError("Please Enter Name")
            return
        }else if(newName.length < 3){
            setNameError("name must be over 2 letters")
        }
        else if(!newPhone){
            alert("Please Enter Phone")
            return
        }
        else if(!newMobile){
            alert("Please Enter Mobile")
            return
        }
        else if(!newEmail){
            alert("Please Enter Email")
            return
        }
        else if(!newAddress){
            alert("Please Enter Adress")
            return
        }

        props.addContact({
            
            name:newName,
            phone:newPhone,
            mobile:newMobile,
            address:newAddress,
            email:newEmail
        })

        setNewName('')
        setNewPhone('')
        setNewMobile('')
        setNewEmail('')
        setNewAddress('')
    }

    return (
        <div className="container">
            <div className="">
                <form className='form-group mt-5 '>
                    <h3 className='mb-3 headL mb-4'>Add a New Contact</h3>
                    <div className='row mb-2'>
                        <label htmlFor="name" className='col-1'>Name: </label>
                        <input type="text" className='control-form col-5'
                        value={newName} onChange={(e)=> setNewName(e.target.value)}
                        />
                        { (nameError.length > 0) && <div className='text-danger ml-4' >{nameError}</div>}
                    </div>
                    <div className='row mb-2'>
                        <label htmlFor="phone" className='col-1'>Phone: </label>
                        <input type="text" className='control-form col-5'
                        value={newPhone} onChange={(e)=> setNewPhone(e.target.value)}
                        />
                    </div>
                    <div className='row mb-2'>
                        <label htmlFor="mobile" className='col-1'>Mobile: </label>
                        <input type="text" className='control-form col-5'
                        value={newMobile} onChange={(e)=>setNewMobile(e.target.value)}
                        />
                    </div>
                    <div className='row mb-2'>
                        <label htmlFor="email" className='col-1'>Email: </label>
                        <input type="text" className='control-form col-5'
                        value={newEmail} onChange={(e)=> setNewEmail(e.target.value)}
                        />
                    </div>
                    <div className='row mb-2'>
                        <label htmlFor="address" className='col-1'>Address: </label>
                        <input type="text" className='control-form col-5'
                        value={newAddress} onChange={(e)=>setNewAddress(e.target.value)}
                        />
                    </div>
                    <button className='btn btn-primary mt-3' type='button'
                    onClick={()=>checkInputs()}
                    >Add</button>
                </form>
            </div>
        </div>
    
    )
}

export default Form