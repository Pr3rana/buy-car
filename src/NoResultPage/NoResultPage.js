import {useContext} from 'react';
import {Link} from 'react-router-dom';
import { ListPageContext } from "../helpers/storeContext";
import './NoResultPage.css';

const NoResultPage = () => {
    const {setPagenumber, setSelectedFilter} = useContext(ListPageContext);
    return ( 
        <div className="noresult-container">
            Aww Snap.. No result Found!!
            Either modify the filter or redirect to <Link to = '/'>
                            <span onClick={()=>setPagenumber(1), setSelectedFilter('')}>homepage</span>
                        </Link>.
        </div>
     );
}
 
export default NoResultPage;