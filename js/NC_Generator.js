//=============================================================================
// NC_Generator.js
//=============================================================================
// 生存的意义便在于寻求超越。
//=============================================================================

let GEN = {}

GEN.processColorCode = function (code) {
    var l = code.split('#');
    return Number("0x" + l[1]);
}

GEN.processColorNum = function (num) {
    return ('#' + num.toString(16));
}

//=============================================================================
// 初始化
//=============================================================================
let Text = PIXI.Text;
let Graphics = PIXI.Graphics;
let Container = PIXI.Container;
const loader = new PIXI.Loader();

GEN.loadEverything = function () {
    this.loadPaintLayer();
    this.loadUI();
}

//=============================================================================
// 数据设置
//=============================================================================

GEN.emptyPart = {
    varPath: "assets/Variation/Empty.png",
    partSet: [
        {
            target: 0,
            path: "assets/TV/Empty.png"
        }
    ]
}

GEN.maleSet = {
    "前发": {
        "1": {
            varPath: "assets/Variation/Male/FrontHair/icon_FrontHair_p01.png",
            partSet: [
                {
                    target: 18,
                    path: "assets/TV/Male/FrontHair/TV_FrontHair1_p01.png"
                },
                {
                    target: 8,
                    path:"assets/TV/Male/FrontHair/TV_FrontHair2_p01.png"
                }
            ]
        },
        "2": {
            varPath: "assets/Variation/Male/FrontHair/icon_FrontHair_p02.png",
            partSet: [
                {
                    target: 18,
                    path: "assets/TV/Male/FrontHair/TV_FrontHair1_p02.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Male/FrontHair/TV_FrontHair2_p02.png"
                }
            ]
        },
        "3": {
            varPath: "assets/Variation/Male/FrontHair/icon_FrontHair_p03.png",
            partSet: [
                {
                    target: 18,
                    path: "assets/TV/Male/FrontHair/TV_FrontHair1_p03.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Male/FrontHair/TV_FrontHair2_p03.png"
                }
            ]
        },
        "4": {
            varPath: "assets/Variation/Male/FrontHair/icon_FrontHair_p04.png",
            partSet: [
                {
                    target: 18,
                    path: "assets/TV/Male/FrontHair/TV_FrontHair1_p04.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Male/FrontHair/TV_FrontHair2_p04.png"
                }
            ]
        },
        "5": {
            varPath: "assets/Variation/Male/FrontHair/icon_FrontHair_p05.png",
            partSet: [
                {
                    target: 18,
                    path: "assets/TV/Male/FrontHair/TV_FrontHair1_p05.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Male/FrontHair/TV_FrontHair2_p05.png"
                }
            ]
        },
        "6": {
            varPath: "assets/Variation/Male/FrontHair/icon_FrontHair_p06.png",
            partSet: [
                {
                    target: 18,
                    path: "assets/TV/Male/FrontHair/TV_FrontHair1_p06.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Male/FrontHair/TV_FrontHair2_p06.png"
                }
            ]
        },
        "7": {
            varPath: "assets/Variation/Male/FrontHair/icon_FrontHair_p07.png",
            partSet: [
                {
                    target: 18,
                    path: "assets/TV/Male/FrontHair/TV_FrontHair1_p07.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Male/FrontHair/TV_FrontHair2_p07.png"
                }
            ]
        },
        "8": {
            varPath: "assets/Variation/Male/FrontHair/icon_FrontHair_p08.png",
            partSet: [
                {
                    target: 18,
                    path: "assets/TV/Male/FrontHair/TV_FrontHair1_p08.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Male/FrontHair/TV_FrontHair2_p08.png"
                }
            ]
        },
        "9": {
            varPath: "assets/Variation/Male/FrontHair/icon_FrontHair_p09.png",
            partSet: [
                {
                    target: 18,
                    path: "assets/TV/Male/FrontHair/TV_FrontHair1_p09.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Male/FrontHair/TV_FrontHair2_p09.png"
                }
            ]
        },
        "10": {
            varPath: "assets/Variation/Male/FrontHair/icon_FrontHair_p10.png",
            partSet: [
                {
                    target: 18,
                    path: "assets/TV/Male/FrontHair/TV_FrontHair1_p10.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Male/FrontHair/TV_FrontHair2_p10.png"
                }
            ]
        },
        "11": {
            varPath: "assets/Variation/Male/FrontHair/icon_FrontHair_p11.png",
            partSet: [
                {
                    target: 18,
                    path: "assets/TV/Male/FrontHair/TV_FrontHair1_p11.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Male/FrontHair/TV_FrontHair2_p11.png"
                }
            ]
        },
        "12": {
            varPath: "assets/Variation/Male/FrontHair/icon_FrontHair_p12.png",
            partSet: [
                {
                    target: 18,
                    path: "assets/TV/Male/FrontHair/TV_FrontHair1_p12.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Male/FrontHair/TV_FrontHair2_p12.png"
                }
            ]
        },
        "13": {
            varPath: "assets/Variation/Male/FrontHair/icon_FrontHair_p13.png",
            partSet: [
                {
                    target: 18,
                    path: "assets/TV/Male/FrontHair/TV_FrontHair1_p13.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Male/FrontHair/TV_FrontHair2_p13.png"
                }
            ]
        },
        "15": {
            varPath: "assets/Variation/Male/FrontHair/icon_FrontHair_p15.png",
            partSet: [
                {
                    target: 18,
                    path: "assets/TV/Male/FrontHair/TV_FrontHair1_p15.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Male/FrontHair/TV_FrontHair2_p15.png"
                }
            ]
        },
        "15": {
            varPath: "assets/Variation/Male/FrontHair/icon_FrontHair_p15.png",
            partSet: [
                {
                    target: 18,
                    path: "assets/TV/Male/FrontHair/TV_FrontHair1_p15.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Male/FrontHair/TV_FrontHair2_p15.png"
                }
            ]
        },
        "16": {
            varPath: "assets/Variation/Male/FrontHair/icon_FrontHair_p16.png",
            partSet: [
                {
                    target: 18,
                    path: "assets/TV/Male/FrontHair/TV_FrontHair1_p16.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Male/FrontHair/TV_FrontHair2_p16.png"
                }
            ]
        },
        "17": {
            varPath: "assets/Variation/Male/FrontHair/icon_FrontHair_p17.png",
            partSet: [
                {
                    target: 18,
                    path: "assets/TV/Male/FrontHair/TV_FrontHair1_p17.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Male/FrontHair/TV_FrontHair2_p17.png"
                }
            ]
        },
    },
    "后发": {
        "1": {
            varPath: "assets/Variation/Male/RearHair/icon_RearHair_p01.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Male/RearHair/TV_RearHair1_p01.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Male/RearHair/TV_RearHair2_p01.png"
                }
            ]
        },
        "2": {
            varPath: "assets/Variation/Male/RearHair/icon_RearHair_p02.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Male/RearHair/TV_RearHair1_p02.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Male/RearHair/TV_RearHair2_p02.png"
                }
            ]
        },
        "3": {
            varPath: "assets/Variation/Male/RearHair/icon_RearHair_p03.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Male/RearHair/TV_RearHair1_p03.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Male/RearHair/TV_RearHair2_p03.png"
                }
            ]
        },
        "4": {
            varPath: "assets/Variation/Male/RearHair/icon_RearHair_p04.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Male/RearHair/TV_RearHair1_p04.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Male/RearHair/TV_RearHair2_p04.png"
                }
            ]
        },
        "5": {
            varPath: "assets/Variation/Male/RearHair/icon_RearHair_p05.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Male/RearHair/TV_RearHair1_p05.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Male/RearHair/TV_RearHair2_p05.png"
                }
            ]
        },
        "6": {
            varPath: "assets/Variation/Male/RearHair/icon_RearHair_p06.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Male/RearHair/TV_RearHair1_p06.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Male/RearHair/TV_RearHair2_p06.png"
                }
            ]
        },
        "7": {
            varPath: "assets/Variation/Male/RearHair/icon_RearHair_p07.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Male/RearHair/TV_RearHair1_p07.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Male/RearHair/TV_RearHair2_p07.png"
                }
            ]
        },
        "8": {
            varPath: "assets/Variation/Male/RearHair/icon_RearHair_p08.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Male/RearHair/TV_RearHair1_p08.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Male/RearHair/TV_RearHair2_p08.png"
                }
            ]
        },
        "9": {
            varPath: "assets/Variation/Male/RearHair/icon_RearHair_p09.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Male/RearHair/TV_RearHair1_p09.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Male/RearHair/TV_RearHair2_p09.png"
                }
            ]
        },
        "10": {
            varPath: "assets/Variation/Male/RearHair/icon_RearHair_p10.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Male/RearHair/TV_RearHair1_p10.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Male/RearHair/TV_RearHair2_p10.png"
                }
            ]
        },
        "11": {
            varPath: "assets/Variation/Male/RearHair/icon_RearHair_p11.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Male/RearHair/TV_RearHair1_p11.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Male/RearHair/TV_RearHair2_p11.png"
                }
            ]
        },
        "12": {
            varPath: "assets/Variation/Male/RearHair/icon_RearHair_p12.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Male/RearHair/TV_RearHair1_p12.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Male/RearHair/TV_RearHair2_p12.png"
                }
            ]
        },
        "13": {
            varPath: "assets/Variation/Male/RearHair/icon_RearHair_p13.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Male/RearHair/TV_RearHair1_p13.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Male/RearHair/TV_RearHair2_p13.png"
                }
            ]
        },
        "14": {
            varPath: "assets/Variation/Male/RearHair/icon_RearHair_p14.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Male/RearHair/TV_RearHair1_p14.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Male/RearHair/TV_RearHair2_p14.png"
                }
            ]
        },
        "15": {
            varPath: "assets/Variation/Male/RearHair/icon_RearHair_p15.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Male/RearHair/TV_RearHair1_p15.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Male/RearHair/TV_RearHair2_p15.png"
                }
            ]
        },
        "16": {
            varPath: "assets/Variation/Male/RearHair/icon_RearHair_p16.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Male/RearHair/TV_RearHair1_p16.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Male/RearHair/TV_RearHair2_p16.png"
                }
            ]
        },
        "17": {
            varPath: "assets/Variation/Male/RearHair/icon_RearHair_p17.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Male/RearHair/TV_RearHair1_p17.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Male/RearHair/TV_RearHair2_p17.png"
                }
            ]
        },
        "18": {
            varPath: "assets/Variation/Male/RearHair/icon_RearHair_p18.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Male/RearHair/TV_RearHair1_p18.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Male/RearHair/TV_RearHair2_p18.png"
                }
            ]
        },
    },
    "胡子": {
        "1": {
            varPath: "assets/Variation/Male/Beard/icon_Beard_p01.png",
            partSet: [
                {
                    target: 14,
                    path: "assets/TV/Male/Beard/TV_Beard1_p01.png"
                },
                {
                    target: 9,
                    path: "assets/TV/Male/Beard/TV_Beard2_p01.png"
                }
            ]
        },
        "2": {
            varPath: "assets/Variation/Male/Beard/icon_Beard_p02.png",
            partSet: [
                {
                    target: 14,
                    path: "assets/TV/Male/Beard/TV_Beard1_p02.png"
                },
                {
                    target: 9,
                    path: "assets/TV/Male/Beard/TV_Beard2_p02.png"
                }
            ]
        },
        "3": {
            varPath: "assets/Variation/Male/Beard/icon_Beard_p03.png",
            partSet: [
                {
                    target: 14,
                    path: "assets/TV/Male/Beard/TV_Beard1_p03.png"
                },
                {
                    target: 9,
                    path: "assets/TV/Male/Beard/TV_Beard2_p03.png"
                }
            ]
        },
        "4": {
            varPath: "assets/Variation/Male/Beard/icon_Beard_p04.png",
            partSet: [
                {
                    target: 14,
                    path: "assets/TV/Male/Beard/TV_Beard1_p04.png"
                },
                {
                    target: 9,
                    path: "assets/TV/Male/Beard/TV_Beard2_p04.png"
                }
            ]
        },
        "5": {
            varPath: "assets/Variation/Male/Beard/icon_Beard_p05.png",
            partSet: [
                {
                    target: 14,
                    path: "assets/TV/Male/Beard/TV_Beard1_p05.png"
                },
                {
                    target: 9,
                    path: "assets/TV/Male/Beard/TV_Beard2_p05.png"
                }
            ]
        },
        "6": {
            varPath: "assets/Variation/Male/Beard/icon_Beard_p06.png",
            partSet: [
                {
                    target: 14,
                    path: "assets/TV/Male/Beard/TV_Beard1_p06.png"
                },
                {
                    target: 9,
                    path: "assets/TV/Male/Beard/TV_Beard2_p06.png"
                }
            ]
        },
        "7": {
            varPath: "assets/Variation/Male/Beard/icon_Beard_p07.png",
            partSet: [
                {
                    target: 14,
                    path: "assets/TV/Male/Beard/TV_Beard1_p07.png"
                },
                {
                    target: 9,
                    path: "assets/TV/Male/Beard/TV_Beard2_p07.png"
                }
            ]
        },
        "8": {
            varPath: "assets/Variation/Male/Beard/icon_Beard_p08.png",
            partSet: [
                {
                    target: 14,
                    path: "assets/TV/Male/Beard/TV_Beard1_p08.png"
                },
                {
                    target: 9,
                    path: "assets/TV/Male/Beard/TV_Beard2_p08.png"
                }
            ]
        },
        "9": {
            varPath: "assets/Variation/Male/Beard/icon_Beard_p09.png",
            partSet: [
                {
                    target: 14,
                    path: "assets/TV/Male/Beard/TV_Beard1_p09.png"
                },
                {
                    target: 9,
                    path: "assets/TV/Male/Beard/TV_Beard2_p09.png"
                }
            ]
        },
        "10": {
            varPath: "assets/Variation/Male/Beard/icon_Beard_p10.png",
            partSet: [
                {
                    target: 14,
                    path: "assets/TV/Male/Beard/TV_Beard1_p10.png"
                },
                {
                    target: 9,
                    path: "assets/TV/Male/Beard/TV_Beard2_p10.png"
                }
            ]
        },
        "11": {
            varPath: "assets/Variation/Male/Beard/icon_Beard_p11.png",
            partSet: [
                {
                    target: 14,
                    path: "assets/TV/Male/Beard/TV_Beard1_p11.png"
                },
                {
                    target: 9,
                    path: "assets/TV/Male/Beard/TV_Beard2_p11.png"
                }
            ]
        },
    },
    "耳朵": {
        "1": {
            varPath: "assets/Variation/Male/Ears/icon_Ears_p01.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Male/Ears/TV_Ears_p01.png"
                }
            ]
        },
    },
    "面部特征": {
        "1": {
            varPath: "assets/Variation/Male/FacialMark/icon_FacialMark_p01.png",
            partSet: [
                {
                    target: 11,
                    path: "assets/TV/Male/FacialMark/TV_FacialMark_p01.png"
                }
            ]
        },
        "2": {
            varPath: "assets/Variation/Male/FacialMark/icon_FacialMark_p02.png",
            partSet: [
                {
                    target: 11,
                    path: "assets/TV/Male/FacialMark/TV_FacialMark_p02.png"
                }
            ]
        },
        "3": {
            varPath: "assets/Variation/Male/FacialMark/icon_FacialMark_p03.png",
            partSet: [
                {
                    target: 11,
                    path: "assets/TV/Male/FacialMark/TV_FacialMark_p03.png"
                }
            ]
        },
        "4": {
            varPath: "assets/Variation/Male/FacialMark/icon_FacialMark_p04.png",
            partSet: [
                {
                    target: 11,
                    path: "assets/TV/Male/FacialMark/TV_FacialMark_p04.png"
                }
            ]
        },
        "5": {
            varPath: "assets/Variation/Male/FacialMark/icon_FacialMark_p05.png",
            partSet: [
                {
                    target: 11,
                    path: "assets/TV/Male/FacialMark/TV_FacialMark_p05.png"
                }
            ]
        },
        "6": {
            varPath: "assets/Variation/Male/FacialMark/icon_FacialMark_p06.png",
            partSet: [
                {
                    target: 11,
                    path: "assets/TV/Male/FacialMark/TV_FacialMark_p06.png"
                }
            ]
        },
        "7": {
            varPath: "assets/Variation/Male/FacialMark/icon_FacialMark_p07.png",
            partSet: [
                {
                    target: 11,
                    path: "assets/TV/Male/FacialMark/TV_FacialMark_p07.png"
                }
            ]
        },
        "8": {
            varPath: "assets/Variation/Male/FacialMark/icon_FacialMark_p08.png",
            partSet: [
                {
                    target: 11,
                    path: "assets/TV/Male/FacialMark/TV_FacialMark_p08.png"
                }
            ]
        },
    },
    "兽耳": {
        "1": {
            varPath: "assets/Variation/Male/BeastEars/icon_BeastEars_p01.png",
            partSet: [
                {
                    target: 20,
                    path: "assets/TV/Male/BeastEars/TV_BeastEars_p01.png"
                }
            ]
        },
        "2": {
            varPath: "assets/Variation/Male/BeastEars/icon_BeastEars_p02.png",
            partSet: [
                {
                    target: 20,
                    path: "assets/TV/Male/BeastEars/TV_BeastEars_p02.png"
                }
            ]
        },
        "3": {
            varPath: "assets/Variation/Male/BeastEars/icon_BeastEars_p03.png",
            partSet: [
                {
                    target: 20,
                    path: "assets/TV/Male/BeastEars/TV_BeastEars_p03.png"
                }
            ]
        },
        "4": {
            varPath: "assets/Variation/Male/BeastEars/icon_BeastEars_p04.png",
            partSet: [
                {
                    target: 20,
                    path: "assets/TV/Male/BeastEars/TV_BeastEars_p04.png"
                }
            ]
        },
        "5": {
            varPath: "assets/Variation/Male/BeastEars/icon_BeastEars_p05.png",
            partSet: [
                {
                    target: 20,
                    path: "assets/TV/Male/BeastEars/TV_BeastEars_p05.png"
                }
            ]
        },
        "6": {
            varPath: "assets/Variation/Male/BeastEars/icon_BeastEars_p06.png",
            partSet: [
                {
                    target: 20,
                    path: "assets/TV/Male/BeastEars/TV_BeastEars_p06.png"
                }
            ]
        },
    },
    "尾巴": {
        "1": {
            varPath: "assets/Variation/Male/Tail/icon_Tail_p01.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Male/Tail/TV_Tail1_p01.png"
                },
                {
                    target: 6,
                    path: "assets/TV/Male/Tail/TV_Tail2_p01.png"
                }
            ]
        },
        "2": {
            varPath: "assets/Variation/Male/Tail/icon_Tail_p02.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Male/Tail/TV_Tail1_p02.png"
                },
                {
                    target: 6,
                    path: "assets/TV/Male/Tail/TV_Tail2_p02.png"
                }
            ]
        },
        "3": {
            varPath: "assets/Variation/Male/Tail/icon_Tail_p03.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Male/Tail/TV_Tail1_p03.png"
                },
                {
                    target: 6,
                    path: "assets/TV/Male/Tail/TV_Tail2_p03.png"
                }
            ]
        },
        "4": {
            varPath: "assets/Variation/Male/Tail/icon_Tail_p04.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Male/Tail/TV_Tail1_p04.png"
                },
                {
                    target: 6,
                    path: "assets/TV/Male/Tail/TV_Tail2_p04.png"
                }
            ]
        },
        "5": {
            varPath: "assets/Variation/Male/Tail/icon_Tail_p05.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Male/Tail/TV_Tail1_p05.png"
                },
                {
                    target: 6,
                    path: "assets/TV/Male/Tail/TV_Tail2_p05.png"
                }
            ]
        },
        "6": {
            varPath: "assets/Variation/Male/Tail/icon_Tail_p06.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Male/Tail/TV_Tail1_p06.png"
                },
                {
                    target: 6,
                    path: "assets/TV/Male/Tail/TV_Tail2_p06.png"
                }
            ]
        },
    },
    "翅膀": {
        "1": {
            varPath: "assets/Variation/Male/Wing/icon_Wing_p01.png",
            partSet: [
                {
                    target: 15,
                    path: "assets/TV/Male/Wing/TV_Wing1_p01.png"
                },
                {
                    target: 7,
                    path: "assets/TV/Male/Wing/TV_Wing2_p01.png"
                }
            ]
        },
        "2": {
            varPath: "assets/Variation/Male/Wing/icon_Wing_p02.png",
            partSet: [
                {
                    target: 15,
                    path: "assets/TV/Male/Wing/TV_Wing1_p02.png"
                },
                {
                    target: 7,
                    path: "assets/TV/Male/Wing/TV_Wing2_p02.png"
                }
            ]
        },
        "3": {
            varPath: "assets/Variation/Male/Wing/icon_Wing_p03.png",
            partSet: [
                {
                    target: 15,
                    path: "assets/TV/Male/Wing/TV_Wing1_p03.png"
                },
                {
                    target: 7,
                    path: "assets/TV/Male/Wing/TV_Wing2_p03.png"
                }
            ]
        },
        "4": {
            varPath: "assets/Variation/Male/Wing/icon_Wing_p04.png",
            partSet: [
                {
                    target: 15,
                    path: "assets/TV/Male/Wing/TV_Wing1_p04.png"
                },
                {
                    target: 7,
                    path: "assets/TV/Male/Wing/TV_Wing2_p04.png"
                }
            ]
        },
        "5": {
            varPath: "assets/Variation/Male/Wing/icon_Wing_p05.png",
            partSet: [
                {
                    target: 15,
                    path: "assets/TV/Male/Wing/TV_Wing1_p05.png"
                },
                {
                    target: 7,
                    path: "assets/TV/Male/Wing/TV_Wing2_p05.png"
                }
            ]
        },
    },
    "衣服": {
        "1": {
            varPath: "assets/Variation/Male/Clothing/icon_Clothing_p01.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Male/Clothing/TV_Clothing1_p01.png"
                },
                {
                    target: 13,
                    path: "assets/TV/Male/Clothing/TV_Clothing2_p01.png"
                }
            ]
        },
        "2": {
            varPath: "assets/Variation/Male/Clothing/icon_Clothing_p02.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Male/Clothing/TV_Clothing1_p02.png"
                },
                {
                    target: 13,
                    path: "assets/TV/Male/Clothing/TV_Clothing2_p02.png"
                }
            ]
        },
        "3": {
            varPath: "assets/Variation/Male/Clothing/icon_Clothing_p03.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Male/Clothing/TV_Clothing1_p03.png"
                },
                {
                    target: 13,
                    path: "assets/TV/Male/Clothing/TV_Clothing2_p03.png"
                }
            ]
        },
        "4": {
            varPath: "assets/Variation/Male/Clothing/icon_Clothing_p04.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Male/Clothing/TV_Clothing1_p04.png"
                },
                {
                    target: 13,
                    path: "assets/TV/Male/Clothing/TV_Clothing2_p04.png"
                }
            ]
        },
        "5": {
            varPath: "assets/Variation/Male/Clothing/icon_Clothing_p05.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Male/Clothing/TV_Clothing1_p05.png"
                },
                {
                    target: 13,
                    path: "assets/TV/Male/Clothing/TV_Clothing2_p05.png"
                }
            ]
        },
        "6": {
            varPath: "assets/Variation/Male/Clothing/icon_Clothing_p06.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Male/Clothing/TV_Clothing1_p06.png"
                },
                {
                    target: 13,
                    path: "assets/TV/Male/Clothing/TV_Clothing2_p06.png"
                }
            ]
        },
        "7": {
            varPath: "assets/Variation/Male/Clothing/icon_Clothing_p07.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Male/Clothing/TV_Clothing1_p07.png"
                },
                {
                    target: 13,
                    path: "assets/TV/Male/Clothing/TV_Clothing2_p07.png"
                }
            ]
        },
        "8": {
            varPath: "assets/Variation/Male/Clothing/icon_Clothing_p08.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Male/Clothing/TV_Clothing1_p08.png"
                },
                {
                    target: 13,
                    path: "assets/TV/Male/Clothing/TV_Clothing2_p08.png"
                }
            ]
        },
        "9": {
            varPath: "assets/Variation/Male/Clothing/icon_Clothing_p09.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Male/Clothing/TV_Clothing1_p09.png"
                },
                {
                    target: 13,
                    path: "assets/TV/Male/Clothing/TV_Clothing2_p09.png"
                }
            ]
        },
        "10": {
            varPath: "assets/Variation/Male/Clothing/icon_Clothing_p10.png",
            partSet: [
                {
                    target: 13,
                    path: "assets/TV/Male/Clothing/TV_Clothing2_p10.png"
                }
            ]
        },
        "11": {
            varPath: "assets/Variation/Male/Clothing/icon_Clothing_p11.png",
            partSet: [
                {
                    target: 13,
                    path: "assets/TV/Male/Clothing/TV_Clothing2_p11.png"
                }
            ]
        },
        "12": {
            varPath: "assets/Variation/Male/Clothing/icon_Clothing_p12.png",
            partSet: [
                {
                    target: 13,
                    path: "assets/TV/Male/Clothing/TV_Clothing2_p12.png"
                }
            ]
        },
        "13": {
            varPath: "assets/Variation/Male/Clothing/icon_Clothing_p13.png",
            partSet: [
                {
                    target: 13,
                    path: "assets/TV/Male/Clothing/TV_Clothing2_p13.png"
                }
            ]
        },
        "14": {
            varPath: "assets/Variation/Male/Clothing/icon_Clothing_p14.png",
            partSet: [
                {
                    target: 13,
                    path: "assets/TV/Male/Clothing/TV_Clothing2_p14.png"
                }
            ]
        },
        "15": {
            varPath: "assets/Variation/Male/Clothing/icon_Clothing_p15.png",
            partSet: [
                {
                    target: 13,
                    path: "assets/TV/Male/Clothing/TV_Clothing2_p15.png"
                }
            ]
        },
        "16": {
            varPath: "assets/Variation/Male/Clothing/icon_Clothing_p16.png",
            partSet: [
                {
                    target: 13,
                    path: "assets/TV/Male/Clothing/TV_Clothing2_p16.png"
                }
            ]
        },
        "17": {
            varPath: "assets/Variation/Male/Clothing/icon_Clothing_p17.png",
            partSet: [
                {
                    target: 13,
                    path: "assets/TV/Male/Clothing/TV_Clothing2_p17.png"
                }
            ]
        },
        "18": {
            varPath: "assets/Variation/Male/Clothing/icon_Clothing_p18.png",
            partSet: [
                {
                    target: 13,
                    path: "assets/TV/Male/Clothing/TV_Clothing2_p18.png"
                }
            ]
        },
        "19": {
            varPath: "assets/Variation/Male/Clothing/icon_Clothing_p19.png",
            partSet: [
                {
                    target: 13,
                    path: "assets/TV/Male/Clothing/TV_Clothing2_p19.png"
                }
            ]
        },
        "20": {
            varPath: "assets/Variation/Male/Clothing/icon_Clothing_p20.png",
            partSet: [
                {
                    target: 13,
                    path: "assets/TV/Male/Clothing/TV_Clothing2_p20.png"
                }
            ]
        },
        "21": {
            varPath: "assets/Variation/Male/Clothing/icon_Clothing_p21.png",
            partSet: [
                {
                    target: 13,
                    path: "assets/TV/Male/Clothing/TV_Clothing2_p21.png"
                }
            ]
        },
        "22": {
            varPath: "assets/Variation/Male/Clothing/icon_Clothing_p22.png",
            partSet: [
                {
                    target: 13,
                    path: "assets/TV/Male/Clothing/TV_Clothing2_p22.png"
                }
            ]
        },
        "23": {
            varPath: "assets/Variation/Male/Clothing/icon_Clothing_p23.png",
            partSet: [
                {
                    target: 13,
                    path: "assets/TV/Male/Clothing/TV_Clothing2_p23.png"
                }
            ]
        },
    },
    "斗篷": {
        "1": {
            varPath: "assets/Variation/Male/Cloak/icon_Cloak_p01.png",
            partSet: [
                {
                    target: 14,
                    path: "assets/TV/Male/Cloak/TV_Cloak1_p01.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Male/Cloak/TV_Cloak2_p01.png"
                }
            ]
        },
        "2": {
            varPath: "assets/Variation/Male/Cloak/icon_Cloak_p02.png",
            partSet: [
                {
                    target: 14,
                    path: "assets/TV/Male/Cloak/TV_Cloak1_p02.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Male/Cloak/TV_Cloak2_p02.png"
                }
            ]
        },
        "3": {
            varPath: "assets/Variation/Male/Cloak/icon_Cloak_p03.png",
            partSet: [
                {
                    target: 14,
                    path: "assets/TV/Male/Cloak/TV_Cloak1_p03.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Male/Cloak/TV_Cloak2_p03.png"
                }
            ]
        },
        "4": {
            varPath: "assets/Variation/Male/Cloak/icon_Cloak_p04.png",
            partSet: [
                {
                    target: 14,
                    path: "assets/TV/Male/Cloak/TV_Cloak1_p04.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Male/Cloak/TV_Cloak2_p04.png"
                }
            ]
        },
    },
    "配件1": {
        "1": {
            varPath: "assets/Variation/Male/AccA/icon_AccA_p01.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Male/AccA/TV_AccA_p01.png"
                }
            ]
        },
        "2": {
            varPath: "assets/Variation/Male/AccA/icon_AccA_p02.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Male/AccA/TV_AccA_p02.png"
                }
            ]
        },
        "3": {
            varPath: "assets/Variation/Male/AccA/icon_AccA_p03.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Male/AccA/TV_AccA_p03.png"
                }
            ]
        },
        "4": {
            varPath: "assets/Variation/Male/AccA/icon_AccA_p04.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Male/AccA/TV_AccA_p04.png"
                }
            ]
        },
        "5": {
            varPath: "assets/Variation/Male/AccA/icon_AccA_p05.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Male/AccA/TV_AccA_p05.png"
                }
            ]
        },
        "6": {
            varPath: "assets/Variation/Male/AccA/icon_AccA_p06.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Male/AccA/TV_AccA_p06.png"
                }
            ]
        },
        "7": {
            varPath: "assets/Variation/Male/AccA/icon_AccA_p07.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Male/AccA/TV_AccA_p07.png"
                }
            ]
        },
        "8": {
            varPath: "assets/Variation/Male/AccA/icon_AccA_p08.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Male/AccA/TV_AccA_p08.png"
                }
            ]
        },
    },
    "配件2": {
        "1": {
            varPath: "assets/Variation/Male/AccB/icon_AccB_p01.png",
            partSet: [
                {
                    target: 19,
                    path: "assets/TV/Male/AccB/TV_AccB_p01.png"
                }
            ]
        },
        "2": {
            varPath: "assets/Variation/Male/AccB/icon_AccB_p02.png",
            partSet: [
                {
                    target: 19,
                    path: "assets/TV/Male/AccB/TV_AccB_p02.png"
                }
            ]
        },
        "3": {
            varPath: "assets/Variation/Male/AccB/icon_AccB_p03.png",
            partSet: [
                {
                    target: 19,
                    path: "assets/TV/Male/AccB/TV_AccB_p03.png"
                }
            ]
        },
        "4": {
            varPath: "assets/Variation/Male/AccB/icon_AccB_p04.png",
            partSet: [
                {
                    target: 19,
                    path: "assets/TV/Male/AccB/TV_AccB_p04.png"
                }
            ]
        },
        "5": {
            varPath: "assets/Variation/Male/AccB/icon_AccB_p05.png",
            partSet: [
                {
                    target: 19,
                    path: "assets/TV/Male/AccB/TV_AccB_p05.png"
                }
            ]
        },
        "6": {
            varPath: "assets/Variation/Male/AccB/icon_AccB_p06.png",
            partSet: [
                {
                    target: 19,
                    path: "assets/TV/Male/AccB/TV_AccB_p06.png"
                }
            ]
        },
        "7": {
            varPath: "assets/Variation/Male/AccB/icon_AccB_p07.png",
            partSet: [
                {
                    target: 19,
                    path: "assets/TV/Male/AccB/TV_AccB_p07.png"
                }
            ]
        },
        "8": {
            varPath: "assets/Variation/Male/AccB/icon_AccB_p08.png",
            partSet: [
                {
                    target: 19,
                    path: "assets/TV/Male/AccB/TV_AccB_p08.png"
                }
            ]
        },
    },
    "眼镜": {
        "1": {
            varPath: "assets/Variation/Male/Glasses/icon_Glasses_p01.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Male/Glasses/TV_Glasses_p01.png"
                }
            ]
        },
        "2": {
            varPath: "assets/Variation/Male/Glasses/icon_Glasses_p02.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Male/Glasses/TV_Glasses_p02.png"
                }
            ]
        },
        "3": {
            varPath: "assets/Variation/Male/Glasses/icon_Glasses_p03.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Male/Glasses/TV_Glasses_p03.png"
                }
            ]
        },
        "4": {
            varPath: "assets/Variation/Male/Glasses/icon_Glasses_p04.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Male/Glasses/TV_Glasses_p04.png"
                }
            ]
        },
        "5": {
            varPath: "assets/Variation/Male/Glasses/icon_Glasses_p05.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Male/Glasses/TV_Glasses_p05.png"
                }
            ]
        },
    }
}

