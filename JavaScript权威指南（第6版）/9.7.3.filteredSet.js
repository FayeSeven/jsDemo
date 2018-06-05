/**
 * Created by 熙冰 on 2018/6/5
 */
/*
* 使用组合代替继承的集合的实现
* 实现一个FilteredSet，它包装某个指定的“集合”对象
* 并对传入add()方法的值应用了某种指定的过滤器
* “范围”类中其他所有的核心方法延续到包装后的实例中
* */
var FilteredSet = Set.extend(
    function FilteredSet(set, filter) {//构造函数
        this.set = set;
        this.filter = filter;
    },
    {//实例方法
        add:function () {
            //如果已有过滤器，直接使用它
            if (this.filter){
                for (var i =0;i<arguments.length;i++){
                    var v = arguments[i];
                    if (!this.filter(v))
                        throw new Error("FilteredSet: value" + v + "rejected by filter");
                }
            }

            //调用set中的add()方法
            this.set.add.apply(this.set, arguments);
            return this;
        },
        //剩下的方法保持不变
        remove:function () {
            this.set.remove.apply(this.set,arguments);
            return this;
        },
        contains:function (v) {
            return this.set.contains(v);
        },
        size:function () {
            return this.set.size();
        },
        foreach:function (f,c) {
            this.set.foreach(f,c);
        }
    }
);