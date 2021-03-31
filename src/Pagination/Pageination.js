import './Pageination.css';
import { useContext } from 'react';
import { ListPageContext } from "../helpers/storeContext";

const Pagination = () => {
    const {pagenumber, setPagenumber} = useContext(ListPageContext);

    return ( 
        <div className="pagination-container">
            <span key="First" onClick = {()=>setPagenumber(1)}>First</span>
            <span key="Previous" onClick = {()=>setPagenumber(prev=>(prev>1 && prev<=10)?prev-1:prev)}>Previous</span>
            <span key="Page-count">Page {pagenumber} of 10</span>
            <span key="Next" onClick = {()=>setPagenumber(prev=>(prev>=1 && prev<10)?prev+1:prev)}>Next</span>
            <span key="last" onClick = {()=>setPagenumber(10)}>Last</span>
        </div>
     );
}
 
export default Pagination;
