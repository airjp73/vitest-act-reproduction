/**
 * This workaround was suggested here:
 * https://github.com/testing-library/react-testing-library/issues/1061#issuecomment-1117450890
 *
 * This suppresses one error, but doesn't actually solve the issue with act.
 */
global.IS_REACT_ACT_ENVIRONMENT = true;
