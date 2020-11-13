describe ("age", function() {
    describe("return tests", function() {
        it("Should return Sorry, I can't tell what to drink because that age is incorrect!", function() {
           whatCanIDrink.age(0);
           expect(whatCanIDrink.return).toBe("Sorry, I can't tell what to drink because that age is incorrect!"); 
        })
    })
})