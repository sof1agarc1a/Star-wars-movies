import React, { useState } from "react";
import { Filter } from "../Filter";
import { Movie } from "../types/Movie.types";
import { fireEvent, render, screen } from "../utils/test-utils";

const DummyFilter = () => {
  const [movies, setMovies] = useState<Movie[]>([
    {
      title: "Return of the Jedi",
      episode_id: 6,
      release_date: "1983-05-25",
      opening_crawl: "Test description :)",
      director: "Sofia G. R.",
      producer: "Sofia G. R.",
    },
    {
      title: "A new hope",
      episode_id: 5,
      release_date: "1977-05-25",
      opening_crawl: "Test description djfksjfkd :)",
      director: "Sofia G. R.",
      producer: "Sofia G. R.",
    },
  ]);

  return (
    <div>
      {movies.map(({ title }, index) => (
        <p key={index} role="listitem">
          {title}
        </p>
      ))}
      <Filter
        setFilteredMovies={(movies) => setMovies([...movies])}
        movies={movies}
      />
    </div>
  );
};

describe("Filter", () => {
  it("should show the filter modal if the sort by button is clicked", async () => {
    render(<Filter setFilteredMovies={() => {}} movies={[]} />);

    const sortByButton = screen.getByRole("button", {
      name: /sort by\.\.\./i,
    });

    fireEvent.click(sortByButton);

    expect(screen.getByText(/episode/i)).toBeTruthy();
    expect(screen.getByText(/year/i)).toBeTruthy();
  });

  it("should show the cross icon if any filter is selected", async () => {
    render(<Filter setFilteredMovies={() => {}} movies={[]} />);

    const sortByButton = screen.getByRole("button", {
      name: /sort by\.\.\./i,
    });

    fireEvent.click(sortByButton);

    const option = screen.getByText(/episode/i);

    fireEvent.click(option);

    expect(
      screen.getByRole("button", {
        name: /cross-icon/i,
      })
    ).toBeTruthy();
  });

  it("should change the order of the movies when it's filtered by episode", async () => {
    render(<DummyFilter />);

    const sortByButton = screen.getByRole("button", {
      name: /sort by\.\.\./i,
    });
    fireEvent.click(sortByButton);

    const option = screen.getByText(/episode/i);
    fireEvent.click(option);

    const movieTitles = screen.getAllByRole("listitem");

    expect(movieTitles[0].textContent).toBe("A new hope");
    expect(movieTitles[1].textContent).toBe("Return of the Jedi");
  });

  it("should change the order of the movies when it's filtered by year", async () => {
    render(<DummyFilter />);

    const sortByButton = screen.getByRole("button", {
      name: /sort by\.\.\./i,
    });
    fireEvent.click(sortByButton);

    const option = screen.getByText(/year/i);
    fireEvent.click(option);

    const movieTitles = screen.getAllByRole("listitem");

    expect(movieTitles[0].textContent).toBe("A new hope");
    expect(movieTitles[1].textContent).toBe("Return of the Jedi");
  });
});
