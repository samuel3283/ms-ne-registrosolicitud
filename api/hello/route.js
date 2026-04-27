export async function GET() {
  return Response.json({
    message: "Hola mundo desde Next.js en AKS",
    version: "1.0.0",
    status: "ok"
  })
}