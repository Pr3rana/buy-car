import { useEffect, useState, useMemo } from 'react';
import { ListPageContext } from "../helpers/storeContext";
import Loader from "../Loader/Loader";
import DropdownFilter from '../DropdownFilter/DropdownFilter';
import NoResultPage from '../NoResultPage/NoResultPage';
import List from '../List/List';
import './Home.css';

export default function Home(){
    const [productList, setProductList] = useState(Array(10).fill({}));
    const [selectedFilter, setSelectedFilter] = useState('');
    const [isFetched, setIsFetched] = useState(true);
    const [pagenumber, setPagenumber] = useState(1);
    const [totalCarsCount, setTotalCarsCount] = useState(null);
    const [totalPageCount, setTotalPageCount] = useState(null);
    
    const ROOT_URL = "https://auto1-mock-server.herokuapp.com/api/cars";

    const pageContextProvider = useMemo(
        () => ({
          totalCarsCount,
          totalPageCount,
          pagenumber,
          setPagenumber,
          selectedFilter,
          setSelectedFilter
        }),
        [pagenumber, setPagenumber, selectedFilter, setSelectedFilter, totalPageCount, totalCarsCount]
      );

    useEffect(()=>{
        const url = `${ROOT_URL}?${selectedFilter}page=${pagenumber}`;
        setIsFetched(true);
        fetch(url).then((res)=>{
            console.log(url, "here")
            return res.json();
        })
        .then((data)=>{
            setProductList(data.cars);
            setTotalCarsCount(data.totalCarsCount);
            setTotalPageCount(data.totalPageCount);
        })
        .catch((err)=>console.error(err))
        .finally(()=>setIsFetched(false));
    },[selectedFilter, pagenumber]);

    return(
        <div className="content">
            <ListPageContext.Provider value={pageContextProvider}>
                <DropdownFilter />
                {isFetched ? ( <Loader cars={productList} />): productList.length >0?
                    (<List cars={productList} />): <NoResultPage />}
            </ListPageContext.Provider>
        </div>
    )
}
