(function(p, u, s, h, x) {
    p.pushpad = p.pushpad || function() {
        (p.pushpad.q = p.pushpad.q || []).push(arguments)
    }
    ;
    h = u.getElementsByTagName('head')[0];
    x = u.createElement('script');
    x.async = 1;
    x.src = s;
    h.appendChild(x);
}
)(window, document, 'https://pushpad.xyz/pushpad.js');
pushpad('init', 6483, {
    hostname: "freebitco.in"
  });
