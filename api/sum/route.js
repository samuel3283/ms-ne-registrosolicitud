export async function POST(request) {
  const body = await request.json()

  const a = Number(body.a)
  const b = Number(body.b)

  if (isNaN(a) || isNaN(b)) {
    return Response.json(
      { error: "a y b deben ser numericos" },
      { status: 400 }
    )
  }

  return Response.json({
    a,
    b,
    result: a + b
  })
}