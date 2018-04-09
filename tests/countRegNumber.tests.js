describe('countRegNumber' , function(){

    it('should check the amount of regNums', function(){
        assert.equal(countRegNumber('CJ33595, CA02442'), 2);
    });
    it('should return false because its not checking for correct amount of regNums', function(){
        assert.equal(countRegNumber('CJ33595, CA02442, CY258358'), 3);

    });
    it('should return false because the amount given does not match whats given', function(){
        assert.notEqual(countRegNumber('CY025683, CJ20358, CA02442, CY258358'), 3);

    });
});
