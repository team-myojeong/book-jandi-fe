export async function fetchAPI<T>(
  url: string,
  requestType: string = "GET",
  responseType: string = "json",
  requestData?: any
): Promise<T> {
  try {
    const fetchOptions: RequestInit = {
      method: requestType,
      headers: {
        "Content-Type": "application/json",
      },
      body: requestData ? JSON.stringify(requestData) : undefined,
    };
    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      throw new Error(`Fetch failed with status ${response.status}`);
    }
    if (response.status === 400) {
      throw new Error(`Bad Request`);
    }

    switch (responseType) {
      case "json":
        return (await response.json()) as T;
      case "text":
        return (await response.text()) as T;
      case "blob":
        return (await response.blob()) as T;
      default:
        throw new Error(`Unsupported response type: ${responseType}`);
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Fetch failed: ${error.message}`);
    }
    throw new Error("Unhandled response");
  }
}