GEN.femaleSet = {
    "前发": {
        "1": {
            varPath: "assets/Variation/Female/FrontHair/icon_FrontHair_p01.png",
            partSet: [
                {
                    target: 18,
                    path: "assets/TV/Female/FrontHair/TV_FrontHair1_p01.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Female/FrontHair/TV_FrontHair2_p01.png"
                }
            ]
        },
        "2": {
            varPath: "assets/Variation/Female/FrontHair/icon_FrontHair_p02.png",
            partSet: [
                {
                    target: 18,
                    path: "assets/TV/Female/FrontHair/TV_FrontHair1_p02.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Female/FrontHair/TV_FrontHair2_p02.png"
                }
            ]
        },
        "3": {
            varPath: "assets/Variation/Female/FrontHair/icon_FrontHair_p03.png",
            partSet: [
                {
                    target: 18,
                    path: "assets/TV/Female/FrontHair/TV_FrontHair1_p03.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Female/FrontHair/TV_FrontHair2_p03.png"
                }
            ]
        },
        "4": {
            varPath: "assets/Variation/Female/FrontHair/icon_FrontHair_p04.png",
            partSet: [
                {
                    target: 18,
                    path: "assets/TV/Female/FrontHair/TV_FrontHair1_p04.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Female/FrontHair/TV_FrontHair2_p04.png"
                }
            ]
        },
        "5": {
            varPath: "assets/Variation/Female/FrontHair/icon_FrontHair_p05.png",
            partSet: [
                {
                    target: 18,
                    path: "assets/TV/Female/FrontHair/TV_FrontHair1_p05.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Female/FrontHair/TV_FrontHair2_p05.png"
                }
            ]
        },
        "6": {
            varPath: "assets/Variation/Female/FrontHair/icon_FrontHair_p06.png",
            partSet: [
                {
                    target: 18,
                    path: "assets/TV/Female/FrontHair/TV_FrontHair1_p06.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Female/FrontHair/TV_FrontHair2_p06.png"
                }
            ]
        },
        "7": {
            varPath: "assets/Variation/Female/FrontHair/icon_FrontHair_p07.png",
            partSet: [
                {
                    target: 18,
                    path: "assets/TV/Female/FrontHair/TV_FrontHair1_p07.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Female/FrontHair/TV_FrontHair2_p07.png"
                }
            ]
        },
        "8": {
            varPath: "assets/Variation/Female/FrontHair/icon_FrontHair_p08.png",
            partSet: [
                {
                    target: 18,
                    path: "assets/TV/Female/FrontHair/TV_FrontHair1_p08.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Female/FrontHair/TV_FrontHair2_p08.png"
                }
            ]
        },
        "9": {
            varPath: "assets/Variation/Female/FrontHair/icon_FrontHair_p09.png",
            partSet: [
                {
                    target: 18,
                    path: "assets/TV/Female/FrontHair/TV_FrontHair1_p09.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Female/FrontHair/TV_FrontHair2_p09.png"
                }
            ]
        },
        "10": {
            varPath: "assets/Variation/Female/FrontHair/icon_FrontHair_p10.png",
            partSet: [
                {
                    target: 18,
                    path: "assets/TV/Female/FrontHair/TV_FrontHair1_p10.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Female/FrontHair/TV_FrontHair2_p10.png"
                }
            ]
        },
        "11": {
            varPath: "assets/Variation/Female/FrontHair/icon_FrontHair_p11.png",
            partSet: [
                {
                    target: 18,
                    path: "assets/TV/Female/FrontHair/TV_FrontHair1_p11.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Female/FrontHair/TV_FrontHair2_p11.png"
                }
            ]
        },
        "12": {
            varPath: "assets/Variation/Female/FrontHair/icon_FrontHair_p12.png",
            partSet: [
                {
                    target: 18,
                    path: "assets/TV/Female/FrontHair/TV_FrontHair1_p12.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Female/FrontHair/TV_FrontHair2_p12.png"
                }
            ]
        },
        "13": {
            varPath: "assets/Variation/Female/FrontHair/icon_FrontHair_p13.png",
            partSet: [
                {
                    target: 18,
                    path: "assets/TV/Female/FrontHair/TV_FrontHair1_p13.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Female/FrontHair/TV_FrontHair2_p13.png"
                }
            ]
        },
        "15": {
            varPath: "assets/Variation/Female/FrontHair/icon_FrontHair_p15.png",
            partSet: [
                {
                    target: 18,
                    path: "assets/TV/Female/FrontHair/TV_FrontHair1_p15.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Female/FrontHair/TV_FrontHair2_p15.png"
                }
            ]
        },
        "15": {
            varPath: "assets/Variation/Female/FrontHair/icon_FrontHair_p15.png",
            partSet: [
                {
                    target: 18,
                    path: "assets/TV/Female/FrontHair/TV_FrontHair1_p15.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Female/FrontHair/TV_FrontHair2_p15.png"
                }
            ]
        },
    },
    "后发": {
        "1": {
            varPath: "assets/Variation/Female/RearHair/icon_RearHair_p01.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair1_p01.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair2_p01.png"
                }
            ]
        },
        "2": {
            varPath: "assets/Variation/Female/RearHair/icon_RearHair_p02.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair1_p02.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair2_p02.png"
                }
            ]
        },
        "3": {
            varPath: "assets/Variation/Female/RearHair/icon_RearHair_p03.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair1_p03.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair2_p03.png"
                }
            ]
        },
        "4": {
            varPath: "assets/Variation/Female/RearHair/icon_RearHair_p04.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair1_p04.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair2_p04.png"
                }
            ]
        },
        "5": {
            varPath: "assets/Variation/Female/RearHair/icon_RearHair_p05.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair1_p05.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair2_p05.png"
                }
            ]
        },
        "6": {
            varPath: "assets/Variation/Female/RearHair/icon_RearHair_p06.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair1_p06.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair2_p06.png"
                }
            ]
        },
        "7": {
            varPath: "assets/Variation/Female/RearHair/icon_RearHair_p07.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair1_p07.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair2_p07.png"
                }
            ]
        },
        "8": {
            varPath: "assets/Variation/Female/RearHair/icon_RearHair_p08.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair1_p08.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair2_p08.png"
                }
            ]
        },
        "9": {
            varPath: "assets/Variation/Female/RearHair/icon_RearHair_p09.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair1_p09.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair2_p09.png"
                }
            ]
        },
        "10": {
            varPath: "assets/Variation/Female/RearHair/icon_RearHair_p10.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair1_p10.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair2_p10.png"
                }
            ]
        },
        "11": {
            varPath: "assets/Variation/Female/RearHair/icon_RearHair_p11.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair1_p11.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair2_p11.png"
                }
            ]
        },
        "12": {
            varPath: "assets/Variation/Female/RearHair/icon_RearHair_p12.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair1_p12.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair2_p12.png"
                }
            ]
        },
        "13": {
            varPath: "assets/Variation/Female/RearHair/icon_RearHair_p13.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair1_p13.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair2_p13.png"
                }
            ]
        },
        "14": {
            varPath: "assets/Variation/Female/RearHair/icon_RearHair_p14.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair1_p14.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair2_p14.png"
                }
            ]
        },
        "15": {
            varPath: "assets/Variation/Female/RearHair/icon_RearHair_p15.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair1_p15.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair2_p15.png"
                }
            ]
        },
        "16": {
            varPath: "assets/Variation/Female/RearHair/icon_RearHair_p16.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair1_p16.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair2_p16.png"
                }
            ]
        },
        "17": {
            varPath: "assets/Variation/Female/RearHair/icon_RearHair_p17.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair1_p17.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair2_p17.png"
                }
            ]
        },
        "18": {
            varPath: "assets/Variation/Female/RearHair/icon_RearHair_p18.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair1_p18.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair2_p18.png"
                }
            ]
        },
        "19": {
            varPath: "assets/Variation/Female/RearHair/icon_RearHair_p19.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair1_p19.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair2_p19.png"
                }
            ]
        },
        "20": {
            varPath: "assets/Variation/Female/RearHair/icon_RearHair_p20.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair1_p20.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Female/RearHair/TV_RearHair2_p20.png"
                }
            ]
        },
    },
    "耳朵": {
        "1": {
            varPath: "assets/Variation/Female/Ears/icon_Ears_p01.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Female/Ears/TV_Ears_p01.png"
                }
            ]
        },
    },
    "面部特征": {
        "1": {
            varPath: "assets/Variation/Female/FacialMark/icon_FacialMark_p01.png",
            partSet: [
                {
                    target: 11,
                    path: "assets/TV/Female/FacialMark/TV_FacialMark_p01.png"
                }
            ]
        },
        "2": {
            varPath: "assets/Variation/Female/FacialMark/icon_FacialMark_p02.png",
            partSet: [
                {
                    target: 11,
                    path: "assets/TV/Female/FacialMark/TV_FacialMark_p02.png"
                }
            ]
        },
        "3": {
            varPath: "assets/Variation/Female/FacialMark/icon_FacialMark_p03.png",
            partSet: [
                {
                    target: 11,
                    path: "assets/TV/Female/FacialMark/TV_FacialMark_p03.png"
                }
            ]
        },
        "4": {
            varPath: "assets/Variation/Female/FacialMark/icon_FacialMark_p04.png",
            partSet: [
                {
                    target: 11,
                    path: "assets/TV/Female/FacialMark/TV_FacialMark_p04.png"
                }
            ]
        },
        "5": {
            varPath: "assets/Variation/Female/FacialMark/icon_FacialMark_p05.png",
            partSet: [
                {
                    target: 11,
                    path: "assets/TV/Female/FacialMark/TV_FacialMark_p05.png"
                }
            ]
        },
        "6": {
            varPath: "assets/Variation/Female/FacialMark/icon_FacialMark_p06.png",
            partSet: [
                {
                    target: 11,
                    path: "assets/TV/Female/FacialMark/TV_FacialMark_p06.png"
                }
            ]
        },
    },
    "兽耳": {
        "1": {
            varPath: "assets/Variation/Female/BeastEars/icon_BeastEars_p01.png",
            partSet: [
                {
                    target: 20,
                    path: "assets/TV/Female/BeastEars/TV_BeastEars_p01.png"
                }
            ]
        },
        "2": {
            varPath: "assets/Variation/Female/BeastEars/icon_BeastEars_p02.png",
            partSet: [
                {
                    target: 20,
                    path: "assets/TV/Female/BeastEars/TV_BeastEars_p02.png"
                }
            ]
        },
        "3": {
            varPath: "assets/Variation/Female/BeastEars/icon_BeastEars_p03.png",
            partSet: [
                {
                    target: 20,
                    path: "assets/TV/Female/BeastEars/TV_BeastEars_p03.png"
                }
            ]
        },
        "4": {
            varPath: "assets/Variation/Female/BeastEars/icon_BeastEars_p04.png",
            partSet: [
                {
                    target: 20,
                    path: "assets/TV/Female/BeastEars/TV_BeastEars_p04.png"
                }
            ]
        },
        "5": {
            varPath: "assets/Variation/Female/BeastEars/icon_BeastEars_p05.png",
            partSet: [
                {
                    target: 20,
                    path: "assets/TV/Female/BeastEars/TV_BeastEars_p05.png"
                }
            ]
        },
        "6": {
            varPath: "assets/Variation/Female/BeastEars/icon_BeastEars_p06.png",
            partSet: [
                {
                    target: 20,
                    path: "assets/TV/Female/BeastEars/TV_BeastEars_p06.png"
                }
            ]
        },
    },
    "尾巴": {
        "1": {
            varPath: "assets/Variation/Female/Tail/icon_Tail_p01.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Female/Tail/TV_Tail1_p01.png"
                },
                {
                    target: 6,
                    path: "assets/TV/Female/Tail/TV_Tail2_p01.png"
                }
            ]
        },
        "2": {
            varPath: "assets/Variation/Female/Tail/icon_Tail_p02.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Female/Tail/TV_Tail1_p02.png"
                },
                {
                    target: 6,
                    path: "assets/TV/Female/Tail/TV_Tail2_p02.png"
                }
            ]
        },
        "3": {
            varPath: "assets/Variation/Female/Tail/icon_Tail_p03.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Female/Tail/TV_Tail1_p03.png"
                },
                {
                    target: 6,
                    path: "assets/TV/Female/Tail/TV_Tail2_p03.png"
                }
            ]
        },
        "4": {
            varPath: "assets/Variation/Female/Tail/icon_Tail_p04.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Female/Tail/TV_Tail1_p04.png"
                },
                {
                    target: 6,
                    path: "assets/TV/Female/Tail/TV_Tail2_p04.png"
                }
            ]
        },
        "5": {
            varPath: "assets/Variation/Female/Tail/icon_Tail_p05.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Female/Tail/TV_Tail1_p05.png"
                },
                {
                    target: 6,
                    path: "assets/TV/Female/Tail/TV_Tail2_p05.png"
                }
            ]
        },
        "6": {
            varPath: "assets/Variation/Female/Tail/icon_Tail_p06.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Female/Tail/TV_Tail1_p06.png"
                },
                {
                    target: 6,
                    path: "assets/TV/Female/Tail/TV_Tail2_p06.png"
                }
            ]
        },
    },
    "翅膀": {
        "1": {
            varPath: "assets/Variation/Female/Wing/icon_Wing_p01.png",
            partSet: [
                {
                    target: 15,
                    path: "assets/TV/Female/Wing/TV_Wing1_p01.png"
                },
                {
                    target: 7,
                    path: "assets/TV/Female/Wing/TV_Wing2_p01.png"
                }
            ]
        },
        "2": {
            varPath: "assets/Variation/Female/Wing/icon_Wing_p02.png",
            partSet: [
                {
                    target: 15,
                    path: "assets/TV/Female/Wing/TV_Wing1_p02.png"
                },
                {
                    target: 7,
                    path: "assets/TV/Female/Wing/TV_Wing2_p02.png"
                }
            ]
        },
        "3": {
            varPath: "assets/Variation/Female/Wing/icon_Wing_p03.png",
            partSet: [
                {
                    target: 15,
                    path: "assets/TV/Female/Wing/TV_Wing1_p03.png"
                },
                {
                    target: 7,
                    path: "assets/TV/Female/Wing/TV_Wing2_p03.png"
                }
            ]
        },
        "4": {
            varPath: "assets/Variation/Female/Wing/icon_Wing_p04.png",
            partSet: [
                {
                    target: 15,
                    path: "assets/TV/Female/Wing/TV_Wing1_p04.png"
                },
                {
                    target: 7,
                    path: "assets/TV/Female/Wing/TV_Wing2_p04.png"
                }
            ]
        },
        "5": {
            varPath: "assets/Variation/Female/Wing/icon_Wing_p05.png",
            partSet: [
                {
                    target: 15,
                    path: "assets/TV/Female/Wing/TV_Wing1_p05.png"
                },
                {
                    target: 7,
                    path: "assets/TV/Female/Wing/TV_Wing2_p05.png"
                }
            ]
        },
    },
    "衣服": {
        "1": {
            varPath: "assets/Variation/Female/Clothing/icon_Clothing_p01.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Female/Clothing/TV_Clothing1_p01.png"
                },
            ]
        },
        "2": {
            varPath: "assets/Variation/Female/Clothing/icon_Clothing_p02.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Female/Clothing/TV_Clothing1_p02.png"
                },
            ]
        },
        "3": {
            varPath: "assets/Variation/Female/Clothing/icon_Clothing_p03.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Female/Clothing/TV_Clothing1_p03.png"
                },
            ]
        },
        "4": {
            varPath: "assets/Variation/Female/Clothing/icon_Clothing_p04.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Female/Clothing/TV_Clothing1_p04.png"
                },
            ]
        },
        "5": {
            varPath: "assets/Variation/Female/Clothing/icon_Clothing_p05.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Female/Clothing/TV_Clothing1_p05.png"
                },
            ]
        },
        "6": {
            varPath: "assets/Variation/Female/Clothing/icon_Clothing_p06.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Female/Clothing/TV_Clothing1_p06.png"
                },
            ]
        },
        "7": {
            varPath: "assets/Variation/Female/Clothing/icon_Clothing_p07.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Female/Clothing/TV_Clothing1_p07.png"
                },
            ]
        },
        "8": {
            varPath: "assets/Variation/Female/Clothing/icon_Clothing_p08.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Female/Clothing/TV_Clothing1_p08.png"
                },
            ]
        },
        "9": {
            varPath: "assets/Variation/Female/Clothing/icon_Clothing_p09.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Female/Clothing/TV_Clothing1_p09.png"
                },
            ]
        },
        "10": {
            varPath: "assets/Variation/Female/Clothing/icon_Clothing_p10.png",
            partSet: [
                {
                    target: 13,
                    path: "assets/TV/Female/Clothing/TV_Clothing1_p10.png"
                }
            ]
        },
        "11": {
            varPath: "assets/Variation/Female/Clothing/icon_Clothing_p11.png",
            partSet: [
                {
                    target: 13,
                    path: "assets/TV/Female/Clothing/TV_Clothing1_p11.png"
                }
            ]
        },
        "12": {
            varPath: "assets/Variation/Female/Clothing/icon_Clothing_p12.png",
            partSet: [
                {
                    target: 13,
                    path: "assets/TV/Female/Clothing/TV_Clothing1_p12.png"
                }
            ]
        },
        "13": {
            varPath: "assets/Variation/Female/Clothing/icon_Clothing_p13.png",
            partSet: [
                {
                    target: 13,
                    path: "assets/TV/Female/Clothing/TV_Clothing1_p13.png"
                }
            ]
        },
        "14": {
            varPath: "assets/Variation/Female/Clothing/icon_Clothing_p14.png",
            partSet: [
                {
                    target: 13,
                    path: "assets/TV/Female/Clothing/TV_Clothing1_p14.png"
                }
            ]
        },
        "15": {
            varPath: "assets/Variation/Female/Clothing/icon_Clothing_p15.png",
            partSet: [
                {
                    target: 13,
                    path: "assets/TV/Female/Clothing/TV_Clothing1_p15.png"
                }
            ]
        },
        "16": {
            varPath: "assets/Variation/Female/Clothing/icon_Clothing_p16.png",
            partSet: [
                {
                    target: 13,
                    path: "assets/TV/Female/Clothing/TV_Clothing1_p16.png"
                }
            ]
        },
        "17": {
            varPath: "assets/Variation/Female/Clothing/icon_Clothing_p17.png",
            partSet: [
                {
                    target: 13,
                    path: "assets/TV/Female/Clothing/TV_Clothing1_p17.png"
                }
            ]
        },
        "18": {
            varPath: "assets/Variation/Female/Clothing/icon_Clothing_p18.png",
            partSet: [
                {
                    target: 13,
                    path: "assets/TV/Female/Clothing/TV_Clothing1_p18.png"
                }
            ]
        },
        "19": {
            varPath: "assets/Variation/Female/Clothing/icon_Clothing_p19.png",
            partSet: [
                {
                    target: 13,
                    path: "assets/TV/Female/Clothing/TV_Clothing1_p19.png"
                }
            ]
        },
        "20": {
            varPath: "assets/Variation/Female/Clothing/icon_Clothing_p20.png",
            partSet: [
                {
                    target: 13,
                    path: "assets/TV/Female/Clothing/TV_Clothing1_p20.png"
                }
            ]
        },
        "21": {
            varPath: "assets/Variation/Female/Clothing/icon_Clothing_p21.png",
            partSet: [
                {
                    target: 13,
                    path: "assets/TV/Female/Clothing/TV_Clothing1_p21.png"
                }
            ]
        },
        "22": {
            varPath: "assets/Variation/Female/Clothing/icon_Clothing_p22.png",
            partSet: [
                {
                    target: 13,
                    path: "assets/TV/Female/Clothing/TV_Clothing1_p22.png"
                }
            ]
        },
        "23": {
            varPath: "assets/Variation/Female/Clothing/icon_Clothing_p23.png",
            partSet: [
                {
                    target: 13,
                    path: "assets/TV/Female/Clothing/TV_Clothing1_p23.png"
                }
            ]
        },
        "24": {
            varPath: "assets/Variation/Female/Clothing/icon_Clothing_p24.png",
            partSet: [
                {
                    target: 13,
                    path: "assets/TV/Female/Clothing/TV_Clothing1_p24.png"
                }
            ]
        },
        "25": {
            varPath: "assets/Variation/Female/Clothing/icon_Clothing_p25.png",
            partSet: [
                {
                    target: 13,
                    path: "assets/TV/Female/Clothing/TV_Clothing1_p25.png"
                }
            ]
        },
        "26": {
            varPath: "assets/Variation/Female/Clothing/icon_Clothing_p26.png",
            partSet: [
                {
                    target: 13,
                    path: "assets/TV/Female/Clothing/TV_Clothing1_p26.png"
                }
            ]
        },
    },
    "斗篷": {
        "1": {
            varPath: "assets/Variation/Female/Cloak/icon_Cloak_p01.png",
            partSet: [
                {
                    target: 14,
                    path: "assets/TV/Female/Cloak/TV_Cloak1_p01.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Female/Cloak/TV_Cloak2_p01.png"
                }
            ]
        },
        "2": {
            varPath: "assets/Variation/Female/Cloak/icon_Cloak_p02.png",
            partSet: [
                {
                    target: 14,
                    path: "assets/TV/Female/Cloak/TV_Cloak1_p02.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Female/Cloak/TV_Cloak2_p02.png"
                }
            ]
        },
        "3": {
            varPath: "assets/Variation/Female/Cloak/icon_Cloak_p03.png",
            partSet: [
                {
                    target: 14,
                    path: "assets/TV/Female/Cloak/TV_Cloak1_p03.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Female/Cloak/TV_Cloak2_p03.png"
                }
            ]
        },
        "4": {
            varPath: "assets/Variation/Female/Cloak/icon_Cloak_p04.png",
            partSet: [
                {
                    target: 14,
                    path: "assets/TV/Female/Cloak/TV_Cloak1_p04.png"
                },
                {
                    target: 8,
                    path: "assets/TV/Female/Cloak/TV_Cloak2_p04.png"
                }
            ]
        },
    },
    "配件1": {
        "1": {
            varPath: "assets/Variation/Female/AccA/icon_AccA_p01.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Female/AccA/TV_AccA_p01.png"
                }
            ]
        },
        "2": {
            varPath: "assets/Variation/Female/AccA/icon_AccA_p02.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Female/AccA/TV_AccA_p02.png"
                }
            ]
        },
        "3": {
            varPath: "assets/Variation/Female/AccA/icon_AccA_p03.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Female/AccA/TV_AccA_p03.png"
                }
            ]
        },
        "4": {
            varPath: "assets/Variation/Female/AccA/icon_AccA_p04.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Female/AccA/TV_AccA_p04.png"
                }
            ]
        },
        "5": {
            varPath: "assets/Variation/Female/AccA/icon_AccA_p05.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Female/AccA/TV_AccA_p05.png"
                }
            ]
        },
        "6": {
            varPath: "assets/Variation/Female/AccA/icon_AccA_p06.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Female/AccA/TV_AccA_p06.png"
                }
            ]
        },
        "7": {
            varPath: "assets/Variation/Female/AccA/icon_AccA_p07.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Female/AccA/TV_AccA_p07.png"
                }
            ]
        },
    },
    "配件2": {
        "1": {
            varPath: "assets/Variation/Female/AccB/icon_AccB_p01.png",
            partSet: [
                {
                    target: 19,
                    path: "assets/TV/Female/AccB/TV_AccB_p01.png"
                }
            ]
        },
        "2": {
            varPath: "assets/Variation/Female/AccB/icon_AccB_p02.png",
            partSet: [
                {
                    target: 19,
                    path: "assets/TV/Female/AccB/TV_AccB_p02.png"
                }
            ]
        },
        "3": {
            varPath: "assets/Variation/Female/AccB/icon_AccB_p03.png",
            partSet: [
                {
                    target: 19,
                    path: "assets/TV/Female/AccB/TV_AccB_p03.png"
                }
            ]
        },
        "4": {
            varPath: "assets/Variation/Female/AccB/icon_AccB_p04.png",
            partSet: [
                {
                    target: 19,
                    path: "assets/TV/Female/AccB/TV_AccB_p04.png"
                }
            ]
        },
        "5": {
            varPath: "assets/Variation/Female/AccB/icon_AccB_p05.png",
            partSet: [
                {
                    target: 19,
                    path: "assets/TV/Female/AccB/TV_AccB_p05.png"
                }
            ]
        },
        "6": {
            varPath: "assets/Variation/Female/AccB/icon_AccB_p06.png",
            partSet: [
                {
                    target: 19,
                    path: "assets/TV/Female/AccB/TV_AccB_p06.png"
                }
            ]
        },
        "7": {
            varPath: "assets/Variation/Female/AccB/icon_AccB_p07.png",
            partSet: [
                {
                    target: 19,
                    path: "assets/TV/Female/AccB/TV_AccB_p07.png"
                }
            ]
        },
        "8": {
            varPath: "assets/Variation/Female/AccB/icon_AccB_p08.png",
            partSet: [
                {
                    target: 19,
                    path: "assets/TV/Female/AccB/TV_AccB_p08.png"
                }
            ]
        },
        "9": {
            varPath: "assets/Variation/Female/AccB/icon_AccB_p09.png",
            partSet: [
                {
                    target: 19,
                    path: "assets/TV/Female/AccB/TV_AccB_p09.png"
                }
            ]
        },
        "10": {
            varPath: "assets/Variation/Female/AccB/icon_AccB_p10.png",
            partSet: [
                {
                    target: 19,
                    path: "assets/TV/Female/AccB/TV_AccB_p10.png"
                }
            ]
        },
    },
    "眼镜": {
        "1": {
            varPath: "assets/Variation/Female/Glasses/icon_Glasses_p01.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Female/Glasses/TV_Glasses_p01.png"
                }
            ]
        },
        "2": {
            varPath: "assets/Variation/Female/Glasses/icon_Glasses_p02.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Female/Glasses/TV_Glasses_p02.png"
                }
            ]
        },
        "3": {
            varPath: "assets/Variation/Female/Glasses/icon_Glasses_p03.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Female/Glasses/TV_Glasses_p03.png"
                }
            ]
        },
        "4": {
            varPath: "assets/Variation/Female/Glasses/icon_Glasses_p04.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Female/Glasses/TV_Glasses_p04.png"
                }
            ]
        },
        "5": {
            varPath: "assets/Variation/Female/Glasses/icon_Glasses_p05.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Female/Glasses/TV_Glasses_p05.png"
                }
            ]
        },
        "6": {
            varPath: "assets/Variation/Female/Glasses/icon_Glasses_p06.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Female/Glasses/TV_Glasses_p06.png"
                }
            ]
        },
    }
}

