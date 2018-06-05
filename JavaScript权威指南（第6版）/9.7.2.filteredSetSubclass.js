/**
 * Created by 熙冰 on 2018/6/5
 */
function filteredSetSubclass(superclass, filter) {
    var constructor = function () {//子类构造函数
        superclass.apply(this, arguments);//调用父类构造函数
    };
    var proto = constructor.prototype = inherit(superclass.prototype);
    proto.constructor = constructor;
    proto.add = function () {
        //在添加任何成员之前首先使用过滤器将所有参数进行过滤
        for (var i = 0;i < arguments.length; i++){
            var v = arguments[i];
            if (!filter(v))  throw ("value" + v + "rejected by filter");
        }
        //调用父类的add()方法
        superclass.prototype.add.apply(this, arguments);
    };
    return constructor;
}