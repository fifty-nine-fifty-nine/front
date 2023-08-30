import { recipe } from "@vanilla-extract/recipes";

import { themeVars } from "..";

export const input = recipe({
  base: {
    display: "block",
  },

  variants: {
    color: {
      inputColor: themeVars.borderColors.input,
    },
    size: {
      single: {
        width: "100%",
        height: 60,
        borderRadius: 12,
        fontSize: 18,
        fontWeight: 500,
        border: `solid ${themeVars.borderColors.input}`,
        padding: 20,
      },
    },
  },

  // fallback으로 설정하는 variant
  defaultVariants: {
    color: "inputColor",
    size: "single",
  },
});
