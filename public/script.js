(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(function(){
    $(".selectAll").change(function() {
        var checked = this.checked;
        var number = this.value;
        var set = '.group-' + number;
        if($(set).prop("checked", !checked)){
          $(set).click();
        };
    });
  })

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NaWNoYWVsRmVyZ2VyL3dvcmtzcGFjZS9wb3N0Z3JhZC9kZW50YWwvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9NaWNoYWVsRmVyZ2VyL3dvcmtzcGFjZS9wb3N0Z3JhZC9kZW50YWwvc3JjL2pzL2Zha2VfMWJjYmNhODkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiQoZnVuY3Rpb24oKXtcbiAgICAkKFwiLnNlbGVjdEFsbFwiKS5jaGFuZ2UoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjaGVja2VkID0gdGhpcy5jaGVja2VkO1xuICAgICAgICB2YXIgbnVtYmVyID0gdGhpcy52YWx1ZTtcbiAgICAgICAgdmFyIHNldCA9ICcuZ3JvdXAtJyArIG51bWJlcjtcbiAgICAgICAgaWYoJChzZXQpLnByb3AoXCJjaGVja2VkXCIsICFjaGVja2VkKSl7XG4gICAgICAgICAgJChzZXQpLmNsaWNrKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gIH0pXG4iXX0=
