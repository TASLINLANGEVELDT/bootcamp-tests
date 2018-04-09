describe('yearsAgo' , function(){
    it('should return the number of yearsAgo (8)' , function(){
        assert.equal(yearsAgo('2010'), 8);

    });
    it('should return false if the number of yearsAgo is not equal to 8', function(){
        assert.notEqual(yearsAgo('2011'), 8);
    });
});
