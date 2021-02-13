

class HttpResponse {
    /**
     * @param {String} message 
     * @param {Number} status 
     * @param {Object} playload 
     */
    constructor(status, playload, next) {
        this.status = status

        if (typeof playload === 'string')
            this.playload = {message: playload}
        else
            this.playload = playload

        this.next = next
    }


    static Informational = class Informational extends HttpResponse {
        constructor(...args) {
            super(...args)
        }
    }

    static Continue = class Continue extends HttpResponse.Informational {
        constructor(playload, next) {
            super(100, playload || "Continue", next)
        }
    }

    static SwitchingProtocols = class SwitchingProtocols extends HttpResponse.Informational {
        constructor(playload, next) {
            super(101, playload || "Switching Protocols", next)
        }
    }

    static Processing = class Processing extends HttpResponse.Informational {
        constructor(playload, next) {
            super(102, playload || "Processing", next)
        }
    }

    static EarlyHints = class EarlyHints extends HttpResponse.Informational {
        constructor(playload, next) {
            super(103, playload || "Early Hints", next)
        }
    }

    static Success = class Success extends HttpResponse {
        constructor(...args) {
            super(...args)
        }
    }

    static OK = class OK extends HttpResponse.Success {
        constructor(playload, next) {
            super(200, playload || "OK", next)
        }
    }

    static Created = class Created extends HttpResponse.Success {
        constructor(playload, next) {
            super(201, playload || "Created", next)
        }
    }

    static Accepted = class Accepted extends HttpResponse.Success {
        constructor(playload, next) {
            super(202, playload || "Accepted", next)
        }
    }

    static NonAuthoritativeInformation = class NonAuthoritativeInformation extends HttpResponse.Success {
        constructor(playload, next) {
            super(203, playload || "Non-Authoritative Information", next)
        }
    }

    static NoContent = class NoContent extends HttpResponse.Success {
        constructor(playload, next) {
            super(204, playload || "No Content", next)
        }
    }

    static ResetContent = class ResetContent extends HttpResponse.Success {
        constructor(playload, next) {
            super(205, playload || "Reset Content", next)
        }
    }

    static PartialContent = class PartialContent extends HttpResponse.Success {
        constructor(playload, next) {
            super(206, playload || "Partial Content", next)
        }
    }

    static MultiStatus = class MultiStatus extends HttpResponse.Success {
        constructor(playload, next) {
            super(207, playload || "Multi-Status", next)
        }
    }

    static AlreadyReported = class AlreadyReported extends HttpResponse.Success {
        constructor(playload, next) {
            super(208, playload || "Already Reported", next)
        }
    }

    static IMUsed = class IMUsed extends HttpResponse.Success {
        constructor(playload, next) {
            super(226, playload || "IM Used", next)
        }
    }

    static Redirection = class Redirection extends HttpResponse {
        constructor(...args) {
            super(...args)
        }
    }

    static MultipleChoices = class MultipleChoices extends HttpResponse.Redirection {
        constructor(playload, next) {
            super(300, playload || "Multiple Choices", next)
        }
    }

    static MovedPermanently = class MovedPermanently extends HttpResponse.Redirection {
        constructor(playload, next) {
            super(301, playload || "Moved Permanently", next)
        }
    }

    static MovedTemporarily = class MovedTemporarily extends HttpResponse.Redirection {
        constructor(playload, next) {
            super(302, playload || "Moved Temporarily", next)
        }
    }

    static Found = class Found extends HttpResponse.Redirection {
        constructor(playload, next) {
            super(302, playload || "Found", next)
        }
    }

    static SeeOther = class SeeOther extends HttpResponse.Redirection {
        constructor(playload, next) {
            super(303, playload || "See Other", next)
        }
    }

    static NotModified = class NotModified extends HttpResponse.Redirection {
        constructor(playload, next) {
            super(304, playload || "Not Modified", next)
        }
    }

    static UseProxy = class UseProxy extends HttpResponse.Redirection {
        constructor(playload, next) {
            super(305, playload || "Use Proxy", next)
        }
    }

    static TemporaryRedirect = class TemporaryRedirect extends HttpResponse.Redirection {
        constructor(playload, next) {
            super(307, playload || "Temporary Redirect", next)
        }
    }

