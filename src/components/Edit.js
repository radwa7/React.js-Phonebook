import React from 'react'
import {useState , useEffect} from 'react'
import {useParams , useNavigate} from 'react-router-dom'
import Nav from './Nav'


function Edit() {

    const [newName,setNewName] = useState('')
    const [newPhone,setNewPhone] = useState('')
    const [newMobile,setNewMobile] = useState('')
    const [newEmail,setNewEmail] = useState('')
    const [newAddress,setNewAddress] = useState('')

    const [nameError,setNameError] = useState('')

    const {id} = useParams();
    const naviagte = useNavigate();

    useEffect(() => {
        const getUser = async (id)=>{
            const res = await fetchUser(id)
            setNewName(res.name)
            setNewPhone(res.phone)
            setNewMobile(res.mobile)
            setNewAddress(res.address)
            setNewEmail(res.email)

        }
        getUser(id)
    }, [])

    const fetchUser = async (id)=>{
        const res = await fetch(`http://localhost:5000/users/${id}`)
        const data = await res.json()
        return data
    }
    
    const editContact = async (contact)=>{
        const res = await fetch(`http://localhost:5000/users/${contact.id}`,
        {
            method: 'PUT',
            headers : {
            'content-type' : 'application/json'
            },
            body : JSON.stringify(contact)
        })
        
        naviagte('/')
    }

    const checkInputs = (id)=>{
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

        editContact({
            
            id:id,
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
        <div>
            <Nav />
            <div className="container mt-5 mb-5">
                <div className="">
                    <form className='form-group mt-4 editForm'>
                        <h3 className='mb-3'>Edit Contact</h3>
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
                        <button className='btn btn-primary mt-4' type='button'
                        onClick={()=>checkInputs(id)}
                        >Save</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Edit