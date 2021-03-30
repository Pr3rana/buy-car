import Footer from "../Footer/Footer"

import './DropdownFilter.css'
const Dropdown = () => {
    return ( 
        <div className="filter">
            <h3>Color</h3>
            <select>
                <option value="Red">
                    Red
                </option>
                <option value="Red">
                    Green
                </option>
            </select>
        </div>
     );
}
 
export default Dropdown;
