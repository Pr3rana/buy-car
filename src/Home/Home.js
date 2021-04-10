import { useEffect, useState, useContext } from 'react';
import { ListPageContext } from "../helpers/storeContext";
import Loader from "../Loader/Loader";
import DropdownFilter from '../DropdownFilter/DropdownFilter';
import List from '../List/List';
import './Home.css';

export default function Home(){
    const [productList, setProductList] = useState(Array(10).fill({}));
    const [isFetched, setIsFetched] = useState(true);
    const { selectedFilter, pagenumber, setTotalCarsCount, setTotalPageCount } = useContext(ListPageContext);
    const ROOT_URL = "https://auto1-mock-server.herokuapp.com/api/cars";

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
    },[selectedFilter, pagenumber, setTotalCarsCount, setTotalPageCount]);

    return(
        <div className="content">
            <DropdownFilter />
            {isFetched ? ( <Loader cars={productList} />):
                (<List cars={productList} />)}
        </div>
    )
}
