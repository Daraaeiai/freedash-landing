import { NextRequest, NextResponse } from "next/server";

const BACKEND_API_URL = process.env.BACKEND_API_URL || "https://api.daraei.ai/api/v1";

async function handleRequest(
  request: NextRequest,
  pathSegments: string[],
  method: string
) {
  try {
    const path = pathSegments.join("/");
    const url = new URL(`${BACKEND_API_URL}/${path}`);

    request.nextUrl.searchParams.forEach((value, key) => {
      url.searchParams.append(key, value);
    });

    const headers: HeadersInit = {
      "Content-Type": "application/json",
      Accept: "*/*",
    };

    const authHeader = request.headers.get("authorization");
    if (authHeader) {
      (headers as Record<string, string>)["Authorization"] = authHeader;
    }

    const requestOptions: RequestInit = {
      method,
      headers,
      signal: AbortSignal.timeout(30000),
    };

    if (method !== "GET") {
      const body = await request.text();
      if (body) {
        requestOptions.body = body;
      }
    }

    const response = await fetch(url.toString(), requestOptions);
    const responseText = await response.text();
    let responseData: unknown;

    try {
      responseData = JSON.parse(responseText);
      return NextResponse.json(responseData, { status: response.status });
    } catch {
      return new NextResponse(responseText, {
        status: response.status,
        headers: { "Content-Type": "text/plain" },
      });
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "Internal server error", message },
      { status: 500 }
    );
  }
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  const { path } = await context.params;
  return handleRequest(request, path, "GET");
}

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  const { path } = await context.params;
  return handleRequest(request, path, "POST");
}

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  const { path } = await context.params;
  return handleRequest(request, path, "PUT");
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  const { path } = await context.params;
  return handleRequest(request, path, "DELETE");
}
