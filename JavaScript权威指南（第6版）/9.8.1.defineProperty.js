/**
 * Created by 熙冰 on 2018/6/5
 */
//定义不可枚举的属性
//将代码包装在一个匿名函数中，这样定义的变量就在这个函数作用域内
(function () {
    /*
    * 定义一个不可枚举的属性objectId，它可以被所有对象继承
    * 当读取这个属性时调用getter函数
    * 它没有定义setter,因此它是只读的
    * 它是不可配置的，因此它是不能删除的
    * */
    Object.defineProperty(Object.prototype, "objectId",{
        get: idGetter,//取值器
        enumerable:false, //不可枚举的
        configurable:false //不可删除的
    });

    //当读取objectId的时候直接调用这个getter函数
    function idGetter() {//getter函数返回该id
        if(!(idprop in this)) {//如果对象中不存在id
            if (!Object.isExtensible(this)) //并且可以增加属性
                throw Error("Can't define id for nonextensible objects");
            Object.defineProperty(this, idprop,{//给它一个值
                value:nextid++,//就是这个值
                writable:false,//只读的
                enumerable:false,//不可枚举的
                configurable:false//不可删除的
            });
        }
        return this[idprop];//返回已有的或新的值
    };
    //idGetter()用到了这些变量，这些都属于私有变量
    var idprop = "|**objectId**|";//假设这个属性没有用到
    var nextid = 1;//给它设置初始值
}());//立即执行这个包装函数