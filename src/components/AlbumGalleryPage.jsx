import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageShell from '../sections/_PageShell';
import ImageLightbox from './ImageLightbox';

function formatAlbumTitle(slug) {
  return slug
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export default function AlbumGalleryPage({ groupedAlbums, backTo, backLabel }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const { slug = '' } = useParams();
  const normalized = slug.toLowerCase();
  const items = useMemo(() => groupedAlbums[normalized] ?? [], [groupedAlbums, normalized]);
  const title = normalized ? formatAlbumTitle(normalized) : 'Gallery';

  return (
    <PageShell title={`${title} Album`} blurb="Click any photo to view full size.">
      <div className="col-span-full mx-auto w-full grid gap-6 px-4
[grid-template-columns:repeat(auto-fit,minmax(min(320px,100%),1fr))]">
        <div className="mb-6">
          <Link
            to={backTo}
            className="inline-block rounded-lg px-3 py-1.5 text-sky-300 ring-1 ring-white/10 hover:ring-white/30 hover:bg-white/10 transition"
          >
            ← {backLabel}
          </Link>
        </div>

        {items.length === 0 ? (
          <p className="text-white/80">No photos found for this album yet.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <button
                key={`${item.src}-${index}`}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 hover:ring-white/20 bg-white/5 backdrop-blur-md transition text-left"
                aria-label={`Open ${item.alt} image`}
              >
                <div className="relative w-full aspect-[4/3]">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                    <span className="text-white/90 text-sm">{item.alt}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      <ImageLightbox
        src={selectedIndex !== null ? items[selectedIndex]?.src : null}
        alt={selectedIndex !== null ? items[selectedIndex]?.alt : ''}
        onClose={() => setSelectedIndex(null)}
        canNavigate={selectedIndex !== null && items.length > 1}
        onPrev={() => setSelectedIndex((current) => (current - 1 + items.length) % items.length)}
        onNext={() => setSelectedIndex((current) => (current + 1) % items.length)}
      />
    </PageShell>
  );
}
