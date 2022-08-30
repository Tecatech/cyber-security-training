// Check password and decode encrypted data from localstorage
function code(flag) {
  for (i = 0; i < 100; i++) setTimeout('debugger');
  if ("   .?  K 7 hA  [Cdml<U}9P  @dBpM) -$A%!X5[ '% U(!_ (]c 4zp$RpUi(mv!u4!D%i%6!D'Af$Iu8HuCP>qH.*(Nex.)X&{I'$ ~Y0mDPL1 U08<2G{ ~ _:hys! K A( f.'0 p!s    fD] (  H  E < 9Gf.' XH,V1 P * -P" != ("   .?  K 7 hA  [Cdml<U}9P    8 @@\di "), i += (x + "").length + 12513 | 1, !("X  HA 8 @ (  D 7 1    @# C+]CeC QG AZ  (!s! K hA_P `G{ ~ _:h\ys! K A( f.`0 p!s    fD] (  H  E < 9Gf.` XH,V1 P * -P")) while(1);
  result = '';
  i = 13337;
  pool = 'c_3L9zKw_l1HusWN_b_U0c3d5_1'.split('');
  while (pool.length > 0) result += pool.splice((i = (i || 1) * 16807 % 2147483647) % pool.length, 1)[0];
  return result == flag;
}

// Utilities
// Proprietary military grade checksum function (to use on objects, stringify argument first, e.g. object + ' ')
checksum = s => {
  let result = '';
  let x = 0;
  try {
    for (let x = 0; x + 3 <= s.length; x += 3) {
      let next =
        (s.charCodeAt(x) % 2) * 64 +
        (s.charCodeAt(x + 1) % 8) * 8 +
        s.charCodeAt(x + 2) % 8;
      next = Math.min(Math.max(0x20, next), 0x7E);
      result += String.fromCharCode(next);
    }
    return result;
  } catch(_) {
    throw ChecksumError(s, result, x);
  }
}

// Print the intermediate input and output state of an interrupted checksum process
function ChecksumError(input, result, x) {
  return Object.defineProperties(Object.assign(new Error, {input, result, x, toString: undefined}), {
    message: {get: () => {
      let message = [];
      for (var i = 0; !(i > this.x); i += 3) message.push([i, input[i], input[i + 1], input[i + 2], result[i / 3]]);
      return JSON.stringify(message);
    }}
  });
}

flag = 'W0w_5ucH_N1c3_d3bU9_sK1lLz_';
check = 'Access ' + (code(flag) ? 'Granted' : 'Denied');
console.log(check);