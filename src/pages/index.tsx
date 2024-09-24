import { Button } from "@/components";
import React from "react";

export default function Home() {
  return (
    <div>
      <h1 className="heading-xl-bold">test</h1>
      <div style={{ display: "flex", gap: "32px" }}>
        <Button variant="primary">click</Button>
        <Button variant="secondary">click</Button>
        <Button variant="tertiary">click</Button>
      </div>
    </div>
  );
}