GEN.kidSet = {
    "前发": {
        "0": {
            varPath: "assets/Variation/Kid/FrontHair/icon_FrontHair_p00.png",
            partSet: [
                {
                    target: 18,
                    path: "assets/TV/Kid/FrontHair/TV_FrontHair1_p00.png"
                },
            ]
        },
    },
    "后发": {
        "0": {
            varPath: "assets/Variation/Kid/RearHair/icon_RearHair_p00.png",
            partSet: [
                {
                    target: 16,
                    path: "assets/TV/Kid/RearHair/TV_RearHair1_p00.png"
                },
                {
                    target: 16,
                    path: "assets/TV/Kid/RearHair/TV_RearHair2_p00.png"
                }
            ]
        },
    },
    "衣服": {
        "0": {
            varPath: "assets/Variation/Kid/Clothing/icon_Clothing_p00.png",
            partSet: [
                {
                    target: 17,
                    path: "assets/TV/Kid/Clothing/TV_Clothing2_p00.png"
                },
            ]
        },
    },
}

GEN.genderSet = {
    "男": GEN.maleSet,
    "女": GEN.femaleSet,
    "儿童": GEN.kidSet
}

GEN.buttonFlag = true;

//=============================================================================
// 初始化界面
//=============================================================================

GEN.loadUI = function () {
    GEN.loadButtons();

    GEN.UILayer = new Sprite();
    app.stage.addChild(GEN.UILayer);
    GEN.VariationMenu = new variationMenu();
    GEN.VariationMenu.move(5, 5);

    GEN.UILayer.addChild(GEN.VariationMenu);
    GEN.ticker = PIXI.Ticker.shared;
    GEN.ticker.autoStart = false;
    GEN.ticker.stop();
    GEN.ticker.add(GEN.updateColor);
    GEN.ticker.start();
}

