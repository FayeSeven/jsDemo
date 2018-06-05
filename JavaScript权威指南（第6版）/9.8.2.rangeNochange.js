/**
 * Created by 熙冰 on 2018/6/5
 */
function Range(from, to) {//不可变的类Range的构造函数
    this.from = from;
    this.to = to;
    freezeProps(this);//将属性设置为不可变的
}

Range.prototype = hideProps({ // 使用不可枚举的属性来定义原型
    constructor: Range,
    includes: function(x) { return this.from <= x && x <= this.to; },
    foreach: function(f) {for(var x=Math.ceil(this.from);x<=this.to;x++) f(x);},
    toString: function() { return "(" + this.from + "..." + this.to + ")"; }
});