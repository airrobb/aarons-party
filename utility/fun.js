export const tasteTheRainbow = () => {
  const arc = [];
  let s = 100;
  let l = 50;

  for (let i = 1; i < 80; i += 1) {
    const angle = ((i + 20) % 20) / 20;

    for (let x = 1; x < 15; x += 1) {
      const yMultiplier = i > 40 ? -1 : 1;
      const xMultiplier = i < 20 || i > 60 ? -1 : 1;

      const slope = angle * 15;

      const xPoint = x * slope * xMultiplier;
      const yPoint = x * (10 - slope) * yMultiplier;

      arc.push(
        `${Math.round(xPoint)}vw ${Math.round(yPoint)}vh  hsl(${i *
          50}, ${s}%, ${l}%)`
      );
    }
  }

  return arc.join(",");
};