GEN.loadPaintLayer = function () {
    GEN.paintLayers = []
    for (var i = 0; i < 21; i++) {
        GEN.paintLayers.push(new Sprite())
        output.stage.addChild(GEN.paintLayers[i])
    }
}

GEN.loadButtons = function () {
    GEN.genderList = document.getElementById('genderList');
    GEN.typeList = document.getElementById('typeList');
    GEN.genderButtonList = {};
    GEN.typeButtonList = {};
    GEN.SymbolManager = new symbolManager();
    GEN.SymbolManager.addGenderButtons();

    GEN.downloadButton = document.createElement('button');
    GEN.downloadButton.style.fontSize = 14 + 'px'
    GEN.downloadButton.style.width = 100 + "px";
    GEN.downloadButton.style.height = 25 + "px";
    GEN.downloadButton.textContent = '下载';
    GEN.downloadButton.onclick = function () {
        output.render();
        GEN.output = output.view.toDataURL();
        var a = document.getElementById('result')
        a.href = GEN.output;
        a.click();
        //console.log(output.view.toDataURL());
    }
    var db = document.getElementById('downloadBlock');
    db.appendChild(GEN.downloadButton);
}

GEN.updateColor = function (time) {
    if (GEN.curSprite) {
        GEN.curSprite.forEach(function (item) {
            item.tint = GEN.processColorCode($('#color').val());
        })
    }
    //console.log($('#color').val())
}

