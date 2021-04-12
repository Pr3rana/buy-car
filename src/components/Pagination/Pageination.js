import './Pageination.css';
import { useContext, useEffect, useState } from 'react';
import { ListPageContext } from "../../helpers/appContext";

const Pagination = () => {
    const [pageCountLimit, setPageCountLimit] = useState(null);
    const {pagenumber, setPagenumber, totalPageCount} = useContext(ListPageContext);
    
    useEffect(()=>{
        setPageCountLimit(totalPageCount > 10 ? 10 : totalPageCount);
    },[totalPageCount])

    return ( 
        <div  data-testid="pagination-container" className="pagination-container">
            <span data-testid="first-page" key="First" onClick = {()=>setPagenumber(1)}>First</span>
            <span data-testid="prev-page" key="Previous" onClick = {()=>setPagenumber(prev=>(prev>1 && prev<=pageCountLimit)?prev-1:prev)}>Previous</span>
            <span data-testid="curr-total-page" key="Page-count">Page {pagenumber} of {pageCountLimit}</span>
            <span data-testid="next-page" key="Next" onClick = {()=>setPagenumber(prev=>(prev>=1 && prev<pageCountLimit)?prev+1:prev)}>Next</span>
            <span data-testid="last-page" key="last" onClick = {()=>setPagenumber(pageCountLimit)}>Last</span>
        </div>
     );
}
 
export default Pagination;
