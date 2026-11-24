import { describe, it, expect } from "vitest";
import { pseudoLocalise, runEnXa375PxE2EScreenshotTest } from "../pseudo";

describe("pseudoLocalise", () => {
  it("expands and accents text", () => {
    const res = pseudoLocalise("Hello");
    expect(res).toContain("Héllô");
    expect(res.length).toBeGreaterThan("Hello".length);
  });

  it("runs en-XA 375px E2E screenshot run successfully", () => {
    expect(() => runEnXa375PxE2EScreenshotTest()).not.toThrow();
  });
});
