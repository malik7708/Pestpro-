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
  mapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
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
  // Use Google Maps Embed API with a public API key when available so the
  // place marker and business info render reliably. Fall back to the place
  // URL if a public key isn't set (may be blocked by some browsers/sites).
  const PLACE_ID = "ChIJZfDsz6Dr3zgRSSkf-MOyXgI"; // exact place id the user provided
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const hasKey = Boolean(apiKey && apiKey.length > 0);
  const src = hasKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=place_id:${PLACE_ID}&zoom=17`
    : `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}&output=embed&z=17`;

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
        {!hasKey && (
          <div className="p-3 text-xs text-yellow-700 bg-yellow-50 border border-yellow-100 rounded-md mb-2">
            Map is using a public embed fallback. To ensure a reliable embedded
            map and Place details, set `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` in your
            environment and enable Maps Embed API in Google Cloud Console.
          </div>
        )}
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
