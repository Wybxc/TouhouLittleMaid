(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{323:function(t,s,e){"use strict";e.r(s);var a=e(13),n=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"maid-model-pack-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maid-model-pack-details"}},[t._v("#")]),t._v(" Maid Model Pack Details")]),t._v(" "),s("ul",[s("li",[t._v("This wiki applies to Touhou Little Maid mod in "),s("code",[t._v("1.12.2")]),t._v(" or "),s("code",[t._v("1.16.5")]),t._v(" latest version;")]),t._v(" "),s("li",[t._v("Requires understanding of vanilla Minecraft's resource pack structure;")]),t._v(" "),s("li",[t._v("Requires understanding of JSON format;")]),t._v(" "),s("li",[t._v("Currently only supports models for "),s("strong",[t._v("1.10.0 or 1.12.0 Bedrock Edition Model")]),t._v(".")]),t._v(" "),s("li",[t._v("For file editing software, we recommend "),s("code",[t._v("Visual Studio Code")]),t._v(", all related files requires to be saved using "),s("code",[t._v("UTF-8 without BOM")]),t._v(".")])]),t._v(" "),s("h2",{attrs:{id:"model-packs-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#model-packs-structure"}},[t._v("#")]),t._v(" Model Packs Structure")]),t._v(" "),s("p",[t._v("To better understand how to create model packs, we listed here the structure format for model packs")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("model pack folder\n│\n├─pack.mcmeta\n├─pack.png\n└─assets\n    └─my_model_pack\n        ├─maid_model.json\n        ├─lang\n        │    ├─en_us.lang\n        │    └─zh_cn.lang\n        ├─models\n        │     └─entity\n        │            ├─cirno.json\n        │            └─daiyousei.json\n        └─textures\n                 └─entity\n                        ├─cirno.png\n                        └─daiyousei.png\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])]),s("h2",{attrs:{id:"model-packs-description-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#model-packs-description-files"}},[t._v("#")]),t._v(" Model Packs Description Files")]),t._v(" "),s("p",[t._v("The file complete structure is as below, only the parts marked '(Required)' requires to be filled, you don't have to fill everything.")]),t._v(" "),s("p",[t._v("The model supports JSON files with comments, please use at your discretion.")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Model pack name (Required)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pack_name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Touhou Project Model Packs"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Author list")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"author"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TartaricAcid"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SuccinicAcid"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Description for model packs")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Default Model Packs"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Model pack version")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Date creation for model pack")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"date"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-07-14"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Model pack icon, without this, the model pack will have no icon")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"icon"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"touhou_little_maid:textures/maid_icon.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Model list (Required)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"model_list"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Model id, no duplication allowed (Required)")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"model_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"touhou_little_maid:hakurei_reimu"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The path for the model, use the full resource path")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"model"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"touhou_little_maid:models/entity/hakurei_reimu.json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The path for the texture, use the full resource path")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"texture"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"touhou_little_maid:textures/entity/hakurei_reimu.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The model size when rendering the item form, default is 1.0")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"render_item_scale"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The size when render the entity, range is between 0.2~2.0, default is 1.0")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"render_entity_scale"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.75")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Model name")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Reimu Hakurei"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The description for the model")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Shrine Maiden of Hakurei"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Animation script reference, without this part, model will have some default animations")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// tlm-utils plugins can auto generate the correct animation reference based on the group name")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"animation"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"touhou_little_maid:animation/maid.default.js"')]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br"),s("span",{staticClass:"line-number"},[t._v("40")]),s("br"),s("span",{staticClass:"line-number"},[t._v("41")]),s("br"),s("span",{staticClass:"line-number"},[t._v("42")]),s("br"),s("span",{staticClass:"line-number"},[t._v("43")]),s("br"),s("span",{staticClass:"line-number"},[t._v("44")]),s("br"),s("span",{staticClass:"line-number"},[t._v("45")]),s("br")])]),s("p",[t._v("The example above listed all usable field, only the field with '(Required)' are needed, the rest can be omitted.")]),t._v(" "),s("p",[t._v("For simplicity, you could write a file like this:")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Model pack name (Required)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pack_name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Touhou Project Model Packs"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Model list (Required)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"model_list"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Model id, no duplication allowed (Required)")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"model_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"touhou_little_maid:hakurei_reimu"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("p",[t._v("If we do not fill the field for "),s("code",[t._v("model")]),t._v(" or "),s("code",[t._v("texture")]),t._v(", it will choose the default model and texture based on "),s("code",[t._v("model_id")]),t._v(".")]),t._v(" "),s("p",[t._v("For the example above, "),s("code",[t._v("model_id")]),t._v(" is "),s("code",[t._v("touhou_little_maid:hakurei_reimu")]),t._v(", then the model file will be "),s("code",[t._v("hakurei_reimu.json")]),t._v(" under "),s("code",[t._v("models/entity")]),t._v(" folder, the texture will be "),s("code",[t._v("hakurei_reimu.png")]),t._v(" under "),s("code",[t._v("textures/entity")]),t._v(" folder.")]),t._v(" "),s("p",[t._v("If we filled the field for "),s("code",[t._v("model")]),t._v(" or "),s("code",[t._v("texture")]),t._v(", then the content has no limit, and can even share a model or texture for multiple characters.")]),t._v(" "),s("h2",{attrs:{id:"animated-icon"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#animated-icon"}},[t._v("#")]),t._v(" Animated Icon")]),t._v(" "),s("p",[t._v("Icon does not have size limit, supports both static and animated icons.")]),t._v(" "),s("p",[t._v("Any icon with a scale of 1:1 will be interpreted as static icon. Any long icon that is not 1:1 scale, will be displayed slowly with a 0.1 second interval, which creates the animated effect.")]),t._v(" "),s("blockquote",[s("p",[t._v("The image below is the icon in the mod, left is static icon, and right is the animated icon.")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/VoulqpR.png",alt:"020"}})]),t._v(" "),s("h2",{attrs:{id:"model-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#model-files"}},[t._v("#")]),t._v(" Model Files")]),t._v(" "),s("ul",[s("li",[t._v("This mod is using JSON files in Bedrock "),s("code",[t._v("1.10.0")]),t._v(" or "),s("code",[t._v("1.12.0")]),t._v(" for model loading, the document can be exported via model building software "),s("a",{attrs:{href:"https://blockbench.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Blockbench"),s("OutboundLink")],1),t._v(", without additional edits.")]),t._v(" "),s("li",[t._v("There are many preset animations, you only need to name a specific group, and then the plugin will automatically generate the corresponding animation script reference when exporting the model. For all available names, please see the "),s("RouterLink",{attrs:{to:"/preset_animation.html"}},[t._v("Preset Animation")]),t._v(" chapter.")],1),t._v(" "),s("li",[t._v("Model also support JavaScript custom animations, you can find the introduction in the custom animation chapter.")])]),t._v(" "),s("h2",{attrs:{id:"internationlization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#internationlization"}},[t._v("#")]),t._v(" Internationlization")]),t._v(" "),s("p",[t._v("As a game that are facing internationlization, part of the contents of model packs also have internationalization compability.")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("pack_name")]),t._v(" and "),s("code",[t._v("description")]),t._v(" field in model packs support internationalization;")]),t._v(" "),s("li",[s("code",[t._v("name")]),t._v(" and "),s("code",[t._v("description")]),t._v(" field in model list support internationalization.")])]),t._v(" "),s("p",[t._v("The method of adding internationalization is pretty simple, just need to begin it using "),s("code",[t._v("{")]),t._v(" and end it using "),s("code",[t._v("}")]),t._v(", the middle section is the internationlization key, and then followed by the corresponding language file.")]),t._v(" "),s("p",[t._v("For example we wrote the description as follow (taking just a small section)")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pack_name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{pack.vanilla_touhou_model.name}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{pack.vanilla_touhou_model.desc}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("and then under model pack namespace, in the "),s("code",[t._v("lang")]),t._v(" folder we create "),s("code",[t._v("en_us.lang")]),t._v(" file, and write the content below:")]),t._v(" "),s("div",{staticClass:"language-properties line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("pack.vanilla_touhou_model.name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("Vanilla Touhou Model")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("pack.vanilla_touhou_model.desc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("Default Model Packs")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("We only added the English file, but if we want to support Chinese, we can create "),s("code",[t._v("zh_cn.lang")]),t._v(" file and write the content as below:")]),t._v(" "),s("div",{staticClass:"language-properties line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("pack.vanilla_touhou_model.name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("原版东方资源包")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("pack.vanilla_touhou_model.desc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("默认的模型包")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("For the first example, if we did not fill the "),s("code",[t._v("name")]),t._v(" file, then the system will automatically create the local key based on "),s("code",[t._v("model_id")]),t._v(", for example "),s("code",[t._v("model_id")]),t._v(" is "),s("code",[t._v("touhou_little_maid:cushion")]),t._v(", then the generated language key is "),s("code",[t._v("model.touhou_little_maid.cushion.name")]),t._v(".")]),t._v(" "),s("p",[s("code",[t._v("description")]),t._v(" file is not generated by default, you will need to fill that in.")]),t._v(" "),s("h2",{attrs:{id:"compatibility-issue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compatibility-issue"}},[t._v("#")]),t._v(" Compatibility Issue")]),t._v(" "),s("p",[t._v("Since models made by some authors are more unique, they may have some compability issues with maids' various addtional appearance parts. Here we address the issue with these non-standard models and how you can overcome it:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("Issues")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Solution")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("Uncoordinated animation")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Write a custom JavaScript animation script")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("Hold items are in incorrect position")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Use positional group to define the position")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("Disable showing hold items")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("As long as "),s("code",[t._v("armLeft")]),t._v(" or "),s("code",[t._v("armRight")]),t._v(" group does not exist, then the corresponding hold items will not be shown")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("Backpack is in incorrect position")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Use positional group to define the position")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("Backpack, trolley, vehicles, broom, custom head")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Write some fields as shown in the example below to close it")])])])]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pack_name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Touhou Project Pack"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"model_list"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"model_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"touhou_little_maid:hakurei_reimu"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"show_backpack"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Prevent displaying of backpack")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"show_custom_head"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Prevent displaying of maid's custom heads")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"show_hata"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Prevent displaying of hata sasimono, deprecated in 1.16")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"can_hold_trolley"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// prevent maid to hold the trolley, deprecated in 1.16")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"can_hold_vehicle"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Prevent maid to hold the vehicle, deprecated in 1.16")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"can_riding_broom"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Prevent maid to riding the broom, deprecated in 1.16")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("h2",{attrs:{id:"maid-easter-eggs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maid-easter-eggs"}},[t._v("#")]),t._v(" Maid Easter Eggs")]),t._v(" "),s("p",[t._v("We added maid naming easter egg function, specially named maid can use special models.")]),t._v(" "),s("p",[t._v("Writing easter egg script is pretty simple, the model will automatically detect it as easter egg models, and it won't show in skin menu.")]),t._v(" "),s("h3",{attrs:{id:"normal-easter-eggs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#normal-easter-eggs"}},[t._v("#")]),t._v(" Normal Easter Eggs")]),t._v(" "),s("p",[t._v("Below is the script for normal naming easter egg. Under normal naming easter egg, maid only need to be named as shown in the "),s("code",[t._v("tag")]),t._v(" field to use the model.")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pack_name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Touhou Project Model Pack"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"model_list"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"model_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"touhou_little_maid:hakurei_reimu"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"easter_egg"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IKUN~"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("h3",{attrs:{id:"encrypted-easter-eggs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#encrypted-easter-eggs"}},[t._v("#")]),t._v(" Encrypted Easter Eggs")]),t._v(" "),s("p",[t._v("Below  is the script for encrypted naming easter egg. For encrypted naming easter egg, maid has to be specially named, the naming has to be the same as SHA-1 value in the "),s("code",[t._v("tag")]),t._v(" below to use the model.")]),t._v(" "),s("p",[t._v("As the script below, when maid is named "),s("code",[t._v("IKUN~")]),t._v(", because the characters' SHA-1 value is "),s("code",[t._v("6dadb86d91cc4c0c2c7860e1cb16cec01e1b6511")]),t._v(", same as "),s("code",[t._v("tag")]),t._v(" field, it will use said model.")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pack_name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Touhou Project Model Pack"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"model_list"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"model_id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"touhou_little_maid:hakurei_reimu"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"easter_egg"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"encrypt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tag"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"6dadb86d91cc4c0c2c7860e1cb16cec01e1b6511"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("h2",{attrs:{id:"other-questions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#other-questions"}},[t._v("#")]),t._v(" Other Questions")]),t._v(" "),s("h3",{attrs:{id:"z-fighting-issue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#z-fighting-issue"}},[t._v("#")]),t._v(" Z-fighting Issue")]),t._v(" "),s("p",[t._v("This is an issue with OpenGL itself, during the process of creating models if we used flat or two coinciding solids, we will have this issue.")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/daYk77e.png",alt:"004"}})]),t._v(" "),s("p",[t._v("For the issue of one flat cube, you can add texture to one of the sides and keep the others empty, it will solve the issue; for two coinciding cube, move the cube slightly, or delete the coinciding cube.")]),t._v(" "),s("h3",{attrs:{id:"uppercase-lowercase"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uppercase-lowercase"}},[t._v("#")]),t._v(" Uppercase & Lowercase")]),t._v(" "),s("p",[t._v("In Minecraft, all the file names needs to be lowercase.")])])}),[],!1,null,null,null);s.default=n.exports}}]);