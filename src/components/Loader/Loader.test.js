import { render, screen, cleanup, carData } from '../../test-utils.js';
import Loader from './Loader'

afterEach(cleanup)

describe("Loader render",()=>{
    test('Initial render', ()=>{
        render(<Loader />)
        expect(screen.getByTestId('loader-list-container')).toMatchSnapshot(
            `
            <div data-testid="loader-list-container" className="loader-list-container list-wrapper">
                <div className="list-header">
                    <h3>Available Cars</h3>
                    <p className="medium"></p>
                </div>
                <div className="loader-pagination-container">
                    <span className="medium"></span>
                </div>
            </div>
            `
        )
    })
})

describe("Loader props",()=>{
    test("testing loader with props",()=>{
        render(<Loader cars={carData.cars} />)
        expect(screen.getByTestId('loader-list-container')).toMatchSnapshot(
            `<div data-testid="loader-list-container" className="loader-list-container list-wrapper">
                <div className="list-header">
                    <h3>Available Cars</h3>
                    <p className="medium"></p>
                </div>
                <div className="loader-list-item" key={index}>
                    <div className="product-icon"></div>
                    <div className="list-item-content">
                        <p className="medium"></p>
                        <p className="medium"></p>
                        <p className="small"></p>
                    </div>
                </div>
                <div className="loader-pagination-container">
                    <span className="medium"></span>
                </div>
            </div>`
        )
    })
})
