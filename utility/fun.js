export const tasteTheRainbow = () => {
  const arc = [];
  let h = 0;
  let s = 100;
  let l = 50;

  for (let i = 1; i < 80; i += 1) {
    let prev = 0;
    let current = 1;
    const angle = ((i + 20) % 20) / 20;

    for (let x = 15; x < 150; x += 15) {
      const next = current + prev;
      const negativeY = i > 40;
      const negativeX = i < 20 || i > 60;
      const slope = angle * 15;
      const xPoint = x * slope * (negativeX ? -1 : 1);
      const yPoint = x * (10 - slope) * (negativeY ? -1 : 1);

      arc.push(
        `${Math.round(xPoint)}px ${Math.round(yPoint)}px 1px hsl(${i *
          50}, ${s}%, ${l}%)`
      );
      prev = current;
      current = next;
    }
  }

  return arc.join(",");
};
