"use client";

import { motion } from "framer-motion";
import { Mail, Twitter } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto space-y-8"
      >
        <h1 className="text-4xl font-serif font-bold">Contact</h1>
        <p className="text-lg text-muted-foreground">
          For media inquiries, speaking engagements, or other requests, please
          reach out through any of the following channels:
        </p>

        <div className="space-y-4">
          <Button variant="outline" size="lg" className="w-full" asChild>
            <Link href="mailto:contact@seanthorconroe.com">
              <Mail className="mr-2 h-4 w-4" />
              Email
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="w-full" asChild>
            <Link href="https://twitter.com/stconroe" target="_blank">
              <Twitter className="mr-2 h-4 w-4" />
              Twitter
            </Link>
          </Button>
        </div>

        <div className="border-t pt-8">
          <h2 className="text-xl font-serif font-semibold mb-4">
            Literary Agent
          </h2>
          <p className="text-muted-foreground">
            For rights inquiries, please contact:
            <br />
            [Agent Name]
            <br />
            [Agency]
            <br />
            [Email]
          </p>
        </div>
      </motion.div>
    </div>
  );
}
