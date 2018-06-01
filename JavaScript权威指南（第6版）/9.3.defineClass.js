/**
 * Created by 熙冰 on 2018/6/1
 */
/*
function defineClass(constructor,methods,statics) {
    if (methods) extend(constructor.prototype, methods);
    if (statics) extend(constructor, statics); 
    return constructor;
}

var SimpleRange = defineClass(function (f,t) {
    this.f = f;
    this.t = t;
},{
    includes: function (x) {
        return this.f <=x && x<=this.t;
    },
    toString: function () {
        return this.f + "..." +this.t;
    }
},{
    upto: function (t) {
        return new SimpleRange(o, t);
    }
});*/


/*
* Complex.js:
* 这个文件定义了Complex类，用来描述复数
* 回忆一下，复数是实数和虚数的和，并且虚数i是-1的平方根
* */

/*
* 这个构造函数为它所创建的每个实例定义了实例字段r和i
* 这两个字段分别保存复数的实部和虚部
* 它们是对象的状态
* */
function Complex(real, imaginary) {
    if (isNaN(real) || isNaN(imaginary))
        throw new TypeError();
    this.r = real;
    this.i = imaginary;
}

/*
* 类的实例方法定义位原型对象的函数值属性
* 这里定义的方法可以被所有实例继承，并为它们提供共享的行为
* 需要注意的是，js的实例方法必须使用关键字this
* 来存取实例的字段
* */

//当前复数对象加上另外一个复数，并返回一个新的计算和值后的复数对象
Complex.prototype.add = function (that) {
    return new Complex(this.r + that.r, this.i +that.i);
};

Complex.prototype.mul = function (that) {
    return new Complex(this.r * that.r - this.i *that.i, this.r * that.i +this.r * that.i);
};