//=============================================================================
// 按钮管理
//=============================================================================

function symbolManager() {
    this.initialize.apply(this, arguments);
}

symbolManager.prototype.initialize = function () {
    this._genderSymbol;
    this._typeSymbol;
    this._bodySet = {};
    this._EyeSet = {};
    for (symbol in GEN.genderSet) {
        switch (symbol) {
            case "男":
                this._bodySet[symbol] = new PIXI.Sprite.from('assets/TV/Male/Body/TV_Body_p01.png')
                this._EyeSet[symbol] = new PIXI.Sprite.from('assets/TV/Male/Eye/TV_Eye_p01.png')
                break;
            case "女":
                this._bodySet[symbol] = new PIXI.Sprite.from('assets/TV/Female/Body/TV_Body_p01.png')
                this._EyeSet[symbol] = new PIXI.Sprite.from('assets/TV/Female/Eye/TV_Eye_p01.png')
                break;
            case "儿童":
                this._bodySet[symbol] = new PIXI.Sprite.from('assets/TV/Kid/Body/TV_Body_p01.png')
                this._EyeSet[symbol] = new PIXI.Sprite.from('assets/TV/Kid/Eye/TV_Eye_p01.png')
                break;
        }
    }
}

symbolManager.prototype.switchGender = function (s1) {
    if (this._genderSymbol != s1) {
        this._genderSymbol = s1;
        this.addTypeButtons(s1);
        GEN.VariationMenu.clearAll();
        GEN.paintLayers[10].removeChildren();
        this._bodySet[s1].tint = 0xffffff
        this._EyeSet[s1].tint = 0xffffff
        GEN.paintLayers[10].addChild(this._bodySet[s1]);
        GEN.paintLayers[10].addChild(this._EyeSet[s1]);
        GEN.VariationMenu.switchSymbol(this._genderSymbol, this._typeSymbol);
    }
}

