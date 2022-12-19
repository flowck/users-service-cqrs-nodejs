import { randomUUID } from "crypto";

export class ID {
  private value!: string;

  constructor(value: string) {
    if (value === "") {
      throw Error("unable to create an empty id");
    }

    this.value = value;
  }

  toString() {
    return this.value;
  }

  static new(): ID {
    return new ID(randomUUID());
  }
}
