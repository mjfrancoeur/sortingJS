describe('mergeSort', function(){

    it('handes an empty array', function(){
        expect(mergeSort([])).toEqual([]);
    });

    it('sorts an array', function(){
        expect(mergeSort([3,6,1,9,2,24])).toEqual([1,2,3,6,9,24]);
    });
});