/* U jelly by my java scrit skill? (C) 1996 */
javascript:(
    function() {
        var n=Math.floor(Math.random()*36);
        var m=Math.floor(Math.random()*900)+10;
        var i = [
            'http://i.imgur.com/2EtLl.png',
            'http://i.imgur.com/4LiuC.png',
            'http://i.imgur.com/3AvSK.png',
            'http://i.imgur.com/msR22.png',
            'http://i.imgur.com/bgQBQ.png',
            'http://i.imgur.com/MEWVo.png',
            'http://i.imgur.com/ckL6E.png',
            'http://i.imgur.com/9yR1J.png',
            'http://i.imgur.com/4Aivc.png',
            'http://i.imgur.com/P6PIw.png',
            'http://i.imgur.com/HlxZy.png',
            'http://i.imgur.com/ePW4w.png',
            'http://i.imgur.com/0r5Gj.png',
            'http://i.imgur.com/82PZj.png',
            'http://i.imgur.com/sK8R1.png',
            'http://i.imgur.com/AQqsv.png',
            'http://i.imgur.com/dHruT.png',
            'http://i.imgur.com/2BnIA.png',
            'http://i.imgur.com/If5cT.png',
            'http://i.imgur.com/HB446.png',
            'http://i.imgur.com/moNIL.png',
            'http://i.imgur.com/ltCFE.png',
            'http://i.imgur.com/OM7eJ.png',
            'http://i.imgur.com/53msS.png',
            'http://i.imgur.com/KAH8E.png',
            'http://i.imgur.com/FonLf.png',
            'http://i.imgur.com/oXusW.png',
            'http://i.imgur.com/FVLo5.png',
            'http://i.imgur.com/MFuyD.png',
            'http://i.imgur.com/KGxYL.png',
            'http://i.imgur.com/nZ4u5.png',
            'http://i.imgur.com/3KNsD.png',
            'http://i.imgur.com/PhQFx.png',
            'http://i.imgur.com/7SsYE.png',
            'http://i.imgur.com/5pEy9.png',
            'http://i.imgur.com/pDHzK.png'
        ]
        document.body.innerHTML += '<img src="'+i[n]+'" style="position: fixed; left: '+m+'px; bottom: 0px; z-index: 1000">';})();