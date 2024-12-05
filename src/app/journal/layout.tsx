import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal",
  description: "Latest updates and thoughts from Sean Thor Conroe",
};

export default function JournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
