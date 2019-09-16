(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{272:function(t,a,s){"use strict";s.r(a);var e=s(38),r=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("Vapper 要求 Vue 的版本号为 2.6+")])]),t._v(" "),s("h2",{attrs:{id:"集成到-vue-cli-3-项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集成到-vue-cli-3-项目","aria-hidden":"true"}},[t._v("#")]),t._v(" 集成到 Vue CLI 3 项目")]),t._v(" "),s("p",[t._v("1、使用 "),s("code",[t._v("vue create")]),t._v(" 命令创建项目：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("yarn global add @vue/cli\nvue create my-vapper-app\n")])])]),s("p",[t._v("如果你已经有了一个使用 "),s("code",[t._v("Vue CLI")]),t._v(" 创建的项目，则可以跳过此步骤。")]),t._v(" "),s("p",[t._v("2、安装 "),s("code",[t._v("@vapper/core")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("yarn add @vapper/core vue-router\n")])])]),s("p",[s("code",[t._v("Vapper")]),t._v(" 项目中必须要安装并使用 "),s("a",{attrs:{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-router"),s("OutboundLink")],1),t._v("，如果你在创建项目的时候已经安装了 "),s("code",[t._v("vue-router")]),t._v("，则可以忽略。")]),t._v(" "),s("p",[t._v("3、添加 "),s("code",[t._v("npm scripts")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"scripts"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"dev"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"vapper dev"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"build"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"vapper build"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"start"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"vapper start"')]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("4、修改入口文件：")]),t._v(" "),s("p",[t._v("最后，你需要按照 "),s("code",[t._v("SSR")]),t._v(" 的要求修改你的入口文件："),s("router-link",{attrs:{to:"/zh/entry.html"}},[t._v("入口文件文档")])],1),t._v(" "),s("h2",{attrs:{id:"集成到-poi-项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集成到-poi-项目","aria-hidden":"true"}},[t._v("#")]),t._v(" 集成到 Poi 项目")]),t._v(" "),s("p",[t._v("1、使用 "),s("code",[t._v("create-poi-app")]),t._v(" 创建项目：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("yarn global add create-poi-app\ncreate-poi-app my-vapper-app\n")])])]),s("p",[t._v("如果你已经有了一个 "),s("code",[t._v("Poi")]),t._v(" 项目，则可以跳过此步骤。")]),t._v(" "),s("p",[t._v("2、安装依赖：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("yarn add @vapper/core @vapper/configer-poi vue vue-router vue-template-compiler -D\n")])])]),s("p",[t._v("3、修改 "),s("code",[t._v("vapper.config.js")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entry"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'src/index.js'")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("因为 "),s("code",[t._v("vapper")]),t._v(" 默认的入口文件是 "),s("code",[t._v("src/main.js")]),t._v("，而 "),s("code",[t._v("Poi")]),t._v(" 默认的入口文件为 "),s("code",[t._v("src/index.js")]),t._v("。")]),t._v(" "),s("p",[t._v("4、添加 "),s("code",[t._v("npm scripts")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v('"scripts"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"dev"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"vapper dev"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"build"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"vapper build"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token property"}},[t._v('"start"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"vapper start"')]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("5、修改入口文件：")]),t._v(" "),s("p",[t._v("最后，你需要按照 "),s("code",[t._v("SSR")]),t._v(" 的要求修改你的入口文件："),s("router-link",{attrs:{to:"/zh/entry.html"}},[t._v("入口文件文档")])],1)])},[],!1,null,null,null);a.default=r.exports}}]);