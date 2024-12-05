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
        switch (expression) {
            case '/fetch_yojnas':
            case '/add_yojna':
            case '/update_yojna':
                yojnaRequestHandler.handleRequest(
                    request,
                    response
                );
                break;
            case '/update_fcm_token':
                fcmTokenRequestHandler.handleRequest(
                    request,
                    response
                );
                break;

            default:
                response.send({ error: 'Path not found' }, 404);
        }

    }
}