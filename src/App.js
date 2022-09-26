import './App.css';
import Body from './components/Body'
import {useState , useEffect } from 'react'
import Form from './components/Form';
import Nav from './components/Nav';
import Pagination from './components/Pagination';

function App() {
  const [showForm,setShowForm] = useState(false)
  const [usersData, setUsersData] = useState([]) 
  const [userDataSearch, setUserDataSearch] = useState([]) 

  const [currnetPage, setCurrentPage] = useState(1)
  const [perPage, setPerPage] = useState(5)

  const [searchWord , setSearchWord] = useState('')

  const last = currnetPage*perPage
  const first = last -perPage
  const newData = userDataSearch.slice(first,last)

  useEffect(()=>{
    const getUsers = async  ()=>{
      const data = await fetchUsers();
      setUsersData(data);
      setUserDataSearch(data);
      
    }
    getUsers();
  },[])
  const fetchUsers = async ()=>{
    const res = await fetch(`http://localhost:5000/users`)
    const data = await res.json()
    return data
  }
  const deleteFunction = async (id)=>{
    const res = await fetch(`http://localhost:5000/users/${id}`,{
      method: 'DELETE'
    })
    // setUserData(userData.filter((userData)=>userData.id !==id))
    const data = await fetchUsers();
    setUsersData(data);
    
  }

  const toggleForm = ()=>{
    setShowForm(!showForm)
  }

  const addContact = async (newContact)=>{
    //console.log(newContact);
    const res = await fetch(`http://localhost:5000/users`,{
      method: 'POST',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(newContact)
    })
    const data = await fetchUsers();
    setUsersData(data);
    // userData.push(newContact)
    // setUserData([...userData])
  }

  const changePage = (number)=>{
    setCurrentPage(number)
  }
  
  return (
    <div>
      <Nav toggleForm={toggleForm}/>
      { showForm && <Form addContact={addContact}/> } 

      <div className="container">
        <div className="row mt-5">
          <br/>
          <div className='col-3 ml-4'></div>
          <input 
          type="text" 
          placeholder='Search ...'
          value={searchWord}
          onChange={(e)=>{
            setSearchWord(e.target.value)
            setUserDataSearch(usersData.filter((x)=>{
              if (e.target.value ===""){
                return x;
              }
              else if (x.name.toLowerCase().includes(e.target.value.toLowerCase())){
                return x;
              }
            }))
            
          }}
          className='form-control col-5 center'/>
          <hr/>
        </div>
        
      </div>

      <Body userData={newData} deleteFun={deleteFunction}/>    
      <Pagination total={userDataSearch.length} perPage={perPage} changePage={changePage}/>  
    </div>
  );
}

export default App;
