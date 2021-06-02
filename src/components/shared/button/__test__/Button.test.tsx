/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import renderer from "react-test-renderer";
import Button from "../Button";

it("renders a button", () => {
  const tree = renderer
    .create(<Button onClick={() => {}} isFormVisible type="Primary" label="test" icon />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
