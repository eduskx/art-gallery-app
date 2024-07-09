import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  slug,
}) {
  return (
    <div>
      <h1>ArtPieceDetails Page</h1>
      <ArtPiecePreview
        image={image}
        title={title}
        artist={artist}
        slug={slug}
      />
      <p>
        {year}, {genre}
      </p>
    </div>
  );
}
