(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{312:function(t,s,e){"use strict";e.r(s);var a=e(13),n=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"椅子モデルパックの詳細"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#椅子モデルパックの詳細"}},[t._v("#")]),t._v(" 椅子モデルパックの詳細")]),t._v(" "),s("ul",[s("li",[t._v("このwikiは "),s("code",[t._v("1.12.2")]),t._v(" または "),s("code",[t._v("1.16.5")]),t._v(" の最新バージョンのTouhou Little Maid modに適用されます。")]),t._v(" "),s("li",[t._v("バニラの Minecraft リソースパックの構造を理解する必要があります。")]),t._v(" "),s("li",[t._v("JSON 形式の理解が必要です。")]),t._v(" "),s("li",[t._v("現在、 "),s("strong",[t._v("1.10.0 または 1.12.0 Bedrock Edition Model")]),t._v(" のみをサポートしています。")]),t._v(" "),s("li",[t._v("For file editing software, we recommend "),s("code",[t._v("Visual Studio Code")]),t._v(", all related files requires to be saved using "),s("code",[t._v("UTF-8 without BOM")]),t._v(".")])]),t._v(" "),s("h2",{attrs:{id:"model-packs-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#model-packs-structure"}},[t._v("#")]),t._v(" Model Packs Structure")]),t._v(" "),s("p",[t._v("To better understand how to create model packs, we listed here the structure format for model packs")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("model pack folder\n│\n├─pack.mcmeta\n├─pack.png\n└─assets\n    └─my_model_pack\n        ├─maid_chair.json\n        ├─lang\n        │    ├─en_us.lang\n        │    └─zh_cn.lang\n        ├─models\n        │     └─entity\n        │            ├─cushion.json\n        │            └─wheel_chair.json\n        └─textures\n                 └─entity\n                        ├─cushion.png\n                        └─wheel_chair.png\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])]),s("h2",{attrs:{id:"model-packs-description-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#model-packs-description-files"}},[t._v("#")]),t._v(" Model Packs Description Files")]),t._v(" "),s("p",[t._v("The file complete structure is as below, only the parts marked '(Required)' requires to be filled, you don't have to fill everything.")]),t._v(" "),s("p",[t._v("The model supports JSON files with comments, please use at your discretion.")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Model pack name (Required)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pack_name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Custom Chair Model Packs"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Author list")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"author"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TartaricAcid"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SuccinicAcid"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Description for model packs")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Default Model Packs"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Model pack version")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Date creation for model pack")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"date"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-08-20"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Model pack icon, without this, the model pack will have no icon")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"icon"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"touhou_little_maid:textures/chair_icon.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Model list (Required)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"model_list"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Model id, no duplication allowed (Required)")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"model_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"touhou_little_maid:cushion"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The path for the model, use the full resource path")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"model"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"touhou_little_maid:models/entity/cushion.json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The path for the texture, use the full resource path")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"texture"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"touhou_little_maid:textures/entity/cushion.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The model size when rendering the item form, default is 1.0")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"render_item_scale"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The size when render the entity, range is between 0.2~2.0, default is 1.0")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"render_entity_scale"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.75")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The entity height(pixels) above ground when sat on, default is 3")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mounted_height"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Will tamed entities such as maids can sit on it, default is true")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tameable_can_ride"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Whether the chair has gravity, the default is false")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"no_gravity"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Model name")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Cushion"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The description for the model")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Just A Normal Cushion"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Animation script reference, without this part, chair will not have any animation")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// tlm-utils plugins can auto generate the correct animation reference based on the group name")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"animation"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"touhou_little_maid:animation/chair/passenger/rotation.js"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br"),s("span",{staticClass:"line-number"},[t._v("41")]),s("br"),s("span",{staticClass:"line-number"},[t._v("42")]),s("br"),s("span",{staticClass:"line-number"},[t._v("43")]),s("br"),s("span",{staticClass:"line-number"},[t._v("44")]),s("br"),s("span",{staticClass:"line-number"},[t._v("45")]),s("br"),s("span",{staticClass:"line-number"},[t._v("46")]),s("br"),s("span",{staticClass:"line-number"},[t._v("47")]),s("br"),s("span",{staticClass:"line-number"},[t._v("48")]),s("br"),s("span",{staticClass:"line-number"},[t._v("49")]),s("br"),s("span",{staticClass:"line-number"},[t._v("50")]),s("br"),s("span",{staticClass:"line-number"},[t._v("51")]),s("br")])]),s("p",[t._v("The example above listed all usable field, only the field with '(Required)' are needed, the rest can be omitted.")]),t._v(" "),s("p",[t._v("For simplicity, you could write a file like this:")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Model pack name (Required)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pack_name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Custom Chair Model Packs"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Model list (Required)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"model_list"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Model id, no duplication allowed (Required)")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"model_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"touhou_little_maid:cushion"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("p",[t._v("If we do not fill the field for "),s("code",[t._v("model")]),t._v(" or "),s("code",[t._v("texture")]),t._v(", it will choose the default model and texture based on "),s("code",[t._v("model_id")]),t._v(".")]),t._v(" "),s("p",[t._v("For the example above, "),s("code",[t._v("model_id")]),t._v(" is "),s("code",[t._v("touhou_little_maid:cushion")]),t._v(", then the model file will be "),s("code",[t._v("cushion.json")]),t._v(" under "),s("code",[t._v("models/entity")]),t._v(" folder, the texture will be "),s("code",[t._v("cushion.png")]),t._v(" under "),s("code",[t._v("textures/entity")]),t._v(" folder.")]),t._v(" "),s("p",[t._v("If we filled the field for "),s("code",[t._v("model")]),t._v(" or "),s("code",[t._v("texture")]),t._v(", then the content has no limit, and can even share a model or texture for multiple characters.")]),t._v(" "),s("p",[s("code",[t._v("mounted_height")]),t._v(" is the height of the entity when it is riding the model, the unit is the pixels above ground, you can use decimals.")]),t._v(" "),s("blockquote",[s("p",[t._v("The "),s("code",[t._v("X")]),t._v(" and "),s("code",[t._v("Z")]),t._v(" position of the riding entity will always be the center of the chair entity, please preset the "),s("code",[t._v("X")]),t._v(" and "),s("code",[t._v("Z")]),t._v(" of the chair models when designing the models.")])]),t._v(" "),s("h2",{attrs:{id:"animated-icon"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#animated-icon"}},[t._v("#")]),t._v(" Animated Icon")]),t._v(" "),s("p",[t._v("Icon does not have size limit, supports both static and animated icons.")]),t._v(" "),s("p",[t._v("Any icon with a scale of 1:1 will be interpreted as static icon. Any long icon that is not 1:1 scale, will be displayed slowly with a 0.1 second interval, which creates the animated effect.")]),t._v(" "),s("blockquote",[s("p",[t._v("The image below is the icon in the mod, left is static icon, and right is the animated icon.")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/VoulqpR.png",alt:"020"}})]),t._v(" "),s("h2",{attrs:{id:"model-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#model-files"}},[t._v("#")]),t._v(" Model Files")]),t._v(" "),s("ul",[s("li",[t._v("This mod is using JSON files in Bedrock "),s("code",[t._v("1.10.0")]),t._v(" or "),s("code",[t._v("1.12.0")]),t._v(" for model loading, the document can be exported via model building software "),s("a",{attrs:{href:"https://blockbench.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Blockbench"),s("OutboundLink")],1),t._v(", without additional edits.")]),t._v(" "),s("li",[t._v("There are many preset animations, you only need to name a specific group, and then the plugin will automatically generate the corresponding animation script reference when exporting the model. For all available names, please see the "),s("RouterLink",{attrs:{to:"/preset_animation.html"}},[t._v("Preset Animation")]),t._v(" chapter.")],1),t._v(" "),s("li",[t._v("Model also support JavaScript custom animations, you can find the introduction in the custom animation chapter.")])]),t._v(" "),s("h2",{attrs:{id:"internationlization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#internationlization"}},[t._v("#")]),t._v(" Internationlization")]),t._v(" "),s("p",[t._v("As a game that are facing internationlization, part of the contents of model packs also have internationalization compability.")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("pack_name")]),t._v(" and "),s("code",[t._v("description")]),t._v(" field in model packs support internationalization;")]),t._v(" "),s("li",[s("code",[t._v("name")]),t._v(" and "),s("code",[t._v("description")]),t._v(" field in model list support internationalization.")])]),t._v(" "),s("p",[t._v("The method of adding internationalization is pretty simple, just need to begin it using "),s("code",[t._v("{")]),t._v(" and end it using "),s("code",[t._v("}")]),t._v(", the middle section is the internationlization key, and then followed by the corresponding language file.")]),t._v(" "),s("p",[t._v("For example we wrote the description as follow (taking just a small section)")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pack_name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{pack.vanilla_chair_model.name}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{pack.vanilla_chair_model.desc}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("and then under model pack namespace, in the "),s("code",[t._v("lang")]),t._v(" folder we create "),s("code",[t._v("en_us.lang")]),t._v(" file, and write the content below:")]),t._v(" "),s("div",{staticClass:"language-properties line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("pack.vanilla_chair_model.name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("Custom Chair Model Packs")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("pack.vanilla_chair_model.desc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("Default Model Packs")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("We only added the English file, but if we want to support Chinese, we can create "),s("code",[t._v("zh_cn.lang")]),t._v(" file and write the content as below:")]),t._v(" "),s("div",{staticClass:"language-properties line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("pack.vanilla_chair_model.name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("自定义坐垫模型包")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("pack.vanilla_chair_model.desc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("默认的模型包")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("For the first example, if we did not fill the "),s("code",[t._v("name")]),t._v(" file, then the system will automatically create the local key based on "),s("code",[t._v("model_id")]),t._v(", for example "),s("code",[t._v("model_id")]),t._v(" is "),s("code",[t._v("touhou_little_maid:cushion")]),t._v(", then the generated language key is "),s("code",[t._v("model.touhou_little_maid.cushion.name")]),t._v(".")]),t._v(" "),s("p",[s("code",[t._v("description")]),t._v(" file is not generated by default, you will need to fill that in.")])])}),[],!1,null,null,null);s.default=n.exports}}]);