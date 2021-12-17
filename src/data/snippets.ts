import { v4 as uuidv4 } from "uuid"

export const cssSnippets = [
  {
    id: uuidv4(),
    title: "Reset box-sixing to border-box.",
    code: `
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}`,
    purpose: "",
  },
  {
    id: uuidv4(),
    title: "Polaroid",
    code: `img.polaroid {
    background:#000; /*Change this to a background image or remove*/
    border:solid #fff;
    border-width:6px 6px 20px 6px;
    box-shadow:1px 1px 5px #333; /* Standard blur at 5px. Increase for more depth */
    -webkit-box-shadow:1px 1px 5px #333;
    -moz-box-shadow:1px 1px 5px #333;
    height:200px; /*Set to height of your image or desired div*/
    width:200px; /*Set to width of your image or desired div*/
}`,
  },
]

export const jsSnippets = [
  {
    id: uuidv4(),
    title: "Array to CSV",
    code: `const arrayToCSV = (arr, delimiter = ',') =>
    arr.map(v => v.map(x => 
      \`"\${x}"\`).join(delimiter))
      .join('\n'):`,
    purpose: " converts the elements to strings with comma-separated values.",
  },
  {
    id: uuidv4(),
    title: "isBrowser",
    code:
      "const isBrowser = () => ![typeof window, typeof document].includes('undefined');",
    purpose: "checks if the code is being executed in a browser.",
  },
  {
    id: uuidv4(),
    title: "Bottom Visible",
    code: `const bottomVisible = () =>
      document.documentElement.clientHeight + window.scrollY >=
      (document.documentElement.scrollHeight || document.documentElement.clientHeight);`,
    purpose: "checks if the bottom of the page is visible",
  },
  {
    id: uuidv4(),
    title: "Remove Duplicates from an array.",
    code: `const unique = [...new Set(array)];`,
  },
  {
    id: uuidv4(),
    title: "Create Directory",
    code: `const fs = require('fs');
    const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);
    createDirIfNotExists('test'); 
    // creates the directory 'test', if it doesn't exist`,
  },
  {
    id: uuidv4(),
    title: "is",
    code: `const is = (type, val) => ![, null].includes(val) && val.constructor === type;`,
    purpose: `checks if a value is a particular type`,
  },
]

export const htmlSnippets = [
  {
    id: uuidv4(),
    title: "Open a link in a new tab.",
    code: `
<a 
  href="https://example.com" 
  target="_blank" 
  rel="noreferrer noopener">
  Link Name here
</a>`,
    purpose: "",
  },
]
