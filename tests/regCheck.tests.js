describe('regCheck' , function(){
    it('should check for regNum with the provided location', function(){
        assert.equal(regCheck('268265GP', 'GP'), true);

    });
    it('should check regNum without the provided location', function(){
        assert.equal(regCheck('268265GP', 'CA'), false);
    });
});
