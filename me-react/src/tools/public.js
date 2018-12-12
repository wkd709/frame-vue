import * as cityJson from '../fetch/data/city.js';
/**
 * 城市选择的处理 list
 *
 */
export function cityList (id) {
    var list = [];
    var i = 0;
    if (cityJson.address.length > 0) {
        cityJson.address.forEach(function(key,index) {
            if (id == key.pid) {
                list[i] = key;
                i++;
            }
        });
    }
    if (list.length == 1 && list[0].name == '0') {
        list = [];
    }
    return list;
}


/**
 * 获取城市名字 string
 *
 */
export function cityName (id) {
    var name = '';
    if (cityJson.address.length > 0) {
        cityJson.address.forEach(function(key,index) {
            if (id == key.id) {
                name = key.name;
            }
        });
    }
    if (name == '0') {
        name = '';
    }
    return name;
}

/**
 * 获取城市 下标 （索性）
 *
 */
export function cityIndex (list,id) {
    var ind = 0;
    list.forEach(function(key,index) {
        if (key.id==id) {
            ind = index;
            return;
        }
    });
    return ind;
}