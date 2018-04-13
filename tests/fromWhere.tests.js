describe('fromWhere' , function(){
    it('should return from other place' , function(){
        assert.equal(fromWhere('CY226581'), 'Some other place!');
    });
    it('should show from some other place' , function(){
        assert.equal(fromWhere('CA22535'), 'Some other place!');
    });
});
