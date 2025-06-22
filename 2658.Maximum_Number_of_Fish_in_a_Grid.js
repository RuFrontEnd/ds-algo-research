/**
 * @param {number[][]} grid
 * @return {number}
 */

const directions = [
  { x: 0, y: 1 },
  { x: 0, y: -1 },
  { x: 1, y: 0 },
  { x: -1, y: 0 }
]

var findMaxFish = function (grid) {
  let max = 0
  let visited = new Set()

  for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[r].length; c++) {
          if (grid[r][c] === 0 || visited.has(`${r},${c}`)) continue;
          let fish = 0
          const q = [[r, c]]
          visited.add(`${r},${c}`)

          while (q.length > 0) {
              const [cx, cy] = q.shift()
              const quantity = grid[cx][cy]
              fish += quantity

              for (const { x: ox, y: oy } of directions) {
                  const nx = cx + ox
                  const ny = cy + oy
                  if (!grid[nx]?.[ny] || visited.has(`${nx},${ny}`)) continue
                  q.push([nx, ny])
                  visited.add(`${nx},${ny}`)
              }
          }

          max = Math.max(max, fish)
      }
  }

  return max
};

console.log(findMaxFish([[0,2,1,0],[4,0,0,3],[1,0,0,4],[0,3,2,0]]))

// 1. 對每一格 cell 用 BFS 去擴散
// 2. 拜訪過就不用再走 BFS