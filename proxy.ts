import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PREFERRED_HOST = "islamabadpestcontrolpk.com";

export function proxy(request: NextRequest) {
  const stalePestImage = request.nextUrl.searchParams.get("url") ?? "";
  if (
    request.nextUrl.pathname === "/_next/image" &&
    /^\/_next\/static\/media\/pest3\.[^/]+\.png$/i.test(stalePestImage)
  ) {
    return NextResponse.redirect(
      new URL("/images/optimized/pest3.webp", request.url),
      308,
    );
  }

  const host = request.headers.get("host") ?? "";
  const forwardedProto = request.headers.get("x-forwarded-proto") ?? "https";

  const normalizedHost = host.toLowerCase().split(":")[0];
  const isLocalhost = /localhost|127\.0\.0\.1|0\.0\.0\.0|192\.168\.|10\./.test(normalizedHost);
  const wantsWww = normalizedHost.startsWith("www.");
  const isHttp = forwardedProto === "http" && !isLocalhost;
  const wrongHost = Boolean(normalizedHost) && normalizedHost !== PREFERRED_HOST && !isLocalhost;

  if (isLocalhost) {
    return NextResponse.next();
  }

  if (wantsWww || wrongHost || isHttp) {
    const targetUrl = new URL(request.url);
    targetUrl.protocol = "https:";
    targetUrl.host = PREFERRED_HOST;
    targetUrl.hostname = PREFERRED_HOST;

    return NextResponse.redirect(targetUrl, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/_next/image", "/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
