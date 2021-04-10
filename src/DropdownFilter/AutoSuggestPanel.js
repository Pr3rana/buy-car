import React from 'react';
import './DropdownFilter.css';
// list: [{label, id}]

// function AutoSuggestPanel({filterData, select, type}){
  
  
//   return (
//       // <div  className="custom-select" key={type}>
//           /* <p>{type}</p> */
//           /* <div ref= {typeRefs[`default${type}`]} className="default-selected-item" onClick={()=>typeRefs[type].current.style.display!==""?typeRefs[type].current.style.display="":typeRefs[type].current.style.display="block"}>All {type}</div> */
//           <SuggestionRow ref={typeRefs[type]} list={filterData} onClick={select} type={type}/>
//       // </div>
//   )
// }

function AutoSuggestPanel ({filterData=[], select, type}, ref) {
  // const [defaultSelect, setDefaultSelect] = useState(`All ${type}`);
  // const typeRefs = {};
  // typeRefs[type] = useRef(null);
  // typeRefs[`default${type}`] = useRef(null);
    return(
      <div ref={ref} className="autosuggestPanel">
        {
          /*Mapping the relevancy search result to  autosuggest*/
          filterData.map((el, index) => {
          return (
              <div className="suggestionRow" key = {el+index} onClick={(e)=>select(e)}  data-filter-type={type}>{el}</div>
          )
        })
        }
      </div>
    )
  }
  const typeRef = React.forwardRef(AutoSuggestPanel);
  export default typeRef;