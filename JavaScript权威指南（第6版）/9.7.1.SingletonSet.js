/**
 * Created by 熙冰 on 2018/6/5
 */
function SingletonSet(member) {
    this.member = member;
}

//创建一个原型对象，这个原型对象继承来自Set的原型
SingletonSet.prototype = inherit(Set.prototype);

//给原型添加属性
//如果有同名的属性就覆盖Set.prototype中的同名属性
extend(SingletonSet.prototype, {
    //设置合适的constructor属性
    constructor: SingletonSet,
    //这个集合是只读 的：调用add()和remove()都会报错
    add:function () {
        throw "read-only set";
    },
    remove:function () {
        throw "read-only set";
    },
    size:function () {//实例中永远只有一个元素
        return 1;
    },
    foreach:function (f, context) {//这个方法只调用一次，传入这个集合的唯一成员
        f.call(context, this.member);
    },
    contains:function (x) {//只须检查传入的值是否匹配这个集合唯一的成员即可
        return x === this.member;
    }
});