import { render, screen, cleanup } from '../../test-utils.js';
import Pageination from './Pageination';

afterEach(cleanup);
describe("Pageination render",()=>{
    test('Initial rendering', ()=>{
        render(<Pageination />)
        expect(screen.getByTestId('pagination-container')).toMatchSnapshot(`
        <div data-testid="pagination-container" class="pagination-container"><span data-testid="first-page">First</span>
        <span data-testid="prev-page">Previous</span><span data-testid="curr-total-page">Page 1 of 2</span>
        <span data-testid="next-page">Next</span><span data-testid="last-page">Last</span></div>
        `)
    })
})

describe("Pageination Props",()=>{
    test('Testing pagination props', ()=>{
        render(<Pageination />)
        expect(screen.getByText('Page 1 of 2')).toBeInTheDocument()
        expect(screen.getByTestId('first-page')).toHaveTextContent('First')
    })
})
