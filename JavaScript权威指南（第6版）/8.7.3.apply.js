/**
 * Created by 熙冰 on 2018/6/1
 */
function trace(o, m) {
    var original = o[m];
    o[m] = function () {
        console.log(new Date(), "Entering:", m);
        var result = original.apply(this,arguments);
        console.log(new Date(), "Exiting:",m);
        return result;
    }
}