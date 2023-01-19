gtag('event', 'conversion', {
  'allow_custom_scripts': true,
  'u2': _satellite.getVar('adobeXDM - industries'),
  'u3': _satellite.getVar('adobeXDM - solutions'),
  'u4': _satellite.getVar('adobeXDM - subSolution'),
  'u5': _satellite.getVar('adobeXDM - resourceName'),
  'u6': _satellite.getVar('adobeXDM - resourceType'),
  'u7': _satellite.getVar('adobeXDM - contentAccess'),
  'u8': _satellite.getVar('adobeXDM - formName'),
  'send_to': 'DC-12729100/telus0/ti-re00+standard'
});

_satellite.logger.log({
  'u1': _satellite.getVar('adobeXDM - pageName'),
  u1: _satellite.getVar('adobeXDM - pageName'),
  u2: _satellite.getVar('adobeXDM - industries'),
  u3: _satellite.getVar('adobeXDM - solutions'),
  u4: _satellite.getVar('adobeXDM - subSolution'),
  u5: _satellite.getVar('adobeXDM - resourceName') ? _satellite.getVar('adobeXDM - resourceName') : _satellite.getVar('adobeXDM - resourceNameWebPageDetails'),
  u6: _satellite.getVar('adobeXDM - resourceType'),
  u7: _satellite.getVar('adobeXDM - contentAccess'),
  u8: _satellite.getVar('adobeXDM - formName'),
})

// gtag('event', 'conversion', {
//     'allow_custom_scripts': true,
//     'u1': '[page name]',
//     'u2': '[industries]',
//     'u3': '[solutions]',
//     'u4': '[sub solutions]',
//     'u5': '[resource name]',
//     'u6': '[resource type]',
//     'u7': '[content access]',
//     'u8': '[form name]',
//   });










// i++ == i = i + 1 
const variable = 10;
for (/* inicializacion */ let i = 1; /* conidicion */ i <= 10; /* aumentador */ i = i + 1) {
  //codigo
  console.log(`${i} x ${variable} = ${i * variable}`);
}


console.log(`1 x 10 = 10`);
console.log(`2 x 10 = 1`);
console.log(`3 x 10 = 1`);
console.log(`1 x 10 = 1`);
console.log(`1 x 10 = 1`);
console.log(`1 x 10 = 1`);
console.log(`1 x 10 = 1`);
console.log(`1 x 10 = 1`);
console.log(`1 x 10 = 1`);
console.log(`1 x 10 = 1`);
console.log(`1 x 10 = 1`);