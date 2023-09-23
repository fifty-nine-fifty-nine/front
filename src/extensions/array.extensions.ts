Array.prototype.removeEmptyStrings = function () {
  return this.filter((e) => e.isNotEmpty());
};

export {};
