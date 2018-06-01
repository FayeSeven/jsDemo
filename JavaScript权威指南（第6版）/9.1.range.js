/**
 * Created by 熙冰 on 2018/6/1
 */
function range(from, to) {
    var r = inherit(range.methods);

    r.from = from;
    r.to = to;

    return r;
}

range.methods = {
    includes: function (x) {
        return this.from <=x && x <=this.to;
    },

    forEach: function (f) {
        for (var x = Math.ceil(this.from);x <= this.to; x++)
            f(x);
    },

    toString: function () {
        return "("+this.from+"..."+this.to+")";
    }
};

var r = range(1, 3);
r.includes(2);
r.foreach(console.log);
console.log(r);