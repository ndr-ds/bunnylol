'use strict';const COMMANDS={ghgs:{name:"GitHub Global Search",url:"https://www.github.com/search?type=code&q=",searchurl:"https://www.github.com/search?type=code&q="},ghs:{name:"GitHub Search",url:"https://github.com/linera-io/linera-protocol/search?type=code&q=",searchurl:"https://github.com/linera-io/linera-protocol/search?type=code&q="},gh:{name:"GitHub PRs/Issues",url:"https://github.com/linera-io/linera-protocol/pull/",searchurl:"https://github.com/linera-io/linera-protocol/pull/"},g:{name:"Google",url:"https://google.com/",searchurl:"https://www.google.com/search?q="},rust:{name:"Rust Docs",url:"https://doc.rust-lang.org/std/?search=",searchurl:"https://doc.rust-lang.org/std/?search="},DEFAULT:{name:"Default - Google Search",url:"https://google.com/",searchurl:"https://www.google.com/search?q="}},viewHelpPage=function(){const a=Object.keys(COMMANDS).map(a=>{const b=COMMANDS[a];return{name:b.name,url:b.url,command:a}});$("#help-table").DataTable({data:a,columns:[{data:"command",title:"Command"},{data:"name",title:"Name"},{data:"url",title:"URL"}],order:[[1,"asc"]],paging:!1})},redirect=async function(a){await window.location.replace(a)},bunnylol=async function(a){let b=[];if(a.startsWith("$")?(b=a.split(/[ $+]/g),b[0]="$",""===b[1]&&(b=["$"])):b=a.split(/[ +]/g),0<b.length){const c=b[0].endsWith(".")?b[0].substring(0,b[0].length-1).toLowerCase():b[0].toLowerCase();if(c in COMMANDS){const d=COMMANDS[c],e=new URL(d.url).protocol;if("https:"!==e&&"http:"!==e&&viewHelpPage(),d.searchurl&&1!==b.length){const b="$"===c?c.length:c.length+1;return await redirect(`${d.searchurl}${encodeURIComponent(a.substr(b))}`),!0}return await redirect(d.url),!0}}return!1},currCmd=new URL(window.location.href).searchParams.get("search")??"help";switch(currCmd){case"help":viewHelpPage();break;default:bunnylol(currCmd).then(a=>{!a&&COMMANDS.DEFAULT.searchurl&&redirect(`${COMMANDS.DEFAULT.searchurl}${encodeURIComponent(currCmd)}`)}).catch(a=>{console.log(a)});}