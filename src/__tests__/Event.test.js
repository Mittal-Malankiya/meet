import { render } from "@testing-library/react";
import Event from "../components/Event";
import mockData from "../mock-data";
import { getEvents } from "../api";
import userEvent from "@testing-library/user-event";

describe("<Event /> component", () => {
  let EventComponent;
  const event = mockData[0].items[0];
  beforeEach(() => {
    EventComponent = render(<Event event={getEvents} />);
  });
  test("has event title", () => {
    expect(EventComponent.screen.getByText(event.summary)).toBeInTheDocument();
  });

  test("has event created time", () => {
    expect(EventComponent.screen.getByText(event.created)).toBeInTheDocument();
  });

  test("has event location", () => {
    expect(EventComponent.screen.getByText(event.location)).toBeInTheDocument();
  });

  test("has button show details", () => {
    expect(EventComponent.screen.getByText("Show Details")).toBeInTheDocument();
  });

  test("by default, events details section should be hidden", () => {
    const details = EventComponent.container.querySelector(".details");
    expect(details).not.toBeInTheDocument();
  });

  test("shows details section, when user clicks show details button", async () => {
    const user = userEvent.setup();
    const button = EventComponent.screen.getByText("Show Details");
    await user.click(button);
    const details = EventComponent.container.querySelector(".details");
    expect(details).toBeInTheDocument();
  });

  test("hide details section, when user clicks hide details button", async () => {
    const user = userEvent.setup();
    const showButton = EventComponent.screen.getByText("Show Details");
    const hideButton = EventComponent.screen.getByText("Hide Details");
    user.click(hideButton);
    expect(showButton).toBeInTheDocument();
    expect(hideButton).not.toBeInTheDocument();
  });
});
