export async function delay(ms: number) {
  return new Promise((resoolve) => {
    setTimeout(() => {
      resoolve("");
    }, ms);
  });
}
