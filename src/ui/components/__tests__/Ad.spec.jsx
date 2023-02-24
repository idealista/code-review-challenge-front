import { render } from "@testing-library/react";
import Ad from "../Ad";

it("renders correctly", () => {
  const ad = render(<Ad />);
  expect(ad).toMatchSnapshot();
});
