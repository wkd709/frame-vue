var plugin = {};

plugin.install = function (Vue, options) {
  Vue.mixin({
    methods: {
      /**方法功能：
       * 深复制方法，支持字符 复制，引用中的 数据  对象 复制
       * 参数：
       * obj：需要拷贝的数据
       * */
      cloneData: function (obj) {
        var buf;
        if (obj instanceof Array) {
          buf = [];
          var i = obj.length;
          while (i--) {
            buf[i] = this.cloneData(obj[i]);
          }
          return buf;
        } else if (obj instanceof Object) {
          buf = {};
          for (var k in obj) {
            buf[k] = this.cloneData(obj[k]);
          }
          return buf;
        } else {
          return obj;
        }
      },
      /**
       * getHkdistime 获取年份
       */
      getHkdistime() {
        var nowYear = new Date().getFullYear();
        let arrYear = [];
        for (var i = 1976; i <= nowYear; i++) {
          arrYear.push(i);
        }
        return arrYear.reverse();
      },
      /**
       * canvas 走势图划线
       * @param {*} initObj td点
       * @param {*} initCanvas canvas box
       * @param {*} initColor 线条颜色
       */
      initLine(initObj, initCanvas, initColor) {
        var td = $(initObj);
        if ($(initCanvas + '>canvas').length) {
          $(initCanvas + '>canvas').remove();
        }
        for (var i = td.length - 1; i > 0; i--) {
          var tid = $(td[i]);
          var fid = $(td[i - 1]);

          var f_width = fid.outerWidth();
          var f_height = fid.outerHeight();
          var f_offset = fid.offset();

          var f_top = f_offset.top;
          var f_left = f_offset.left;

          var t_offset = tid.offset();
          var t_top = t_offset.top;
          var t_left = t_offset.left;

          var cvs_left = Math.min(f_left, t_left);
          var cvs_top = Math.min(f_top, t_top);

          var cvs = document.createElement("canvas");
          cvs.width = Math.abs(f_left - t_left) < 20 ? 20 : Math.abs(f_left - t_left);
          cvs.height = Math.abs(f_top - t_top);

          cvs.style.position = "absolute";
          cvs.style.visibility = "visible";
          cvs.style.top = cvs_top + parseInt(f_height / 2) + "px";
          cvs.style.left = cvs_left + parseInt(f_width / 2) + "px";

          var cxt = cvs.getContext("2d");
          cxt.save();
          cxt.strokeStyle = initColor;
          cxt.lineWidth = 1;
          cxt.lineJoin = "round";
          cxt.beginPath();
          cxt.moveTo(f_left - cvs_left, f_top - cvs_top);
          cxt.lineTo(t_left - cvs_left, t_top - cvs_top);
          cxt.closePath();
          cxt.stroke();
          cxt.restore();
          $(initCanvas).append(cvs);
        }
      },
      /**
       * arrayMerge 多个数组合并
       * arguments 所有参数
       */
      arrayMerge() {
        return Array.prototype.concat.apply([], arguments);
      },
    }
  });
};

export default plugin;