/**
 * Created by 熙冰 on 2018/5/31
 */

/*
* 这个函数给对象o增加了属性存取器方法
* 方法名称为get<name>和set<name>.如果提供了一个判定函数
* setter方法就会用它来检测参数的合法性，然后在存储它
* 如果判断函数返回false,setter方法抛出一个异常
* 这个函数有一个非同寻常之处，就是getter和setter函数
* 所操作的属性值并没有存储在对象o中
* 相反，这个值仅仅是保存在函数中的局部变量中
* getter和setter方法同样是局部函数，因此可以访问这个局部变量
* 也就是说，对于两个存取器方法来说这个变量是私有的
* 没有办法绕过存取器方法来设置或修改这个值
* */
function addPrivateProperty(o, name, predicate) {
    var value;

    o["get" + name] = function () {
        return value;
    }
    o["set" + name] = function (v) {
        if (predicate && !predicate(v))
            throw Error("set" + name + ": invalid value" + v);
        else
            value = v;
    };
}

var o ={};

addPrivateProperty(o, "Name", function (x) {
    return typeof  x == "string";
});

o.setName("Frank");
console.log(o.getName());
o.setName(o);