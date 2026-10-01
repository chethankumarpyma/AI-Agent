const API_BASE_URL = "http://localhost:5000/api";

async function request<T>(
    endpoint:string,
    options?:RequestInit
): Promise<T> {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
        headers: {
            "Content-Type": "application/json",
        },
        ...options,
    });
    if (!response.ok) {
        throw new Error("API Request failed " + response.status);
    }
    return response.json();
}

export const api = {
    generateScript:(data: {
        village:string;
        language:string;
        duration:number;
    }) => request("/ai/generate-script", {
        method: "POST",
        body: JSON.stringify(data),
    }),

    generateCaption :(data:{
        village:string;
        platform:string;
        language:string;
    }) => request("/ai/generate-caption", {
        method: "POST",
        body: JSON.stringify(data),
    }),

    generateYoutubeDescription:(data:{
        village:string;
        language:string;
    }) => request("/ai/generate-youtube-description", {
        method: "POST",
        body: JSON.stringify(data),
    }),

    chat:(message:string) => request("/ai/chat", {
        method: "POST",
        body: JSON.stringify({ message }),
    }),
};