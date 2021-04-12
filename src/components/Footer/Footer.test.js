import { render, screen, cleanup } from '@testing-library/react';
import Footer from './Footer';

afterEach(cleanup);

describe("Footer render", ()=>{
    test('Initial Render', () => {
        const { container } = render(<Footer/>)
        expect(container.firstChild).toMatchSnapshot(`
        <footer data-testid ="footer" className="cp-text"></footer>
        `)
        expect(screen.queryByTestId('footer')).toBeInTheDocument()
    });
});

describe("Footer props",()=>{
    test("Re-render the Footer with different props",()=>{
        const { container } = render(<Footer footerBody="test footer body" />)
        expect(screen.getByTestId('footer')).toHaveTextContent('test');
        expect(container.firstChild).toMatchSnapshot(`
        <footer data-testid ="footer" className="cp-text">test footer body</footer>
        `)
    })
})