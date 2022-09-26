import React from 'react'
import {Link} from 'react-router-dom'

function Pagination({total,perPage,changePage}) {
    
    const pages = []
    const totalNOPages = Math.ceil(total/perPage)
    for(let i = 1; i<= totalNOPages ; i++){
        pages.push(i);
    }
    return (
        <nav>
            <ul className='pagination container '>
                <div className='col-5 '></div>
                {
                    pages.map((number)=>(
                        <li key={number} className='page-item mt-4 mb-4'>
                            <Link to="/" onClick={()=>changePage(number)} className='page-link '>{number}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Pagination