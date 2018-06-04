/**
 * Created by 熙冰 on 2018/6/4
 */
function typeAndValue(x) {
    if (x == null) return "";
    console.log(x.constructor);
    switch (x.constructor)  {
        case Number: return "Number:" + x;
        case String: return "String: '" + x + "'";
        case Date: return "Date:" + x;
        case RegExp: return "Regexp: " + x;
        case Complex: return "Complex: " + x;
    }
}
typeAndValue("111");