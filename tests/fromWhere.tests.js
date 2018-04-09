describe('fromWhere' , function(){
    it('should show fromWhere that regNum is from' , function(){
        assert.equal(fromWhere('CA'), 'Cape Town');
    });
    it('should show from some other place' , function(){
        assert.equal(fromWhere('CA22535'), 'Some other place!');
    });
});
