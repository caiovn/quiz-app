import Document from "@/pages/_document";

describe("_document", () => {
  it("should render", async () => {
    const docElm = await Document();
    expect(docElm.props?.["data-theme"]).toEqual("light");
  });
});
