import React from 'react';

const Pagination = ({imagesPerPage, totalImages, loadButton, paginate}) => {

    const pageNumbers=[];

        // find out the amount of pages there will be by dividing total images by images per page, push the amount of pages to an array
    for(let i = 1; i <= Math.ceil(totalImages/imagesPerPage);i++){
        pageNumbers.push(i)
    }

    return (
        <div>
            
            {loadButton ? 
         <div className="pagination">
         <h2 className="pages-title">Pages</h2>

         {/* map through this array and display them with a button */}

                {pageNumbers.map(number => 

                /* run the paginate function from the onClick and pass the number through the parameter */

                <button key ={number}className="page-number" onClick={() =>paginate(number)}>{number}</button>)}
         </div>
         :null} 
        </div>
    );
};

export default Pagination;