

class HttpResponse {
    /**
     * @param {String} message 
     * @param {Number} status 
     * @param {Object} playload 
     */
    constructor(status, playload) {
        this.status = status

        if (typeof playload === 'string')
            this.playload = {message: playload}
        else
            this.playload = playload
    }


    static Informational = class Informational extends HttpResponse {
        constructor(...args) {
            super(...args)
        }
    }

    static Continue = class Continue extends HttpResponse.Informational {
        constructor(playload) {
            super(100, playload || "Continue")
        }
    }

    static SwitchingProtocols = class SwitchingProtocols extends HttpResponse.Informational {
        constructor(playload) {
            super(101, playload || "Switching Protocols")
        }
    }

    static Processing = class Processing extends HttpResponse.Informational {
        constructor(playload) {
            super(102, playload || "Processing")
        }
    }

    static EarlyHints = class EarlyHints extends HttpResponse.Informational {
        constructor(playload) {
            super(103, playload || "Early Hints")
        }
    }

    static Success = class Success extends HttpResponse {
        constructor(...args) {
            super(...args)
        }
    }

    static OK = class OK extends HttpResponse.Success {
        constructor(playload) {
            super(200, playload || "OK")
        }
    }

    static Created = class Created extends HttpResponse.Success {
        constructor(playload) {
            super(201, playload || "Created")
        }
    }

    static Accepted = class Accepted extends HttpResponse.Success {
        constructor(playload) {
            super(202, playload || "Accepted")
        }
    }

    static NonAuthoritativeInformation = class NonAuthoritativeInformation extends HttpResponse.Success {
        constructor(playload) {
            super(203, playload || "Non-Authoritative Information")
        }
    }

    static NoContent = class NoContent extends HttpResponse.Success {
        constructor(playload) {
            super(204, playload || "No Content")
        }
    }

    static ResetContent = class ResetContent extends HttpResponse.Success {
        constructor(playload) {
            super(205, playload || "Reset Content")
        }
    }

    static PartialContent = class PartialContent extends HttpResponse.Success {
        constructor(playload) {
            super(206, playload || "Partial Content")
        }
    }

    static MultiStatus = class MultiStatus extends HttpResponse.Success {
        constructor(playload) {
            super(207, playload || "Multi-Status")
        }
    }

    static AlreadyReported = class AlreadyReported extends HttpResponse.Success {
        constructor(playload) {
            super(208, playload || "Already Reported")
        }
    }

    static IMUsed = class IMUsed extends HttpResponse.Success {
        constructor(playload) {
            super(226, playload || "IM Used")
        }
    }

    static Redirection = class Redirection extends HttpResponse {
        constructor(...args) {
            super(...args)
        }
    }

    static MultipleChoices = class MultipleChoices extends HttpResponse.Redirection {
        constructor(playload) {
            super(300, playload || "Multiple Choices")
        }
    }

    static MovedPermanently = class MovedPermanently extends HttpResponse.Redirection {
        constructor(playload) {
            super(301, playload || "Moved Permanently")
        }
    }

    static MovedTemporarily = class MovedTemporarily extends HttpResponse.Redirection {
        constructor(playload) {
            super(302, playload || "Moved Temporarily")
        }
    }

    static Found = class Found extends HttpResponse.Redirection {
        constructor(playload) {
            super(302, playload || "Found")
        }
    }

    static SeeOther = class SeeOther extends HttpResponse.Redirection {
        constructor(playload) {
            super(303, playload || "See Other")
        }
    }

    static NotModified = class NotModified extends HttpResponse.Redirection {
        constructor(playload) {
            super(304, playload || "Not Modified")
        }
    }

    static UseProxy = class UseProxy extends HttpResponse.Redirection {
        constructor(playload) {
            super(305, playload || "Use Proxy")
        }
    }

    static TemporaryRedirect = class TemporaryRedirect extends HttpResponse.Redirection {
        constructor(playload) {
            super(307, playload || "Temporary Redirect")
        }
    }

