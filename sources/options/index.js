// CSS options.

var oswst = require('oswst');

module.exports = function(exports) {
    
    exports.Direction = exports.Option().extend();
    
    exports.position = exports.Direction().key('position').extend(function() {
        var prototype = this.___prototype;
        
        this.__constructor = function() {
            prototype.__constructor.call(this);
            
            for (var a in arguments) {
                var argument = arguments[a];
                
                if (typeof(argument) == 'function' && argument.prototype instanceof oswst.Node) argument = argument.__construct();
                
                if (typeof(argument) == 'object') {
                    if (argument instanceof exports.Direction) {
                        this._data.push(argument);
                    } else if (argument instanceof exports.Position) {
                        this._value = argument._value;
                    } else throw new Error('Unexpected option.');
                } else throw new Error('Unexpected option.');
            }
        };
    });
    
};