describe('isFromBellville' , function(){

  it('return true if registrationNum is from bellville', function(){
      assert.equal(isFromBellville('CY77657'), true);
    });

    it('return false if registrationNum is not from bellville', function(){
        assert.equal(isFromBellville('CJ77657'), false);
      });
});
