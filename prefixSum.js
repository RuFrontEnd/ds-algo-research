// 2D prefix sum: 表達二維陣列特定區塊中的前綴值
function prefixSum2D(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  // 建立 prefixSum 陣列，多一行一列填 0
  const prefixSum = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  // or Array(m + 1).fill(Array(n + 1))

  // 填入 prefix sum 值
  for (let r = 1; r <= m; r++) {
    for (let c = 1; c <= n; c++) {
      console.log(r);
      console.log(c);
      console.log(prefixSum);
      prefixSum[r][c] =
        prefixSum[r - 1][c] + // 前一列 prefix sum
        prefixSum[r][c - 1] - // 前一欄 prefix sum
        prefixSum[r - 1][c - 1] + // 左上角數字重複加到
        matrix[r - 1][c - 1]; // 原本的數字
    }
  }

  return prefixSum;
}

prefixSum2D([
  [3, 5, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
]);
