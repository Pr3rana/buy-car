import { render, screen, cleanup } from '@testing-library/react';
import NotFound from './NotFound';

afterEach(cleanup);
const errorDetails = <p>Sorry, the page you are looking for doesn't exist. <br/>You can always go back to <a href='/'>homepage</a>.</p>
describe("NotFound render", ()=>{
    test('Initial Render', () => {
        const { container } = render(<NotFound />)
        expect(container.firstChild).toMatchSnapshot(`
        <div className="error-main">
            <img alt="logo" className="logo" src="../../logo.png"/>
            <p className="error-type">Error</p>
        </div>
        `)
        expect(screen.queryByTestId('NotFound-list-container')).not.toBeInTheDocument()
    });
});

describe("NotFound props",()=>{
    test("Re-render the NotFound with different props",()=>{
        const { container } = render(<NotFound errorType="404 - Not Found" errorDetails={errorDetails}/>)
        expect(screen.getByTestId('not-found')).toHaveTextContent('404 - Not Found');
        expect(container.firstChild).toMatchSnapshot(`
        <div className="error-main">
            <img alt="logo" className="logo" src={brandLogo}/>
            <p className="error-type">404 - Not Found</p>
            <p>Sorry, the page you are looking for doesn't exist. <br/>You can always go back to <a href='/'>homepage</a>.</p>
        </div>
        `)
    })
})