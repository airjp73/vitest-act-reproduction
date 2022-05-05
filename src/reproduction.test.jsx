import { render, screen } from "@testing-library/react";
import { useEffect, useState } from "react";

describe("bug reproduction", () => {
  it("should not show act warnings when using findBy queries", async () => {
    const Test = () => {
      const [count, setCount] = useState(0);
      useEffect(() => {
        setTimeout(() => setCount(5), 200);
      }, []);
      return <p>Count: {count}</p>;
    };

    render(<Test />);

    await screen.findByText("Count: 5");
  });
});
