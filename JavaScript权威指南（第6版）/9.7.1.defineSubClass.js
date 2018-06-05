/**
 * Created by 熙冰 on 2018/6/5
 */

//用一个简单的函数创建简单的子类
function defineSubclass(superclass,//父类的构造函数
                        constructor,//新的子类的构造函数
                        methods,//实例方法：复制至原型中
                        statics) {//类属性：复制至构造函数中
    //建立子类的原型对象
    constructor.prototype = inherit(superclass.prototype);
    constructor.prototype.constructor = constructor;
    //像对常规类一样复制方法和类属性
    if (methods) extend(constructor.prototype,methods);
    if (statics) extend(constructor,statics);
    return constructor;
}

//也可以通过父类构造函数的方法来做到这一点
Function.prototype.extend = function (constructor, methods, statics) {
    return defineSubclass(this, constructor, methods, statics);
}