    static PermanentRedirect = class PermanentRedirect extends HttpResponse.Redirection {
        constructor(playload) {
            super(308, playload || "Permanent Redirect")
        }
    }

    static ClientError = class ClientError extends HttpResponse {
        constructor(...args) {
            super(...args)
        }
    }

    static BadRequest = class BadRequest extends HttpResponse.ClientError {
        constructor(playload) {
            super(400, playload || "Bad Request")
        }
    }

    static Unauthorized = class Unauthorized extends HttpResponse.ClientError {
        constructor(playload) {
            super(401, playload || "Unauthorized")
        }
    }

    static PaymentRequired = class PaymentRequired extends HttpResponse.ClientError {
        constructor(playload) {
            super(402, playload || "Payment Required")
        }
    }

    static Forbidden = class Forbidden extends HttpResponse.ClientError {
        constructor(playload) {
            super(403, playload || "Forbidden")
        }
    }

    static NotFound = class NotFound extends HttpResponse.ClientError {
        constructor(playload) {
            super(404, playload || "Not Found")
        }
    }

    static MethodNotAllowed = class MethodNotAllowed extends HttpResponse.ClientError {
        constructor(playload) {
            super(405, playload || "Method Not Allowed")
        }
    }

    static NotAcceptable = class NotAcceptable extends HttpResponse.ClientError {
        constructor(playload) {
            super(406, playload || "Not Acceptable")
        }
    }

    static ProxyAuthenticationRequired = class ProxyAuthenticationRequired extends HttpResponse.ClientError {
        constructor(playload) {
            super(407, playload || "Proxy Authentication Required")
        }
    }

    static RequestTimeout = class RequestTimeout extends HttpResponse.ClientError {
        constructor(playload) {
            super(408, playload || "Request Timeout")
        }
    }

    static Conflict = class Conflict extends HttpResponse.ClientError {
        constructor(playload) {
            super(409, playload || "Conflict")
        }
    }

    static Gone = class Gone extends HttpResponse.ClientError {
        constructor(playload) {
            super(410, playload || "Gone")
        }
    }

    static LengthRequired = class LengthRequired extends HttpResponse.ClientError {
        constructor(playload) {
            super(411, playload || "Length Required")
        }
    }

    static PreconditionFailed = class PreconditionFailed extends HttpResponse.ClientError {
        constructor(playload) {
            super(412, playload || "Precondition Failed")
        }
    }

    static RequestEntityTooLarge = class RequestEntityTooLarge extends HttpResponse.ClientError {
        constructor(playload) {
            super(413, playload || "Request Entity Too Large")
        }
    }

    static RequestURITooLong = class RequestURITooLong extends HttpResponse.ClientError {
        constructor(playload) {
            super(414, playload || "Request-URI Too Long")
        }
    }

    static UnsupportedMediaType = class UnsupportedMediaType extends HttpResponse.ClientError {
        constructor(playload) {
            super(415, playload || "Unsupported Media Type")
        }
    }

    static RequestedRangeNotSatisfiable = class RequestedRangeNotSatisfiable extends HttpResponse.ClientError {
        constructor(playload) {
            super(416, playload || "Requested Range Not Satisfiable")
        }
    }

    static ExpectationFailed = class ExpectationFailed extends HttpResponse.ClientError {
        constructor(playload) {
            super(417, playload || "Expectation Failed")
        }
    }

    static Imateapot = class Imateapot extends HttpResponse.ClientError {
        constructor(playload) {
            super(418, playload || "I'm a teapot")
        }
    }

    static MisdirectedRequest = class MisdirectedRequest extends HttpResponse.ClientError {
        constructor(playload) {
            super(421, playload || "Misdirected Request")
        }
    }

    static UnprocessableEntity = class UnprocessableEntity extends HttpResponse.ClientError {
        constructor(playload) {
            super(422, playload || "Unprocessable Entity")
        }
    }

