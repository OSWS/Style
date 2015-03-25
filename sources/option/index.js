// CSS option.

// key: value [!important];

var oswst = require('oswst');

module.exports = function(exports) {

// [new] () => this;
exports.Option = oswst.Node().extend(function() {
    var prototype = this.___prototype;
    
    // TData;
    // this._key = undefined;
    
    // (key: TData) => this;
    this.key = function(key) {
        this._key = key;
        
        return this;
    };
    
    // Array<TData>;
    // this._data = undefined;
    
    // (...data: Array<TData>) => this;
    this.data = function() {
        this._data = Array.prototype.slice.call(arguments, 0);
        
        return this;
    };
    
    // Array<TData>;
    // this._value = undefined;
    
    // (...value: TData) => this;
    this.value = function(value) {
        this._value = Array.prototype.slice.call(arguments, 0);
        
        return this;
    };
    
    // Array<TData>;
    // this._prefixes = undefined;
    
    // (...prefixes: Array<TData>) => this;
    this.prefixes = function() {
        this._prefixes = Array.prototype.slice.call(arguments, 0);
        
        return this;
    };
    
    // (compilation: Compilation) => TData;
    this.__compile = function(compilation) {
        var result = [];
        for (var p in this._prefixes) {
            result.push(this._prefixes[p] + this._key, ':', this._value, this._important? '!important;' : ';');
        }
        return result;
    };
    
    // boolean;
    this._important = false;
    
    // (state?: boolean) => this;
    this.important = function(state) {
        if (typeof(state) != 'boolean') this._important = true;
        else this._important = state;
        
        return this;
    };
    
    // ();
    this.__constructor = function() {
        if (prototype.__constructor) prototype.__constructor.call(this);
        this._data = [];
        this._value = [];
        this._prefixes = [''];
    };
    
    this.extend = function() {
        var extension = prototype.extend.apply(this, arguments);
        exports.__static(extension, 'key');
        exports.__static(extension, 'data');
        exports.__static(extension, 'value');
        exports.__static(extension, 'prefixes');
        return extension;
    };
});

};