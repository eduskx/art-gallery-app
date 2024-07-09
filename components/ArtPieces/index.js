import ArtPiecePreview from "../ArtPiecePreview";
import { StyledList } from "./ArtPieces.styled";
import { uid } from "uid";

export default function ArtPieces({ pieces }) {
  return (
    <StyledList>
      {pieces.map((piece) => (
        <li key={uid()}>
          <ArtPiecePreview
            image={piece.imageSource}
            title={piece.name}
            artist={piece.artist}
          ></ArtPiecePreview>
        </li>
      ))}
    </StyledList>
  );
}
