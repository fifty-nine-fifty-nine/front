String.prototype.isEmpty = function (this: string) {
  return this.trim() === '';
};

String.prototype.isNotEmpty = function (this: string) {
  return this.trim() !== '';
};

export {};
