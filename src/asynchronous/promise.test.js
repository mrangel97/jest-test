function fetchDataPromise() {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve('peanut butter');
        }, 100)
    })
}

test('the data is peanut butter', () => {
    return fetchDataPromise().then(data => {
      expect(data).toBe('peanut butter');
    });
});
