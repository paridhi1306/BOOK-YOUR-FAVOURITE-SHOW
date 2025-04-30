export const database = [
    { name: 'Ant-Man and the Wasp: Quantumania', imgUrl: 'images/Poster/ant-man-quantumania.webp' },
    { name: 'Fast X', imgUrl: 'images/Poster/fast-x.jpg' },
    { name: 'Indiana Jones and the Dial of Destiny', imgUrl: 'images/Poster/Indiana-Jones5.avif' },
    { name: 'John Wick 4', imgUrl: 'images/Poster/john-wick-4.avif' },
    { name: 'Mission: Impossible 7', imgUrl: 'images/Poster/mission-impossible.jpg' },
    { name: 'Star Trek 4', imgUrl: 'images/Poster/Star-Trek-4.jpg' },
    { name: 'Transformers: Rise of the Beasts', imgUrl: 'images/Poster/transformer.webp' },
    { name: 'Ant-Man and the Wasp: Quantumania', imgUrl: 'images/Poster/ant-man-quantumania.webp' },
    { name: 'Fast X', imgUrl: 'images/Poster/fast-x.jpg' },
    { name: 'Indiana Jones and the Dial of Destiny', imgUrl: 'images/Poster/Indiana-Jones5.avif' },
    { name: 'John Wick 4', imgUrl: 'images/Poster/john-wick-4.avif' },
    { name: 'Mission: Impossible 7', imgUrl: 'images/Poster/mission-impossible.jpg' },
    { name: 'Star Trek 4', imgUrl: 'images/Poster/Star-Trek-4.jpg' },
    { name: 'Transformers: Rise of the Beasts', imgUrl: 'images/Poster/transformer.webp' },
    { name: 'Ant-Man and the Wasp: Quantumania', imgUrl: 'images/Poster/ant-man-quantumania.webp' },
    { name: 'Fast X', imgUrl: 'images/Poster/fast-x.jpg' }
    
]
export const availibility = {
    '21 Jump Street': [1, 2, 5, 8, 9,19,22,20,11],
    '22 Jump Street': [1, 2, 3, 5, 6,10,11,12,13,14,15,16,17, 24],
    'Cars': [1, 2, 3, 4, 5, 6,15,16,17,18,19,20,21,22,23,24],
    'Cars 2': [4, 6, 8,10,11,12,13,14,15,16],
    'Cars 3': [3, 5, 7, 9,20,21,12,13,19,24]
}
const fetchMovieList = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(database)
        }, 500)
    })
}

const fetchMovieAvailability = async (movieName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (const m in availibility) {
                if (m === movieName) resolve(availibility[m])
            }
            resolve([])
        }, 500)
    })
}
const bell = `<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100%" height="100%" viewBox="0 0 225.000000 225.000000" preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)" fill="blue" stroke="none">
<path d="M955 2046 c-361 -70 -640 -331 -737 -687 -33 -121 -33 -347 0 -468 90 -333 341 -583 673 -673 122 -33 348 -33 468 0 333 91 583 340 673 673 33 121 33 347 0 468 -90 330 -340 582 -667 671 -102 28 -307 36 -410 16z m343 -192 c91 -19 228 -87 305 -151 174 -145 268 -348 268 -578 0 -134 -23 -232 -81 -343 -132 -254 -378 -403 -665 -403 -287 0 -533 149 -665 403 -58 111 -81 209 -81 343 0 286 149 533 401 664 165 86 323 105 518 65z"/>
<path d="M1065 1707 c-20 -16 -28 -35 -32 -68 -5 -43 -7 -46 -52 -62 -89 -31 -162 -113 -203 -226 -17 -46 -22 -88 -26 -237 l-4 -182 -44 -43 c-40 -39 -44 -48 -44 -91 l0 -48 465 0 465 0 0 48 c0 43 -4 52 -44 91 l-44 43 -4 182 c-4 149 -9 191 -26 237 -41 113 -114 195 -203 226 -45 16 -47 19 -52 62 -6 56 -42 91 -92 91 -21 0 -44 -9 -60 -23z"/>
<path d="M993 624 c23 -138 241 -138 264 0 l6 36 -138 0 -138 0 6 -36z"/>
</g>
</svg>`;
const ticket = `<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100%" height="100%" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="blue" stroke="none">
<path d="M1602 3517 l-1602 -1602 313 -313 c171 -171 316 -312 321 -312 5 0 44 33 85 73 89 86 143 120 226 141 341 89 648 -218 559 -559 -21 -83 -55 -137 -141 -226 -40 -41 -73 -80 -73 -85 0 -5 141 -150 312 -321 l313 -313 1602 1602 1603 1603 -312 312 c-172 172 -317 313 -322 313 -5 0 -44 -33 -85 -73 -89 -86 -143 -120 -226 -141 -340 -89 -648 219 -560 559 21 79 70 157 149 235 36 35 66 69 66 75 0 5 -141 151 -313 323 l-312 312 -1603 -1603z m1717 1069 l104 -104 -41 -84 c-64 -128 -77 -190 -77 -353 1 -126 4 -148 29 -220 50 -144 123 -252 238 -351 69 -59 153 -106 253 -140 72 -25 94 -28 220 -29 163 0 225 13 353 77 l84 41 104 -104 c57 -57 104 -108 104 -114 0 -13 -2762 -2775 -2775 -2775 -6 0 -57 47 -114 104 l-104 104 41 84 c64 128 77 190 77 353 -1 126 -4 148 -29 220 -83 240 -251 408 -491 491 -72 25 -94 28 -220 29 -163 0 -225 -13 -353 -77 l-84 -41 -104 104 c-57 57 -104 108 -104 114 0 13 2762 2775 2775 2775 6 0 57 -47 114 -104z"/>
<path d="M2457 3522 l-107 -107 103 -103 c56 -56 107 -102 112 -102 13 0 205 192 205 205 0 6 -46 56 -103 113 l-102 102 -108 -108z"/>
<path d="M2880 3095 l-105 -105 108 -108 107 -107 107 107 108 108 -105 105 c-58 58 -107 105 -110 105 -3 0 -52 -47 -110 -105z"/>
<path d="M3307 2672 c-53 -53 -97 -102 -97 -107 0 -5 46 -56 102 -112 l103 -103 107 107 108 108 -102 102 c-57 57 -107 103 -113 103 -6 0 -54 -44 -108 -98z"/>
</g>
</svg>`;

