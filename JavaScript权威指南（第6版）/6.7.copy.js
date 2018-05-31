/**
 * Created by 熙冰 on 2018/5/31
 */
/*
* 复制属性的特性
* 给Object.prototype添加一个不可枚举的extend()方法
* 这个方法继承自调用它的对象，将作为参数传入的对象的属性一一复制
* 除了值之外，也复制属性的所有特性，除非在目标对象中存在同名的属性，
* 参数对象的所有自有对象（包括不枚举的属性）也会一一复制。
* 使用Object.getOwnPropertyDescriptor()和Object.defineProperty()
* 对属性的所有特性进行复制
* */
Object.defineProperty(Object.prototype, "extend",//定义Object.prototype.extend
    {
        writable: true,
        enumerable: false, //将其定义为不可枚举的
        configurable: true,
        value:function (o) {
            var names = Object.getOwnPropertyNames(o);
            for (var i=0; i<names.length;i++) {
                if (names[i] in this) continue;
                var desc = Object.getOwnPropertyDescriptor(o,names[i]);
                Object.defineProperty(this,name[i], desc);
            }
        }
    })