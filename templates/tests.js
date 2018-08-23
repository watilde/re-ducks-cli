import expect from "expect.js";
import reducer from "./reducers";
import * as actions from "./actions";

describe( "duck reducer", () => {
  describe( "quack", () => {
    const quack = actions.quack();
    const initialState = false;

    const result = reducer(initialState, quack);
    it("should quack", () => {
      expect(result).to.be(true);
    });
  });
});
