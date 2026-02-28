import { useEffect, useRef } from 'react';

export default function ImageLightbox({
  src,
  alt,
  onClose,
  onPrev,
  onNext,
  canNavigate = false,
}) {
  const touchStartX = useRef(null);
  const SWIPE_THRESHOLD_PX = 40;

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') {
        onClose();
      } else if (canNavigate && event.key === 'ArrowLeft') {
        onPrev?.();
      } else if (canNavigate && event.key === 'ArrowRight') {
        onNext?.();
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [canNavigate, onClose, onNext, onPrev]);

  if (!src) return null;

  function onTouchStart(event) {
    if (!canNavigate) return;
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  }

  function onTouchEnd(event) {
    if (!canNavigate || touchStartX.current === null) return;

    const endX = event.changedTouches[0]?.clientX ?? null;
    if (endX === null) return;

    const deltaX = endX - touchStartX.current;
    if (Math.abs(deltaX) < SWIPE_THRESHOLD_PX) return;

    if (deltaX > 0) {
      onPrev?.();
    } else {
      onNext?.();
    }

    touchStartX.current = null;
  }

  return (
    <div
      className="lightbox-overlay"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
    >
      {canNavigate && (
        <button
          type="button"
          aria-label="Previous image"
          onClick={(event) => {
            event.stopPropagation();
            onPrev?.();
          }}
          className="lightbox-nav-btn lightbox-nav-btn--left"
        >
          ←
        </button>
      )}

      <img
        src={src}
        alt={alt || 'Preview'}
        className="lightbox-image"
        onClick={(event) => event.stopPropagation()}
        loading="eager"
        decoding="async"
      />

      {canNavigate && (
        <button
          type="button"
          aria-label="Next image"
          onClick={(event) => {
            event.stopPropagation();
            onNext?.();
          }}
          className="lightbox-nav-btn lightbox-nav-btn--right"
        >
          →
        </button>
      )}
    </div>
  );
}
