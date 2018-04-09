describe('findItemsOver function', function(){
  let items = [
    {name : 'grapes', qty : 10},
    {name : 'bananas', qty : 37},
    {name : 'peaches', qty : 27},
    {name : 'apples', qty : 3},
  ];
  it(' should return a list with a quantity of over 5 items', function(){
    assert.deepEqual(findItemsOver(items, 5),[{name : 'grapes', qty : 10},{name : 'bananas', qty : 37},{name : 'peaches', qty : 27}]);
  });
  it('should return a list of items with quantity over 30', function(){
    assert.deepEqual(findItemsOver(items, 30),[{name : 'bananas', qty : 37}]);
  });
});
