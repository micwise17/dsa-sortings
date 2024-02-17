// Import Readline for Command-line

const readline = require("readline")

// Initialize CreateInterface() method from readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// Test Array
const testArr = [3,2,11,2,6,7,9,8,4,1,5]

// BubbleSort Algorithm
function BubbSort(arr, length) {
      // let ii = 0;
  for (let i = 0; i <= length-1; i++) {
    // const element = arr[i];
    for (let j = length; j >= i+1; j--) {
      if (arr[j] < arr[j-1]) {
        const kep1 = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = kep1
      }
    // if (i==0) {
    //   ii++
    // }
    
    //   console.log('at iteration', i);
      console.log(arr)
    }

  }
  // console.log('i at 0 was', ii);
}

// InsertionSort Algorithm
function InsrtSort(arr, length) {
  for (let i = 1; i < length; i++) {
    let j = i;
    while (arr[j] < arr[j-1]) {
      const temp = arr[j]
      arr[j] = arr[j-1]
      arr[j-1] = temp
      j = j-1
    }
    console.log(arr)
  }
}
// console.log('Bubble sort');
// const start = new Date().getTime()
// BubbSort(testArr, testArr.length)
// const stopp = new Date().getTime()
// const elasped = stopp - start
// console.log('started:', start, '\n', 'stopped:', stopp, '\n', 'elasped:', elasped, 'millisec \n' );
// console.log('Insertion sort');
// const start2 = new Date().getTime()
// InsrtSort(testArr, testArr.length)
// const stopp2 = new Date().getTime()
// const elasped2 = stopp2 - start2
// console.log('started:', start2, '\n', 'stopped:', stopp2, '\n', 'elasped:', elasped2, 'millisec \n' );

InitSortter()
function InitSortter() {
  rl.question('input numbers/alphabets for sorting (seperate by comma, i.e 3,2,4,5 or e,b,d,f,a,c)\n', (arrGiven) => {
    let gArr
    const gArrString = stringToArrayStrings(arrGiven)
    const alphabet = [ 
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
    ]
    if (alphabet.indexOf(gArrString[0]) >= 0 ) {
      gArr = stringToArrayStrings(arrGiven)
    }
    else{
      gArr = stringToArrayNumbers(arrGiven)
    }
    // const gArr = stringToArrayNumbers(arrGiven)
  console.log(gArr, gArr.length);
  selSmethod(gArr)
})
}

function selSmethod(gArr) {
  rl.question('select sort method\n 1. Bubble Sort\n 2. Insertion Sort\n', (methodChsn) => {
    switch (methodChsn) {
      case '1':
        console.log('you choose 1. Bubble Sort: \n here you go');
        BubbSort(gArr, gArr.length)
        willContinue()
        break;
      
      case '2':
        console.log('you choose 2. Insertion Sort: \n here you go');
        InsrtSort(gArr, gArr.length)
        willContinue()
        break;
    
    
      default:
        console.log('invalid command');
      selSmethod(gArr)
        break;
    }
  })
}

function willContinue() {
  rl.question('will you like to sort again? \n type yes/no\n', (answer) => {
    if (answer == 'yes') {
      InitSortter()
    }
    else{
      console.log('goodbye!!');
      rl.removeAllListeners
      console.log('ctrl+c to exit');
    }
  })
}

function stringToArrayNumbers(string) {
  let newArr = []
  const arrString = string.split(',')
  arrString.forEach((item, index) => {
    const turnedNum = parseInt(item)
    newArr[index] = turnedNum
  })
  return newArr
}

function stringToArrayStrings(string) {
  // let newArr = []
  const arrString = string.split(',')
  return arrString
}