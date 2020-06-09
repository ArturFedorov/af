export class ArrayUtil {
  static chunkArray<T>(inputArray: T[], chunkSize: number): T[][] {
    if (!inputArray) return [];

    const arrayLength = inputArray.length;
    const tempArray = [];

    for (let index = 0; index < arrayLength; index += chunkSize) {
      const chunk = inputArray.slice(index, index + chunkSize);
      tempArray.push(chunk);
    }

    return tempArray;
  }
}