    static PermanentRedirect = class PermanentRedirect extends HttpResponse.Redirection {
        constructor(playload, next) {
            super(308, playload || "Permanent Redirect", next)
        }
    }

    static ClientError = class ClientError extends HttpResponse {
        constructor(...args) {
            super(...args)
        }
    }

    static BadRequest = class BadRequest extends HttpResponse.ClientError {
        constructor(playload, next) {
            super(400, playload || "Bad Request", next)
        }
    }

    static Unauthorized = class Unauthorized extends HttpResponse.ClientError {
        constructor(playload, next) {
            super(401, playload || "Unauthorized", next)
        }
    }

    static PaymentRequired = class PaymentRequired extends HttpResponse.ClientError {
        constructor(playload, next) {
            super(402, playload || "Payment Required", next)
        }
    }

    static Forbidden = class Forbidden extends HttpResponse.ClientError {
        constructor(playload, next) {
            super(403, playload || "Forbidden", next)
        }
    }

    static NotFound = class NotFound extends HttpResponse.ClientError {
        constructor(playload, next) {
            super(404, playload || "Not Found", next)
        }
    }

    static MethodNotAllowed = class MethodNotAllowed extends HttpResponse.ClientError {
        constructor(playload, next) {
            super(405, playload || "Method Not Allowed", next)
        }
    }

    static NotAcceptable = class NotAcceptable extends HttpResponse.ClientError {
        constructor(playload, next) {
            super(406, playload || "Not Acceptable", next)
        }
    }

    static ProxyAuthenticationRequired = class ProxyAuthenticationRequired extends HttpResponse.ClientError {
        constructor(playload, next) {
            super(407, playload || "Proxy Authentication Required", next)
        }
    }

    static RequestTimeout = class RequestTimeout extends HttpResponse.ClientError {
        constructor(playload, next) {
            super(408, playload || "Request Timeout", next)
        }
    }

    static Conflict = class Conflict extends HttpResponse.ClientError {
        constructor(playload, next) {
            super(409, playload || "Conflict", next)
        }
    }

    static Gone = class Gone extends HttpResponse.ClientError {
        constructor(playload, next) {
            super(410, playload || "Gone", next)
        }
    }

    static LengthRequired = class LengthRequired extends HttpResponse.ClientError {
        constructor(playload, next) {
            super(411, playload || "Length Required", next)
        }
    }

    static PreconditionFailed = class PreconditionFailed extends HttpResponse.ClientError {
        constructor(playload, next) {
            super(412, playload || "Precondition Failed", next)
        }
    }

    static RequestEntityTooLarge = class RequestEntityTooLarge extends HttpResponse.ClientError {
        constructor(playload, next) {
            super(413, playload || "Request Entity Too Large", next)
        }
    }

    static RequestURITooLong = class RequestURITooLong extends HttpResponse.ClientError {
        constructor(playload, next) {
            super(414, playload || "Request-URI Too Long", next)
        }
    }

    static UnsupportedMediaType = class UnsupportedMediaType extends HttpResponse.ClientError {
        constructor(playload, next) {
            super(415, playload || "Unsupported Media Type", next)
        }
    }

    static RequestedRangeNotSatisfiable = class RequestedRangeNotSatisfiable extends HttpResponse.ClientError {
        constructor(playload, next) {
            super(416, playload || "Requested Range Not Satisfiable", next)
        }
    }

    static ExpectationFailed = class ExpectationFailed extends HttpResponse.ClientError {
        constructor(playload, next) {
            super(417, playload || "Expectation Failed", next)
        }
    }

    static Imateapot = class Imateapot extends HttpResponse.ClientError {
        constructor(playload, next) {
            super(418, playload || "I'm a teapot", next)
        }
    }

    static MisdirectedRequest = class MisdirectedRequest extends HttpResponse.ClientError {
        constructor(playload, next) {
            super(421, playload || "Misdirected Request", next)
        }
    }

    static UnprocessableEntity = class UnprocessableEntity extends HttpResponse.ClientError {
        constructor(playload, next) {
            super(422, playload || "Unprocessable Entity", next)
        }
    }

