/*https://github.com/hominhtri135/DoNot-Starve-Together

https://nodejs.org/dist/v14.17.5/node-v14.17.5-x64.msi
https://discord.com/developers/applications

npm i node.js
npm i discord.js@12.5.3
npm i axios
npm i moment

*/

var settings = {
    "data": {
        "prefix": "!",
        "cmdConnect": {
            "link": "link", //lệnh liên kết kênh với Bot
            "unlink": "unlink", //lệnh huỷ liên kết Bot 
            "cmdLink":  function(){return `${settings.data.prefix}${this.link}`},
            "cmdUnlink": function(){return `${settings.data.prefix}${this.unlink}`}
        },
        "pathGame": "D:/SteamLibrary/steamapps/common/Don't Starve Together", //thay đường dẫn game tại đây, LƯU Ý dấu ngăn cách thư mục phải là dấu "/"
        "token": "",
        "admin": [
            "357107576896487425", //admin 1
            "id_user_discord_2", //admin 2
            "id_user_discord_3", //admin 3
            //...
        ],
        "idChannel": [
            "Id_Channel_Discord", //Thiết lập sẵn kênh cho Bot - có thể bỏ qua
        ],
        "pathFile": {
            "type": "", //change type server
            "pathIn":  function(){return `${settings.data.pathGame}/data/unsafedata/sendtogame${this.type}.json`},
            "pathOut": function(){return `${settings.data.pathGame}/data/unsafedata/sendtodiscord${this.type}.json`}
        }
    },
    "steamMarket": {
        "currency": "VND", //change currency here
        "success": false,
        "lowest_price": 0,
        "median_price": 0,
        "currencies": {
            "USD": 1,  // United States dollar
            "GBP": 2,  // British pound sterling
            "EUR": 3,  // The euro
            "CHF": 4,  // Swiss franc
            "RUB": 5,  // Russian ruble
            "PLN": 6,  // Polish złoty
            "BRL": 7,  // Brazilian real
            "JPY": 8,  // Japanese yen
            "SEK": 9,  // Swedish krona
            "IDR": 10,  // Indonesian rupiah
            "MYR": 11,  // Malaysian ringgit
            "BWP": 12,  // Botswana pula
            "SGD": 13,  // Singapore dollar
            "THB": 14,  // Thai baht
            "VND": 15,  // Vietnamese dong
            "KRW": 16,  // South Korean won
            "TRY": 17,  // Turkish lira
            "UAH": 18,  // Ukrainian hryvnia
            "MXN": 19,  // Mexican Peso
            "CAD": 20,  // Canadian dollar
            "AUD": 21,  // Australian dollar
            "NZD": 22,  // New Zealand dollar
            "CNY": 23,  // Chinese yuan
            "INR": 24,  // Indian rupee
            "CLP": 25,  // Chilean peso
            "PEN": 26,  // Peruvian sol
            "COP": 27,  // Colombian peso
            "ZAR": 28,  // South African rand
            "HKD": 29,  // Hong Kong dollar
            "TWD": 30,  // New Taiwan dollar
            "SAR": 31,  // Saudi riyal
            "AED": 32,  // United Arab Emirates dirham
        },
        "fnCurrency": function(){return `${settings.steamMarket.currencies[`${this.currency}`]}`},
    },
	"notify": {
        "default": {
            "color": 0xFFFFFF,
            "icon": "https://cdn.discordapp.com/attachments/932233908458758204/932233992713936926/Announce_x48.png",
            "image": "https://cdn.forums.klei.com/monthly_2017_10/klei.thumb.png.aba30c9eb1f32633dc5a53506a0b7250.png"
        },
        "server": {
            "color": 0xC67E29,
            "icon": "https://cdn.discordapp.com/attachments/932335658838659154/932336311526883368/KleiServer.png"
        },
        "chat": {
            "color": 0xc0cfb2,
            "icon": ""
        },
        "announce": {
            "color": 0xFFFFFF,
            "icon": "https://cdn.discordapp.com/attachments/932233908458758204/932233992713936926/Announce_x48.png"
        },
        "death": {
            "color": 0xC6C7BD,
            "icon": "https://cdn.discordapp.com/attachments/932236314659676172/933968829736955975/Death-3_x48.png"
            // "icon": "https://cdn.discordapp.com/attachments/932236314659676172/932236380111777812/Death_x48.png"
        },
        "join_game": {
            "color": 0x005F00,
            "icon": "https://cdn.discordapp.com/attachments/932237423365210152/938750951362269285/join_x48.png"
        },
        "leave_game": {
            "color": 0x000000,
            "icon": "https://cdn.discordapp.com/attachments/932237535642550313/932237631662743552/Leave_x48.png"
        },
        "resurrect": {
            "color": 0xF24848,
            "icon": "https://cdn.discordapp.com/attachments/932237918708334602/941718065706590248/Res.png"
        },
        "kicked_from_game": {
            "color": 0x5A3D1F,
            "icon": "https://cdn.discordapp.com/attachments/932237736314802216/932237787715997726/Kick_x48.png"
        },
        "banned_from_game": {
            "color": 0x000000,
            "icon": "https://cdn.discordapp.com/attachments/932236093292703754/932236213102997504/Ban_x48.png"
        },
        "item_drop": {
            "color": 0xB20000,
            "icon": "https://cdn.discordapp.com/attachments/932237830183338046/932237886001147924/Kill_x48.png"
        },
        "vote": {
            "color": 0x2A4985,
            "icon": "https://cdn.discordapp.com/attachments/932238623775027223/932238664434601984/Vote_x48.png"
        },
        "dice_roll": {
            "color": 0xCFCEC6,
            "icon": "https://cdn.discordapp.com/attachments/932238004381179905/932238060001853550/Random_x48.png"
        },
        "mod": {
            "color": 0x636156,
            "icon": "https://cdn.discordapp.com/attachments/932238540690055168/932238578136801322/Mod_x48.png"
        },
        "skin": {
            "color": 0x7B392E,
            "icon": "https://haruhikawaii.ddns.net/dstpng/gift.png"
        }
    },
}

module.exports = settings;
