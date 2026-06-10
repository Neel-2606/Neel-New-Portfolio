import { T as TSS_SERVER_FUNCTION, b as createServerFn } from "./server-Dr8oHcRu.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const schema = objectType({
  name: stringType().trim().min(1).max(120),
  email: stringType().trim().email().max(255),
  subject: stringType().trim().min(1).max(200),
  message: stringType().trim().min(20).max(5e3)
});
const submitContact_createServerFn_handler = createServerRpc({
  id: "1ac20e83585a55e943670fa4670b07889b610801a7a21f28dc367c19f92e50fd",
  name: "submitContact",
  filename: "src/lib/contact.functions.ts"
}, (opts) => submitContact.__executeServer(opts));
const submitContact = createServerFn({
  method: "POST"
}).validator((d) => schema.parse(d)).handler(submitContact_createServerFn_handler, async ({
  data
}) => {
  const {
    supabase
  } = await import("./client-B1DDCSWO.mjs");
  const {
    error
  } = await supabase.from("contacts").insert(data);
  if (error) {
    console.error("contact insert failed", error);
    throw new Error("Could not save your message. Please try again.");
  }
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
          "X-Connection-Api-Key": RESEND_API_KEY
        },
        body: JSON.stringify({
          from: "Portfolio <onboarding@resend.dev>",
          to: ["neelprajapati2601@gmail.com"],
          subject: `New Portfolio Contact: ${data.subject}`,
          html,
          reply_to: data.email
        })
      });
    } catch (e) {
      console.warn("resend send failed (non-fatal)", e);
    }
  }
  return {
    ok: true
  };
});
function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
export {
  submitContact_createServerFn_handler
};