    static Locked = class Locked extends HttpResponse.ClientError {
        constructor(playload, next) {
            super(423, playload || "Locked", next)
        }
    }

    static FailedDependency = class FailedDependency extends HttpResponse.ClientError {
        constructor(playload, next) {
            super(424, playload || "Failed Dependency", next)
        }
    }

    static UpgradeRequired = class UpgradeRequired extends HttpResponse.ClientError {
        constructor(playload, next) {
            super(426, playload || "Upgrade Required", next)
        }
    }

    static PreconditionRequired = class PreconditionRequired extends HttpResponse.ClientError {
        constructor(playload, next) {
            super(428, playload || "Precondition Required", next)
        }
    }

    static TooManyRequests = class TooManyRequests extends HttpResponse.ClientError {
        constructor(playload, next) {
            super(429, playload || "Too Many Requests", next)
        }
    }

    static RequestHeaderFieldsTooLarge = class RequestHeaderFieldsTooLarge extends HttpResponse.ClientError {
        constructor(playload, next) {
            super(431, playload || "Request Header Fields Too Large", next)
        }
    }

    static ConnectionClosedWithoutResponse = class ConnectionClosedWithoutResponse extends HttpResponse.ClientError {
        constructor(playload, next) {
            super(444, playload || "Connection Closed Without Response", next)
        }
    }

    static UnavailableForLegalReasons = class UnavailableForLegalReasons extends HttpResponse.ClientError {
        constructor(playload, next) {
            super(451, playload || "Unavailable For Legal Reasons", next)
        }
    }

    static ClientClosedRequest = class ClientClosedRequest extends HttpResponse.ClientError {
        constructor(playload, next) {
            super(499, playload || "Client Closed Request", next)
        }
    }

    static ServerError = class ServerError extends HttpResponse {
        constructor(...args) {
            super(...args)
        }
    }

    static InternalServerError = class InternalServerError extends HttpResponse.ServerError {
        constructor(playload, next) {
            super(500, playload || "Internal Server Error", next)
        }
    }

    static NotImplemented = class NotImplemented extends HttpResponse.ServerError {
        constructor(playload, next) {
            super(501, playload || "Not Implemented", next)
        }
    }

    static BadGateway = class BadGateway extends HttpResponse.ServerError {
        constructor(playload, next) {
            super(502, playload || "Bad Gateway", next)
        }
    }

    static ServiceUnavailable = class ServiceUnavailable extends HttpResponse.ServerError {
        constructor(playload, next) {
            super(503, playload || "Service Unavailable", next)
        }
    }

    static GatewayTimeout = class GatewayTimeout extends HttpResponse.ServerError {
        constructor(playload, next) {
            super(504, playload || "Gateway Timeout", next)
        }
    }

    static HTTPVersionNotSupported = class HTTPVersionNotSupported extends HttpResponse.ServerError {
        constructor(playload, next) {
            super(505, playload || "HTTP Version Not Supported", next)
        }
    }

    static VariantAlsoNegotiates = class VariantAlsoNegotiates extends HttpResponse.ServerError {
        constructor(playload, next) {
            super(506, playload || "Variant Also Negotiates", next)
        }
    }

    static InsufficientStorage = class InsufficientStorage extends HttpResponse.ServerError {
        constructor(playload, next) {
            super(507, playload || "Insufficient Storage", next)
        }
    }

    static LoopDetected = class LoopDetected extends HttpResponse.ServerError {
        constructor(playload, next) {
            super(508, playload || "Loop Detected", next)
        }
    }

    static NotExtended = class NotExtended extends HttpResponse.ServerError {
        constructor(playload, next) {
            super(510, playload || "Not Extended", next)
        }
    }

    static NetworkAuthenticationRequired = class NetworkAuthenticationRequired extends HttpResponse.ServerError {
        constructor(playload, next) {
            super(511, playload || "Network Authentication Required", next)
        }
    }

    static NetworkConnectTimeoutError = class NetworkConnectTimeoutError extends HttpResponse.ServerError {
        constructor(playload, next) {
            super(599, playload || "Network Connect Timeout Error", next)
        }
    }
}


module.exports = HttpResponse