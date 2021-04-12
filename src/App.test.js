import { render,cleanup } from './test-utils.js';
import App from './App';

afterEach(cleanup)

describe("Render App", ()=>{
  test('renders learn react link', () => {
    render(<App />)
  });
})
