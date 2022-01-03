"use strict";

module.exports = {
  meta: {
    type: "suggestion",
    schema: []
  },
  create: (context) => {
    return {
      MemberExpression: (node) => {
        if (
          !node.object ||
          !node.object.object ||
          !node.object.object.name ||
          !node.object.property ||
          !node.object.property.name ||
          !node.property ||
          !node.property.name
        ) {
          return;
        }
        if (
          node.object.object.name === "theme" &&
          node.object.property.name === "mediaQueries" &&
          /^xs$|^sm$|^md$|^lg$|^xl$/.test(node.property.name)
        ) {
          context.report({
            node,
            message:
              "Unexpected media query in ts file, media queries should be placed in css modules to apply correct styles during pre-render/ssr.",
          });
        }
      },
      TemplateElement: (node) => {
        if (
          node.value.raw &&
          typeof node.value.raw === "string" &&
          node.value.raw.includes("@media")
        ) {
          context.report({
            node,
            message:
              "Unexpected media query in ts file, media queries should be placed in css modules to apply correct styles during pre-render/ssr.",
          });
        }
      },
    };
  },
};
