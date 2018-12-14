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

/**
 * 获取 val最近5天
 *
 */

export function getDate(obj) {
    var dateObj = {
        yearList: [],
        monthList: [],
        dateList: []
        
    };

    var list = obj.split('-');
    var index = 0;
    for (var i = -2 ; i <= 2; i++) {
        var stamp = new Date(obj);

        // 年
        dateObj.yearList[index] = list[0]*1+i;

        // 月
        dateObj.monthList[index] = list[1]*1+i;
        if (((list[1]*1+i)+'').length < 2) {

            dateObj.monthList[index] = '0'+ (list[1]*1+i);

        }
        if ((list[1]*1+i) > 12 || (list[1]*1+i) < 1) {

            dateObj.monthList[index] = '';
        }

        // 日
        stamp.setDate(stamp.getDate() + i);
        dateObj.dateList[index] = stamp.getDate();

        if ((stamp.getDate()+'').length < 2) {
            dateObj.dateList[index] =  '0' + stamp.getDate();
        }
        if (stamp.getDate() != (list[2]*1+i)) {
            dateObj.dateList[index] = '';
        }

        index++;
    }

    return dateObj;
}