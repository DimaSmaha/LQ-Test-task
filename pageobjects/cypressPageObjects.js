class Login {

   LogInSite(){
    cy.viewport(1500,660)
    cy.visit('http://localhost:8080')
    cy.get('[name*=user]').click().clear().type('admin')
    cy.get('[name="password"]').click().clear().type('init')
    cy.get('[type="submit"]').click()
    }             
   
   keywordsPageButton(){
     return cy.get('[class="glyphicon glyphicon-record"]')
   }
   parametersPageButton(){
      return cy.get('[class="glyphicon glyphicon-list-alt"]')
   }
   executionsPageButton(){
      return cy.get('[class="glyphicon glyphicon-tasks"]')
   } 
   schedulerPageButton(){
      return cy.get('[class="glyphicon glyphicon-time"]')
   }

   mainPageCheck(){
      return cy.url().should('include', '/#/root/plans/list')
   }
   keywordsPageCheck(){
      return cy.url().should('include', '/#/root/functions')
   }
   parametersPageCheck(){
      return cy.contains('New parameter')
   }
   executionsPageCheck(){
      return cy.contains('Execution list')
   }
   schedulerPageCheck(){
      return cy.contains('CRON')
   }

 }
            
export default Login