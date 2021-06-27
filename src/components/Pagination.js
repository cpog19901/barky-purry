import React from 'react';

const Pagination = ({imagesPerPage, totalImages, loadButton, paginate}) => {

    const pageNumbers=[];

    for(let i = 1; i <= Math.ceil(totalImages/imagesPerPage);i++){
        pageNumbers.push(i)
    }

    return (
        <div>
            
            {loadButton ? 
         <div className="pagination">
         <h2 className="pages-title">Pages</h2>
                {pageNumbers.map(number => 
                
                <button key ={number}className="page-number" onClick={() =>paginate(number)}>{number}</button>)}
         </div>
         :null} 
        </div>
    );
};

export default Pagination;