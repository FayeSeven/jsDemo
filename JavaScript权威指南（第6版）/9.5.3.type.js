/**
 * Created by 熙冰 on 2018/6/4
 */
/*
* 以字符串形式返回o的类型：
* -如果o是null,返回“null",如果o是NaN，返回“nan”
* -如果typeof所返回的值不是“object"，则返回这个值
* -如果o的类不是“object”，则返回这个值
* 如果O包含构造函数并且这个构造函数具有名称，则返回这个名称
* -否则，一律返回“object”
* */
function type(o) {
    var t,c,n;

    if (o === null) return "null";

    if (o !==o) return "nan";//NaN和它自身不想等

    if ((t = typeof  o) !== "object") return t;

    if ((c = classof(o) !== "Object")) return c;

    if (o.constructor && typeof o.constructor === "function" &&
        (n = o.constructor.getName())) return n;
    return "Object";
}

function classof(o) {
    return Object.prototype.toString.call(o.slice(8,-1));
};

Function.prototype.getName = function () {
    if ("name" in this) return this.name;
    return this.name = this.toString().match(/function\s*([^(]*)\(/)[1];
}