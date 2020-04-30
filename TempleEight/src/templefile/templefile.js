const Prism = require('prism-react-renderer/prism').default;
const ExecutionEnvironment = require('exenv');

function addTemplefile() {
  // Regex interpolation: always use `(?:${….source})` (or `(${….source})` for capturing),
  // to avoid breaking precedence and to avoid combining operators
  // (e.g. example=/z|x+/; Regexp(`${example.source}?`) is /z|x+?/ not /(z|x+)?/).

  // Basic regex
  const lowerIdentifier = /\b[a-z][a-zA-Z0-9]*\b/;
  const upperIdentifier = /\b[A-Z][a-zA-Z0-9]*\b/;
  const commentRegex = /\/\*[\s\S]*?\*\/|\/\/.*(?:\n|$)/;
  const punctuation = /[(){};:,\[\]]/;
  const number = /\d+(?:\.\d+)?[KkMmGg]?/;

  // Derived regex
  const whitespace = RegExp(`(?:${commentRegex.source}|\\s)*`);
  const literal = RegExp(
    `(?:${lowerIdentifier.source})|(?:${upperIdentifier.source})|(?:${number.source})`
  );
  const array = RegExp(
    `\\[(?:${whitespace.source})((?:${literal.source})(?:${whitespace.source}),(?:${whitespace.source}))*((?:${literal.source})(?:${whitespace.source}))?\\]`
  );
  const paramName = RegExp(
    `(?:${lowerIdentifier.source})(?:${whitespace.source}):(?:${whitespace.source})`
  );
  const functionArg = RegExp(
    `(?:${paramName.source})?(?:(?:${literal.source})|(?:${array.source}))(?:(?:${whitespace.source})=(?:${whitespace.source})(?:${literal.source}))?`
  );
  const functionArgs = RegExp(
    `\\((?:${whitespace.source})((?:${functionArg.source})(?:${whitespace.source}),(?:${whitespace.source}))*((?:${functionArg.source})(?:${whitespace.source}))?\\)`
  );
  const functionArgsOrShorthand = RegExp(
    `(?:${functionArgs.source})|(?:${array.source})`
  );
  const templeType = RegExp(
    `(?:${lowerIdentifier.source})((?:${whitespace.source})(?:${functionArgsOrShorthand.source}))?`
  );

  // Ready-made Prism tokens
  const comment = { pattern: commentRegex, greedy: true };
  const token = { pattern: lowerIdentifier, alias: 'builtin' };
  const selector = {
    pattern: RegExp(
      `(?:${lowerIdentifier.source})(?=(?:${whitespace.source}):)`
    ),
  };
  const metadataKey = {
    pattern: RegExp(`#(?:${whitespace.source})(?:${lowerIdentifier.source})`),
    alias: 'function',
    inside: { comment },
  };

  // Ready-made Prism token sets
  const functionArgsInside = {
    selector,
    punctuation,
    number,
    token,
    comment,
    'class-name': upperIdentifier,
  };

  // For highlighting a temple type definition
  Prism.languages['templetype'] = {
    'attr-type': {
      pattern: templeType,
      inside: {
        char: { pattern: RegExp(`^(?:${lowerIdentifier.source})`) },
        rest: functionArgsInside,
      },
    },
  };

  // For highlighting a Templefile
  Prism.languages.templefile = {
    annotation: {
      pattern: RegExp(`@(?:${whitespace.source})(?:${lowerIdentifier.source})`),
      inside: { comment },
      alias: 'builtin',
    },
    metadata: {
      pattern: RegExp(
        `#(?:${whitespace.source})(?:${lowerIdentifier.source})((?:${whitespace.source})(?:${functionArgsOrShorthand.source}))?`
      ),
      inside: { metadataKey, rest: functionArgsInside },
      alias: 'function',
    },
    blockType: {
      pattern: RegExp(
        `(?:${lowerIdentifier.source})(?=(?:${whitespace.source})\{)`
      ),
      inside: { comment },
      alias: 'keyword',
    },
    attributeType: {
      pattern: RegExp(`(:${whitespace.source})(?:${templeType.source})`),
      lookbehind: true,
      inside: {
        char: { pattern: RegExp(`^(?:${lowerIdentifier.source})`) },
        rest: functionArgsInside,
      },
    },
    blockName: { pattern: upperIdentifier, alias: 'class-name' },
    attributeName: {
      pattern: RegExp(
        `(?:${lowerIdentifier.source})(?=(?:${whitespace.source}):)`
      ),
      inside: { comment },
      alias: 'attr-name',
    },
    punctuation,
    comment,
  };
}

if (ExecutionEnvironment.canUseDOM) addTemplefile();
