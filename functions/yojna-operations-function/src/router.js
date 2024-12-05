export class Router {

    //Path List
    #paths = [
        '/fetch_yojnas',
        '/add_yojna',
        '/update_yojna',
        '/update_fcm_token'
    ];

    constructor(
        yojnaRequestHandler,
        fcmTokenRequestHandler
    ) {
        this.yojnaRequestHandler = yojnaRequestHandler;
        this.fcmTokenRequestHandler = fcmTokenRequestHandler;
    }

    //Checks If Path is Valid or Not
    isPathValid = (path) => this.#paths.includes(path);

    // Handles Received Request
    handleRequest(
        request,
        response
    ) {
        switch (request.path) {
            case '/fetch_yojnas':
            case '/add_yojna':
            case '/update_yojna':
                return this.yojnaRequestHandler.handleRequest(
                    request,
                    response
                );
            case '/update_fcm_token':
                return this.fcmTokenRequestHandler.handleRequest(
                    request,
                    response
                );

            default:
                return response.send({ error: 'Path not found' }, 404);
        }
    }
}