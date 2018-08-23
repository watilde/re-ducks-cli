import * as types from "./types";

const quack = () => ({
  type: types.QUACK
});

const swim = (distance) => ( {
  type: types.SWIM,
  payload: {
    distance
  }
});

export {
  swim,
  quack
};
