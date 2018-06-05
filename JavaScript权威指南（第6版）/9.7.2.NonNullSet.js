/**
 * Created by 熙冰 on 2018/6/5
 */

//在子类中调用父类的构造函数和方法
function NonNullSet() {
    //仅链接到父类
    //作为普通函数调用父类的构造函数来初始化通过该构造函数调用创建对象
    Set.apply(this, arguments);
}

NonNullSet.prototype = inherit(Set.prototype);
NonNullSet.prototype.constructor = NonNullSet;

//为了将null和undefined排除在外，只须重写add()方法
NonNullSet.prototype.add = function () {
    //检查参数是不是null或undefined
    for (var i = 0; i < arguments.length; i++)
        if (arguments[i] == null)
            throw new Error("Can't add null or undefined to a NonNullSet");

    //调用父类add()方法以执行实际插入操作
    return Set.prototype.add.apply(this, arguments)
;}