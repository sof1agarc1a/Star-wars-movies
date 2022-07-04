import React from "react";
import { SelectedMovieInfo } from "../SelectedMovieInfo";
import { render, screen } from "../utils/test-utils";

describe("SelectedMovieInfo", () => {
  it("should show a text if movie is not selected", async () => {
    render(<SelectedMovieInfo movie={undefined} />);

    expect(screen.getByText(/no movie selected/i)).toBeTruthy();
  });

  it("should show all the movie info", async () => {
    render(
      <SelectedMovieInfo
        movie={{
          title: "Return of the Jedi",
          episode_id: 6,
          release_date: "1983-05-25",
          opening_crawl: "Test description :)",
          director: "Sofia G. R.",
          producer: "Sofia G. R.",
        }}
      />
    );

    expect(
      screen.getByRole("heading", {
        name: /episode vi - return of the jedi/i,
      })
    ).toBeTruthy();

    expect(screen.getByText(/test description :\)/i)).toBeTruthy();

    expect(screen.getByText(/directed by: sofia g\. r\./i)).toBeTruthy();

    expect(screen.getByText(/produced by: sofia g\. r\./i)).toBeTruthy();
  });
});
