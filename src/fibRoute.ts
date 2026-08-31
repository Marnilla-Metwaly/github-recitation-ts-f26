const fibonacci = require("./fib");

export default (req: any, res: any): void => {
  const { num } = req.params;

  const fibN = fibonacci(parseInt(num, 10));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};