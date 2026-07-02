import { MapPin } from "lucide-react";

interface BusinessMapProps {
  className?: string;
  height?: string;
  compact?: boolean;
}

export function BusinessMap({ className = "", height = "320px", compact = false }: BusinessMapProps) {
  const src =
    "https://www.google.com/maps?q=Newmal,+Kuri+Road,+Jinnah+Avenue+Islamabad,+Pakistan&z=15&output=embed";

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
