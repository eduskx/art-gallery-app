import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({ pieces }) {
  function getRandomPiece(piecesArray) {
    return piecesArray[Math.floor(Math.random() * piecesArray.length)];
  }
  const randomPiece = getRandomPiece(pieces);

  return (
    <div>
      <Spotlight
        image={randomPiece.imageSource}
        title={randomPiece.name}
        artist={randomPiece.artist}
      />
    </div>
  );
}
