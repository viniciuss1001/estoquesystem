describe('CategoryCreateForm', () => {
	beforeEach(() => {
		cy.visit('/login')
		cy.get('input[name="email"]').type('vinicius@gmail.com')
		cy.get('input[name="password"]').type('12345678')
		cy.get('button[type="submit"]').click()
		cy.url().should('not.include', '/login')
		cy.visit('/categories')
		cy.url().should('include', '/categories')
	})

	it('renderiza o formulário corretamente', () => {
		cy.contains('Criar nova Categoria').should('be.visible')
		cy.get('input[placeholder="Nome da categoria"]').should('exist')
		cy.get('button').contains('Criar').should('exist')
	})

	it('mostra erro de validação se o campo estiver vazio', () => {
		cy.get('button').contains('Criar').click()
		cy.contains('Precisa ter no mínimo 2 caracteres').should('be.visible')
	})

	it('envia o formulário com dados válidos', () => {
		cy.intercept('POST', '/api/categories', {
			statusCode: 201,
			body: { id: 1, name: 'Nova Categoria' }
		}).as('postCategory')

		cy.get('input[placeholder="Nome da categoria"]').type('Nova Categoria')
		cy.get('button').contains('Criar').click()

		cy.wait('@postCategory').its('response.statusCode').should('eq', 201)
		cy.contains('Categoria criada com sucesso', { timeout: 5000 }).should('be.visible')
	})
})