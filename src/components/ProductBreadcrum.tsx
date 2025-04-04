import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProductBreadcrum(): JSX.Element | null {
  const pathname = usePathname();

  if (!pathname) return null;

  const segments: string[] = pathname.split("/").filter(Boolean);

  const toCamelCase = (segment: string): string => {
    return segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  
  return (
    <div>
      <div className="breadcrumb">
        <Link href="/">
          <span className="breadcrumb-link" style={{ color: "#000" }}>
            Home
          </span>
        </Link>
        <span className="breadcrumb-link"> / </span>
        <Link href="/">
          <span className="breadcrumb-link" style={{ color: "#000" }}>
         Products
          </span>
        </Link>
        {segments
          .filter((segment) => segment !== "products") // Filter out 'collection'
          .map((segment, index,filteredSegments) => {
            const href = `/${filteredSegments.slice(0, index + 1).join("/")}`;
            // const href = `/${segments.slice(0, index + 1).join("/")}`;
            const isLast = index === segments.length - 1;

            return (
              <React.Fragment key={index}>
                <span className="breadcrumb-link"> / </span>
                <Link href={`/${href === 'products' ? '/': href}`}>
                  <span className="breadcrumb-link" style={{ color: "#000" }}>
                    {toCamelCase(segment)}
                  </span>
                </Link>
                {/* )} */}
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
}
