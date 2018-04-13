describe('countRegNumber' , function(){

    it('should check the amount of regNums', function(){
        assert.equal(countRegNumber('CJ33595, CA02442'), 2);
    });
    it('should count the amount of regNums that shows in the string', function(){
        assert.equal(countRegNumber('CJ33595, CA02442, CY258358'), 3);

    });
    it('should return the amount of different regNums', function(){
        assert.equal(countRegNumber('CY025683, CJ20358, CA02442, CY258358'), 4);

    });
});
