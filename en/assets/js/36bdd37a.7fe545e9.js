"use strict";(self.webpackChunkbestchains=self.webpackChunkbestchains||[]).push([[746],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,d=p["".concat(l,".").concat(h)]||p[h]||m[h]||r;return n?o.createElement(d,i(i({ref:t},c),{},{components:n})):o.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:1,title:"contribution guide",sidebar_label:"contribution guide"},i=void 0,s={unversionedId:"Contribute/guidelines",id:"Contribute/guidelines",title:"contribution guide",description:"Welcome to Bestchains!",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Contribute/guidelines.md",sourceDirName:"Contribute",slug:"/Contribute/guidelines",permalink:"/website/en/docs/Contribute/guidelines",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"contribution guide",sidebar_label:"contribution guide"},sidebar:"docsSidebar",previous:{title:"\u8d21\u732e",permalink:"/website/en/docs/category/\u8d21\u732e"},next:{title:"\u5de5\u5177",permalink:"/website/en/docs/category/\u5de5\u5177"}},l={},u=[{value:"Project Composition",id:"project-composition",level:2},{value:"Reporting Issues",id:"reporting-issues",level:2},{value:"Code and Document Contribution",id:"code-and-document-contribution",level:2},{value:"PR Process",id:"pr-process",level:3},{value:"PR Description",id:"pr-description",level:3},{value:"Proposal",id:"proposal",level:3},{value:"Contributing to Anything",id:"contributing-to-anything",level:2},{value:"Join the community",id:"join-the-community",level:2},{value:"Join the Bestchains Github organization",id:"join-the-bestchains-github-organization",level:3},{value:"Submit your application",id:"submit-your-application",level:4}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Welcome to Bestchains!")),(0,a.kt)("p",null,"We encourage you to contribute to the community by reporting problems, improving documents, fixing bugs or adding new features!"),(0,a.kt)("p",null,"Currently, our code of conduct follows ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cncf/foundation/blob/main/code-of-conduct.md"},"CNCF's Code of Conduct"),", which details how you should conduct yourself as a member of the Bestchains community."),(0,a.kt)("h2",{id:"project-composition"},"Project Composition"),(0,a.kt)("p",null,"Bestchains consists of several projects:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/bestchains/fabric-operator"},"fabric-operator"),": Blockchain management service implemented based on the Kubernetes Operator framework."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/bestchains/bc-console"},"bc-console")," and ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/bestchains/bc-apis"},"bc-apis"),": Console for Bestchains"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/bestchains/installer"},"installer"),": Helm charts related to the installation of the Bestchains platform."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/bestchains/bc-explorer"},"bc-explorer"),": Blockchain Browser"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/bestchains/bestchains-contracts"},"bestchains-contracts"),": Secure smart contract development library")),(0,a.kt)("h2",{id:"reporting-issues"},"Reporting Issues"),(0,a.kt)("p",null,"While using or experiencing Bestchains-related components, you may have some feedback on this project. Therefore, please feel free to open an issue. This includes but is not limited to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Report bugs"),(0,a.kt)("li",{parentName:"ul"},"Request new features"),(0,a.kt)("li",{parentName:"ul"},"Performance issues"),(0,a.kt)("li",{parentName:"ul"},"New feature draft"),(0,a.kt)("li",{parentName:"ul"},"New feature design"),(0,a.kt)("li",{parentName:"ul"},"Need help"),(0,a.kt)("li",{parentName:"ul"},"Document improvement"),(0,a.kt)("li",{parentName:"ul"},"Test improvement"),(0,a.kt)("li",{parentName:"ul"},"Any other questions about these projects"),(0,a.kt)("li",{parentName:"ul"},"etc.")),(0,a.kt)("p",null,"Also, we must remind you that when submitting a new issue, please remember to remove ",(0,a.kt)("strong",{parentName:"p"},"sensitive data")," from your issue."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Sensitive data may be passwords, keys, network locations, business data, etc.")),(0,a.kt)("h2",{id:"code-and-document-contribution"},"Code and Document Contribution"),(0,a.kt)("p",null,"We encourage everyone to contribute to making Bestchains better. On GitHub, every improvement to Bestchains can be achieved through PR (pull request)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you find a typo, try to fix it!"),(0,a.kt)("li",{parentName:"ul"},"If you find a bug, try to fix it!"),(0,a.kt)("li",{parentName:"ul"},"If you find some redundant codes, try to remove them!"),(0,a.kt)("li",{parentName:"ul"},"If you find some test cases missing, try to add them!"),(0,a.kt)("li",{parentName:"ul"},"If you could enhance a feature, please DO NOT hesitate!"),(0,a.kt)("li",{parentName:"ul"},"If you find code implicit, try to add comments to make it clear!"),(0,a.kt)("li",{parentName:"ul"},"If you find code ugly, try to refactor that!"),(0,a.kt)("li",{parentName:"ul"},"If you can help to improve documents, it could not be better!"),(0,a.kt)("li",{parentName:"ul"},"If you find document incorrect, just do it and fix that!"),(0,a.kt)("li",{parentName:"ul"},"etc.")),(0,a.kt)("h3",{id:"pr-process"},"PR Process"),(0,a.kt)("p",null,"To submit a PR, we assume that you have registered a GitHub ID. Then you can follow these steps to get ready:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Fork")," The project you want to work on. You only need to click the Fork button on the top left corner of the project homepage. On the left side of the repository's main page. Then you can see your repository in your GitHub username.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Clone")," your own repository to your local machine for development. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/<your-username>/<your-project>.git")," to clone the code repository to your local machine. Then you can create a new branch to complete the changes you want to make.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Set remote upstream")," The upstream setting is ",(0,a.kt)("inlineCode",{parentName:"p"},"https://github.com/bestchains/<project>.git")," For example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git remote add upstream https://github.com/bestchains/fabric-operator.git\ngit remote set-url --push upstream no-pushing\n")),(0,a.kt)("p",{parentName:"li"},"Adding upstream allows us to easily synchronize local branches with upstream branches.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Create a branch")," to add new features or fix problems. Update the local working directory:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd <project>\ngit fetch upstream\ngit checkout main\ngit rebase upstream/main\n")),(0,a.kt)("p",{parentName:"li"},"Create a new Branch:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout -b <new-branch>\n")),(0,a.kt)("p",{parentName:"li"},"You can build and test your code after the new branch is changed."))),(0,a.kt)("h3",{id:"pr-description"},"PR Description"),(0,a.kt)("p",null,"Creating a PR is the only way to modify files in the Bestchains project."),(0,a.kt)("p",null,"To help reviewers better understand the purpose of the PR you've created, the description should not be too rough."),(0,a.kt)("h3",{id:"proposal"},"Proposal"),(0,a.kt)("p",null,"If you want to contribute a function with a new API or requires a lot of work, please submit a proposal first."),(0,a.kt)("h2",{id:"contributing-to-anything"},"Contributing to Anything"),(0,a.kt)("p",null,"We choose GitHub as the primary place for Bestchains collaboration, so the latest updates of Bestchains are always here. Although contributing through PRs is a clear way to help, we still call for any other ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"reply to other's issues if you could;"),(0,a.kt)("li",{parentName:"ul"},"help solve other user's problems;"),(0,a.kt)("li",{parentName:"ul"},"help review other's PR design;"),(0,a.kt)("li",{parentName:"ul"},"help review other's codes in PR;"),(0,a.kt)("li",{parentName:"ul"},"discuss about Bestchains to make things clearer;"),(0,a.kt)("li",{parentName:"ul"},"advocate Bestchains technology beyond GitHub;"),(0,a.kt)("li",{parentName:"ul"},"write blogs on Bestchains and so on.")),(0,a.kt)("h2",{id:"join-the-community"},"Join the community"),(0,a.kt)("p",null,"If you want to become a member of the Bestchains GitHub organization, please refer to the following instructions:"),(0,a.kt)("h3",{id:"join-the-bestchains-github-organization"},"Join the Bestchains Github organization"),(0,a.kt)("p",null,"Before requesting to join the community, we ask that you make a small contribution to prove that you are willing to continue contributing to Bestchains."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Note")," Anyone can contribute to Bestchains, and joining the Bestchains Github organization is not a mandatory step.")),(0,a.kt)("p",null,"There are many ways to contribute to Bestchains:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Submit PRs"),(0,a.kt)("li",{parentName:"ul"},"Report errors or provide feedback on issues"),(0,a.kt)("li",{parentName:"ul"},"Answer questions on GitHub")),(0,a.kt)("h4",{id:"submit-your-application"},"Submit your application"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a issue in the Bestchains repository and list all the work you have done as much as possible."),(0,a.kt)("li",{parentName:"ul"},"Please ask AT 2 existing reviewers for consent."),(0,a.kt)("li",{parentName:"ul"},"After the request is approved, the administrator will send you an invitation.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This is a manual process, which usually runs several times a week."),(0,a.kt)("li",{parentName:"ul"},"If a week has passed and you haven't received the invitation, please contact us by email or DingTalk.")))))}m.isMDXComponent=!0}}]);