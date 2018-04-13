describe('regCheck' , function(){
    it('should check if regNum endsWith GP if it does it returns true', function(){
        assert.equal(regCheck('NG 36 NB GP', 'GP'), true);
    });
    it('should return false if locactionTag does not endsWith GP', function(){
        assert.equal(regCheck('NG 36 NB CA', 'GP'), false);
    });
});
