describe('countAllFromTown', function(){
    it('should return the number of lic plates with locationtags (CL)', function(){
      assert.equal(countAllFromTown('CL 124, CY 567, CL 345, CJ 456, CL 341', 'CL'), 4);
    });
    it('should return the wrong number because the code is uncler', function(){
      assert.equal(countAllFromTown('CL 124, CY 567, CL 345, CJ 456, CL 341'), 1);
    });
});