const gift = `<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100%" height="100%" viewBox="0 0 900.000000 900.000000" preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)" fill="blue" stroke="none">
<path d="M4180 8989 c-373 -30 -729 -98 -1065 -206 -1316 -423 -2388 -1462 -2852 -2763 -163 -459 -246 -908 -260 -1410 -24 -910 229 -1806 726 -2565 444 -679 1076 -1239 1794 -1589 956 -467 2056 -579 3091 -316 1250 317 2303 1160 2898 2320 486 947 615 2071 357 3120 -197 799 -605 1520 -1193 2105 -723 719 -1617 1155 -2621 1280 -282 34 -622 44 -875 24z m725 -445 c936 -96 1763 -482 2431 -1137 574 -561 946 -1220 1128 -1997 64 -273 99 -594 99 -915 -1 -521 -93 -1015 -279 -1484 -151 -379 -356 -732 -610 -1051 -139 -174 -461 -496 -634 -634 -322 -256 -674 -460 -1050 -609 -813 -321 -1718 -370 -2565 -137 -435 119 -796 283 -1175 535 -620 413 -1139 1018 -1446 1688 -192 418 -306 851 -355 1342 -15 154 -15 555 0 710 69 700 280 1310 648 1869 265 403 621 779 1005 1059 656 479 1393 736 2238 781 113 6 420 -5 565 -20z"/>
<path d="M3400 6809 c-72 -12 -182 -67 -246 -123 -64 -56 -137 -162 -166 -241 -32 -85 -32 -213 0 -272 47 -90 160 -167 312 -215 l75 -23 -485 -5 c-531 -5 -513 -3 -571 -67 -60 -64 -59 -54 -59 -513 l0 -420 1010 0 1010 0 0 488 0 488 108 12 c59 6 118 9 132 7 14 -2 42 -7 63 -10 l37 -6 0 -489 0 -490 1010 0 1010 0 0 413 c0 393 -1 414 -21 457 -24 53 -52 85 -94 108 -26 15 -88 18 -510 22 l-480 5 95 33 c52 19 115 45 140 60 66 38 138 110 168 167 23 43 27 62 27 140 0 82 -3 97 -32 155 -110 222 -337 351 -563 320 -266 -36 -527 -209 -802 -532 l-103 -120 -55 63 c-300 349 -571 537 -839 584 -92 16 -92 16 -171 4z m191 -195 c176 -53 387 -213 577 -439 l75 -90 -34 -7 c-66 -15 -440 -21 -551 -9 -204 22 -354 76 -422 151 -50 55 -50 109 0 209 83 166 204 230 355 185z m1933 -4 c107 -40 192 -147 203 -254 7 -72 -1 -99 -42 -145 -71 -78 -215 -115 -520 -132 -118 -7 -257 -9 -337 -4 -127 6 -137 8 -128 25 18 33 255 274 326 330 91 73 208 146 282 176 71 29 144 31 216 4z"/>
<path d="M2440 3773 c0 -694 3 -1010 11 -1038 14 -51 81 -116 136 -133 30 -9 245 -12 872 -12 l831 0 0 1090 0 1090 -925 0 -925 0 0 -997z"/>
<path d="M4610 3680 l0 -1090 828 0 c567 0 840 4 867 11 55 15 101 52 128 102 l22 42 3 1013 2 1012 -925 0 -925 0 0 -1090z"/>
</g>
</svg>`;

export { fetchMovieList, fetchMovieAvailability ,ticket,bell,gift }