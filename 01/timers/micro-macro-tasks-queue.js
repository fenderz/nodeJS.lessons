// какой порядок вывода в console ?

// microqueue = ['then 1', 'then 2', 'then 4', 'then 3'];
// tasksqueue = ['setInterval', 'setTimeout 1', 'setInterval', 'setTimeout 2'];

const intervalId = setInterval(() => {
  console.log('setInterval'); // 3, 7
}, 0);

setTimeout(() => {
  console.log('setTimeout 1'); // 4

  const promise = new Promise((resolve, reject) => {
    resolve('then 4');
  });

  promise
    .then((value) => {
      console.log(value);  //5

      setTimeout(() => {
        console.log('setTimeout 2'); //8
        clearInterval(intervalId); // стопаем setInterval
      }, 0);
    });
}, 0);

const promise = new Promise((resolve, reject) => {
  resolve('then 1');
});

promise
  .then((value) => {
    console.log(value); // 1
    return 'then 2';
  })
  .then((value) => {
    console.log(value); // 2

    return new Promise((resolve, reject) => {
      setTimeout(resolve, 0, 'then 3');
    });
  })
  .then((value) => {
    console.log(value); // 6
  });
