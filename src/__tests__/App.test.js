import { render } from "@testing-library/react";
import App from "../App";

describe("<App /> component", () => {
  let AppDome;
  beforeEach(() => {
    AppDome = render(<App />).container.firstChild;
  });
  test("renders list of events", () => {
    expect(AppDome.querySelector("#event-list")).toBeInTheDocument();
  });
});
