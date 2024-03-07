import React from 'react'
function Pagination({pageArr,npages,setCurrentPage,currentPage}) {

  const handleNext = () => {
    if(currentPage!==npages){
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrev=()=>{
    setCurrentPage(currentPage-1)
  }

  const handlePageNo=(e,pageNo)=>{
    setCurrentPage(pageNo)
  }


  return (
    <div className='pagination-div text-center d-flex justify-content-center align-items-center  mt-4'>
          <button className='btn btn-primary' onClick={handlePrev} disabled={currentPage===1}>Prev</button>
          <ul
            className='d-flex gap-3 list-group flex-row mx-3 '
            style={{ listStyle: "none" }}>  
              
                {pageArr.map((item)=>{
                  console.log(item,'item')
                  return (
                    <>
                    <li key={item}>
                    <button className={`btn ${item===currentPage?'btn-primary':'btn-secondary'}`} onClick={(e)=>handlePageNo(e,item)}>{item}</button>
                  </li>
                    </>
                  )
                })}
                  
          </ul>
          <button className='btn btn-primary' onClick={handleNext} disabled={currentPage===npages}>
            Next
          </button>
        </div>
  )
}

export default Pagination