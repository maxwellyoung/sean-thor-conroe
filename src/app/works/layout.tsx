import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works",
  description: "Books and writings by Sean Thor Conroe, author of Fuccboi",
};

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
