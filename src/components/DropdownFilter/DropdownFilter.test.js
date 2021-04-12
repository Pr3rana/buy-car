import { render, screen, cleanup } from '../../test-utils.js';
import DropdownFilter from './DropdownFilter';

afterEach(cleanup)
describe("Filter component render", () => {
  /*DropdownFilter*/
  test("initial renders", () => {
    render(<DropdownFilter />)
    expect(screen.getByTestId('filter-wrapper')).toMatchSnapshot(
      `<div class="custom-select"><p class="filter-type">test</p><div data-testid="default-filter" class="default-selected-item" data-type="test">All test</div>
      <div data-testid="autosuggest-panel-wrapper" class="autosuggestPanel"><div data-testid="suggestion-row" class="suggestionRow" data-filter-type="test">test value</div></div>
      </div><button data-testid="default-btn" class="default-btn filter-btn">Filter</button>`
    )
  });
})

describe("Filter props",()=>{
  test("Test filter with mock data",()=>{
    render(<DropdownFilter />)
    expect(screen.getByTestId('filter-wrapper')).toBeVisible()
    expect(screen.getByTestId('default-filter')).toBeInTheDocument()
    expect(screen.getByTestId('default-filter')).toHaveTextContent("All test")
    expect(screen.queryByTestId('autosuggest-panel-wrapper')).toBeVisible()
    expect(screen.getByTestId('autosuggest-panel-wrapper')).toMatchSnapshot(
      `<div data-testid="autosuggest-panel-wrapper" class="autosuggestPanel">
      <div data-testid="suggestion-row" class="suggestionRow" data-filter-type="test">test value</div></div>`
    )
  })
})