// https://leetcode.com/problems/count-servers-that-communicate/description/?envType=daily-question&envId=2025-06-20

var countServers = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    const rowNum = new Array(m).fill(0);
    const colNum = new Array(n).fill(0);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                rowNum[i]++;
                colNum[j]++;
            }
        }
    }

    let count = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1 && (rowNum[i] > 1 || colNum[j] > 1)) {
                count++;
            }
        }
    }

    return count;
};

// 思路
// 1. 先去計算那一行或那一列到底有沒有電腦連結
// 2. 有連結的列或行再算電腦的數量就好
// 3. 使用 Object 來計會比使用 Array 來的慢，因為 Object 要多一步 hash function 映射
// 4. 使用 forEach 會比 for 來得慢，因為呼叫 function 的成本還是比較高
