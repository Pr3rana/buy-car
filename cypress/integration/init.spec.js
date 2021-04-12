describe('Hope page request', () => {
    it('displays filters from API', () => {
      cy.request('https://auto1-mock-server.herokuapp.com/api/colors')
        .should((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.have.property('colors')
          expect(response.body.colors).to.have.length(7)
        })
    })
    it('displays product from API', () => {
        cy.request('https://auto1-mock-server.herokuapp.com/api/cars')
          .should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('cars')
            expect(response.body).to.have.property('totalCarsCount')
            expect(response.body).to.have.property('totalPageCount')
            expect(response.body.cars).to.have.length(10)
          })
      })
})

describe('Home page view', () => {
    it('is working', () => {
      expect(true).to.equal(true)
    })
    it('Visit the home page', () => {
        cy.visit('/')
    })
    it('display list of nav',()=>{
        cy.get('li').should('have.length', 3)        
    })
    it("display list of products",()=>{
        cy.get('.list-item').should('have.length', 10)
    })    
})

describe('test filter',()=>{
    it('Selecting one filter from filter dropdown', () => {
        cy.get('.filter-wrapper .custom-select').eq(0).click()
        cy.get('.filter-wrapper .custom-select .autosuggestPanel .suggestionRow').eq(0).click()
        cy.get('.filter-wrapper .filter-btn').eq(0).click()
    })
    it('Selecting two filter from filter dropdown', () => {
        cy.get('.filter-wrapper .custom-select').eq(0).click()
        cy.get('.filter-wrapper .custom-select .autosuggestPanel .suggestionRow').eq(0).click()
        cy.get('.filter-wrapper .custom-select').eq(1).click()
        cy.get('.filter-wrapper .custom-select .autosuggestPanel .suggestionRow').filter(':visible').eq(1).click()
        cy.get('.filter-btn').eq(0).click()
    })
})

describe('Details page',()=>{
    it('Re-directing to details page', () => {
        cy.visit('/')
        cy.get('.deatils-link').eq(0).click()
        cy.get('.default-btn').eq(0).click()
        cy.get('.default-btn').eq(0).should('have.text',"Saved")
    })
    it("test details redirect",()=>{
        cy.visit('/')
        let url;
        cy.get('[data-testid="deatils-link"]').eq(0).invoke('text').then( value => {url = value;});
        cy.then(() => {return cy.visit(url);});
    })
})

describe('Error page',()=>{
    it('Re-directing to error page', () => {
        cy.visit('/hvjhjhv')
        cy.location('pathname').should('eq', '/hvjhjhv')
        cy.get('.error-type').should('have.text',"404 - Not Found")
        cy.get('.homepage-redirect').eq(0).click()
        cy.location('pathname').should('eq', '/')
    })
})
