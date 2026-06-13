import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

function errorToString(err: unknown): string {
  if (err instanceof Error) return `${err.name}: ${err.message}\n${err.stack}`;
  try { return JSON.stringify(err); } catch { return String(err); }
}

function renderDebugErrorPage(errorText: string): string {
  const escaped = errorText
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>SSR Debug Error</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 14px/1.6 monospace; background: #1a1a2e; color: #e0e0e0; padding: 2rem; margin: 0; }
      h1 { color: #ff6b6b; font-size: 1.3rem; margin: 0 0 1rem; }
      pre { background: #16213e; padding: 1.5rem; border-radius: 8px; overflow-x: auto; white-space: pre-wrap; word-break: break-all; border: 1px solid #e94560; }
      .hint { color: #a8a8a8; margin-top: 1.5rem; font-size: 0.85rem; }
    </style>
  </head>
  <body>
    <h1>🔴 SSR Error on Vercel (debug mode)</h1>
    <pre>${escaped}</pre>
    <p class="hint">This page is only shown because the app is in debug mode. Remove the debug server.ts changes once you've identified the issue.</p>
  </body>
</html>`;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  const capturedError = consumeLastCapturedError();
  const errorDetail = capturedError
    ? errorToString(capturedError)
    : `h3 swallowed SSR error (no captured error available).\nResponse body: ${body}`;

  console.error("[SSR DEBUG]", errorDetail);

  return new Response(renderDebugErrorPage(errorDetail), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      const errorDetail = errorToString(error);
      console.error("[SSR CATCH]", errorDetail);
      return new Response(renderDebugErrorPage(errorDetail), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
