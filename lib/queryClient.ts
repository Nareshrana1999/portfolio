export async function apiRequest<T = unknown>(
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
  url: string,
  data?: Record<string, unknown>,
): Promise<T> {
  const init: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  }

  if (data && method !== "GET") {
    init.body = JSON.stringify(data)
  }

  const res = await fetch(url, init)

  if (!res.ok) {
    const error = await res.text().catch(() => res.statusText)
    throw new Error(error || `Request failed with status ${res.status}`)
  }

  // Attempt to parse JSON; fallback to void when no content
  try {
    return (await res.json()) as T
  } catch {
    // @ts-expect-error – allow void return when no JSON body
    return
  }
}
