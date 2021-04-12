import { render, screen, cleanup } from '@testing-library/react';
import Header from './Header';
import logo from '../../logo.png';

afterEach(cleanup);

describe("Header render", ()=>{
    test('Initial Render', () => {
        const { container } = render(<Header/>)
        expect(container.firstChild).toMatchSnapshot(`
            <header data-testid="header">
            <img data-testid ="brand-logo" alt="brand-logo" className="logo" src={requiredLogo}/>
            <div className="fill-remaining-space"></div>
            </header>
        `)
        expect(screen.queryByTestId('header-list-container')).not.toBeInTheDocument()
    });
});

describe("Header props",()=>{
    test("Re-render the Header with different props",()=>{
        const { container } = render(<Header headerNavList = {["test", "test"]} requiredLogo={logo} />)
        expect(screen.getByTestId('header')).toHaveTextContent('test');
        expect(screen.queryAllByText('test')).toHaveLength(2);
        expect(screen.queryByTestId('header-list-container')).toBeInTheDocument()
        expect(screen.getByTestId('header-list-container').firstChild).toHaveTextContent('test');
        expect(container.firstChild).toMatchSnapshot(`
            <header data-testid="header">
                <img data-testid ="brand-logo" alt="brand-logo" className="logo" src={requiredLogo}/>
                <div className="fill-remaining-space"></div>
                <ul data-testid ="header-list-container">
                    <li data-testid ="header-list-item" key=0><a href="/" onClick={(e)=>e.preventDefault()}>test</a></li>
                    <li data-testid ="header-list-item" key=1><a href="/" onClick={(e)=>e.preventDefault()}>test</a></li>
                </ul>
            </header>
        `)
    })
})