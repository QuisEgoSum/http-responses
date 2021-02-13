

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

    //insert
}


module.exports = HttpResponse