function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  //   if (typeof n1 === "number" && typeof n2 === "number") {
  //     throw new Error("Incorrect input!");
  //   }
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
}
