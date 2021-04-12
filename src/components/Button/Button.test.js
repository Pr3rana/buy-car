import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Button from './Button';

afterEach(cleanup);
describe("Button render", ()=>{
    test('Initial Render', () => {
        const { container } = render(<Button/>)
        expect(container.firstChild).toMatchSnapshot(`
          <button data-testid="default-btn" class="default-btn "></button>
        `)
    });
});

describe("Button props",()=>{
    test('Re-render the Button with different props',()=>{
        const { container, getByText } = render(<Button value={"Save"} onClick={()=>{}} />)
        expect(getByText('Save')).toBeInTheDocument()
        expect(container.firstChild).toMatchSnapshot(`
          <button data-testid="default-btn" class="default-btn ">Save</button>
        `)
        expect(screen.getByTestId('default-btn')).toHaveTextContent('Save')
    })
})

describe("Button event",()=>{
    test("test button click event", ()=>{
        const click = jest.fn()
        render(<Button value={"Save"} onClick={click()} />)
        expect(screen.getByRole('button')).toBeInTheDocument()
        expect(click).toHaveBeenCalledTimes(1)
    })
    
})