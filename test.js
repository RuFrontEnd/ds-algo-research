const dfs = (node) => {
  if (!node) return;

  console.log(node.value); // 安全處理
  for (const child of node.children) {
    dfs(child);
  }
};

const tree = {
  value: "A",
  children: [
    { value: "B", children: [] },
    {
      value: "C",
      children: [
        { value: "D", children: [] },
        { value: "E", children: [] }
      ]
    }
  ]
};

console.log("dfs(tree)", dfs(tree)); // 只輸出節點值 1 和 2，不會出錯

const bfs = (node) => {
  if (!node) return;

  let q = [node];
  let level = 0;

  while (q.length > 0) {
    console.log("level", level);
    const size = q.length;

    for (let i = 0; i < size; i++) {
      const currentNode = q.shift();
      console.log(currentNode.value);

      for (const child of currentNode.children) {
        q.push(child);
      }
    }

    level++;
  }
};

console.log("bfs(tree)", bfs(tree)); // 只輸出節點值 1 和 2，不會出錯

const bs = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;

  while (r > l) {
    const m = Math.floor((l + r) / 2);

    const currenNum = nums[m];

    if (currenNum > target) {
      r = m - 1;
    } else if (currenNum < target) {
      l = m + 1;
    } else {
      return m;
    }
  }

  return -1
};
