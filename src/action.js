import * as actions from "./actionType";

export const onIncrement = (value) => {
  return {
    type: actions.INC,
    payload: value,
  };
};

export const onDecrement = (value) => {
  return {
    type: actions.DEC,
    payload: value,
  };
};

export const updateSalary = (value) => {
  return {
    type: actions.INCREASESALARY,
    payload: value,
  };
};

export const demoteSalary = (value) => {
  return {
    type: actions.DECREASESALARY,
    payload: value,
  };
};

