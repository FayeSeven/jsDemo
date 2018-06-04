/**
 * Created by 熙冰 on 2018/6/4
 */
function quacks() {
    for (var i =1; i < arguments.length; i ++) {
        var arg = arguments[i];
        switch (typeof arg) {
            case 'string':
                if (typeof o[arg] !== "functon") return false;
                continue;
            case 'function':
                arg = arg.prototype;
            case 'object':
                for(var m in arg) {
                    if (typeof arg[m] !== "function") continue;
                    if (typeof o[m] !== "function") return false;
                }
        }
    }
    return true;
}