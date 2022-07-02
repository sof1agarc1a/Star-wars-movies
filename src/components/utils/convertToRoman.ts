// just a simple function to get roman numbers up to 10.
export const convertToRoman = (number: number) => {
  const romanNumbers = [
    "-",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
  ];
  return romanNumbers[number];
};
