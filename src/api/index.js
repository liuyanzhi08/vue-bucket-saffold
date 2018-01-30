const getBooks = function (id) {
  return new Promise(resovle => {
    let fakeData = !id ?
    {
      items: [
        {id: 1, name: 'book 1'},
        {id: 2, name: 'book 2'},
        {id: 3, name: 'book 3'}
      ],
      total: 3
    } : { id: id, name: `book ${id}` };
    resovle(fakeData)
  })
}

export  {
  getBooks
}