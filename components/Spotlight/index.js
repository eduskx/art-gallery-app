import Image from "next/image";
import ArtPiecePreview from "../ArtPiecePreview";

export default function Spotlight({ image, title, artist }) {
  return (
    <>
      <h1>* Spotlight Piece *</h1>

      {/* <Image src={image} alt={title} width={500} height={500} priority />
      <p>{artist}</p> */}

      <ArtPiecePreview image={image} title={title} artist={artist} />
    </>
  );
}
