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
    // 1. Email notification via Resend (Primary delivery method)
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (RESEND_API_KEY) {
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
        
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: ["neelprajapati2601@gmail.com"],
            subject: `New Message from ${data.name}: ${data.subject}`,
            html,
            reply_to: data.email,
          }),
        });
        
        if (!res.ok) {
           console.error("Resend API Error:", await res.text());
        }
      } catch (e) {
        console.warn("Resend email failed to send (non-fatal)", e);
      }
    }

    // 2. Backup to Supabase (Non-blocking)
    try {
      const { supabase } = await import("@/integrations/supabase/client");
      const { error } = await supabase.from("contacts" as never).insert(data as never);
      if (error) {
        console.error("Supabase insert failed (Check RLS policies or if table exists):", error);
      }
    } catch (e) {
      console.error("Supabase initialization failed:", e);
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
