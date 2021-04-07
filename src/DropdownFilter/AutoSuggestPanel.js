
import React from 'react';
// list: [{label, id}]
function AutoSuggestPanel ({list = [], onClick, type}, ref) {
    return(
      <div className="autosuggestPanel" ref={ref}>
        {
          /*Mapping the relevancy search result to  autosuggest*/
        list.map((el, index) => {
          return (
            <div className="suggestionRow" key = {el+index} onClick={(e)=>onClick(e)}  data-filter-type={type}>{el}</div>
          )
        })
        }
      </div>
    )
  }
  const typeRef = React.forwardRef(AutoSuggestPanel);
  export default typeRef;