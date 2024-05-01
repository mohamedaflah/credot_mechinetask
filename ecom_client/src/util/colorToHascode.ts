import colorName from 'color-name';

const hexToColorName = (hex: string): string => {
  const hexWithoutHash = hex.slice(1);
  const rgb = [
    parseInt(hexWithoutHash.substring(0, 2), 16),
    parseInt(hexWithoutHash.substring(2, 4), 16),
    parseInt(hexWithoutHash.substring(4, 6), 16)
  ];

  let closestMatch = '';
  let closestDistance = Number.POSITIVE_INFINITY;

  for (const [name, value] of Object.entries(colorName)) {
    const distance = Math.sqrt(
      Math.pow(value[0] - rgb[0], 2) +
      Math.pow(value[1] - rgb[1], 2) +
      Math.pow(value[2] - rgb[2], 2)
    );

    if (distance < closestDistance) {
      closestMatch = name;
      closestDistance = distance;
    }
  }

  return closestMatch;
};

export default hexToColorName;
