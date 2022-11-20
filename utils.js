function getGcd(m, n) {
  if (n) return gcd(n, m % n);
  return m;
} // 求最大公因數
