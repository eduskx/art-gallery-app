import ArtPieceDetails from "@/components/ArtPieceDetails";
import BackButton from "@/components/BackButton";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;
  console.log(router);

  const selectedPiece = pieces.find((piece) => piece.slug === slug);

  function handleClick() {
    router.back();
  }

  return (
    <>
      <BackButton onClick={handleClick} />
      <ArtPieceDetails
        image={selectedPiece.imageSource}
        title={selectedPiece.name}
        artist={selectedPiece.artist}
        year={selectedPiece.year}
        genre={selectedPiece.genre}
        slug={selectedPiece.slug}
      />
    </>
  );
}
