export function logoDataUri({ stroke = 8, view = "0 0 64 64" }: { stroke?: number; view?: string } = {}) {
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${view}" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="${stroke}">` +
    `<path d="M16 51V13H31M16 32H31" stroke="#14193a"/>` +
    `<path d="M31 13H36C47 13 47 32 36 32H31M36 32L47 51" stroke="#f2b01e"/>` +
    `</svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}