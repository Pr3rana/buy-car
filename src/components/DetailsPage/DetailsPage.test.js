import { render, screen, cleanup } from '../../test-utils.js';
import Details from './DetailsPage';

afterEach(cleanup)
describe("Render details",()=>{
    test("initial render",()=>{
        render(<Details/>)
        expect(screen.getByTestId('details-page')).toMatchSnapshot(
            `<div class="details-container"><article class="content-wrapper"><div class="banner-img">
            <img alt="banner" src="https://auto1-js-task-api--mufasa71.repl.co/images/car.svg"></div>
            <div class="detail-wrapper"><summary class="details"><p class="header">Model S</p>
            <p class="product-key-details"><span>Stock # 10000 - </span><span>151884km - </span>
            <span>Diesel - </span><span>silver</span></p><p>This car is currently available and can be delivered as soon as tomorrow morning. 
            Please be aware that the delivery times shown in this page are not definitive and may change due to a bad weather conditions.</p>
            </summary><div class="details-favourite"><p>If you like the car, click the button and save it in your collection of favourite items.</p>
            <button data-testid="default-btn" class="default-btn ">Save</button></div></div></article></div>
            `
        )
        expect(screen.queryByTestId('details-loader')).toBeNull()
    })
})
