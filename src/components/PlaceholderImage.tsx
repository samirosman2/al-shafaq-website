import { useLanguage } from '../context/LanguageContext';
import type { MediaAsset } from '../data/mediaConfig';

interface PlaceholderImageProps {
  asset: MediaAsset;
  className?: string;
  loading?: 'eager' | 'lazy';
}

export default function PlaceholderImage({
  asset,
  className,
  loading = 'lazy',
}: PlaceholderImageProps) {
  const { language } = useLanguage();

  return (
    <img
      className={className}
      src={asset.src}
      alt={asset.alt[language]}
      loading={loading}
    />
  );
}
