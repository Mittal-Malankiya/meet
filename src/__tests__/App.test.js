import { render } from "@testing-library/react";
import App from "../App";

describe("<App /> component", () => {
  let AppDOM;
  beforeEach(() => {
    AppDOM = render(<App />).container.firstChild;
  });
  test("renders EventList", () => {
    expect(AppDOM.querySelector("#event-list")).toBeInTheDocument();
  });
});