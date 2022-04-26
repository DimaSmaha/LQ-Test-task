import Login from './pageobjects/cypress'
/// <reference types="cypress" />
const { describe } = require("mocha")
const obj = new Login();
describe('Login and explonatory flow',  function()  {
  it('log on page',  function()  {
    obj.LogInSite()
    obj.mainPageCheck
  })
  it('keywords page check ',  function()  {
    obj.LogInSite()
    obj.keywordsPageButton()
    .click()
    obj.keywordsPageCheck()
  })
  it('parameters page check ',  function()  {
    obj.LogInSite()
    obj.parametersPageButton()
    .click()
    obj.parametersPageCheck()
  })
  it('executions page check ',  function()  {
    obj.LogInSite()
    obj.executionsPageButton()
    .click()
    obj.executionsPageCheck()
  })
  it('scheduler page check ',  function()  {
    obj.LogInSite()
    obj.schedulerPageButton()
    .click()
    obj.schedulerPageCheck()
  })  
})
