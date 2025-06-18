import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface Movie {
  id: number; // Added this line
  backdrop_path: string;
  original_title: string;
  name?: string;
}

interface TitleCardsProps {
  title?: string;
  category?: string;
}

const TitleCards = ({
  title = "Popular on Netflix",
  category,
}: TitleCardsProps) => {
  const [apiData, setApiData] = useState<Movie[]>([]);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
    },
  };

  const handleWheel = (event: WheelEvent) => {
    event.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results || []))
      .catch((err) => console.error("API fetch error:", err));

    const el = cardsRef.current;
    if (el) {
      el.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (el) {
        el.removeEventListener("wheel", handleWheel);
      }
    };
  }, [category]);

  return (
    <div className="mt-[50px] mb-[30px]">
      <p className="mb-2 text-[32px] font-bold text-white">{title}</p>
      <div
        ref={cardsRef}
        className="flex gap-[10px] overflow-x-scroll scrollbar-hide"
      >
        {apiData.map((card, index) => (
          <Link
            to={`/player/${card.id}`}
            key={index}
            className="relative shrink-0 w-[240px]"
          >
            {card.backdrop_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
                alt={card.original_title || card.name || "Movie"}
                className="w-full h-auto rounded cursor-pointer"
              />
            )}
            <p className="absolute bottom-[10px] right-[10px] text-white px-2 py-1 text-sm rounded">
              {card.original_title || card.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
