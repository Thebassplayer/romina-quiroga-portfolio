"use client";
import Link, { LinkProps } from "next/link";
import { useSearchParams } from "next/navigation";
import { ReactNode } from "react";

interface RetainQueryLinkProps extends LinkProps {
  className?: string;
  children: ReactNode;
}

const RetainQueryLink = ({
  href,
  className,
  ...props
}: RetainQueryLinkProps) => {
  const searchParams = useSearchParams();
  const languaje = searchParams.get("eng") === "true" ? "?eng=true" : "";
  href = `${href}${languaje}`;
  return (
    <Link href={href} className={className} {...props}>
      {props.children}
    </Link>
  );
};

export default RetainQueryLink;
