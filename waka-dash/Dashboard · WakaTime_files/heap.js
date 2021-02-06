(window.heap = window.heap || []),
  (heap.load = function(t, e) {
    (window.heap.appid = t), (window.heap.config = e);
    var a = document.createElement('script');
    (a.type = 'text/javascript'),
      (a.async = !0),
      (a.src =
        ('https:' === document.location.protocol ? 'https:' : 'http:') +
        '//cdn.heapanalytics.com/js/heap-' +
        t +
        '.js');
    var n = document.getElementsByTagName('script')[0];
    n.parentNode.insertBefore(a, n);
    for (
      var o = function(t) {
          return function() {
            heap.push([t].concat(Array.prototype.slice.call(arguments, 0)));
          };
        },
        p = [
          'clearEventProperties',
          'identify',
          'setEventProperties',
          'track',
          'unsetEventProperty',
        ],
        c = 0;
      c < p.length;
      c++
    )
      heap[p[c]] = o(p[c]);
  });
heap.load('1557708959');
$(function() {
  if (window.bootstrapped && window.bootstrapped.heap_analytics) {
    heap.identify({
      handle: bootstrapped.heap_analytics.handle,
      email: bootstrapped.heap_analytics.email,
      plan: bootstrapped.heap_analytics.plan,
    });
  }
});
