var array = [];
function arrayJS() {
  var number = +document.getElementById("number").value;
  var result = document.getElementById("result");
  var print = document.getElementById("print");
  // var print2 = document.getElementById("print2");

  array.push(number);

  result.innerHTML = `Mảng :[${array}]`;
  var task1 = sumPos();
  var task2 = countPos();
  var task3 = minArray();
  var task4 = minPos();
  var task5 = lastEven();
  // var task7 = sortArray();
  // print.style.display = "Block";
  // print2.style.display = "Block";

  print.innerHTML = `<p>1. Tổng số dương : ${task1}</p>
                     <p>2. Số lượng số dương : ${task2}</p>
                     <p>3. Số nhỏ nhất : ${task3}</p>
                     <p>4. Số dương nhỏ nhất : ${task4}</p>
                     <p>5. Số chẵn cuối mảng : ${task5}</p>
               
                    
  `;
}

function sumPos() {
  var temp = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      temp += array[i];
    }
  }
  return temp;
}

function countPos() {
  var temp = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] >= 0) {
      temp += 1;
    }
  }
  return temp;
}

function minArray() {
  var temp = array[0];
  for (var i = 0; i < array.length; i++) {
    if (i >= 1) {
      if (temp > array[i]) {
        temp = array[i];
      }
    }
  }
  return temp;
}

function minPos() {
  var temp = array[0];
  for (var i = 0; i < array.length; i++) {
    if ((temp < 0 && array[i] >= 0) || (temp > array[i] && array[i] >= 0)) {
      temp = array[i];
    }
  }
  return temp;
}

function lastEven() {
  var temp;
  var check = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      temp = array[i];
      check = 1;
    }
  }
  if (check != 1) {
    temp = "Không có số chẵn trong mảng";
  } else {
    temp = temp;
  }
  return temp;
}

function changePosition() {
  var start = +document.getElementById("start").value;
  var end = +document.getElementById("end").value;
  var change = document.getElementById("change");
  var temp = 0;
  // var arrayPos = array;
  for (var i = 0; i < array.length; i++) {
    temp = array[start];
    array[start] = array[end];
    array[end] = temp;
  }
  change.innerHTML = `Mảng sau khi đổi : [${array}]`;
}

function sortArray() {
  var sort = document.getElementById("sort");
  // var arraySort = array;
  array.sort(compare);
  sort.innerHTML = `Mảng tăng dần : ${array}`;
}

function compare(a, b) {
  return a - b;
}

function number() {
  var firstNum = document.getElementById("firstNum");
  var count = 0;
  var i = 0;
  while (i < array.length) {
    if (array[i] > 1) {
      count = 1;
      j = 2;
      while (j <= array[i] / 2) {
        if (array[i] % j === 0) {
          count = 0;
          break;
        }
        j++;
      }
    }
    if (count === 1) {
      firstNum.innerHTML = `Số nguyên tố đầu tiên : ${array[i]} `;
      return;
    }
    else{
      firstNum.innerHTML = `Mảng không có SNT`
    }
    i++;
  }
}

var real = []
function realNumber()
{
  var realNum = document.getElementById("realNum");
  var realArray = +document.getElementById("realArray").value
  real.push(realArray)
  realNum.innerHTML = `Mảng số thực : [${real}]`
}
function printRealNumber()
{
  var resultRealNum = document.getElementById("resultRealNum")
  var count = 0
  for(var i = 0; i < real.length;i++)
  {
    if((Math.ceil(real[i])) === (Math.floor(real[i])) )
    {
      count++
    }
  }
  resultRealNum.innerHTML = `Số nguyên trong mảng : ${count}`
}

function compareArray()
{
  var compareArr = document.getElementById("compareArr")
  var countPos = 0
  var countNeg = 0
  for(var i = 0; i<array.length;i++)
  {
    if(array[i] >= 0)
    {
      countPos++
    }
    else{
      countNeg++
    }
  }
  console.log(countPos)
  console.log(countNeg)

  if(countPos > countNeg)
  {
    compareArr.innerHTML = `Sô dương (${countPos}) > số âm (${countNeg})`
  } else if(countPos === countNeg)
  {
    compareArr.innerHTML = `Sô dương (${countPos}) = số âm (${countNeg})`
  }  else
  {
    compareArr.innerHTML = `Sô dương (${countPos}) < số âm (${countNeg})`
  }
}




