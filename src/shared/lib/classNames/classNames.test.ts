import { classNames } from "./classNames";

describe("classNames", () => {
  test("With additional class", () => {
    const expected = "mainClass class1 class2";
    expect(classNames("mainClass", {}, ["class1", "class2"])).toBe(expected);
  });

  test("With mods", () => {
    const expected = "mainClass border blue";
    expect(classNames("mainClass", { border: true, blue: true }, [])).toBe(
      expected
    );
  });

  test("With mods there one false", () => {
    const expected = "mainClass border blue";
    expect(
      classNames("mainClass", { border: true, bold: false, blue: true }, [])
    ).toBe(expected);
  });

  test("With mods there one undefined", () => {
    const expected = "mainClass border blue";
    expect(
      classNames("mainClass", { border: true, bold: undefined, blue: true }, [])
    ).toBe(expected);
  });

  test("With mods and additional class", () => {
    const expected = "mainClass class1 class2 border blue";
    expect(
      classNames("mainClass", { border: true, bold: false, blue: true }, [
        "class1",
        "class2",
      ])
    ).toBe(expected);
  });
});
