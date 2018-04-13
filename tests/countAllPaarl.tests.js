describe('countAllPaarl', function(){
    it('should show how many are from Paarl(CJ)', function(){

        assert.equal(countAllPaarl('CA22682, CJ36715, BN25943, CJ457114'), 2);
    });
    it('should show a string, because there is none from Paarl', function(){

        assert.equal(countAllPaarl('CA22682, CD36715, BN25943, DB457114'), 0);
    });
});
