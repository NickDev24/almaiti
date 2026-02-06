import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ADDRESS, PHONE_NUMBER, APP_NAME, PROFILE_IMAGE_URL } from '../constants';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords,
  image = PROFILE_IMAGE_URL,
  url = window.location.href,
  type = 'website'
}) => {
  const siteTitle = `${title} | ${APP_NAME} Salta`;
  
  // Datos estructurados para Google (Schema.org)
  // Define el negocio como Salón de Belleza en Salta
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": APP_NAME,
    "image": image,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pasaje la tablada 159",
      "addressLocality": "Salta Capital",
      "addressRegion": "Salta",
      "postalCode": "4400",
      "addressCountry": "AR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -24.7821,
      "longitude": -65.4232
    },
    "url": "https://almaitistudio.com", // Reemplazar con URL real cuando exista
    "telephone": `+${PHONE_NUMBER}`,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "22:00"
      }
    ],
    "priceRange": "$$$"
  };

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={`Peluquería Salta, Estilista Salta, Colorimetría Salta, ${keywords || ''}`} />
      
      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={APP_NAME} />
      <meta property="og:locale" content="es_AR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};