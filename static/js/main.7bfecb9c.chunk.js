(this["webpackJsonprental-property"]=this["webpackJsonprental-property"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(6),i=n.n(o),r=(n(14),n(8)),c=n(1),s=n(2),m=n(4),u=n(3),d=n(5),p=(n(15),n(16),function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:this.props.id,className:"client-node animated flipInX"},l.a.createElement("svg",{style:{width:90,height:90,backgroundColor:this.props.color,borderRadius:150},viewBox:"5 -20 500 550"},l.a.createElement("path",{fill:"whitesmoke",d:"M256,0C114.623,0,0,114.614,0,256c0,141.377,114.623,256,256,256c141.386,0,256-114.623,256-256 C512,114.614,397.39,0,256,0z M363.479,384.004H148.521V274.666L256,167.188l107.479,107.47V384.004z M381.481,255.097 L256,129.629L130.528,255.101l-15.28-15.276L256.004,99.078l140.753,140.748L381.481,255.097z"})),l.a.createElement("div",{className:"client-info",style:{color:this.props.color,fontSize:12}},l.a.createElement("h4",{style:{marginTop:-88}},this.props.clientNum),l.a.createElement("div",{className:"startEnd",style:{marginTop:-30}},l.a.createElement("h4",null,this.props.startDay),l.a.createElement("h4",null,this.props.endDay)),l.a.createElement("h4",{style:{marginTop:18}},this.props.revenue)))}}]),t}(a.Component)),h=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"adjlist-section"},this.props.list.map((function(t,n){var a=n;return 0===a?a="start":a===e.props.list.length-1&&(a="end"),l.a.createElement("div",{className:"adj-list",id:"client-list"+Number(n+1),key:"list-"+n},l.a.createElement("h2",{id:"counter-"+a,style:{display:"none"},key:"counter"+n},"0"),l.a.createElement(p,{key:"vertex-"+n,id:"vertex-"+t.clientNum,clientNum:t.clientNum,startDay:t.startDay,endDay:t.endDay,revenue:t.revenue,color:e.props.color}),t.neighbors.map((function(e,n){return l.a.createElement(p,{key:"neighbor-"+n,id:"vertex-"+t.clientNum+"neighbor-"+e.clientNum,clientNum:e.clientNum,startDay:e.startDay,endDay:e.endDay,revenue:e.revenue,color:"whitesmoke"})})))})))}}]),t}(a.Component),g=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.list,n=this.props.type;return l.a.createElement("div",{className:n+"-list"},t.map((function(t,a){return l.a.createElement(p,{key:n+"-node-"+a,id:n+"-node-"+t.clientNum,clientNum:t.clientNum,startDay:t.startDay,endDay:t.endDay,revenue:t.revenue,color:e.props.color})})))}}]),t}(a.Component),v=(n(17),function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"openPopUp",value:function(e){document.getElementById(e).style.display="block"}},{key:"closePopUp",value:function(e){document.getElementById(e).style.display="none"}},{key:"render",value:function(){var e=this;this.props.list;return l.a.createElement("div",{className:"toolbar"},l.a.createElement("h1",null,"Finding Optimal Revenue and Path using Topological Sorting"),l.a.createElement("div",{className:"toolbar-options"},l.a.createElement("div",{className:"dropdown"},l.a.createElement("button",null,"Test Data Examples"),l.a.createElement("div",{className:"dropdown-content"},l.a.createElement("a",{onClick:function(){return e.openPopUp("example1")}},"Data Example 1"),l.a.createElement("a",{onClick:function(){return e.openPopUp("example2")}},"Data Example 2"),l.a.createElement("a",{onClick:function(){return e.openPopUp("example3")}},"Data Example 3"),l.a.createElement("a",{onClick:function(){return e.openPopUp("example4")}},"Data Example 4"))),l.a.createElement("div",{className:"dropdown"},l.a.createElement("button",{className:"instructions"},"Instructions"),l.a.createElement("div",{className:"dropdown-content"},l.a.createElement("a",{onClick:function(){return e.openPopUp("assignment")}},"Assignment/Motivation"),l.a.createElement("a",{onClick:function(){return e.openPopUp("entering-data")}},"Entering Data"),l.a.createElement("a",{onClick:function(){return e.openPopUp("adj-step")}},"Adjacency List"),l.a.createElement("a",{onClick:function(){return e.openPopUp("topo-step")}},"Topological Sort"),l.a.createElement("a",{onClick:function(){return e.openPopUp("rev-step")}},"Finding Optimal Revenue"),l.a.createElement("a",{onClick:function(){return e.openPopUp("path-step")}},"Finding Optimal Path")))),l.a.createElement("div",{className:"pop-up-example",id:"example1"},l.a.createElement("p",null,"10 40 100 ",l.a.createElement("br",null),"20 70 200 ",l.a.createElement("br",null),"50 80 120 ",l.a.createElement("br",null),l.a.createElement("br",null),"(CopyAndPaste)"),l.a.createElement("button",{onClick:function(){return e.closePopUp("example1")}},"Close")),l.a.createElement("div",{className:"pop-up-example",id:"example2"},l.a.createElement("p",null,"10 40 100 ",l.a.createElement("br",null),"10 20 50 ",l.a.createElement("br",null),"20 70 200 ",l.a.createElement("br",null),"50 80 120 ",l.a.createElement("br",null),"70 100 200 ",l.a.createElement("br",null),l.a.createElement("br",null),"(CopyAndPaste)"),l.a.createElement("button",{onClick:function(){return e.closePopUp("example2")}},"Close")),l.a.createElement("div",{className:"pop-up-example",id:"example3"},l.a.createElement("p",null,"60 100 543 ",l.a.createElement("br",null),"53 97 670 ",l.a.createElement("br",null),"41 72 650 ",l.a.createElement("br",null),"15 54 92 ",l.a.createElement("br",null),"36 82 416",l.a.createElement("br",null),"15 37 283",l.a.createElement("br",null),"14 85 661",l.a.createElement("br",null),"9 90 210",l.a.createElement("br",null),"28 63 843",l.a.createElement("br",null),"32 61 887",l.a.createElement("br",null),"42 51 812",l.a.createElement("br",null),l.a.createElement("br",null),"(CopyAndPaste)"),l.a.createElement("button",{onClick:function(){return e.closePopUp("example3")}},"Close")),l.a.createElement("div",{className:"pop-up-example",id:"example4"},l.a.createElement("p",null,"4 7 67",l.a.createElement("br",null),"7 8 33",l.a.createElement("br",null),"4 8 90",l.a.createElement("br",null),"1 5 96",l.a.createElement("br",null),"7 8 97",l.a.createElement("br",null),"4 10 70",l.a.createElement("br",null),"3 8 89",l.a.createElement("br",null),"4 10 54",l.a.createElement("br",null),"3 5 43",l.a.createElement("br",null),"3 4 70",l.a.createElement("br",null),"6 7 48",l.a.createElement("br",null),"8 9 34",l.a.createElement("br",null),"4 5 83",l.a.createElement("br",null),"3 9 63",l.a.createElement("br",null),"3 8 60",l.a.createElement("br",null),"1 4 24",l.a.createElement("br",null),"6 8 41",l.a.createElement("br",null),"3 9 33",l.a.createElement("br",null),"6 10 32",l.a.createElement("br",null),"1 8 32",l.a.createElement("br",null),"1 3 47",l.a.createElement("br",null),l.a.createElement("br",null),"(CopyAndPaste)"),l.a.createElement("button",{onClick:function(){return e.closePopUp("example4")}},"Close")),l.a.createElement("div",{className:"pop-up-item",id:"assignment"},l.a.createElement("p",null,"Suppose you have a rental property for which you have received requests from potential clients in the following form: (start date, end date, amount willing to pay). At one time, only one client can use the property and the reward for renting out will be the amount they are willing to offer. Suppose, for example, the property is available over the next 100 days. The start and end dates will, therefore, be integers between 1 and 100. "),l.a.createElement("div",{className:"data-images"},l.a.createElement("div",{id:"assignment-image1"}),l.a.createElement("div",{id:"assignment-image2"}),l.a.createElement("div",{id:"assignment-image3"})),l.a.createElement("button",{onClick:function(){return e.closePopUp("assignment")}},"Close")),l.a.createElement("div",{className:"pop-up-item",id:"entering-data"},l.a.createElement("p",null,"Each client is represented but each line. In the example you can see that the first two lines are entered. Each client must contain a start day, end day, and revenue amount with space between them. You have the option to add or delete many clients as a time. After entering the data you will be able to see how the adjancey list is made. Throughout the program you will be able to control the speed of each process."),l.a.createElement("div",{className:"data-images"},l.a.createElement("div",{id:"entering-data-image1"}),l.a.createElement("div",{id:"entering-data-image2"}),l.a.createElement("div",{id:"entering-data-image3"})),l.a.createElement("button",{onClick:function(){return e.closePopUp("entering-data")}},"Close")),l.a.createElement("div",{className:"pop-up-item",id:"adj-step"},l.a.createElement("p",null,"Each client can be represented as a vertex. Directed edges between clients indicate that there is no conflict between the days they want the rental property. When the client turns ",l.a.createElement("span",{style:{color:"red"}},"red")," it means it is being compared to another client. When they turn ",l.a.createElement("span",{style:{color:"green"}},"green")," it means that an edge (Client i -> Client j) can be created or neighbor because the Client j's Start Day is greater than or equal to Client i's Start Day. Two special conditions are also applied: 1. When a client does not have any incoming edges, we add them to the Starting Client (Start->Client i) 2. When a client does not have any neighbors, we add an End Client (Client i->End). Neighbors will be shown and added underneath their client vertex."),l.a.createElement("div",{className:"adj-images"},l.a.createElement("div",{className:"adj-images2"},l.a.createElement("div",{id:"adj-image1"}),l.a.createElement("div",{id:"adj-image2"})),l.a.createElement("div",{id:"adj-image3"})),l.a.createElement("button",{onClick:function(){return e.closePopUp("adj-step")}},"Close")),l.a.createElement("div",{className:"pop-up-item",id:"topo-step"},l.a.createElement("p",null,"The numbers over the vertecies represent incoming edges. The",l.a.createElement("span",{tyle:{color:"#5acfc9"}},"teal")," colors represent an incoming edge being counted in compared with a client vertex to each neighbor. After all the incoming edges are counted, Topological BFS will be applied starting with the vertex with 0 incoming edges and continue to queue(in black) and pop all clients in the queues order into a Topological sorted list."),l.a.createElement("div",{className:"data-images"},l.a.createElement("div",{id:"topo-image1"}),l.a.createElement("div",{id:"topo-image2"})),l.a.createElement("button",{onClick:function(){return e.closePopUp("topo-step")}},"Close"),l.a.createElement("button",{onClick:function(){return e.openPopUp("topo-step2")}},"Next")),l.a.createElement("div",{className:"pop-up-item",id:"topo-step2"},l.a.createElement("p",null,"The numbers over the vertecies represent incoming edges. The",l.a.createElement("span",{tyle:{color:"#5acfc9"}},"teal")," colors represent an incoming edge being counted in compared with a client vertex to each neighbor. After all the incoming edges are counted, Topological BFS will be applied starting with the vertex with 0 incoming edges and continue to queue(in black) and pop all clients in the queues order into a Topological sorted list."),l.a.createElement("div",{className:"data-images"},l.a.createElement("div",{id:"topo-image3"}),l.a.createElement("div",{id:"topo-image4"})),l.a.createElement("button",{onClick:function(){return e.closePopUp("topo-step2")}},"Close")),l.a.createElement("div",{className:"pop-up-item",id:"rev-step"},l.a.createElement("p",null,"Using the Topological Sorted List we start at the end of the list (or in reverse the list) and start with that client for comparisons. Each vertex revenue will be added to each neighbor's revenue(in red) and choose the neighbor that summed the largest revenue (in green). By then end the Optimal Revenue will be shown."),l.a.createElement("div",{className:"data-images"},l.a.createElement("div",{id:"rev-image1"}),l.a.createElement("div",{id:"rev-image2"}),l.a.createElement("div",{id:"rev-image3"})),l.a.createElement("button",{onClick:function(){return e.closePopUp("rev-step")}},"Close")),l.a.createElement("div",{className:"pop-up-item",id:"path-step"},l.a.createElement("p",null,"The path taken to find the Optimal Revenue will be highlighted in",l.a.createElement("span",{style:{color:"#fdd036"}},"yellow"),". By the end the Optimal Path will be shown."),l.a.createElement("div",{className:"data-images"},l.a.createElement("div",{id:"path-image1"}),l.a.createElement("div",{id:"path-image2"})),l.a.createElement("button",{onClick:function(){return e.closePopUp("path-step")}},"Close"),l.a.createElement("button",{onClick:function(){return e.openPopUp("path-step2")}},"Next")),l.a.createElement("div",{className:"pop-up-item",id:"path-step2"},l.a.createElement("p",null,"The path taken to find the Optimal Revenue will be highlighted in",l.a.createElement("span",{style:{color:"#fdd036"}},"yellow"),". By the end the Optimal Path will be shown."),l.a.createElement("div",{className:"data-images"},l.a.createElement("div",{id:"path-image3"})),l.a.createElement("button",{onClick:function(){return e.closePopUp("path-step2")}},"Close")))}}]),t}(a.Component));function E(){this.clientNum="start",this.startDay=0,this.endDay=0,this.revenue=0,this.incomingEdges=0,this.neighbors=[],this.clientsTaken=[]}function f(e){var t=new E;return t.clientNum=e.clientNum,t.startDay=Number(e.startDay),t.endDay=Number(e.endDay),t.revenue=Number(e.revenue),t.neighbors=e.neighbors,"none"===e.incomingEdges?t.incomingEdges=0:(t.incomingEdges=Number(e.incomingEdges+1),e.incomingEdges=t.incomingEdges),t.clientsTaken=e.clientsTaken,t}function y(e,t){var n=f(t);e.neighbors.push(n)}var b=[],N=[];function C(){this.data=[]}C.prototype.push=function(e){this.data.unshift(e)},C.prototype.pop=function(){this.data.pop()},C.prototype.first=function(){return this.data[0]},C.prototype.front=function(){return this.data[this.data.length-1]},C.prototype.size=function(){return this.data.length};var k=[],w=[],D=0,x=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).addAllClients=function(t){var n=Object.assign([],e.state.clientList);t.preventDefault();var a=i.a.findDOMNode(e.refs.ci).value;if(i.a.findDOMNode(e.refs.ci).value="",""===a)alert("Text required"),e.resetClientList();else{for(var l=function(e){var t=e.split("\n");return t.includes("")?alert("Not proper format! No letters, extra spaces, or special symbols allowed!"):t.includes(" ")&&alert("Not proper format! No letters, extra spaces, or special symbols allowed!"),t}(a),o=0;o<l.length;o++){e.clientCount=e.clientCount+1;var c,s=l[o].split(" "),m=function(e){return Object(r.a)(e).every((function(e){return"0123456789".includes(e)}))};if(s.includes("")?(c=s.indexOf(""),s.splice(c)):s.includes(" ")&&(c=s.indexOf(" "),s.splice(c)),3==s.length&&m(s[0])&&m(s[1])&&m(s[2])&&3==s.length){var u={clientNum:e.clientCount,startDay:s[0],endDay:s[1],revenue:s[2],incomingEdges:"none",neighbors:[],clientsTaken:[]};n.push(u)}else alert("Not proper format! No letters, extra spaces, or special symbols allowed!"),e.resetAll()}var d=document.getElementsByClassName("delete-clients-button"),p=document.getElementsByClassName("create-adj-button"),h=document.getElementsByClassName("speed-section");d[0].style.display="flex",p[0].style.display="flex",h[0].style.display="flex",e.setState({clientList:n})}},e.showPath=function(){document.getElementsByClassName("new-set-button")[0].style.display="flex";var t=k,n=Object.assign([],e.state.optimalPath),a=Object.assign([],e.state.adjList),l=w;n.push(a[0]);for(var o=0;o<l.length-1;o++)n.push(a[l[o]]);n.push(a[a.length-1]),e.setState({optimalPath:n}),document.getElementsByClassName("show-path-button")[0].style.display="none";for(var i=function(){var n=t[r].clientID,a=t[r].color;setTimeout((function(){document.getElementById(n).children[0].style.backgroundColor=a,document.getElementById(n).children[1].style.color=a}),e.speed*r),r===t.length-1&&setTimeout((function(){document.getElementById("optimal-path").style.display="flex",document.getElementById("optimal-path").style.justifyContent="center"}),e.speed*t.length)},r=0;r<t.length;r++)i()},e.findOptimal=function(){for(var t=Object.assign([],e.state.topoList).reverse(),n=Object.assign([],e.state.adjList),a=0;a<n.length;a++){var l=a;0===l?l="start":l===n.length-1&&(l="end"),document.getElementById("counter-"+l).style.display="none"}var o=function(e,t){for(var n,a=e.length,l=[],o=[],i=0;i<a;i++)l.push(0);for(n=0;n<a;n++){var r="topo-node-"+e[n].clientNum,c=e[n].clientNum;"start"===c?c=0:"end"===c&&(c=a-1);var s="vertex-"+t[c].clientNum;o.push({clientID:r,color:"#f3533a"}),o.push({clientID:s,color:"#f3533a"});for(var m=[],u=0;u<a;u++)m.push(0);var d=t[c].neighbors,p=d.length;0===p&&(m[c]=t[c].revenue);var h=void 0;for(h=0;h<p;h++){var g=d[h].clientNum,v=d[h].clientNum;"start"===g?g=0:"end"===g&&(g=a-1),m[g]=e[n].revenue+l[g],o.push({clientID:s+"neighbor-"+v,color:"#f3533a"},{clientID:s+"neighbor-"+v,updatedRev:m[g]})}for(var E=0,f=0,y=m.length,b=0;b<y;b++)m[b]>E&&(f=b,E=m[b]);if(0!==f){if(0===p){E=m[c],o.push({clientID:s,updatedRev:E});var N=t[f].clientsTaken;t[c].clientsTaken=N.slice(),t[c].clientsTaken.push(f),l[c]+=E;continue}o.push({clientID:s+"neighbor-"+t[f].clientNum,updatedRev:E},{clientID:s+"neighbor-"+t[f].clientNum,color:"#8ad879"})}var C=t[f].clientsTaken;t[c].clientsTaken=C.slice(),t[c].clientsTaken.push(f),l[c]+=E}var x=t[0].clientsTaken.reverse();x.splice(-2,2),w=x,x.push("end");var I;for(k.push({clientID:"vertex-start",color:"#fdd036"},{clientID:"vertex-startneighbor-"+x[0],color:"#fdd036"}),I=0;I<x.length-1;I++)for(var j="vertex-"+x[I],O=I+1;x.length;O++){k.push({clientID:j,color:"#fdd036"},{clientID:j+"neighbor-"+x[O],color:"#fdd036"});break}for(D=l[0],console.log(x),console.log("Clients contributing to this optimal revenue: "),I=0;I<x.length;I++)console.log(x[I]);return o}(t,n);document.getElementsByClassName("find-optimal-button")[0].style.display="none";for(var i=function(){r===o.length-1&&setTimeout((function(){var e=D;document.getElementById("optimal-revenue").style.display="inline",document.getElementById("optimal-revenue").innerHTML="Optimal Revenue: "+e,document.getElementsByClassName("show-path-button")[0].style.display="flex"}),e.speed*o.length);var t=o[r].clientID;if(o[r].hasOwnProperty("color")){var n=o[r].color;setTimeout((function(){document.getElementById(t).children[0].style.backgroundColor=n,document.getElementById(t).children[1].style.color=n}),e.speed*r)}else{var a=o[r].updatedRev;setTimeout((function(){document.getElementById(t).children[1].children[2].innerHTML=a}),e.speed*r)}},r=0;r<o.length;r++)i()},e.speed=0,e.clientCount=0,e.state={clientList:[],adjList:[],topoList:[],optimalPath:[],ClientNum:"",StartDay:"",EndDay:"",Revenue:"",IncomingEdges:"",Neighbors:[],ClientsTaken:[],color:"#fa9f42"},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.resetClientList()}},{key:"resetClientList",value:function(){this.clientCount=0,this.speed=0,this.setState({clientList:[],adjList:[],topoList:[]})}},{key:"deleteAll",value:function(){this.clientCount=0,this.incomingEdges="none",this.neighbors=[],this.clientsTaken=[];var e=document.getElementsByClassName("delete-clients-button"),t=document.getElementsByClassName("create-adj-button"),n=document.getElementsByClassName("speed-section");e[0].style.display="none",t[0].style.display="none",n[0].style.display="none",this.setState({clientList:[],adjList:[],topoList:[]})}},{key:"createTopoList",value:function(){var e=this,t=Object.assign([],this.state.adjList),n=function(e){var t,n=[],a=[],l=new C,o=e.length;for(t=0;t<o;t++)a.push(0);for(t=0;t<o;t++){var i="vertex-"+e[t].clientNum;N.push({clientID:i,color:"#5acfc9"});var r=e[t].neighbors,c=r.length,s=void 0;for(s=0;s<c;s++){var m=r[s].clientNum,u=r[s].clientNum;"end"===m&&(m=o-1),a[m]++,N.push({clientID:i+"neighbor-"+u,color:"#5acfc9"},{clientID:"counter-"+u,count:a[m]},{clientID:i+"neighbor-"+u,color:"#fcc893"})}N.push({clientID:i,color:"#fa9f42"})}for(t=0;t<o;t++)0===a[t]&&(l.push(e[t]),N.push({clientID:"vertex-"+e[t].clientNum,color:"black"}));for(;0==!l.size();){n.push(l.front());var d=l.front().neighbors,p="topo-node-"+l.front().clientNum,h="vertex-"+l.front().clientNum;N.push({clientID:p,color:"#5acfc9"},{clientID:h,color:"#fa9f42"}),l.pop();var g=d.length,v=void 0;for(v=0;v<g;v++){var E=d[v].clientNum,f=d[v].clientNum;"end"===E&&(E=o-1),a[E]--,N.push({clientID:h+"neighbor-"+f,color:"#5acfc9"},{clientID:"counter-"+f,count:a[E]},{clientID:h+"neighbor-"+f,color:"#fcc893"}),0===a[E]&&(l.push(e[E]),N.push({clientID:"vertex-"+e[E].clientNum,color:"black"}))}}return n}(t),a=N;document.getElementsByClassName("topo-sort-button")[0].style.display="none",this.setState({topoList:n});for(var l=0;l<t.length;l++){var o=l;0===o?o="start":o===t.length-1&&(o="end"),document.getElementById("counter-"+o).style.display="inline"}for(var i=function(){r===a.length-1&&setTimeout((function(){document.getElementsByClassName("find-optimal-button")[0].style.display="flex"}),e.speed*a.length);var t=a[r].clientID;if(a[r].hasOwnProperty("count")){var n=a[r].count;setTimeout((function(){document.getElementById(t).innerHTML=n}),e.speed*r)}else{var l=a[r].color;setTimeout((function(){document.getElementById(t).children[0].style.backgroundColor=l,document.getElementById(t).children[1].style.color=l}),e.speed*r)}},r=0;r<a.length;r++)i()}},{key:"createAdjList",value:function(){var e=this,t=function(e){var t=[],n=new E;t.push(n);var a=e.length;console.log(e);for(var l=0;l<a;l++){var o=new E;o=f(e[l]),t.push(o)}for(var i=t.length,r=1;r<i;r++)for(var c=1;c<i;c++)r!==c&&(t[r].endDay<=t[c].startDay?(y(t[r],t[c]),b.push({clientID:"vertex-"+t[r].clientNum,color:"#f3533a"},{clientID:"vertex-"+t[c].clientNum,color:"#f3533a"},{clientID:"vertex-"+t[r].clientNum,color:"#8ad879"},{clientID:"vertex-"+t[c].clientNum,color:"#8ad879"},{clientID:"vertex-"+t[r].clientNum+"neighbor-"+t[c].clientNum,color:"#fcc893"})):b.push({clientID:"vertex-"+t[r].clientNum,color:"#f3533a"},{clientID:"vertex-"+t[c].clientNum,color:"#f3533a"}),b.push({clientID:"vertex-"+t[r].clientNum,color:"#fa9f42"},{clientID:"vertex-"+t[c].clientNum,color:"#fa9f42"}));var s=new E;s.clientNum="end",t.push(s);for(var m=1;m<t.length-1;m++)0===t[m].incomingEdges&&(b.push({clientID:"vertex-"+t[m].clientNum,color:"#8ad879"},{clientID:"vertex-"+t[m].clientNum,color:"#fa9f42"},{clientID:"vertex-startneighbor-"+t[m].clientNum,color:"#fcc893"}),y(n,t[m])),0===t[m].neighbors.length&&(b.push({clientID:"vertex-"+t[m].clientNum,color:"#8ad879"},{clientID:"vertex-"+t[m].clientNum,color:"#fa9f42"},{clientID:"vertex-"+t[m].clientNum+"neighbor-end",color:"#8ad879"},{clientID:"vertex-"+t[m].clientNum+"neighbor-end",color:"#fcc893"}),y(t[m],s));return console.log(t),t}(Object.assign([],this.state.clientList)),n=b;this.setState({adjList:t});var a=document.getElementsByClassName("client-form"),l=document.getElementsByClassName("client-section"),o=document.getElementsByClassName("delete-clients-button"),i=document.getElementsByClassName("create-adj-button"),r=document.getElementsByClassName("topo-sort-button");a[0].style.display="none",l[0].style.display="none",o[0].style.display="none",i[0].style.display="none";for(var c=function(){var t=n[s].clientID,a=n[s].color;setTimeout((function(){document.getElementById(t).children[0].style.backgroundColor=a,document.getElementById(t).children[1].style.color=a}),e.speed*s),s===n.length-1&&setTimeout((function(){r[0].style.display="flex"}),e.speed*n.length)},s=0;s<n.length;s++)c()}},{key:"isLetter",value:function(e){return!!new RegExp(/[A-Za-z]/).test(e)}},{key:"resetAll",value:function(){window.location.reload()}},{key:"render",value:function(){var e=this,t=this.state.clientList,n=this.state.adjList,a=this.state.topoList,o=this.state.optimalPath;return l.a.createElement("div",{className:"container"},l.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"//fonts.googleapis.com/css?family=Varela+Round"}),l.a.createElement(v,{list:t}),l.a.createElement("div",{className:"client-container"},l.a.createElement("div",{className:"client-section"},l.a.createElement(g,{type:"client",list:t,color:"#fa9f42"})),l.a.createElement("div",{className:"client-form"},l.a.createElement("form",null,l.a.createElement("textarea",{ref:"ci",cols:"7",rows:"8",placeholder:"10 40 100 10 20 50...",required:!0}),l.a.createElement("br",null),l.a.createElement("button",{className:"button ",type:"submit",onClick:this.addAllClients},"Add Clients "))),l.a.createElement("div",{className:"speed-section"},l.a.createElement("h2",null,"Speed: "),l.a.createElement("div",{className:"speed-buttons"},l.a.createElement("button",{onClick:function(){return e.speed=2e3}},"Slow"),l.a.createElement("button",{onClick:function(){return e.speed=200}},"Medium"),l.a.createElement("button",{onClick:function(){return e.speed=50}},"Fast"),l.a.createElement("button",{onClick:function(){return e.speed=0}},"Instant"))),l.a.createElement("div",{className:"button-section"},l.a.createElement("button",{className:"topo-sort-button",style:{display:"none"},onClick:function(){return e.createTopoList()}},"Topological Sort"),l.a.createElement("button",{className:"delete-clients-button",style:{display:"none"},onClick:function(){return e.deleteAll()}},"Delete All Clients"),l.a.createElement("button",{className:"create-adj-button",style:{display:"none"},onClick:function(){return e.createAdjList()}},"Create Adjacency List"),l.a.createElement("button",{className:"find-optimal-button",style:{display:"none"},onClick:function(){return e.findOptimal()}},"Find Optimal Path and Revenue"),l.a.createElement("button",{className:"show-path-button",style:{display:"none"},onClick:function(){return e.showPath()}},"Highlight Path"),l.a.createElement("button",{className:"new-set-button",style:{display:"none"},onClick:function(){return e.resetAll()}},"New Set")),l.a.createElement("h1",{id:"optimal-revenue",style:{display:"none"}},"0"),l.a.createElement("div",{className:"optimal-section"},l.a.createElement("div",{id:"optimal-path",style:{display:"none",flexDirection:"row"}},l.a.createElement("h1",null,"Optimal Path: "),l.a.createElement(g,{type:"opt",list:o,color:"#fdd036"}))),l.a.createElement("div",{className:"topo-section"},l.a.createElement("div",{className:"topo-sort"},l.a.createElement(g,{type:"topo",list:a,color:"whitesmoke"})),l.a.createElement(h,{list:n,color:"#fa9f42"}))))}}]),t}(a.Component);n(18);var I=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.7bfecb9c.chunk.js.map