import { RealEstateAgent, Residence, Place, Organization } from 'schema-dts';

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization" as const,
      "@id": "https://city1.com/#organization",
      "name": "City1 Developers",
      "url": "https://city1.com",
      "logo": {
        "@type": "ImageObject" as const,
        "url": "https://city1.com/logo.jpg",
        "width": 512,
        "height": 512
      },
      "description": "Leading real estate developer specializing in premium residential projects",
      "contactPoint": {
        "@type": "ContactPoint" as const,
        "telephone": "+1-234-567-8900",
        "contactType": "sales",
        "availableLanguage": "English"
      }
    },
    {
      "@type": "RealEstateAgent" as const,
      "@id": "https://city1.com/#realestateagent",
      "name": "City1 Developers",
      "url": "https://city1.com",
      "image": "https://city1.com/office.jpg",
      "address": {
        "@type": "PostalAddress" as const,
        "streetAddress": "123 Main Street",
        "addressLocality": "City",
        "addressRegion": "State",
        "postalCode": "12345",
        "addressCountry": "US"
      },
      "telephone": "+1-234-567-8900",
      "email": "info@city1.com"
    },
    {
      "@type": "Residence" as const,
      "@id": "https://city1.com/#residence",
      "name": "City1 Premium Residential Project",
      "description": "Luxury residential project offering modern living spaces with premium amenities and strategic location",
      "url": "https://city1.com",
      "image": [
        "https://city1.com/project-exterior.jpg",
        "https://city1.com/project-interior.jpg",
        "https://city1.com/project-amenities.jpg"
      ],
      "address": {
        "@type": "PostalAddress" as const,
        "streetAddress": "456 Premium Avenue",
        "addressLocality": "Metropolitan City",
        "addressRegion": "State",
        "postalCode": "67890",
        "addressCountry": "US"
      },
      "numberOfRooms": "2-4 BHK",
      "floorSize": {
        "@type": "QuantitativeValue" as const,
        "value": "1200-2500",
        "unitText": "sq ft"
      },
      "features": [
        "Modern Architecture",
        "Premium Finishes",
        "Smart Home Technology",
        "24/7 Security",
        "Swimming Pool",
        "Gymnasium",
        "Landscaped Gardens",
        "Children's Play Area",
        "Clubhouse",
        "Parking Facility"
      ],
      "offers": {
        "@type": "Offer" as const,
        "priceCurrency": "USD",
        "price": "500000-1500000",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization" as const,
          "@id": "https://city1.com/#organization"
        }
      },
      "provider": {
        "@type": "Organization" as const,
        "@id": "https://city1.com/#organization"
      }
    },
    {
      "@type": "Place" as const,
      "@id": "https://city1.com/#place",
      "name": "City1 Project Location",
      "description": "Strategically located premium residential complex with excellent connectivity",
      "geo": {
        "@type": "GeoCoordinates" as const,
        "latitude": "40.7128",
        "longitude": "-74.0060"
      },
      "address": {
        "@type": "PostalAddress" as const,
        "streetAddress": "456 Premium Avenue",
        "addressLocality": "Metropolitan City",
        "addressRegion": "State",
        "postalCode": "67890",
        "addressCountry": "US"
      },
      "hasMap": "https://maps.google.com/?q=City1+Project"
    },
    {
      "@type": "WebSite" as const,
      "@id": "https://city1.com/#website",
      "url": "https://city1.com",
      "name": "City1 - Premium Residential Project",
      "description": "Discover City1, an exclusive residential project offering luxury living spaces with modern amenities",
      "publisher": {
        "@type": "Organization" as const,
        "@id": "https://city1.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction" as const,
        "target": {
          "@type": "EntryPoint" as const,
          "urlTemplate": "https://city1.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
}
