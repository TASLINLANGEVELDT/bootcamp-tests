describe('countAllPaarl', function(){
    it('should show the amount from Paarl', function(){

        assert.equal(countAllPaarl('CJ457114'), true);
    });
    it('should show false or error because regNumber not from Paarl', function(){

        assert.equal(countAllPaarl('CA457114'), false);
    });
});
