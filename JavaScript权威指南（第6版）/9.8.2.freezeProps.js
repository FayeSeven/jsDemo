/**
 * Created by 熙冰 on 2018/6/5
 */
function freezeProps(o) {
    var props = (arguments.length == 1)//如果只有一个参数
    ? Object.getOwnPropertyNames(o)//使用所有的属性
    :Array.prototype.splice.call(arguments,1);否则传入了指定名字的属性
    props.forEach(function(n) { // 将它们都设置为只读的和不可变的
        // 忽略不可配置的属性
        if (!Object.getOwnPropertyDescriptor(o,n).configurable) return;//用于获取给定属性的描述信息
        Object.defineProperty(o, n, { writable: false, configurable: false });
    });
    return o;
}

//将o的指定名字（或所有）的属性设置为不可枚举的和可配置的
function hideProps(o) {
    var props = (arguments.length == 1)              // 如果只有一个参数
        ? Object.getOwnPropertyNames(o)              //  使用所有的属性
        : Array.prototype.splice.call(arguments, 1); //  否则传入了指定名字的属性
    props.forEach(function(n) { // 将它们设置为不可枚举的
        // 忽略不可配置的属性
        if (!Object.getOwnPropertyDescriptor(o,n).configurable) return;
        Object.defineProperty(o, n, { enumerable: false });
    });
    return o;
}