import React from 'react'
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

const Pagination = ({onPageChange, currentPage, blogs, pageSize}) => {
    const totalPage = Math.ceil(blogs.length / pageSize)
    const renderPaginationLinks = ()=> {
        return Array.from({length: totalPage}, (_, i)=> i+1).map((pageNumber)=> (
            <li className={pageNumber === currentPage ? 'activePagination' : ''} key={pageNumber}>    
                <a href='#' onClick={()=> onPageChange(pageNumber)}>{pageNumber}</a>
            </li>
        ))
    }
  return (
    <ul className='pagination my-8 flex-wrap gap-4'>
        <li>
            <button onClick={()=> onPageChange(currentPage - 1)} disabled={currentPage ===1} className='inline-flex items-center'><GrFormPrevious /> Previous</button>

        </li>
        <div className='flex gap-1'>{renderPaginationLinks()}</div>
        <li>
            <button onClick={()=> onPageChange(currentPage + 1)} disabled={currentPage === totalPage} className='inline-flex items-center'>Next <GrFormNext /></button>
        </li>
    </ul>
  )
}

export default Pagination