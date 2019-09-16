(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{292:function(t,a,s){"use strict";s.r(a);var e=s(38),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),s("p",[s("code",[t._v("Vapper")]),t._v(" looks for the "),s("code",[t._v("vapper.config.js")]),t._v(" file in the project root and loads the object exported by the file as a configuration option:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// vapper.config.js")]),t._v("\nmodule"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"mode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mode","aria-hidden":"true"}},[t._v("#")]),t._v(" mode")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("string")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("'production'")])])]),t._v(" "),s("p",[t._v("Specify the startup mode of "),s("code",[t._v("Vapper")]),t._v(", production mode or development mode, the optional values are "),s("code",[t._v("'development'")]),t._v(" and "),s("code",[t._v("'production'")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"entry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#entry","aria-hidden":"true"}},[t._v("#")]),t._v(" entry")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("string")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("'src/main'")])])]),t._v(" "),s("p",[t._v("Specify the "),s("router-link",{attrs:{to:"/entry.html"}},[t._v("entry file")]),t._v(" of your project. By default, follow the convention of "),s("code",[t._v("Vue CLI")]),t._v(" and use the "),s("code",[t._v("src/main.js")]),t._v(" file as the entry file. If you use "),s("a",{attrs:{href:"https://poi.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Poi"),s("OutboundLink")],1),t._v(" then you need to change this option to: "),s("code",[t._v("'src/index.js'")]),t._v(".")],1),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",[t._v("The "),s("code",[t._v("entry")]),t._v(" option needs to be consistent with the "),s("code",[t._v("entry")]),t._v(" option in the "),s("code",[t._v("vue.config.js")]),t._v("(or "),s("code",[t._v("poi.config.js")]),t._v(") configuration file.")])]),t._v(" "),s("h2",{attrs:{id:"ssr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssr","aria-hidden":"true"}},[t._v("#")]),t._v(" ssr")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("boolean")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("true")])])]),t._v(" "),s("p",[t._v("Whether to enable "),s("code",[t._v("SSR")]),t._v(" mode, the default is to enable, all pages will be rendered on the server. You can control whether a routing rule enables "),s("code",[t._v("SSR")]),t._v(" by routing Meta.")]),t._v(" "),s("h2",{attrs:{id:"template"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#template","aria-hidden":"true"}},[t._v("#")]),t._v(" template")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("string")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("''")])])]),t._v(" "),s("p",[t._v("Customize the "),s("code",[t._v("html")]),t._v(" template, for example:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// vapper.config.js")]),t._v("\nmodule"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fs"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("readFileSync")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'/path/to/your/template'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'utf-8'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("The default template is:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token doctype"}},[t._v("<!DOCTYPE html>")]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("data-vue-meta-server-rendered")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("lang")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("en"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("{{{")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("meta.inject().htmlAttrs.text()")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("}}}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("{{{")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("meta.inject().headAttrs.text()")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("}}}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("charset")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("utf-8"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("http-equiv")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("X-UA-Compatible"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("IE=edge"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    {{{ meta.inject().meta.text() }}}\n    {{{ meta.inject().title.text() }}}\n    {{{ meta.inject().link.text() }}}\n    {{{ meta.inject().style.text() }}}\n    {{{ meta.inject().script.text() }}}\n    {{{ meta.inject().noscript.text() }}}\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("{{{")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("meta.inject().bodyAttrs.text()")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("}}}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!--vue-ssr-outlet--\x3e")]),t._v("\n    {{{ meta.inject().script.text({ body: true }) }}}\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"port"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#port","aria-hidden":"true"}},[t._v("#")]),t._v(" port")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("number")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("4000")])])]),t._v(" "),s("p",[t._v("Server port number.")]),t._v(" "),s("h2",{attrs:{id:"host"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#host","aria-hidden":"true"}},[t._v("#")]),t._v(" host")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("string")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("0.0.0.0")])])]),t._v(" "),s("p",[t._v("Server host.")]),t._v(" "),s("h2",{attrs:{id:"loglevel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loglevel","aria-hidden":"true"}},[t._v("#")]),t._v(" logLevel")]),t._v(" "),s("ul",[s("li",[t._v("TYpe: "),s("code",[t._v("number")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("5")])])]),t._v(" "),s("p",[t._v("Set the log level:")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("logLevel "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" 0 ----"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" silent\nlogLevel "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" 1 ----"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" error\nlogLevel "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" 2 ----"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" error/warn\nlogLevel "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" 3 ----"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" error/warn/debug\nlogLevel "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" 4 ----"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" error/warn/debug/tip\nlogLevel "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" 5 ----"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" error/warn/debug/tip/info\n")])])]),s("h2",{attrs:{id:"static"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#static","aria-hidden":"true"}},[t._v("#")]),t._v(" static")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("object")])]),t._v(" "),s("li",[t._v("Default:")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  dotfiles"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'allow'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  index"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  maxAge"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'1d'")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v("Vapper")]),t._v(" internally uses "),s("a",{attrs:{href:"https://github.com/expressjs/serve-static",target:"_blank",rel:"noopener noreferrer"}},[t._v("serve-static"),s("OutboundLink")],1),t._v(" to serve static resources. The options are the same as for "),s("a",{attrs:{href:"https://github.com/expressjs/serve-static",target:"_blank",rel:"noopener noreferrer"}},[t._v("serve-static"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugins","aria-hidden":"true"}},[t._v("#")]),t._v(" plugins")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("array")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("[]")])])]),t._v(" "),s("p",[t._v("To specify which plugins to load, see: "),s("router-link",{attrs:{to:"/using-plugin.html#using-plugin"}},[t._v("Using Plugins")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"htmlminifier-prod-only"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#htmlminifier-prod-only","aria-hidden":"true"}},[t._v("#")]),t._v(" htmlMinifier (Prod Only)")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("boolean | object")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("false")])])]),t._v(" "),s("p",[t._v("Vapper allows to minimize html content rendered by the server. This option is only available in production environments and is not minimize by default. You can set "),s("code",[t._v("htmlMinifier")]),t._v(" to "),s("code",[t._v("true")]),t._v(" so that "),s("code",[t._v("Vapper")]),t._v(" will use the default configuration to minimize "),s("code",[t._v("html")]),t._v(" content. You can also set the "),s("code",[t._v("htmlMinifier")]),t._v(" option to an object and manually specify the appropriate minimize options. "),s("code",[t._v("Vapper")]),t._v(" uses "),s("a",{attrs:{href:"https://github.com/kangax/html-minifier",target:"_blank",rel:"noopener noreferrer"}},[t._v("html-minifier"),s("OutboundLink")],1),t._v(" to minimize the "),s("code",[t._v("html")]),t._v(" string. If "),s("code",[t._v("htmlMinifier")]),t._v(" is "),s("code",[t._v("true")]),t._v(", then the default minimize option is :")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  collapseWhitespace"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  removeRedundantAttributes"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  removeScriptTypeAttributes"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  removeStyleLinkTypeAttributes"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  useShortDoctype"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  minifyCSS"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"fallbackspa"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fallbackspa","aria-hidden":"true"}},[t._v("#")]),t._v(" fallBackSpa")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("boolean")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("true")])])]),t._v(" "),s("p",[t._v("Whether to fall back the "),s("code",[t._v("SPA")]),t._v(" mode when an error occurs, the default is "),s("code",[t._v("true")]),t._v(". Read "),s("router-link",{attrs:{to:"/error-handling.html#fall-back-to-spa-mode"}},[t._v("Fall back to SPA mode")]),t._v(" for more details.")],1),t._v(" "),s("h2",{attrs:{id:"serverbundlefilename"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#serverbundlefilename","aria-hidden":"true"}},[t._v("#")]),t._v(" serverBundleFileName")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("string")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("'vue-ssr-server-bundle.json'")])])]),t._v(" "),s("p",[t._v("Specifies the file name of the Server Bundle.")]),t._v(" "),s("h2",{attrs:{id:"clientmanifestfilename"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clientmanifestfilename","aria-hidden":"true"}},[t._v("#")]),t._v(" clientManifestFileName")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("string")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("'vue-ssr-client-manifest.json'")])])]),t._v(" "),s("p",[t._v("Specifies the file name of the Client Manifest.")]),t._v(" "),s("h2",{attrs:{id:"pagecache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pagecache","aria-hidden":"true"}},[t._v("#")]),t._v(" pageCache")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("object")])]),t._v(" "),s("li",[t._v("Default:")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  cacheOptions "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    max"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("100")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    maxAge"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1000")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token function-variable function"}},[t._v("cacheable")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token function-variable function"}},[t._v("getCacheKey")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" req "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" req"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Configure page level caching. For details, see: "),s("router-link",{attrs:{to:"/caching.html#page-level-cache-micro-caching"}},[t._v("Page-level cache (micro-caching)")])],1),t._v(" "),s("h2",{attrs:{id:"rendereroptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rendereroptions","aria-hidden":"true"}},[t._v("#")]),t._v(" rendererOptions")]),t._v(" "),s("ul",[s("li",[t._v("Type: "),s("code",[t._v("object")])]),t._v(" "),s("li",[t._v("Default: "),s("code",[t._v("{}")])])]),t._v(" "),s("p",[t._v("Set the options for "),s("a",{attrs:{href:"https://ssr.vuejs.org/api/#renderer-options",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-server-renderer"),s("OutboundLink")],1),t._v(".")])])},[],!1,null,null,null);a.default=n.exports}}]);