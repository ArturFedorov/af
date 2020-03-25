export default function(inputNumber: number): string {
  return inputNumber < 10 ? `0${inputNumber}` : inputNumber.toString();
}
