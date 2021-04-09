import './Pageination.css';
import { useContext, useEffect, useState } from 'react';
import { ListPageContext } from "../helpers/storeContext";

const Pagination = () => {
    const [pageCountLimit, setPageCountLimit] = useState(null);
    const {pagenumber, setPagenumber, totalPageCount} = useContext(ListPageContext);
    
    useEffect(()=>{
        setPageCountLimit(totalPageCount > 10 ? 10 : totalPageCount);
    },[totalPageCount])

    return ( 
        <div className="pagination-container">
            <span key="First" onClick = {()=>setPagenumber(1)}>First</span>
            <span key="Previous" onClick = {()=>setPagenumber(prev=>(prev>1 && prev<=pageCountLimit)?prev-1:prev)}>Previous</span>
            <span key="Page-count">Page {pagenumber} of {pageCountLimit}</span>
            <span key="Next" onClick = {()=>setPagenumber(prev=>(prev>=1 && prev<pageCountLimit)?prev+1:prev)}>Next</span>
            <span key="last" onClick = {()=>setPagenumber(pageCountLimit)}>Last</span>
        </div>
     );
}
 
export default Pagination;
