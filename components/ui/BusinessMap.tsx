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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;

    const loadLocator = async () => {
      const existingScript = document.querySelector('script[src*="extended-component-library"]');
      if (!existingScript) {
        const script = document.createElement("script");
        script.type = "module";
        script.src = "https://ajax.googleapis.com/ajax/libs/@googlemaps/extended-component-library/0.6.15/index.min.js";
        document.body.appendChild(script);
        await new Promise<void>((resolve, reject) => {
          script.onload = () => resolve();
          script.onerror = () => reject(new Error("Failed to load Google Maps locator library"));
        });
      }

      if (!active || !containerRef.current) return;

      containerRef.current.innerHTML = "";

      const loader = document.createElement("gmpx-api-loader") as HTMLElement & {
        setAttribute: (name: string, value: string) => void;
      };
      loader.setAttribute("solution-channel", "GMP_QB_locatorplus_v11_cABD");

      const locator = document.createElement("gmpx-store-locator") as HTMLElement & {
        configureFromQuickBuilder?: (config: typeof CONFIGURATION) => void;
      };
      locator.setAttribute("map-id", "DEMO_MAP_ID");

      containerRef.current.appendChild(loader);
      containerRef.current.appendChild(locator);

      await customElements.whenDefined("gmpx-store-locator");
      if (!active) return;

      locator.configureFromQuickBuilder?.(CONFIGURATION);
    };

    loadLocator().catch((error) => {
      console.error("Google Locator initialization failed:", error);
    });

    return () => {
      active = false;
    };
  }, []);

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

      <style jsx global>{`
        html,
        body {
          height: 100%;
          margin: 0;
        }

        gmpx-store-locator {
          width: 100%;
          height: 100%;
          --gmpx-color-surface: #fff;
          --gmpx-color-on-surface: #212121;
          --gmpx-color-on-surface-variant: #757575;
          --gmpx-color-primary: #1967d2;
          --gmpx-color-outline: #e0e0e0;
          --gmpx-fixed-panel-width-row-layout: 28.5em;
          --gmpx-fixed-panel-height-column-layout: 65%;
          --gmpx-font-family-base: "Roboto", sans-serif;
          --gmpx-font-family-headings: "Roboto", sans-serif;
          --gmpx-font-size-base: 0.875rem;
          --gmpx-hours-color-open: #188038;
          --gmpx-hours-color-closed: #d50000;
          --gmpx-rating-color: #ffb300;
          --gmpx-rating-color-empty: #e0e0e0;
        }
      `}</style>

      <div ref={containerRef} className="w-full" style={{ height }} />
    </div>
  );
}
