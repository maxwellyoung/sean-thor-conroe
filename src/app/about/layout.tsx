import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Sean Thor Conroe, author of Fuccboi and host of 1StoryPod",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
