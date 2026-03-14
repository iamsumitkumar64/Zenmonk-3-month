const ApiCallService = async (url: string, method: string, token: string, body: any) => {
    try {
        const requestHeaders: HeadersInit = {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        };
        const config: RequestInit = {
            method: method,
            headers: requestHeaders,
        };
        if (body && method != 'GET' && method !== 'HEAD') {
            config.body = JSON.stringify(body);
        }

        const response = await fetch(url, config);
        const result = await response.json();

        console.log("Api Response =>", result);
        return result;
    } catch (err) {
        console.log("Error in ApiService call: ", err);
        return null;
    }
}

export default ApiCallService;