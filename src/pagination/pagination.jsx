import React, { useEffect, useState } from 'react';
import './pagination.css';

const Pagination = () => {
  const totalItems = Array.from({length: 50}, (_, i) => i + 1);
  const itemsOnPage = 5;
  const paginationBar = totalItems.length / itemsOnPage;
  const totalPagesOnDisplay = Array.from({length: paginationBar}, (_, i) => i + 1);
  const [selectedPage, setSelectedPage] = useState(1);
  const [listOfItems, setListOfItems] = useState([]);

  const handleClick = (page) => {
    setSelectedPage(page);
  }

  useEffect(() => {
    const indexOfLastPage= selectedPage * itemsOnPage;
    const indexOfFirstPage = indexOfLastPage - itemsOnPage;
    const currentList = totalItems.slice(indexOfFirstPage, indexOfLastPage);
    setListOfItems(currentList)

  }, [selectedPage])

  return (
    <React.Fragment>
      {listOfItems.length > 0 && listOfItems.map((item, i) => <div key={i} className='selected-number'>
        {item}
      </div>)}
      <section>
        {selectedPage > 1 && <span className='arrow arrw1' onClick={() => setSelectedPage(selectedPage - 1)}>{`<`}</span>}
        {totalPagesOnDisplay.length > 0 && totalPagesOnDisplay.map((page,i) => {
          return <>
            <div key={i} className={`page-number ${selectedPage === page ? 'current-page' : null}`} onClick={() => handleClick(page)}>{page}</div>
          </>
        })}
        {selectedPage < totalPagesOnDisplay.length && <span className='arrow arrw2' onClick={() => setSelectedPage(selectedPage + 1)}>{`>`}</span>}
      </section>
    </React.Fragment>
  )

}

export default Pagination;