    static Locked = class Locked extends HttpResponse.ClientError {
        constructor(playload) {
            super(423, playload || "Locked")
        }
    }

    static FailedDependency = class FailedDependency extends HttpResponse.ClientError {
        constructor(playload) {
            super(424, playload || "Failed Dependency")
        }
    }

    static UpgradeRequired = class UpgradeRequired extends HttpResponse.ClientError {
        constructor(playload) {
            super(426, playload || "Upgrade Required")
        }
    }

    static PreconditionRequired = class PreconditionRequired extends HttpResponse.ClientError {
        constructor(playload) {
            super(428, playload || "Precondition Required")
        }
    }

    static TooManyRequests = class TooManyRequests extends HttpResponse.ClientError {
        constructor(playload) {
            super(429, playload || "Too Many Requests")
        }
    }

    static RequestHeaderFieldsTooLarge = class RequestHeaderFieldsTooLarge extends HttpResponse.ClientError {
        constructor(playload) {
            super(431, playload || "Request Header Fields Too Large")
        }
    }

    static ConnectionClosedWithoutResponse = class ConnectionClosedWithoutResponse extends HttpResponse.ClientError {
        constructor(playload) {
            super(444, playload || "Connection Closed Without Response")
        }
    }

    static UnavailableForLegalReasons = class UnavailableForLegalReasons extends HttpResponse.ClientError {
        constructor(playload) {
            super(451, playload || "Unavailable For Legal Reasons")
        }
    }

    static ClientClosedRequest = class ClientClosedRequest extends HttpResponse.ClientError {
        constructor(playload) {
            super(499, playload || "Client Closed Request")
        }
    }

    static ServerError = class ServerError extends HttpResponse {
        constructor(...args) {
            super(...args)
        }
    }

    static InternalServerError = class InternalServerError extends HttpResponse.ServerError {
        constructor(playload) {
            super(500, playload || "Internal Server Error")
        }
    }

    static NotImplemented = class NotImplemented extends HttpResponse.ServerError {
        constructor(playload) {
            super(501, playload || "Not Implemented")
        }
    }

    static BadGateway = class BadGateway extends HttpResponse.ServerError {
        constructor(playload) {
            super(502, playload || "Bad Gateway")
        }
    }

    static ServiceUnavailable = class ServiceUnavailable extends HttpResponse.ServerError {
        constructor(playload) {
            super(503, playload || "Service Unavailable")
        }
    }

    static GatewayTimeout = class GatewayTimeout extends HttpResponse.ServerError {
        constructor(playload) {
            super(504, playload || "Gateway Timeout")
        }
    }

    static HTTPVersionNotSupported = class HTTPVersionNotSupported extends HttpResponse.ServerError {
        constructor(playload) {
            super(505, playload || "HTTP Version Not Supported")
        }
    }

    static VariantAlsoNegotiates = class VariantAlsoNegotiates extends HttpResponse.ServerError {
        constructor(playload) {
            super(506, playload || "Variant Also Negotiates")
        }
    }

    static InsufficientStorage = class InsufficientStorage extends HttpResponse.ServerError {
        constructor(playload) {
            super(507, playload || "Insufficient Storage")
        }
    }

    static LoopDetected = class LoopDetected extends HttpResponse.ServerError {
        constructor(playload) {
            super(508, playload || "Loop Detected")
        }
    }

    static NotExtended = class NotExtended extends HttpResponse.ServerError {
        constructor(playload) {
            super(510, playload || "Not Extended")
        }
    }

    static NetworkAuthenticationRequired = class NetworkAuthenticationRequired extends HttpResponse.ServerError {
        constructor(playload) {
            super(511, playload || "Network Authentication Required")
        }
    }

    static NetworkConnectTimeoutError = class NetworkConnectTimeoutError extends HttpResponse.ServerError {
        constructor(playload) {
            super(599, playload || "Network Connect Timeout Error")
        }
    }
}


module.exports = HttpResponse