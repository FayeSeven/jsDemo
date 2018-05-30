/**
 * Created by 熙冰 on 2018/5/30
 */

/*
* 把p中的可枚举属性复制到o中，并返回o
* 如果o和p中含有同名属性，则覆盖o中的属性
* 这个函数并不处理getter和setter以及复制属性
* */
function extend(o, p) {
    for (prop in p) {
        o[prop] = p[prop];
    }
    return o;
}

/*
* 把p中的可枚举属性复制到o中，并返回o
* 如果o和p中含有同名属性，o中的属性将不受影响
* 这个函数并不处理getter和setter以及复制属性
* */
function merge(o, p) {
    for (prop in p) {
        if (o.hasOwnProperty[prop]) continue;
        o[prop] = p[prop];
    }
    return o;
}

/*
* 如果o中的属性在p中没有同名属性，则从o中删除这个属性
* 返回o
* */
function restrict(o, p) {
    for (prop in o) {
        if (! (prop in p)) delete o[prop];
    }
    return o;
}

/*
* 如果o中的属性在p中存在同名属性，则从o中删除这个属性
* 返回o
* */
function subtract(o, p) {
    for (prop in p) {
        delete o[prop];
    }
    return o;
}

/*
* 返回一个新对象，这个对象同时拥有o的属性和p属性
* 如果o和p中有重名属性，使用p中的属性值
* */
function union(o, p) {
    return extend(extend({},o), p);
}

/*
* 返回一个新对象，这个对象拥有同时o和p中出现的属性
* 很像求o和p的交集，但p中属性的值被忽略
* */
function intersection(o, p) {
    return restrict(extend({},o), p);
}

/*
* 返回一个数组，这个数组包含的是o中可枚举的自有属性的名字
* */
function keys(o) {
    if (typeof o !== "object") throw  TypeError();
    var result = [];
    for (var prop in o) {
        if (o.hasOwnProperty(prop))
            result.push(prop);
    }
    return result;
}