/* eslint-disable @typescript-eslint/no-explicit-any */
import App from "@/pages/_app";
import { render } from "@testing-library/react";

describe("_app", () => {
  it("should render", () => {
    const router: any = {};
    render(
      <App
        Component={() => <div data-testid="children-elm"></div>}
        pageProps={{}}
        router={router}
      />
    );
  });
});