symbolManager.prototype.switchType = function (s2) {
    this._typeSymbol = s2;
    GEN.VariationMenu.switchSymbol(this._genderSymbol, this._typeSymbol);
}

symbolManager.prototype.addTypeButtons = function (s1) {
    for (s2 in GEN.typeButtonList) {
        if (GEN.typeButtonList[s2]) {
            GEN.typeList.removeChild(GEN.typeButtonList[s2]);
            GEN.typeButtonList[s2] = null
        }
    }

    //添加肤色按钮
    var typeButton = document.createElement('button');
    typeButton.id = '肤色';
    typeButton.onclick = function () {
        GEN.VariationMenu.switchSymbol('empty', null);
        GEN.curSprite = [GEN.SymbolManager._bodySet[GEN.SymbolManager._genderSymbol]]
        $('#color').val(GEN.processColorNum(GEN.curSprite[0].tint))
    }
    typeButton.style.fontSize = 14 + 'px'
    typeButton.textContent = '肤色';
    typeButton.style.width = 100 + "px";
    //typeButton.style.height = 25  + "px";
    GEN.typeButtonList['肤色'] = typeButton;
    GEN.typeList.appendChild(typeButton)

    //添加瞳色按钮
    var typeButton = document.createElement('button');
    typeButton.id = '瞳色';
    typeButton.onclick = function () {
        GEN.VariationMenu.switchSymbol('empty', null);
        GEN.curSprite = [GEN.SymbolManager._EyeSet[GEN.SymbolManager._genderSymbol]]
        $('#color').val(GEN.processColorNum(GEN.curSprite[0].tint))
    }
    typeButton.style.fontSize = 14 + 'px'
    typeButton.textContent = '瞳色';
    typeButton.style.width = 100 + "px";
    //typeButton.style.height = 25  + "px";
    GEN.typeButtonList['瞳色'] = typeButton;
    GEN.typeList.appendChild(typeButton)

    for (s2 in GEN.genderSet[s1]) {
        var typeButton = document.createElement('button');
        typeButton.id = s2;
        typeButton.onclick = function () {
            GEN.SymbolManager.switchType(this.id)
        }
        typeButton.style.fontSize = 14  + 'px'
        typeButton.textContent = s2;
        typeButton.style.width = 100 + "px";
        //typeButton.style.height = 25  + "px";
        GEN.typeButtonList[s2] = typeButton;
        GEN.typeList.appendChild(typeButton)
    }
}

