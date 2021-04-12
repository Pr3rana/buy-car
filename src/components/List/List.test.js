import { render, screen, cleanup, carData } from '../../test-utils.js';
import List from './List';

afterEach(cleanup)
describe("List render",()=>{
    test('Initial render', ()=>{
        render(<List />)
        expect(screen.queryByTestId('list-wrapper')).toBeNull()
    })
})

describe("List props",()=>{
    test("testing list with props",()=>{
        render(<List cars={carData.cars} />)
        expect(screen.getByTestId('list-wrapper')).toMatchSnapshot(
            ` 
            <div className="list-container list-wrapper">
                <div class="list-header"><h3>Available Cars</h3><p>Showing 1 out of 1 results</p></div>
                <div class="list-item">
                <img alt="alt-text" class="product-icon" src="https://auto1-js-task-api--mufasa71.repl.co/images/car.svg">
                <div class="list-item-content"><h3>Model S</h3><p class="item-key-details"><span>10000 - </span>
                <span>151884 km - </span><span>Diesel - </span><span>silver</span></p><a class="deatils-link" href="/details/10000">
                <span>View details</span></a></div></div>
                <div data-testid="pagination-container" class="pagination-container"><span data-testid="first-page">First</span>
                <span data-testid="prev-page">Previous</span><span data-testid="curr-total-page">Page 1 of 2</span>
                <span data-testid="next-page">Next</span><span data-testid="last-page">Last</span></div>
            </div>
            `
        )
    })
})