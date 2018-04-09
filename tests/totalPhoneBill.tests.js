describe('totalPhoneBill' , function(){
    it('should show total amount for the phoneBill' , function(){
        assert.equal(totalPhoneBill('call, sms, call'), 'R6.15');
    });
    it('should show false because its not giving the correct phoneBill amount' , function(){
        assert.notEqual(totalPhoneBill('call, sms, call'), 'R9.50');
    });
});
