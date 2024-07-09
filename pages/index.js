import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function HomePage() {
  const {
    data: pieces,
    error,
    isLoading,
  } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  if (error) return <div>falied to load</div>;
  if (isLoading) return <div>loading...</div>;

  function randomPiece(piecesArray) {
    return piecesArray[Math.floor(Math.random() * piecesArray.length)];
  }
  const randomPice = randomPiece(pieces);

  return (
    <div>
      <Spotlight
        image={randomPice.imageSource}
        title={randomPice.name}
        artist={randomPice.artist}
      />
      <ArtPieces pieces={pieces} />
    </div>
  );
}
