## Mock.js
ÓÃÀ´Ç°¶ËÄ£ÄâÊý¾Ý£¬¿çÓòÇëÇó£¬ÔÚÎÞºó¶Ë½Ó¿ÚµÄÇé¿öÏÂ£¬ÊµÏÖÇ°¶Ë¹¦ÄÜµÄ¶ÀÁ¢¿ª·¢¡£Github£ºhttps://github.com/nuysoft/Mock/wiki/Getting-Started

### Ò»¡¢°²×°
npm install mock.js

### ¶þ¡¢Ê¹ÓÃ
Ê¾Àý£º
var Mock = require('mockjs')'
var data = Mock.mock({
	//listÊÇÒ»¸öÊý×é£¬°üº¬1-10¸öÔªËØ
	'list|1-10':[{
		//id×ÔÔö£¬ÆðÊ¼Î»1£¬Ã¿´ÎÔö1
		'id|+1': 1
	}]
})

#### Mock.mock(rurl(¿ÉÑ¡), rtype(¿ÉÑ¡), template|function(options))
¸ù¾ÝÊý¾ÝÄ£°åÉú³ÉÄ£ÄâÊý¾Ý
rurl:url×Ö·û´®»òurlÕýÔò£»rtype:ÇëÇóÀàÐÍ£»template£ºÊý¾ÝÄ£°å£»funciton(options)£ºÉú³ÉÏìÓ¦Êý¾ÝµÄº¯Êý

#### Mock.setup(settings(¿ÉÑ¡))
ÅäÖÃÀ¹½ØAjaxÇëÇóÊ±µÄÐÐÎª
settings£ºtimeout
Mock.setup({
    timeout: '200-600'
})
Ö¸¶¨ÇëÇóµÄÏìÓ¦Ê±¼ä£¬ºÁÃë£¬ÏìÓ¦Ê±¼ä·¶Î§ÔÚ200µ½600

#### Mock.Random()
Éú³ÉËæ»úÊý¾Ý£¬¼´Õ¼Î»·û£¬@Õ¼Î»·û£¨²ÎÊý£©
var Random = Mock.Random
Random.email()
// => "n.clark@miller.io"
Mock.mock('@email')
// => "y.lee@lewis.org"
Mock.mock( { email: '@email' } )
// => { email: "v.lewis@hall.gov" }

#### Mock.valid(template,data)
Ð£ÑéÕæÊµÊý¾ÝdataÊÇ·ñÓëÄ£°åÆ¥Åä
var template = {
    name: 'value1'
}
var data = {
    name: 'value2'
}
Mock.valid(template, data)
// =>
[
    {
        "path": [
            "data",
            "name"
        ],
        "type": "value",
        "actual": "value2",
        "expected": "value1",
        "action": "equal to",
        "message": "[VALUE] Expect ROOT.name'value is equal to value1, but is value2"
    }
]

#### Mock.toJsonSchema(template)
½«templateÊý¾Ý×ª»»³ÉJSON Schema
var template = {
    'key|1-10': '¡ï'
}
Mock.toJSONSchema(template)
// =>
{
    "name": undefined,
    "path": [
        "ROOT"
    ],
    "type": "object",
    "template": {
        "key|1-10": "¡ï"
    },
    "rule": {},
    "properties": [{
        "name": "key",
        "path": [
            "ROOT",
            "key"
        ],
        "type": "string",
        "template": "¡ï",
        "rule": {
            "parameters": ["key|1-10", "key", null, "1-10", null],
            "range": ["1-10", "1", "10"],
            "min": 1,
            "max": 10,
            "count": 3,
            "decimal": undefined,
            "dmin": undefined,
            "dmax": undefined,
            "dcount": undefined
        }
    }]
}