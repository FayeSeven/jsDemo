/**
 * Created by 熙冰 on 2018/6/5
 */
//创建一个不可变的类，它的属性和方法都是只读的
//这个方法可以使用 new调用，也可以省略new，它可以用构造函数也可以用作工厂函数
function Range(from, to) {
    //这些是对from和to只读属性的描述符
    var props = {
        from:{value:from, enumerable:true, writable:false, configurable:false},
        to:{value:to, enumerable:true, writable:false, configurable:false}
    };
    if (this instanceof Range)//如果作为构造函数来调用
        Object.defineProperties(this, props);//定义属性
    else
        return Object.create(Range.prototype,//创建并返回这个新Range对象，
            props);//属性由props指定
}

/*
* 如果用同样的方法给Range.prototype对象添加属性
* 那么我们需要给这些属性设置它们的 特性
* 因为我们无法识别出它们的可枚举性，可写性或可配置性，这些属性特性默认 都是false
* */
Object.defineProperties(Range.prototype, {
    includes: {
        value: function(x) { return this.from <= x && x <= this.to; }
    },
    foreach: {
        value: function(f) {
            for(var x = Math.ceil(this.from); x <= this.to; x++) f(x);
        }
    },
    toString: {
        value: function() { return "(" + this.from + "..." + this.to + ")"; }
    }
});