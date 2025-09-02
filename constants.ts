import { Car, Color } from './types';

const SUZUKI_PHONE_NUMBER = '6281318902428';

const ZETA_COLORS: Color[] = [
    { name: 'Pearl Brave Khaki', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FXL-7-03%2FXL7415F.24GLMTP%2Fcolors%2FPearlBraveKhaki_1722508651816.webp&w=384&q=75' },
    { name: 'Cool Black', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FXL-7-03%2FXL7415F.24GLMTP%2Fcolors%2FCoolBlack_1722508662565.webp&w=384&q=75' },
    { name: 'Snow White Pearl', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FXL-7-03%2FXL7415F.24GLMTP%2Fcolors%2FSnowWhitePearl_1722508670951.webp&w=384&q=75' },
    { name: 'Metallic Magma Grey', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FXL-7-03%2FXL7415F.24GLMTP%2Fcolors%2FMetallicMagmaGrey_1722508682626.webp&w=384&q=75' },
];

const BETA_COLORS: Color[] = [
    { name: 'Pearl Brave Khaki', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FXL-7-03%2FXL7415F.24GXATP%2Fcolors%2FPearlBraveKhaki_1722508897373.webp&w=384&q=75' },
    { name: 'Cool Black', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FXL-7-03%2FXL7415F.24GXATP%2Fcolors%2FCoolBlack_1722508861295_1729850224059.webp&w=384&q=75' },
    { name: 'Snow White Pearl', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FXL-7-03%2FXL7415F.24GXATP%2Fcolors%2FSnowWhitePearl_1722508919364.webp&w=384&q=75' },
    { name: 'Metallic Magma Grey', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FXL-7-03%2FXL7415F.24GXATP%2Fcolors%2FMetallicMagmaGrey_1722508929566.webp&w=384&q=75' },
];

const ALPHA_COLORS: Color[] = [
    { name: 'Cool Black', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FXL-7-03%2FXL7415F.24GSATP%2Fcolors%2FCoolBlack_1722509238546_1729665668184.webp&w=384&q=75' },
];

const ALPHA_2_TONE_COLORS: Color[] = [
    { name: 'Sunrise Orange + Black', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FXL-7-03%2FXL7415F.34GSATR%2Fcolors%2FSunriseOrange-Black_1722509264353.webp&w=384&q=75' },
    { name: 'White + Black', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FXL-7-03%2FXL7415F.34GSATR%2Fcolors%2FWhite-Black_1722509273682.webp&w=384&q=75' },
    { name: 'New Savanna Ivory + Black', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FXL-7-03%2FXL7415F.34GSATR%2Fcolors%2FNewSavannaIvory-Black_1722509283295_1728968756038_1729850391010.webp&w=384&q=75' },
];

const JIMNY_3_DOOR_COLORS: Color[] = [
    { name: 'Jungle Green', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2F6G415VX00001ATP%2Fcolors%2Fimage385_1713433798682.jpg&w=384&q=75' },
    { name: 'Pearl Bluish Black', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2F6G415VX00001ATP%2Fcolors%2Fimage383_1713435037702.jpg&w=384&q=75' },
    { name: 'Granite Grey Metallic', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2F6G415VX00001ATP%2Fcolors%2Fimage384_1713435116638.jpg&w=384&q=75' },
    { name: 'White', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2F6G415VX00001ATP%2Fcolors%2Fimage386_1713435248031.jpg&w=384&q=75' },
    { name: 'Silky Silver Metallic', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2F6G415VX00001ATP%2Fcolors%2Fimage382_1713435352480_1730346730827.jpg&w=384&q=75' },
];

const JIMNY_3_DOOR_2_TONE_COLORS: Color[] = [
    { name: 'Kinetic Yellow + Bluish Black Pearl', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2F6G415VX00002ATP%2Fcolors%2Fimage387_1713433881455.jpg&w=384&q=75' },
    { name: 'Chiffon Ivory Metallic + Bluish Black Pearl', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2F6G415VX00002ATP%2Fcolors%2Fimage388_1713434878941.jpg&w=384&q=75' },
    { name: 'Brisk Blue Metallic + Bluish Black Pearl', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2F6G415VX00002ATP%2Fcolors%2Fimage381_1713434931928.jpg&w=384&q=75' },
];

const ERTIGA_GL_COLORS: Color[] = [
    { name: 'Mellow Deep Red', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FALL-NEW-ERTIGA-05%2FARK415FM05GLATP%2Fcolors%2FGLANEMERAH_1726624631889.png&w=384&q=75' },
    { name: 'Silky Silver', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FALL-NEW-ERTIGA-05%2FARK415FM05GLATP%2Fcolors%2FGLANESILVER_1726624651818.png&w=384&q=75' },
    { name: 'Cool Black', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FALL-NEW-ERTIGA-05%2FARK415FM05GLATP%2Fcolors%2FGLANEHITAM_1726624662388.png&w=384&q=75' },
    { name: 'Snow White', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FALL-NEW-ERTIGA-05%2FARK415FM05GLATP%2Fcolors%2FGLANEPUTIH_1726624671886.png&w=384&q=75' },
    { name: 'Magma Grey', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FALL-NEW-ERTIGA-05%2FARK415FM05GLATP%2Fcolors%2FGLANEGREY_1726624685361.png&w=384&q=75' },
    { name: 'Brave Khaki', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FALL-NEW-ERTIGA-05%2FARK415FM05GLATP%2Fcolors%2FGLANEMERAHMARUN_1726624586978.png&w=384&q=75' },
];

const ERTIGA_GX_COLORS: Color[] = [
    { name: 'Mellow Deep Red', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FALL-NEW-ERTIGA-06%2FARK415FM06GXATR%2Fcolors%2FANEGXATmellowdeepredDesktopvers_1721882034945.webp&w=384&q=75' },
    { name: 'Silky Silver Metallic', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FALL-NEW-ERTIGA-06%2FARK415FM06GXATR%2Fcolors%2FANEGXATSILKYSILVERMETALLICdekstopvers_1721882050233.webp&w=384&q=75' },
    { name: 'Cool Black Metallic', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FALL-NEW-ERTIGA-06%2FARK415FM06GXATR%2Fcolors%2FANEGXATCOOLBLACKMETdekstopvers_1721882068988.webp&w=384&q=75' },
    { name: 'Snow White', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FALL-NEW-ERTIGA-06%2FARK415FM06GXATR%2Fcolors%2FANEGXATSNOWWHITEdekstopvers_1721882081431.webp&w=384&q=75' },
    { name: 'Metallic Magma Gray', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FALL-NEW-ERTIGA-06%2FARK415FM06GXATR%2Fcolors%2FANEGXATMET.MAGMAGRAY2desktopvers_1721882093820.webp&w=384&q=75' },
];

const ERTIGA_CRUISE_COLORS: Color[] = [
    { name: 'Cool Black Metallic', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FALL-NEW-ERTIGA-06%2FARK415FM09SSATR%2Fcolors%2FCRUISEMTCOOLBLACKMETdesktopvers_1721883515042_1730104082528.webp&w=384&q=75' },
];

const ERTIGA_CRUISE_2_TONE_COLORS: Color[] = [
    { name: 'Pearl Snow White + Black', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FALL-NEW-ERTIGA-06%2FARK415FM19SSMTR%2Fcolors%2FCRUISEtwotoneHYBRIDMTDesktopVers_1721883503391_1730104177033.webp&w=384&q=75' },
];

const SPRESSO_COLORS: Color[] = [
    { name: 'White', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FS-PRESSO-02%2FBU4FL0000001ATP%2Fcolors%2FWHITE_1723101492652.webp&w=384&q=75' },
    { name: 'Silky Silver', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FS-PRESSO-02%2FBU4FL0000001ATP%2Fcolors%2FSILVER_1723101504860.webp&w=384&q=75' },
    { name: 'Solid Fire Red', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FS-PRESSO-02%2FBU4FL0000001ATP%2Fcolors%2FRED_1723101514145.webp&w=384&q=75' },
    { name: 'Solid Sizzle Orange', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FS-PRESSO-02%2FBU4FL0000001ATP%2Fcolors%2FORANGE_1723101525534.webp&w=384&q=75' },
    { name: 'Granite Grey', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FS-PRESSO-02%2FBU4FL0000001ATP%2Fcolors%2FGREY_1723101538214.webp&w=384&q=75' },
];

const CARRY_PICKUP_COLORS: Color[] = [
    { name: 'Superior White', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-CARRY-03%2FAEV415P.44FDMTP%2Fcolors%2FSuzukiCarryFlatDeck_HeroAngle%5BFINAL%5D_1729075277330.png&w=384&q=75' },
    { name: 'Silky Silver', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-CARRY-03%2FAEV415P.44FDMTP%2Fcolors%2FSuzukiCarryFlatDeck_HeroAngle-SILVER%5BFINAL%5D_1729075287755.png&w=384&q=75' },
    { name: 'Real Black', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-CARRY-03%2FAEV415P.44FDMTP%2Fcolors%2FSuzukiCarryFlatDeck_HeroAngle-BLACK%5BFINAL%5D_1729075296284.png&w=384&q=75' },
];

const CARRY_PICKUP_AC_PS_COLORS: Color[] = [
    ...CARRY_PICKUP_COLORS,
    { name: 'Prime Graphite Grey', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-CARRY-03%2FAEV415P.44FDMTP%2Fcolors%2FPrimeGraphiteGreyresize_1756091353206.png&w=384&q=75' },
];

const APV_BLIND_VAN_COLORS: Color[] = [
    { name: 'Superior White', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FAPV%2FGC415V.M71BVMTP%2Fcolors%2FBlanvan_Flatt_FLIP_1726651060851.png&w=384&q=75' },
];

const APV_GL_GX_COLORS: Color[] = [
    { name: 'Cool Black Metallic', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FAPV%2FGC415V.M72SXMTP%2Fcolors%2FsgxCoolblackmetallic_1726548085759_1729764787236.png&w=384&q=75' },
    { name: 'Silky Silver Metallic', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FAPV%2FGC415V.M72SXMTP%2Fcolors%2Fsgxsilvermetallic_1726548105898.png&w=384&q=75' },
    { name: 'Graphite Grey Metallic', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FAPV%2FGC415V.M72SXMTP%2Fcolors%2Fsgxgraphitegreymetallic_1726548402005.png&w=384&q=75' },
    { name: 'Burgundy Red Pearl', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FAPV%2FGC415V.M72SXMTP%2Fcolors%2FsgxBurgandy_1726548381012.png&w=384&q=75' },
];

const APV_SGX_COLORS: Color[] = [
    ...APV_GL_GX_COLORS,
    { name: 'Pearl White', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FAPV%2FGC415V.M72SXMTP%2Fcolors%2FsgxPearlwhite_1726548423175.png&w=384&q=75' },
];

export const CAR_MODELS: Car[] = [
  {
    id: 1,
    name: 'FRONX',
    imageUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/3224/suzuki-fronx-front-angle-low-view-885241.jpg',
    variants: [
        { 
            name: 'GL MT', 
            price: 261800000,
            colors: [
                { name: 'Cool Black', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2FA3L415FM00GLMTS%2Fcolors%2FGLcoolblack_1748358708241.png&w=384&q=75' },
                { name: 'Magma Grey', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2FA3L415FM00GLMTS%2Fcolors%2FGLMagmagrey_1748358733268.png&w=384&q=75' },
                { name: 'Snow White', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2FA3L415FM00GLMTS%2Fcolors%2FGLsnowwhite_1748858530069.png&w=384&q=75' },
            ]
        },
        { 
            name: 'GL AT', 
            price: 278800000,
            colors: [
                { name: 'Cool Black', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2FA3L415FM00GLMTS%2Fcolors%2FGLcoolblack_1748358708241.png&w=384&q=75' },
                { name: 'Magma Grey', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2FA3L415FM00GLMTS%2Fcolors%2FGLMagmagrey_1748358733268.png&w=384&q=75' },
                { name: 'Snow White', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2FA3L415FM00GLMTS%2Fcolors%2FGLsnowwhite_1748858530069.png&w=384&q=75' },
            ]
        },
        { 
            name: 'GX MT', 
            price: 292200000,
            colors: [
                { name: 'Magma Grey', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2FA3L415FM00GXMTS%2Fcolors%2FGXmagmagrey_1748359284935.png&w=384&q=75' },
                { name: 'Cool Black', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2FA3L415FM00GXMTS%2Fcolors%2FGXcoolblack_1748359046983.png&w=384&q=75' },
                { name: 'Snow White', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2FA3L415FM00GXMTS%2Fcolors%2FGXsnowwhite_1748858607349.png&w=384&q=75' },
                { name: 'Savanna Ivory', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2FA3L415FM00GXMTS%2Fcolors%2FGXsavanaivory_1748858664829.png&w=384&q=75' },
            ]
        },
        { 
            name: 'GX AT', 
            price: 309200000,
            colors: [
                { name: 'Magma Grey', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2FA3L415FM00GXMTS%2Fcolors%2FGXmagmagrey_1748359284935.png&w=384&q=75' },
                { name: 'Cool Black', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2FA3L415FM00GXMTS%2Fcolors%2FGXcoolblack_1748359046983.png&w=384&q=75' },
                { name: 'Snow White', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2FA3L415FM00GXMTS%2Fcolors%2FGXsnowwhite_1748858607349.png&w=384&q=75' },
                { name: 'Savanna Ivory', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2FA3L415FM00GXMTS%2Fcolors%2FGXsavanaivory_1748858664829.png&w=384&q=75' },
            ]
        },
        { 
            name: 'SGX AT', 
            price: 322600000,
            colors: [
                { name: 'Cool Black', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2FA3L415FM00GXATS%2Fcolors%2FGXcoolblack_1748359636227.png&w=384&q=75' },
                { name: 'Snow White', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2FA3L415FM00SXATS%2Fcolors%2FSGXsnowwhite(flip)_1755157326466.png&w=384&q=75'},
                { name: 'Savanna Ivory', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2FA3L415FM00SXATS%2Fcolors%2FSGXsavannaivory(flip)_1755157278203.png&w=384&q=75'}
            ]
        },
        { 
            name: 'SGX AT 2 TONE', 
            price: 324600000,
            colors: [
                { name: 'Ice Grayish Blue + Black', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2FA3L415FM01SXATS%2Fcolors%2FSGX-ICEGRAYISHBLUE-BLACKdesktop_1748360026875.png&w=384&q=75' },
                { name: 'Snow White', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2FA3L415FM01SXATS%2Fcolors%2FSGXSNOWWHITE_1748858881588.png&w=384&q=75' },
                { name: 'Savanna Ivory + Black', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FFRONX%2FA3L415FM01SXATS%2Fcolors%2FSGX-SAVANNAIVORY-BLACKDESKTOP_1748858916591.png&w=384&q=75' }
            ]
        },
    ],
  },
  {
    id: 2,
    name: 'JIMNY 5 DOOR',
    imageUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/2890/suzuki-jimny-5-door-front-angle-low-view-938666.jpg',
    variants: [
        { 
            name: 'MT', 
            price: 496900000,
            colors: [
                { name: 'Jungle Green', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2F6N415VX00011ATR%2Fcolors%2FFrame16202_1713433821733.jpg&w=384&q=75' },
                { name: 'Pearl Bluish Black', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2F6N415VX00011ATR%2Fcolors%2F5door-pearlbluishblack4_1723808032782.webp&w=384&q=75' },
                { name: 'Granite Grey Metallic', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2F6N415VX00011ATR%2Fcolors%2FFrame16204_1713435972318.jpg&w=384&q=75' },
            ]
        },
        { 
            name: 'AT', 
            price: 508700000,
            colors: [
                { name: 'Jungle Green', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2F6N415VX00011ATR%2Fcolors%2FFrame16202_1713433821733.jpg&w=384&q=75' },
                { name: 'Pearl Bluish Black', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2F6N415VX00011ATR%2Fcolors%2F5door-pearlbluishblack4_1723808032782.webp&w=384&q=75' },
                { name: 'Granite Grey Metallic', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2F6N415VX00011ATR%2Fcolors%2FFrame16204_1713435972318.jpg&w=384&q=75' },
            ]
        },
        { 
            name: 'MT 2 TONE', 
            price: 499500000,
            colors: [
                { name: 'Sizzling Red + Bluish Black Pearl', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2F6N415VX00012MTR%2Fcolors%2FFrame16199_1713431885380.jpg&w=384&q=75' },
                { name: 'Kinetic Yellow + Bluish Black Pearl', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2F6N415VX00012MTR%2Fcolors%2FFrame16201_1713431912949.jpg&w=384&q=75' },
                { name: 'Chiffon Ivory Metallic + Bluish Black Pearl', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2F6N415VX00012MTR%2Fcolors%2FFrame16198_1713432237530.jpg&w=384&q=75' },
            ]
        },
        { 
            name: 'AT 2 TONE', 
            price: 511900000,
            colors: [
                { name: 'Sizzling Red + Bluish Black Pearl', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2F6N415VX00012MTR%2Fcolors%2FFrame16199_1713431885380.jpg&w=384&q=75' },
                { name: 'Kinetic Yellow + Bluish Black Pearl', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2F6N415VX00012MTR%2Fcolors%2FFrame16201_1713431912949.jpg&w=384&q=75' },
                { name: 'Chiffon Ivory Metallic + Bluish Black Pearl', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2F6N415VX00012MTR%2Fcolors%2FFrame16198_1713432237530.jpg&w=384&q=75' },
            ]
        },
        { 
            name: 'AT White Rhino', 
            price: 522300000,
            colors: [
                { name: 'White Rhino', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FNEW-JIMNY-FE%2F6N415VX00013ATR%2Fcolors%2FJIMNY_Frontal_Limited_Edition_WHITE-JIMNY_5-DOORS_1732505074689.png&w=384&q=75' },
            ]
        },
    ],
  },
  {
    id: 3,
    name: 'NEW XL7 HYBRID',
    imageUrl: 'https://suzukicdn.com/uploads/news/mobil_new_xl7_hybrid.webp',
    variants: [
        { name: 'ZETA MT', price: 259200000, colors: ZETA_COLORS },
        { name: 'ZETA AT', price: 270000000, colors: ZETA_COLORS },
        { name: 'BETA MT HYBRID', price: 281100000, colors: BETA_COLORS },
        { name: 'BETA AT HYBRID', price: 292200000, colors: BETA_COLORS },
        { name: 'ALPHA MT HYBRID', price: 292300000, colors: ALPHA_COLORS },
        { name: 'ALPHA AT HYBRID', price: 303400000, colors: ALPHA_COLORS },
        { name: 'ALPHA MT HYBRID 2 TONE', price: 294300000, colors: ALPHA_2_TONE_COLORS },
        { name: 'ALPHA AT HYBRID 2 TONE', price: 305400000, colors: ALPHA_2_TONE_COLORS },
    ],
  },
  {
    id: 4,
    name: 'GRAND VITARA',
    imageUrl: 'https://imgcdn.oto.com/large/gallery/exterior/37/2721/suzuki-grand-vitara-2023-front-deep-low-angle-view-980696.jpg',
    variants: [
        { 
            name: 'GX AT', 
            price: 403200000,
            colors: [
                { name: 'Pearl Midnight Black', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FGRAND-VITARA%2FPQ5FX00000GXATP%2Fcolors%2FPEARLMIDNIGHTBLACKVITARACOLORSGX_1713499195666_1728911992465.png&w=384&q=75' },
                { name: 'Pearl Celestial Blue', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FGRAND-VITARA%2FPQ5FX00000GXATP%2Fcolors%2FPEARLCELESTIALBLUEVITARACOLORSGX_1713499163114_1729843365989.png&w=384&q=75' },
            ]
        },
        { 
            name: 'GX AT 2 TONE', 
            price: 406100000,
            colors: [
                { name: 'Pearl Artic White + Black', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FGRAND-VITARA%2FPQ5FX00001GXATP%2Fcolors%2FSuzukiYFG_Front45%C3%83%C2%82%C3%82%C2%BAPassengerside_GXDualTone-ArticWhitePearlcopy_1724660265643_1729843732973.webp&w=384&q=75' },
                { name: 'Splendid Silver + Black', imageUrl: 'https://auto.suzuki.co.id/_next/image?url=https%3A%2F%2Fdbqhesxwpvcn8.cloudfront.net%2Fmodels%2FGRAND-VITARA%2FPQ5FX00001GXATP%2Fcolors%2Fvitara_1725610155479.png&w=384&q=75' },
            ]
        },
    ],
  },
  {
    id: 5,
    name: 'JIMNY 3 DOOR',
    imageUrl: 'https://imgcdn.oto.com/medium/gallery/exterior/37/782/suzuki-jimny-front-angle-low-view-177244.jpg',
    variants: [
        { name: 'MT', price: 511500000, colors: JIMNY_3_DOOR_COLORS },
        { name: 'AT', price: 524000000, colors: JIMNY_3_DOOR_COLORS },
        { name: 'MT 2 TONE', price: 514800000, colors: JIMNY_3_DOOR_2_TONE_COLORS },
        { name: 'AT 2 TONE', price: 527300000, colors: JIMNY_3_DOOR_2_TONE_COLORS },
    ],
  },
  {
    id: 6,
    name: 'ALL NEW ERTIGA HYBRID',
    imageUrl: 'https://www.liputanoke.com/foto_berita/45060275997-screenshot_2024-03-29_at_20.png',
    variants: [
        { name: 'GA', price: 241750000 },
        { name: 'MC GL MT', price: 263400000, colors: ERTIGA_GL_COLORS },
        { name: 'MC GL AT', price: 274200000, colors: ERTIGA_GL_COLORS },
        { name: 'MC GX MT', price: 277800000, colors: ERTIGA_GX_COLORS },
        { name: 'MC GX AT', price: 289400000, colors: ERTIGA_GX_COLORS },
        { name: 'CRUISE MT', price: 281000000, colors: ERTIGA_CRUISE_COLORS },
        { name: 'CRUISE MT 2T', price: 283000000, colors: ERTIGA_CRUISE_2_TONE_COLORS },
        { name: 'CRUISE AT', price: 292800000, colors: ERTIGA_CRUISE_COLORS },
        { name: 'CRUISE AT 2 TONE', price: 294800000, colors: ERTIGA_CRUISE_2_TONE_COLORS },
    ],
  },
  {
    id: 7,
    name: 'S.PRESSO',
    imageUrl: 'https://suzukicdn.com/uploads/news/Minimalis_dan_Stylish!_Ini_Alasan_Suzuki_S-Presso_Cocok_Untuk_Anda.webp',
    variants: [
        { name: 'MT', price: 176600000, colors: SPRESSO_COLORS },
        { name: 'AT', price: 186600000, colors: SPRESSO_COLORS },
    ],
  },
  {
    id: 8,
    name: 'NEW CARRY PICK-UP',
    imageUrl: 'https://suzukicdn.com/uploads/news/new_carry_pick_up.webp',
    variants: [
        { name: 'FD', price: 175500000, colors: CARRY_PICKUP_COLORS },
        { name: 'FD AC PS', price: 183500000, colors: CARRY_PICKUP_AC_PS_COLORS },
        { name: 'WD', price: 176600000, colors: CARRY_PICKUP_COLORS },
        { name: 'WD AC PS', price: 184400000, colors: CARRY_PICKUP_AC_PS_COLORS },
    ],
  },
  {
    id: 9,
    name: 'APV',
    imageUrl: 'https://suzukicdn.com/uploads/news/cropped-image1755828084029.webp',
    variants: [
        { name: 'GE BLIND VAN', price: 186700000, colors: APV_BLIND_VAN_COLORS },
        { name: 'GE PS MT AB', price: 228000000 },
        { name: 'GL MT AB', price: 236400000, colors: APV_GL_GX_COLORS },
        { name: 'GX MT AB', price: 246500000, colors: APV_GL_GX_COLORS },
        { name: 'SGX MT AB', price: 253900000, colors: APV_SGX_COLORS },
    ],
  },
];

export const WHATSAPP_BASE_URL = `https://wa.me/${SUZUKI_PHONE_NUMBER}`;

export const HANDOVER_IMAGES: string[] = [
  'https://i.imghippo.com/files/jtYM6430cQ.jpeg',
  'https://i.imghippo.com/files/DuEX1926BHU.jpeg',
  'https://i.imghippo.com/files/jA4759Mh.jpeg',
  'https://i.imghippo.com/files/HsuJ8361fYg.jpeg',
  'https://i.imghippo.com/files/kmjj3442QIo.jpeg',
  'https://i.imghippo.com/files/XRww2914LUw.jpeg',
  'https://i.imghippo.com/files/xupA9800U.jpeg',
  'https://i.imghippo.com/files/DrYM5307eo.jpeg',
  'https://i.imghippo.com/files/wHlx1811rOg.jpeg',
  'https://i.imghippo.com/files/xe8728sqk.jpeg',
  'https://i.imghippo.com/files/qpjz1924YgI.jpeg',
];