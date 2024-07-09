import Image from "next/image";
import Link from "next/link";

export default function ArtPiecePreview({ image, title, artist, slug }) {
  return (
    <div>
      <Link href={`/art-pieces/${slug}`}>
        <Image src={image} alt={title} width={500} height={500} />
      </Link>
      <h2>{title}</h2>
      <p>{artist}</p>
    </div>
  );
}
