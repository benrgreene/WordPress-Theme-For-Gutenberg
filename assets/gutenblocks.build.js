!function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=2)}([,,function(e,t,a){"use strict";a(3),a(13),a(4),a(5),a(6)},function(e,t,a){"use strict";var r=wp.compose.createHigherOrderComponent,n=wp.element.Fragment,c=wp.editor.InspectorControls,o=wp.components,l=o.PanelBody,i=(o.ColorPalette,r(function(e){return function(t){return"brg/archive-block"==t.name?React.createElement(n,null,React.createElement(e,t),React.createElement(c,null,React.createElement(l,null,React.createElement("div",null,React.createElement("div",null,React.createElement("label",{for:"post-type"},"Post Type")),React.createElement("div",null,React.createElement("select",{onChange:function(e){t.setAttributes({"data-post-type":e.target.value})},id:"post-type",value:t.attributes["data-post-type"]},React.createElement("option",{value:"post"},"Post")))),React.createElement("hr",null),React.createElement("div",null,React.createElement("label",{for:"number-per-page"},"Number Per Page")),React.createElement("div",null,React.createElement("input",{onChange:function(e){t.setAttributes({"data-per-page":e.target.value})},type:"number",id:"number-per-page",value:t.attributes["data-per-page"]||10}))))):React.createElement(n,null,React.createElement(e,t))}},"withInspectorControl"));wp.hooks.addFilter("editor.BlockEdit","brg/archive-block/with-inspector-controls",i),wp.hooks.addFilter("blocks.getBlockAttributes","brg-archive-block/validate-container-attributes",function(e,t,a){if("brg/archive-block"==t.name){var r=document.createElement("div");r.innerHTML=a;var n=r.firstChild;[{name:"data-post-type",type:"string"},{name:"data-per-page",type:"number"}].forEach(function(a){t.attributes[a.name]={type:a.type,default:""};var r=n.getAttribute(a.name);r&&(e[a.name]=r)})}return e}),wp.hooks.addFilter("blocks.getSaveElement","brg-archive-block/save-container-attributes",function(e,t,a){"brg/archive-block"==t.name&&[{name:"data-post-type",default:"post"},{name:"data-per-page",default:10}].forEach(function(t){e.props[t.name]=a[t.name]||t.default});return e})},function(e,t,a){"use strict";var r=wp.blocks.registerBlockType,n=wp.editor;n.InspectorControls,n.BlockControls,wp.components.PanelBody;r("brg/archive-block",{title:"Archive Block",description:"Adds an archive for a post type",category:"layout",icon:"book-alt",edit:function(e){var t=e.attributes;e.className,e.isSelected,e.setAttributes;return[React.createElement("div",{"data-archive":!0,"data-post-type":t["data-post-type"],"data-per-page":t["data-per-page"]},React.createElement("div",{"data-post-wrapper":!0}),React.createElement("div",{"data-pagination":!0}))]},save:function(e){e.attributes;return React.createElement("div",{"data-archive":!0},React.createElement("div",{"data-post-wrapper":!0}),React.createElement("div",{"data-pagination":!0}))}})},function(e,t,a){"use strict";var r=wp.blocks.registerBlockType,n=wp.editor.InnerBlocks;r("brg/sidebar-block",{title:"Sidebar Block",description:"Adds the page sidebar to the side of the block",category:"layout",icon:"format-image",edit:function(e){e.attributes,e.className,e.setAttributes;return React.createElement("div",{className:"editor--sidebar-block",style:{backgroundColor:"#F4F4F4"}},React.createElement(n,null))},save:function(e){e.attributes;return React.createElement("div",{className:"sidebar-block"},React.createElement("div",{className:"sidebar-block__content"},React.createElement(n.Content,null)),'[display_sidebar classes="sidebar-block__sidebar"]')}})},function(e,t,a){"use strict";var r=wp.blocks.registerBlockType;wp.editor.InnerBlocks;r("brg/podcast-feed",{title:"Podcast Feed",description:"Adds an podcast feed",category:"layout",icon:"controls-volumeon",edit:function(e){var t=e.attributes;e.className,e.setAttributes;return React.createElement("div",{className:"editor--sidebar-block",style:{backgroundColor:"#FBFBFB",padding:"10px 4px"}},React.createElement("div",{"data-feed-url":t["data-feed-url"],"data-per-page":t["data-per-page"]},React.createElement("div",{"data-podcast-feed":"true"}),React.createElement("div",{"data-podcast-pagination":"true"})))},save:function(e){e.attributes;return React.createElement("div",null,React.createElement("div",{"data-podcast-feed":"true"}),React.createElement("div",{"data-podcast-pagination":"true"}))}})},,,,,,,function(e,t,a){"use strict";var r=wp.compose.createHigherOrderComponent,n=wp.element.Fragment,c=wp.editor.InspectorControls,o=wp.components,l=o.PanelBody,i=(o.ColorPalette,r(function(e){return function(t){return"brg/podcast-feed"==t.name?React.createElement(n,null,React.createElement(e,t),React.createElement(c,null,React.createElement(l,null,React.createElement("div",null,React.createElement("div",null,React.createElement("label",{for:"feed-url"},"Feed URL")),React.createElement("div",null,React.createElement("input",{onChange:function(e){t.setAttributes({"data-feed-url":e.target.value})},type:"text",id:"feed-url",value:t.attributes["data-feed-url"]||""}))),React.createElement("div",null,React.createElement("label",{for:"number-per-page"},"Number Per Page")),React.createElement("div",null,React.createElement("input",{onChange:function(e){t.setAttributes({"data-per-page":e.target.value})},type:"number",id:"number-per-page",value:t.attributes["data-per-page"]||10}))))):React.createElement(n,null,React.createElement(e,t))}},"withInspectorControl"));wp.hooks.addFilter("editor.BlockEdit","brg/archive-block/with-inspector-controls",i),wp.hooks.addFilter("blocks.getBlockAttributes","brg-archive-block/validate-container-attributes",function(e,t,a){if("brg/podcast-feed"==t.name){var r=document.createElement("div");r.innerHTML=a;var n=r.firstChild;[{name:"data-feed-url",type:"string"},{name:"data-per-page",type:"number"}].forEach(function(a){t.attributes[a.name]={type:a.type,default:""};var r=n.getAttribute(a.name);r&&(e[a.name]=r)})}return e}),wp.hooks.addFilter("blocks.getSaveElement","brg-podcast-feed/save-container-attributes",function(e,t,a){"brg/podcast-feed"==t.name&&[{name:"data-feed-url",default:"post"},{name:"data-per-page",default:10}].forEach(function(t){e.props[t.name]=a[t.name]||t.default});return e})}]);