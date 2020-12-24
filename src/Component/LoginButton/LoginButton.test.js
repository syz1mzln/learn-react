import { fireEvent, render, screen } from "@testing-library/react";
import LoginButton from "../LoginButton/LoginButton";

describe("LoginButton", () => {
  //create test specs
  it("shall render the text of sign in within the button", () => {
    render(<LoginButton />);
    const loginButton = screen.getByText("Sign In");
    expect(loginButton).toBeDefined();
  });
  it("shall trigger login props when triggered", () => {
    const mockedLogin = jest.fn();
    render(<LoginButton login={mockedLogin} />);
    const loginButton = screen.getByText("Sign In");
    expect(mockedLogin).not.toBeCalled();

    fireEvent.click(loginButton);
    expect(mockedLogin).toBeCalled();
  });
});
