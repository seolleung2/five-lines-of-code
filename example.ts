// 예제 3.6 배열의 최소 항목을 찾는 함수

function minimum(arr: number[][]) {
  let result = Number.POSITIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      result = min(result, arr, i, j);
    }
  }
  return result;
}

function min(result: number, arr: number[][], i: number, j: number) {
  if (result > arr[i][j]) {
    result = arr[i][j];
  }
  return result;
}
