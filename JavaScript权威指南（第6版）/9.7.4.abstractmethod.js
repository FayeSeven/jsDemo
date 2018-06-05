/**
 * Created by 熙冰 on 2018/6/5
 */

//抽象类和非抽象Set类的层次结构

//这个函数可以用做微任何抽象方法，非常方便
function abstractmethod() {
    throw new Error("abstract method");
}

/*
* AbstractSet类定义了一个抽象方法：contains()
* */
function AbstractSet() {
    throw new Error("Can't instantiate abstract classes");
}

AbstractSet.prototype.contains = abstractmethod;

/*
* NotSet是AbstractSet的一个非抽象子类
* 所有不在其他集合中的成员都在这个集合中
* 因为它是在其他集合是不可泄的条件下定义的
* 同时由于它的成员是无限个，因此它是不可枚举的
* 我们只能用它来检测元素成员的归属情况
* 注意，我们使用了Function.prototype.extend()方法来定义这个子类
* */

var NotSet = AbstractSet.extend(
    function NotSet(set) {
        this.set = set;
    },{
        contains: function (x) {
            return !this.set.contains(x);
        },
        toString: function (x) {
            return "~" + this.set.toString();
        },
        equals: function (that) {
            return that instanceof NotSet && this.set.equals(that.set);
        }
    }
);

/*
* AbstractEnumerableSet是AbstractSet的一个抽象子类
* 它定义了抽象方法size()和foreach()
* 然后实现了非抽象方法isEmpty() toArray() to[Locale]String()和equals()方法
* 子类实现了contains() size()和foreach,这三个方法可以很轻易调用这5个非抽象方法
* */
var AbstractEnumerableSet = AbstractSet.extend(
    function () {
        throw new Error("Can't instantiate abstract classes");
    },
    {
        size:abstractmethod,
        foreach:abstractmethod,
        isEmpty:function () {
            return this.size() == 0;
        },
        toString:function () {
            var s = "{",i = 0;
            this.foreach(function (v) {
                if (i++>0) s +=",";
                s += v;
            });
            return s + "}";
        },
        toLocaleString:function () {
            var s = "{",i = 0;
            this.foreach(function (v) {
                if (i++>0) s +=",";
                if (v == null) s += v;
                else s += v.toLocaleString();
            });
            return s + "}";
        },
        toArray:function () {
            var a = [];
            this.foreach(function(v) { a.push(v); });
            return a;
        },
        equals: function(that) {
            if (!(that instanceof AbstractEnumerableSet)) return false;
            // 如果它们的大小不同，则它们不想等
            if (this.size() != that.size()) return false;
            // 检查每一个元素是否也在that中
            try {
                this.foreach(function(v) {if (!that.contains(v)) throw false;});
                return true;  // 所有的元素都匹配：集合相等
            } catch (x) {
                if (x === false) return false; // 集合不相等
                throw x; // 发生了其他的一场：重新抛出异常
            }
        }
    }
);

/*
* SingletonSet是AbstractEnumerableSet的非抽象子类
* singleton集合是只读的，它只包含一个成员
* */
var SingletonSet = AbstractEnumerableSet.extend(
    function SingletonSet(member) { this.member = member; },
    {
        contains: function(x) {  return x === this.member; },
        size: function() { return 1; },
        foreach: function(f,ctx) { f.call(ctx, this.member); }
    }
);

/*
* AbstractWritableSet是AbstractEnumerableSet抽象子类
* 它定义了抽象方法add()和remove()
* 然后实现了非抽象方法union() , intersection(),difference()
* */
var AbstractWritableSet = AbstractEnumerableSet.extend(
    function() { throw new Error("Can't instantiate abstract classes"); },
    {
        add: abstractmethod,
        remove: abstractmethod,
        union: function(that) {
            var self = this;
            that.foreach(function(v) { self.add(v); });
            return this;
        },
        intersection: function(that) {
            var self = this;
            this.foreach(function(v) { if (!that.contains(v)) self.remove(v);});
            return this;
        },
        difference: function(that) {
            var self = this;
            that.foreach(function(v) { self.remove(v); });
            return this;
        }
    });

/*
* ArraySet是AbstractWritableSet非抽象子类
* 它以数组的形式表示集合中的元素
* 对于它的contains()方法使用了数组的线性查找
* 因为contains()方法的算法复杂度O（n）而不是O（1）
* 它非常适用于相对小型的集合，注意，这里实现用到了ES5的数组方法indexOf()和forEach()
* */
var ArraySet = AbstractWritableSet.extend(
    function ArraySet() {
        this.values = [];
        this.add.apply(this, arguments);
    },
    {
        contains: function(v) { return this.values.indexOf(v) != -1; },
        size: function() { return this.values.length; },
        foreach: function(f,c) { this.values.forEach(f, c); },
        add: function() {
            for(var i = 0; i < arguments.length; i++) {
                var arg = arguments[i];
                if (!this.contains(arg)) this.values.push(arg);
            }
            return this;
        },
        remove: function() {
            for(var i = 0; i < arguments.length; i++) {
                var p = this.values.indexOf(arguments[i]);
                if (p == -1) continue;
                this.values.splice(p, 1);
            }
            return this;
        }
    }
);

