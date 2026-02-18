import { Metadata } from 'next';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
  structuredData?: Record<string, any>;
}

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  ogImage,
  canonical,
  noindex = false,
  structuredData
}: SEOHeadProps): Metadata {
  const baseTitle = "City1 - Premium Residential Project";
  const baseDescription = "Discover City1, an exclusive residential project offering luxury living spaces with modern amenities, strategic location, and exceptional architecture.";
  
  return {
    title: title ? `${title} | City1` : baseTitle,
    description: description || baseDescription,
    keywords: keywords.length > 0 ? keywords : [
      "real estate", "residential project", "luxury homes", 
      "city living", "modern architecture", "premium apartments", "city1 project"
    ],
    openGraph: {
      title: title || baseTitle,
      description: description || baseDescription,
      images: ogImage ? [{
        url: ogImage,
        width: 1200,
        height: 630,
        alt: title || baseTitle,
      }] : undefined,
      url: canonical,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title || baseTitle,
      description: description || baseDescription,
      images: ogImage ? [ogImage] : undefined,
    },
    alternates: {
      canonical: canonical,
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default function SEOHead({ 
  title, 
  description, 
  keywords, 
  ogImage, 
  canonical, 
  noindex,
  structuredData 
}: SEOHeadProps) {
  return (
    <>
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData, null, 2)
          }}
        />
      )}
    </>
  );
}
