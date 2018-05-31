/**
 * Created by 熙冰 on 2018/5/31
 */
function flexisum(a) {
    var total = 0;
    for (var i =0; i<arguments.length; i++) {
        var element = arguments[i],n;
        if (element == null) continue;
        if (isArray(element))
            n = flexisum.apply(this,element);
        else if (typeof  element === "function")
            n = Number(element());
        else
            n = Number(element);
        if (isNaN(n))
            throw Error("flexisum():can't convert" + element + "to number");
        total += n;
    }
    return total;
}