export default function (sub: string) {
  return `${sub}-${Math.random().toString(36).substr(2, 10)}`;
}
