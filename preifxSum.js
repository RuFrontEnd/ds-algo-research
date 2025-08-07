// 2D prefix sum
function prefixSum2D(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  // 建立 prefixSum 陣列，多一行一列填 0
  const prefixSum = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  // or Array(m + 1).fill(Array(n + 1))

  // 填入 prefix sum 值
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      prefixSum[i][j] =
        prefixSum[i - 1][j] +
        prefixSum[i][j - 1] -
        prefixSum[i - 1][j - 1] +
        matrix[i - 1][j - 1];
    }
  }

  return prefixSum;
}

console.log(
  prefixSum2D(
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5]
  )
);
