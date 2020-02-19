
            const arrows = '\u2192\u2197\u2191\u2196\u2190\u2199\u2193\u2198';
            const HEADER = '迷迭迷迭帕里桑: ';
            function encode(str) {
                let result = HEADER;
                str = encodeURIComponent(str);
                while (str.length % 3) {
                    str += '\0'
                }
                for (let i = 0; i < str.length; i += 3) {
                    let a = str.codePointAt(i + 2);
                    let b = str.codePointAt(i + 1);
                    let c = str.codePointAt(i);

                    let s = (a << 16) + (b << 8) + c;
                    for (let j = 0; j < 8; j ++) {
                        result += arrows[s % 8];
                        s >>= 3;
                    }
                }
                return result;
            }

            function decode(str) {
                let result = ''
                if (str.startsWith(HEADER)) {
                    str = str.slice(9);
                    if (str.length % 8) {
                        return '解密失败';
                    }
                    for (let i = 0; i < str.length; i += 8) {
                        let tmp = 0;
                        for (let j = 7; j >= 0; j --) {
                            let p = arrows.indexOf(str[i + j]);
                            if (p == -1) {
                                return '解密失败';
                            }
                            tmp <<= 3;
                            tmp += p;
                        }
                        for (let j = 0; j < 3; j ++) {
                            result += String.fromCodePoint(tmp % 0x100);
                            tmp >>= 8;
                        }
                    }
                    return decodeURIComponent(result.replace('\0', '').replace('\0', ''));
                }
                return '解密失败';
            }

            function onEncodeClick() {
                document.getElementById('input').value = encode(document.getElementById('input').value)
            }

            function onDecodeClick() {
                document.getElementById('input').value = decode(document.getElementById('input').value)
            }