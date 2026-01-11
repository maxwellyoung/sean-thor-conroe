"use client";

import { useState } from "react";

type InquiryType = "general" | "speaking" | "media" | "podcast" | "other";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    inquiryType: "general" as InquiryType,
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/xpwzgkqr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          inquiryType: formState.inquiryType,
          message: formState.message,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        setFormState({ name: "", email: "", inquiryType: "general", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="container py-12 md:py-20">
      <div className="max-w-2xl">
        <h1 className="text-lg mb-8">contact</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <section>
            <h2 className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
              send a message
            </h2>

            {status === "sent" ? (
              <div className="border border-border p-4">
                <p className="text-sm mb-2">message sent.</p>
                <p className="text-xs text-muted-foreground">
                  thanks for reaching out. i&apos;ll get back to you when i can.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-xs mt-4 underline"
                >
                  send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="text-xs text-muted-foreground block mb-1"
                  >
                    name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full bg-background border border-border px-3 py-2 text-sm focus:outline-none focus:border-foreground"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-xs text-muted-foreground block mb-1"
                  >
                    email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full bg-background border border-border px-3 py-2 text-sm focus:outline-none focus:border-foreground"
                  />
                </div>

                <div>
                  <label
                    htmlFor="inquiryType"
                    className="text-xs text-muted-foreground block mb-1"
                  >
                    inquiry type
                  </label>
                  <select
                    id="inquiryType"
                    value={formState.inquiryType}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        inquiryType: e.target.value as InquiryType,
                      })
                    }
                    className="w-full bg-background border border-border px-3 py-2 text-sm focus:outline-none focus:border-foreground"
                  >
                    <option value="general">general inquiry</option>
                    <option value="speaking">speaking / events</option>
                    <option value="media">media / press</option>
                    <option value="podcast">1storypod guest suggestion</option>
                    <option value="other">other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-xs text-muted-foreground block mb-1"
                  >
                    message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full bg-background border border-border px-3 py-2 text-sm focus:outline-none focus:border-foreground resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="border border-border px-4 py-2 text-sm hover:bg-foreground hover:text-background transition-colors disabled:opacity-50"
                >
                  {status === "sending" ? "sending..." : "send"}
                </button>

                {status === "error" && (
                  <p className="text-xs text-red-500">
                    something went wrong. try emailing directly.
                  </p>
                )}
              </form>
            )}
          </section>

          <section className="space-y-6 text-sm">
            <div>
              <h2 className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">
                direct
              </h2>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:contact@seanthorconroe.com">
                    contact@seanthorconroe.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/stconroe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @stconroe
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">
                literary agent
              </h2>
              <p className="text-muted-foreground">
                for rights and media inquiries, contact through the publisher.
              </p>
            </div>

            <div>
              <h2 className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">
                1storypod
              </h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.youtube.com/@1storypod"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    youtube
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.patreon.com/1storypod"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    patreon
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
