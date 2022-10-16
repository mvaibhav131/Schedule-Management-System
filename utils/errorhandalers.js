
// simple class constructor function  is containing code message and satuscode easy to write request and response.

class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode=statusCode

        Error.captureStackTrace(this,this.constructor)
    }
}

module.exports = ErrorHandler;