describe('isWeekday', function(){
    it('should return weekday if it doesnt start with a S', function(){
        assert.equal(isWeekday('Monday'), true);

    });
    it('should return false or error if it starts with a S', function(){
        assert.equal(isWeekday('Sunday'), false);
      });
});
