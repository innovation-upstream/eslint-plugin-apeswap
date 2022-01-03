"use strict";

const rule = require("../../../lib/rules/no-media-query"),
  RuleTester = require("eslint").RuleTester;
  RuleTester.setDefaultConfig({
    parserOptions: {
      ecmaVersion: 6,
      ecmaFeatures: {
        jsx: true,
      },
    }
  });

const ruleTester = new RuleTester();

ruleTester.run("no-media-query", rule, {
  valid: [
    {
      code: "const styledDiv = styled.div`color: black;`;",
    },
  ],

  invalid: [
    {
      code: "const styledDiv = styled.div`@media screen and (min-width: 450px) { color: black; }`;",
      errors: [
        {
          message:
            "Unexpected media query in ts file, media queries should be placed in css modules to apply correct styles during pre-render/ssr.",
        },
      ],
    },
    {
      code: "const styledDiv = styled.div`${({ theme }) => theme.mediaQueries.sm} { color: black; }`;",
      errors: [
        {
          message:
            "Unexpected media query in ts file, media queries should be placed in css modules to apply correct styles during pre-render/ssr.",
        },
      ],
    },
  ],
});
