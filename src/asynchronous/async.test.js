function fetchDataPromise() {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve('peanut butter');
        }, 100)
    })
}

function fetchDataPromiseWithErrorMessages() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            reject('error');
        }, 100);
    });
}

test('the data is peanut butter', async () => {
    // const data = await fetchDataPromise();
    // expect(data).toBe('peanut butter');
    await expect(fetchDataPromise()).resolves.toBe('peanut butter');
  });
  
test('the fetch fails with an error', async () => {
    // expect.assertions(1);
    // try {
    //   await fetchDataPromiseWithErrorMessages();
    // } catch (e) {
    //   expect(e).toMatch('error');
    // }
    await expect(fetchDataPromiseWithErrorMessages()).rejects.toMatch('error');
});