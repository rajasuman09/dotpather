export default function dotpath (str: String) {
  var parts = str.split('.')
  var len = parts.length
  type FixMeLater = any;

  return function parse (obj: FixMeLater) {
    var testKey

    for (var i = 0; i < len; ++i) {
      testKey = parts[i]

      if (!obj) return

      obj = obj[testKey]
    }

    return obj
  }
}
