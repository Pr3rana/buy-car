import React from 'react';
import './DropdownFilter.css';

function AutoSuggestPanel ({filterData=[], select, type}, ref) {
    return(
      <div ref={ref} className="autosuggestPanel">
        {
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