symbolManager.prototype.addGenderButtons = function () {
    for (s1 in GEN.genderSet) {
        var genderButton = document.createElement('button');
        genderButton.id = s1;
        genderButton.onclick = function () {
            GEN.SymbolManager.switchGender(this.id);
        }
        genderButton.style.fontSize = 14 +'px'
        genderButton.textContent = s1;
        genderButton.style.width = 100  + "px";
        //genderButton.style.height = 25  + "px"
        GEN.genderButtonList[s1] = genderButton;
        GEN.genderList.appendChild(genderButton)
    }
}


//=============================================================================
// Sprite总类
//=============================================================================

function Sprite() {
    this.initialize.apply(this, arguments);
}

Sprite.prototype = Object.create(PIXI.Sprite.prototype);
Sprite.prototype.constructor = Sprite;

Sprite.prototype.initialize = function (tex) {
    if (tex) {
        var texture = tex
    } else {
        var texture = new PIXI.Texture(new PIXI.BaseTexture());
    }
    PIXI.Sprite.call(this, texture);
}

Sprite.prototype.update = function () {
    this.children.forEach(function (child) {
        if (child.update) {
            child.update();
        }
    });
}

Sprite.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
}

//=============================================================================
// 按钮
//=============================================================================

function assetButton() {
    this.initialize.apply(this, arguments);
}

