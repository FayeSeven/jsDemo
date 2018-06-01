/**
 * Created by 熙冰 on 2018/6/1
 */
if (!Function.prototype.bind) {
    Function.prototype.bind = function (o) {
        var self = this, boundArgs = arguments;

        return function () {
            var args = [], i;
            for (i = 1; i < boundArgs.length; i++) args.push(boundArgs[i]);
            for (i = 0; i < arguments.length; i++) args.push(arguments[i]);
            return self.apply(o, args);
        };
    };
}