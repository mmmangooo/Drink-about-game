
describe ("whatCanIDrink", function() {

    beforeEach(function() {
        result=new whatCanIDrink; 
    });
    describe("checkAge", function() {

        it("should return Sorry, I can't tell what to drink because that age is incorrect!", function() {
            var result=whatCanIDrink(0);
           expect(result).toBe("Sorry. I can't tell what drink because that age is incorrect!"); 
    });
         it ("should return Drink toddy", function(){
           var result=whatCanIDrink(13);
            expect(result).toBe("Drink toddy");
    });
        it ("should return Drink coke", function() {
            var result=whatCanIDrink(17);
            expect(result).toBe("Drink coke");
        });
        it ("should return Drink beer", function() {
            var result =whatCanIDrink(20);
            expect(result).toBe("Drink beer");
        });
        it ("should return Drink whiskey", function() {
            var result = whatCanIDrink(129);
            expect(result).toBe("Drink whiskey");
        })
        it ("should return Sorry, I can't tell what to drink because that age is incorrect!", function() {
            var result=whatCanIDrink(140);
            expect(result).toBe("Sorry, I can't tell what to drink because that age is incorrect!");
        })
});
});