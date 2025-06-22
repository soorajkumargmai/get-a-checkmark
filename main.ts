import { serve } from "https://deno.land/std@0.202.0/http/server.ts";

// Function to serve index.html
async function indexHandler() {
  const html = await Deno.readTextFile("./index.html");
  return new Response(html, {
    headers: { "content-type": "text/html" },
  });
}

// Function to serve validation.html
async function validationHandler() {
  const html = await Deno.readTextFile("./validation.html");
  return new Response(html, {
    headers: { "content-type": "text/html" },
  });
}

// Function to serve confirm.html
async function confirmHandler() {
  const html = await Deno.readTextFile("./confirm.html");
  return new Response(html, {
    headers: { "content-type": "text/html" },
  });
}

// Function to serve final-page.html
async function finalPageHandler() {
  const html = await Deno.readTextFile("./final-page.html");
  return new Response(html, {
    headers: { "content-type": "text/html" },
  });
}

// Main routing logic
const handler = (req: Request) => {
  const url = new URL(req.url);

  if (url.pathname === "/") return indexHandler();
  if (url.pathname === "/validation.html") return validationHandler();
  if (url.pathname === "/confirm.html") return confirmHandler();
  if (url.pathname === "/final-page.html") return finalPageHandler();

  return new Response("Page Not Found", { status: 404 });
};

// Start the server
console.log("Server is running on http://localhost:8000");
serve(handler);
