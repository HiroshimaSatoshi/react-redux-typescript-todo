import { Action } from "redux";

export type ToggleTodoPayload = {
  id: number;
};

export interface ToggleTodoAction extends Action {
  type: "TOGGLE_TODO";
  payload: ToggleTodoPayload;
}

export const toggleTodo = (payload: ToggleTodoPayload): ToggleTodoAction => {
  return {
    payload,
    type: "TOGGLE_TODO",
  };
};
