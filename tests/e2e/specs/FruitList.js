describe('Fruit List component', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  context('Default Fruit List Contents', () => {
    it('Should render correct list items', () => {
      cy.get('div > .fruit-list__list > .col').should((cards) => {
        const cardItems = cards
        expect(cardItems).to.have.length(6)
      })
    })

    it('Should render a delete button on each card', () => {
      cy.get('div > .v-card').each(() => {
        cy.get('[data-test=btn]')
          .should('be.visible')
          .and('satisfy', ($el) => {
            const expectedClasses = ['.v-btn', '.v-btn--icon', '.v-btn--outlined', '.v-btn--round.', 'v-btn--rounded', '.theme--light', '.v-size--small']
            const classList = Array.from($el[0].classList)
            return expectedClasses.some(expectedClass => classList.includes(expectedClass))
          })
          .get('button:nth(1)')
          .should('have.attr', 'aria-label')
          .and('match', /Delete fruit/gm)
      })
    })

    it('Should render a tooltip on hover the delete button', () => {
      cy.get('button:nth(1)[aria-label="Delete fruit"]')
        .trigger('mouseenter')
        .get('.v-tooltip')
      })
    })

  context('Default Fruit List Actions', () => {
    it('Should delete a fruit and render list items accordingly', () => {   
      cy.get('button:nth(1)').click()
        .get('div > .fruit-list__list > .col').should((cards) => {
          const cardItems = cards
          expect(cardItems).to.have.length(5)
        })
    })

    it('Should browse to an intenal route on click \'More info\' link', () => {  
      // uncompleted test, should get the fruit's title value and compare with the route
      cy.get('.v-card__text:nth(0)')
        .should('have.text', ' More info ')
        .trigger('click')
    })
  })
})
