// 예제 3.6 배열의 최소 항목을 찾는 함수

function minimum(arr: number[][]) {
  let result = Number.POSITIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (result > arr[i][j]) {
        result = arr[i][j];
      }
    }
  }

  return result;
}