assetButton.prototype = Object.create(Sprite.prototype);
assetButton.prototype.constructor = assetButton;

assetButton.prototype.initialize = function (width, height, word) {
    Sprite.prototype.initialize.call(this);
    width = width
    height = height
    this.offRect = new Graphics();
    if (GEN.buttonFlag) {
        this.c = 0xffffff
        GEN.buttonFlag = false;
    } else {
        this.c = 0xcce0ff
        GEN.buttonFlag = true;
    }
    this.offRect.beginFill(this.c);
    this.offRect.drawRect(0, 0, width, height);
    this.offRect.endFill();
    this.addChild(this.offRect);
    this.onRect = new Graphics();
    this.onRect.beginFill(this.c);
    this.onRect.lineStyle(4, 0x000000, 1);
    this.onRect.drawRect(0, 0, width, height);
    this.onRect.endFill();
    this.onRect.visible = false;
    this.addChild(this.onRect);
    this.word = new Text(word, { fontSize: 18, fontWeight: 'bold' });
    this.word.resolution = window.devicePixelRatio;

    this.word.x = 4;
    this.word.y = 2;
    this.addChild(this.word)
    this.interactive = true;
    this.on('mousedown', this.onButtonClick)
    this.on('touchstart', this.onButtonClick)

    this.activated = false;
}

assetButton.prototype.onButtonClick = function () {
    if (!this.activated) {
        this.select();
        this.activated = true;
    } else {
        this.deselect();
        this.activated = false;
    }
}

assetButton.prototype.select = function () {
    this.onRect.visible = true;
    this.offRect.visible = false;
}

assetButton.prototype.deselect = function () {
    this.onRect.visible = false;
    this.offRect.visible = true;
}

//=============================================================================

function variationButton() {
    this.initialize.apply(this, arguments);
}

variationButton.prototype = Object.create(Sprite.prototype);
variationButton.prototype.constructor = variationButton;

variationButton.prototype.initialize = function (part, symbol) {
    Sprite.prototype.initialize.call(this);
    this._curSprites = null;
    this.part = part;
    this.texture = PIXI.Texture.from(part.varPath);
    this.onRect = new Graphics();
    this.onRect.lineStyle(4, 0x000000, 1);
    this.onRect.drawRect(0, 0, 64, 64);
    this.onRect.visible = false;
    this.addChild(this.onRect);
    this.interactive = true;
    this.on('mousedown', this.onButtonClick)
    this.on('touchstart', this.onButtonClick)
    this._symbol = symbol;
    this.added = false;

}

variationButton.prototype.onButtonClick = function () {
    GEN.VariationMenu.curMenu().switchSymbol(this._symbol);
}

variationButton.prototype.select = function () {
    this.onRect.visible = true;
    this.add();
}

variationButton.prototype.deselect = function () {
    this.onRect.visible = false;
    this.remove();
}

variationButton.prototype.add = function () {
    if (!this.added) {
        if (!this._curSprites) {
            this._curSprites = [];
            for (var i = 0; i < this.part.partSet.length; i++) {
                this._curSprites.push(new PIXI.Sprite.from(this.part.partSet[i].path));
                GEN.paintLayers[this.part.partSet[i].target].addChild(this._curSprites[i]);
            }
        } else {
            for (var i = 0; i < this.part.partSet.length; i++) {
                GEN.paintLayers[this.part.partSet[i].target].addChild(this._curSprites[i]);
            }
        }
        GEN.VariationMenu.curMenu().setCurSprite(this._curSprites);
        this.added = true;
        GEN.curSprite = this._curSprites;
    }
}

variationButton.prototype.remove = function () {
    if (this.added) {
        if (this._curSprites) {
            for (var i = 0; i < this.part.partSet.length; i++) {
                GEN.paintLayers[this.part.partSet[i].target].removeChild(this._curSprites[i]);
            }
        }
        this.added = false;
    }
}

//=============================================================================

function downloadButton() {
    this.initialize.apply(this, arguments);
}

downloadButton.prototype = Object.create(Sprite.prototype);
downloadButton.prototype.constructor = downloadButton;

downloadButton.prototype.initialize = function () {
    Sprite.prototype.initialize.call(this);
    this.rect = new Graphics();
    this.rect.beginFill(0xffffff);
    this.rect.drawRect(0, 0, 100, 25);
    this.rect.endFill();
    this.addChild(this.rect);
    this.word = new Text('下载', { fontSize: 18, fontWeight: 'bold' });
    this.word.resolution = window.devicePixelRatio;
    this.word.x = 4;
    this.word.y = 2;
    this.addChild(this.word)
    this.interactive = true;
    this.on('mouseup', this.onButtonClick)
    this.on('touchend', this.onButtonClick)
}

downloadButton.prototype.onButtonClick = function () {
    output.render();
    console.log(output.view.toDataURL())
}

//=============================================================================
// 菜单
//=============================================================================

function selectableMenu() {
    this.initialize.apply(this, arguments);
}

selectableMenu.prototype = Object.create(Sprite.prototype);
selectableMenu.prototype.constructor = selectableMenu;

selectableMenu.prototype.initialize = function () {
    Sprite.prototype.initialize.call(this);
    this.ty = 0;
    this._symbol = null;
}

selectableMenu.prototype.switchSymbol = function () {}

selectableMenu.prototype.addComp = function () { }

//=============================================================================

function variationMenu() {
    this.initialize.apply(this, arguments);
}

variationMenu.prototype = Object.create(selectableMenu.prototype);
variationMenu.prototype.constructor = variationMenu;

variationMenu.prototype.initialize = function () {
    selectableMenu.prototype.initialize.call(this);
    this.varMenuSet = {};
}

variationMenu.prototype.switchSymbol = function (s1, s2) {
    if (s1 == 'empty') {
        this.removeChild(this.curMenu());
    }
    if (s1 && s2) {
        this.removeChild(this.curMenu());
        this._symbol = s1 + s2;
        if (this.curMenu()) {
            this.addChild(this.curMenu())
        } else {
            this.addComp(s1, s2);
            this.addChild(this.curMenu());
        }
        this.curMenu().getCurSprite();
    }
}

variationMenu.prototype.addComp = function (s1, s2) {
    this.varMenuSet[s1 + s2] = new variationButtonSet(s1, s2);
}

variationMenu.prototype.curMenu = function () {
    return this.varMenuSet[this._symbol];
}

variationMenu.prototype.clearAll = function () {
    for (s in this.varMenuSet) {
        this.varMenuSet[s].clearAll();
    }
}

//=============================================================================

function variationButtonSet() {
    this.initialize.apply(this, arguments);
}

variationButtonSet.prototype = Object.create(selectableMenu.prototype);
variationButtonSet.prototype.constructor = variationButtonSet;

variationButtonSet.prototype.initialize = function (s1, s2) {
    selectableMenu.prototype.initialize.call(this);
    this.parentSymbol = s1 + s2;
    this.buttonSet = {};
    this.buttonSet["empty"] = new variationButton(GEN.emptyPart, "empty")
    this.tx = 0;
    this.ty = 0;
    this.buttonSet["empty"].move(this.tx, this.ty)
    this.addChild(this.buttonSet["empty"]);
    this.tx += 68;
    for (s in GEN.genderSet[s1][s2]) {
        this.buttonSet[s] = new variationButton(GEN.genderSet[s1][s2][s], s);
        this.buttonSet[s].move(this.tx, this.ty);
        this.tx += 68;
        if (this.tx >= 7 * 68) {
            this.tx = 0;
            this.ty += 68;
        }
        this.addChild(this.buttonSet[s])
    }
}

variationButtonSet.prototype.switchSymbol = function (symbol) {
    if (this._symbol) {
        this.buttonSet[this._symbol].deselect();
    }
    this._symbol = symbol;
    if (this.buttonSet[this._symbol]) {
        this.buttonSet[this._symbol].select();
    }
}

variationButtonSet.prototype.setCurSprite = function (s) {
    GEN.curSprite = s
}

variationButtonSet.prototype.clearAll = function () {
    GEN.curSprite = null;
    for (s in this.buttonSet) {
        this.buttonSet[s].deselect();
    }
}

variationButtonSet.prototype.getCurSprite = function () {
    if (this._symbol) {
        GEN.curSprite = this.buttonSet[this._symbol]._curSprites;
        $('#color').val(GEN.processColorNum(GEN.curSprite[0].tint))
    }
}