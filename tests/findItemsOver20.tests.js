describe('findItemsOver20' , function(){
  let items = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];
    it('should show all the items thats price is over20' , function(){
        assert.deepEqual(findItemsOver20(items), [{name : 'pears', qty : 37},{name : 'bananas', qty : 27}]);
    });
    it('should show an empty array' , function(){
        assert.deepEqual(findItemsOver20([]), '');
    });
});
