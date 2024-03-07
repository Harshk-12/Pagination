import React, { useEffect, useState } from "react";
import { instance } from "../utilies/Api";
import '../../src/App.css'
import Pagination from "../components/Pagination";

function Hero() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageArr,setPageArr]=useState([])
  const dataRecord = 8;
  const npages = Math.ceil(data.length / dataRecord)
  const lastIndex = currentPage * dataRecord;
  const firstIndex = lastIndex - dataRecord;
  // const pageArr=[]

  // const handleNext = () => {
  //   if(currentPage!==npages){
  //     setCurrentPage(currentPage + 1);
  //   }
  // };
  // const handlePrev=()=>{
  //   setCurrentPage(currentPage-1)
  // }


  useEffect(() => {
    const fetchData = async () => {
      const response = await instance.get(`/products `);
      const responseData = response.data;
      console.log(responseData);
      setData(responseData);
    };
    fetchData();
    let pagearray=[]
    for(let i=1;i<=npages;i++){
      pagearray.push(i)
      // console.log(pageArr,'pageArr')
    }
    setPageArr(pagearray)


  }, []);

    // const handlePageNo=(e,pageNo)=>{
    //   setCurrentPage(pageNo)
    // }

  return (
    <> 
    <h2 className="text-center">Pagination</h2>
      <div className='d-flex flex-column mx-5'>
        <div className="cards-container">

        <div className='d-flex flex-wrap gap-3 justify-content-center  mt-5 '>
          {data.slice(firstIndex, lastIndex)?.map((item) => {
            return (
              <div className='card' style={{ width: "18rem" }} key={item.id}>
                <div className='card-body'>
                  <h5 className='card-title'>{item.title}</h5>
                  <h6 className='card-subtitle mb-2 text-muted'>{item.category}</h6>
                  {/* <p className="card-text">{item.description}</p> */}
                  <a href='#' className='card-link'>
                    {item.price}
                  </a>
                  <a href='#' className='card-link'>
                    {item.rating.rate}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        </div>

        {/* <div className='pagination-div text-center d-flex justify-content-center align-items-center  mt-4'>
          <button className='btn btn-primary' onClick={handlePrev} disabled={currentPage===1}>Prev</button>
          <ul
            className='d-flex gap-3 list-group flex-row mx-3 '
            style={{ listStyle: "none" }}>  
              
                {pageArr.map((item)=>{
                  

                  return (
                    <>
                    <li>
                    <button className={`btn ${item===currentPage?'btn-primary':'btn-secondary'}`} onClick={(e)=>handlePageNo(e,item)}>{item}</button>
                  </li>
                    </>
                  )
                })}
                  
          </ul>
          <button className='btn btn-primary' onClick={handleNext} disabled={currentPage===npages}>
            Next
          </button>
        </div> */}
      </div>
      <Pagination  currentPage={currentPage} pageArr={pageArr} npages={npages} setCurrentPage={setCurrentPage}/>
    </>
  );
}

export default Hero;
