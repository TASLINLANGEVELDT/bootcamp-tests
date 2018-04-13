describe('yearsAgo' , function(){
    it('should return the number of yearsAgo (8)' , function(){
        assert.equal(yearsAgo('2010'), 8);

    });
    it('should return the correct amount of years from then till now (7)', function(){
        assert.equal(yearsAgo('2011'), 7);
    });
});
