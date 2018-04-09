describe('countAllFromTown', function(){
    it('should return the number of license plates from a Town', function(){
      assert.equal(countAllFromTown('CL 124, CY 567, CL 345, CJ 456, CL 341', 'CL'), 4);
    });
    it('should return an error because the numbers do not match', function(){
      assert.notEqual(countAllFromTown('CL 124, CY 567, CL 345, CJ 456, CL 341', 'CL'), 8);
    });
});
