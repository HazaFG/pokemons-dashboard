import { NextResponse } from "next/server";


//Aqui podemos tener acceso base de datos y cositas asi jiji

export async function GET(request: Request) {

  console.log({ method: request.method })

  return NextResponse.json({
    method: 'GET',
    count: 100
  })
}

export async function POST(request: Request) {

  console.log({ method: request.method })

  return NextResponse.json({
    method: 'POST',
    count: 100
  })
}
