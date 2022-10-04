describe('тренировка для формы логина и пароля', () => {
    it('Проверка формы обратной связи', () => {
        cy.visit('https://login.qa.studio/')
        cy.get('#mail').type('german@dolnikov.ru')
        cy.get('#pass').type('iLoveqastudio2')
        cy.get('#loginButton').click()
        cy.contains('Такого логина или пароля нет')
        cy.get('#exitRestoreButton > .exitIcon')
    })
})