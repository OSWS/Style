// CSS selector with content.

var oswst = require('oswst');

module.exports = function(exports) {
    
    // (selector: string, ...content: Array<TData>) => this;
    exports.Selector = oswst.Node().extend(function() {
        var prototype = this.___prototype;
        
        // TData;
        // this._selector = undefined;
        
        // Array<TData>;
        // this._options = undefined;
        
        // Array<Selector>;
        // this._selectors = undefined;
        
        // (selector: string, ...content: Array<TData>) => this;
        this._find = function(selector) {
            if (typeof(this._options) != 'object' || Object.prototype.toString.call(this._options) != '[object Array]') this._options = [];
            if (typeof(this._selectors) != 'object' || Object.prototype.toString.call(this._selectors) != '[object Array]') this._selectors = [];
            this._selector = selector;
            var content = Array.prototype.slice.call(arguments, 1);
            for (var c in content) {
                if (typeof(content[c]) == 'object' && content[c] instanceof exports.Selector) {
                    this._selectors.push(content[c]);
                } else {
                    this._options.push(content[c]);
                }
            }
            return this;
        };
        
        // (context: TContext, path: Array<TData>) => this;
        this.__compile = function(context, path) {
            var selector = '';
            for (var p in path) {
                if (typeof(path[p]) == 'object' && path[p] instanceof exports.Selector) {
                    selector += path[p]._selector + ' ';
                }
            }
            return [selector, '{', this._options, '}', this._selectors];
        };
        
        this.__constructor = function() {
            if (prototype.__constructor) prototype.__constructor.call(this);
            this._selector = this.___prototype._selector? this.___prototype._selector : undefined;
            this._options = this.___prototype._options? Array.prototype.slice.call(this.___prototype._options, 0) : [];
            this._selectors = this.___prototype._selectors? Array.prototype.slice.call(this.___prototype._selectors, 0) : [];
            if (this._find) this._find.apply(this, arguments);
        };
    });
    
};