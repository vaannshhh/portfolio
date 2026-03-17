declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(
      target: string | Element | Array<string | Element>,
      vars?: Record<string, unknown>
    );
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
  }
}

