import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().min(1).max(200),
  message: z.string().trim().min(20).max(5000),
});

export const submitContact = createServerFn({ method: "POST" })
  .validator((d: unknown) => schema.parse(d))
  .handler(async ({ data }) => {
    const { supabase } = await import("@/integrations/supabase/client");

    const { error } = await supabase.from("contacts" as never).insert(data as never);
    if (error) {
      console.error("contact insert failed", error);
      throw new Error("Could not save your message. Please try again.");
    }

    // Optional email notification via Resend connector (if configured)
    const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (LOVABLE_API_KEY && RESEND_API_KEY) {
      try {
        const html = `
          <div style="font-family:Inter,sans-serif;background:#0a0a0f;color:#f1f5f9;padding:24px;border-radius:12px;">
            <h2 style="color:#a855f7;margin:0 0 16px">New Portfolio Contact</h2>
            <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
            <p><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>
            <hr style="border:none;border-top:1px solid #334155;margin:16px 0"/>
            <p style="white-space:pre-wrap;line-height:1.6">${escapeHtml(data.message)}</p>
          </div>`;
        await fetch("https://connector-gateway.lovable.dev/resend/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            "X-Connection-Api-Key": RESEND_API_KEY,
          },
          body: JSON.stringify({
            from: "Portfolio <onboarding@resend.dev>",
            to: ["neelprajapati2601@gmail.com"],
            subject: `New Portfolio Contact: ${data.subject}`,
            html,
            reply_to: data.email,
          }),
        });
      } catch (e) {
        console.warn("resend send failed (non-fatal)", e);
      }
    }

    return { ok: true };
  });

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
