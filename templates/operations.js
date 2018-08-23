import * as actions from "./actions";

const simpleQuack = actions.quack;

const complexQuack = (distance) => (dispatch) => {
  dispatch(actions.quack()).then(() => {
    dispatch( actions.swim(distance));
    dispatch();
  });
}

export {
  simpleQuack,
  complexQuack
};
