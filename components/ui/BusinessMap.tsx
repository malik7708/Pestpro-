"use client";

import { useEffect, useRef } from "react";
import { MapPin } from "lucide-react";

interface BusinessMapProps {
  className?: string;
  height?: string;
  compact?: boolean;
}

const CONFIGURATION = {
  locations: [
    {
      title: "Islamabad Pest Control, Termite (Deemak) Control & Fumigation Services Islamabad and Rawalpindi",
      address1: "Newmal, Kuri Road, Jinnah Avenue Islamabad",
      address2: "Islamabad, Pakistan",
      coords: { lat: 33.6800791, lng: 73.1554506 },
      placeId: "ChIJZfDsz6Dr3zgRSSkf-MOyXgI",
    },
  ],
  mapOptions: {
    center: { lat: 38.0, lng: -100.0 },
    fullscreenControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    zoom: 4,
    zoomControl: true,
    maxZoom: 17,
    mapId: "",
  },
  mapsApiKey: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg",
  capabilities: {
    input: true,
    autocomplete: true,
    directions: false,
    distanceMatrix: true,
    details: false,
    actions: false,
  },
};

export function BusinessMap({ className = "", height = "320px", compact = false }: BusinessMapProps) {
  // Simpler, reliable approach: use Google Maps embed with the exact Place ID.
  // This ensures the pin and place name are visible in the iframe.
  const PLACE_ID = "ChIJZfDsz6Dr3zgRSSkf-MOyXgI"; // exact place id the user provided
  const src = `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}&output=embed&z=17`;

  return (
    <div className={`overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm ${className}`.trim()}>
      {!compact && (
        <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-4 py-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2f6b4f]/10 text-[#2f6b4f]">
            <MapPin size={16} />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Our business location</p>
            <p className="text-xs text-gray-600">Newmal, Kuri Road, Jinnah Avenue, Islamabad</p>
          </div>
        </div>
      )}

      <div className="w-full" style={{ height }}>
        <iframe
          src={src}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Islamabad PestControl business location"
        />
      </div>
    </div>
  );
}
