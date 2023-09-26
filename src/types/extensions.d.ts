interface String {
  isEmpty(): boolean;
  isNotEmpty(): boolean;
}

interface Array<T> {
  removeEmptyStrings(): T[];
}
