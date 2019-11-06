const switchCase = (cases) => (defaultCase) => (key) =>
  key in cases ? cases[key] : defaultCase;

const executeIfFunction = (f) => (f instanceof Function ? f() : f);

const switchCaseFunc = (cases) => (defaultCase) => (key) =>
  executeIfFunction(switchCase(cases)(defaultCase)(key));

export default switchCaseFunc;
