const ApiCallService = async (url: string, method: string, headers: any, body: any) => {
    // making http call to server
    const requestHeaders = {
        'Content-Type': 'application/json',
        ...headers,
    };

    const response = await fetch(
        url,
        {
            method: method,
            body: JSON.stringify(body),
            headers: requestHeaders,
        }
    );

    //returning response
    return response.json();
}

export default ApiCallService;