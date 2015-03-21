// CSS option.

// key: value [!important];

var oswst = require('oswst');

module.exports = function(exports) {
    
    // (key: TData, value: TData) => this;
    exports.Option = oswst.Node().extend(function() {
        var prototype = this.___prototype;
        
        // TData;
        // this._key = undefined;
        
        // TData;
        // this._value = undefined;
        
        // (compilation: Compilation) => this;
        this.__compile = function(compilation) {
            return [this._key, ':', this._value, this._important? '!important;' : ';'];
        };
        
        // boolean;
        this._important = false;
        
        // () => this;
        this.important = function(state) {
            if (typeof(state) != 'boolean') this._important = true;
            else this._important = state;
            return this;
        };
        
        this.__constructor = function(key, value) {
            if (prototype.__constructor) prototype.__constructor.call(this);
            this._key = key;
            this._value = value;
        };
    });
    
};