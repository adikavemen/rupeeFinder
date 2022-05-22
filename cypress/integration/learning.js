describe("Big Tester",()=>
{
    it("smol test",()=>{
        cy.visit("https://www.xe.com/send-money/")
        expect(true).to.equal(true)
    })
})