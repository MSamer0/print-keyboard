var asciify = require('asciify-image');
 
var options = {
  fit:    'box',
  width:  50,
  height: 50
}
 
asciify('./images/image (1).png', options, function (err, asciified) {
  if (err) throw err;
  console.log(asciified);
});
