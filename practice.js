let array = [
    {
      name: 'xyz',
      age: 10
    },
     {
      name: 'ert',
      age: 4
    },
      {
      name: 'mvm',
      age: 45
    },
     {
      name: 'rere',
      age: 56
    },
  ]
  
  
  let arraytwo = [
    {
      name: 'fdcd',
      age: 32
    },
     {
      name: 'ter',
      age: 1
    },
      {
      name: 'fdfg',
      age: 3
    },
     {
      name: 'gfdgd',
      age: 15
    },
  ]

  let arr3 = [...array, ...arraytwo];

  function compare(a, b) {
      if(a.age < b.age) {
          return -1;
      } else if(a.age > b.age) {
          return 1;
      } else return 0;
  }

    arr3.sort(compare);

  //console.log(arr3);

//======================================================================================================

for(let i = 1; i <= 100; i++) {
    if(i % 5 == 0 && i % 3 == 0) {
        console.log('hello world');
    } else if(i % 5 == 0) {
        console.log('world');
    } else if(i % 3 == 0) {
        console.log('hello');
    } else console.log(i);
}
