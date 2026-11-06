(() => {
  'use strict';
  if (window.__AMORA_PIXEL_BOOTSTRAPPED__) return;
  window.__AMORA_PIXEL_BOOTSTRAPPED__ = true;

  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document, 'script',
  'https://connect.facebook.net/en_US/fbevents.js');

  window.fbq('init', '2805935753235139');
  window.fbq('track', 'PageView');
  window.fbq('track', 'ViewContent', {
    content_ids: ['amora-support-cushion'],
    content_name: 'Amora™',
    content_type: 'product',
    value: 249.90,
    currency: 'MXN'
  });
})();
