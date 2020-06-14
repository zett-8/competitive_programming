const Node = function(data, previous = null, next = null) {
  this.data = data
  this.previous = previous
  this.next = null
}

/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.node = new Node(homepage)
    this.current = this.node
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.current.next = new Node(url, this.current)
    this.current = this.current.next
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    for (let i=0; i<Number(steps); i++) {
      this.current = this.current.previous || this.current
    }
    return this.current.data
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    for (let i=0; i<Number(steps); i++) {
      this.current = this.current.next || this.current
    }
    return this.current.data
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
