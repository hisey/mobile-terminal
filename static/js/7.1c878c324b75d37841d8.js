webpackJsonp([7],{uxS0:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("Xxa5"),a=r.n(n),i=r("exGp"),o=r.n(i),s=r("vMJZ"),l={data:function(){var e=this;return{list:null,listLoading:!0,showCount:10,total:1,currentPage:1,dialogFormVisible:!1,formLabelWidth:"120px",form:{id:"",name:"",role_id:"",pass:"",rePass:""},options:[],formRules:{name:[{required:!0,message:"请输入用户名称",trigger:"blur"},{min:3,max:100,message:"长度在 3 到 5 个字符",trigger:"blur"}],role_id:[{required:!0,message:"请选择角色",trigger:"blur"}],pass:[{min:3,max:100,message:"长度在 3 到 5 个字符",trigger:"blur"},{required:!0,message:"请输入密码",trigger:"blur"},{pattern:"^(?![0-9]+$)(?![a-zA-Z]+$)[A-Za-z_][A-Za-z_0-9]{0,}$",message:"要求数字，字母和下划线（至少包含其中两种，数字不能开头",trigger:"blur"}],rePass:[{required:!0,message:"请确认密码",trigger:"blur"},{validator:function(t,r,n){""===r?n(new Error("请再次输入密码")):r!==e.form.pass?n(new Error("两次输入密码不一致!")):n()},trigger:"blur"}]}}},filters:{tagFilter:function(e){return{0:"info",1:"success"}[e]},textFilter:function(e){return{1:"启用",0:"禁用"}[e]}},created:function(){this.fetchData(),this.getRoleList()},methods:{handleCurrentChange:function(e){this.currentPage=e,this.fetchData()},fetchData:function(){var e=this;return o()(a.a.mark(function t(){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.listLoading=!0,t.next=3,Object(s.h)({curentPage:e.currentPage,showCount:e.showCount});case 3:r=t.sent,e.list=r.data.arr,e.listLoading=!1,e.total=r.totalCount,e.pageSize=r.totalPages;case 8:case"end":return t.stop()}},t,e)}))()},getRoleList:function(){var e=this;return o()(a.a.mark(function t(){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.g)();case 2:r=t.sent,e.options=r.data;case 4:case"end":return t.stop()}},t,e)}))()},changeStatus:function(e,t,r){var n=this;return o()(a.a.mark(function i(){var o;return a.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(s.d)({id:e,status:t,roleId:r});case 2:200==(o=a.sent).code&&n.$message({message:o.msg,type:"success",onClose:function(){n.fetchData()}});case 4:case"end":return a.stop()}},i,n)}))()},handDelete:function(e,t){var r=this;this.$confirm("此操作将永久删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(o()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.e)({id:e});case 2:200==t.sent.code&&r.$message({type:"success",message:"删除成功!",onClose:function(){r.fetchData()}});case 4:case"end":return t.stop()}},t,r)}))).catch(function(){r.$message({type:"info",message:"已取消删除"})})},addAdminUser:function(e,t,r){this.form.id=e,this.dialogFormVisible=!0,this.form.name=t,this.form.role_id=r},submitForm:function(e){var t,r=this;this.$refs[e].validate((t=o()(a.a.mark(function e(t){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return e.next=3,Object(s.a)(r.form);case 3:200==(n=e.sent).code&&r.$message({message:n.msg,type:"success",onClose:function(){r.dialogFormVisible=!1,r.fetchData()}}),e.next=8;break;case 7:return e.abrupt("return",!1);case 8:case"end":return e.stop()}},e,r)})),function(e){return t.apply(this,arguments)}))},resetForm:function(e){this.$refs[e].resetFields()}}},u={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("div",{staticClass:"clearfix"},[r("el-button",{staticStyle:{float:"right"},attrs:{size:"small",type:"primary"},on:{click:function(t){e.addAdminUser()}}},[e._v("新增用户")])],1),e._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],staticStyle:{"margin-top":"15px"},attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[r("el-table-column",{attrs:{align:"center",label:"ID",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.$index+1)+"\n      ")]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"用户名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.user_name)+"\n      ")]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"所属角色",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.role_name)+"\n      ")]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"创建时间",width:"210",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.create_time)+"\n      ")]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"用户状态",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-tag",{attrs:{size:"mini",type:e._f("tagFilter")(t.row.status)}},[e._v(e._s(e._f("textFilter")(t.row.status)))])]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"操作",width:"310",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(r){e.addAdminUser(t.row.id,t.row.user_name,t.row.role_id)}}},[e._v("编辑")]),e._v(" "),0==t.row.status&&1!=t.row.role_id?r("el-button",{attrs:{size:"mini"},on:{click:function(r){e.changeStatus(t.row.id,1,t.row.role_id)}}},[e._v("启用")]):e._e(),e._v(" "),1==t.row.status&&1!=t.row.role_id?r("el-button",{attrs:{size:"mini",type:"warning"},on:{click:function(r){e.changeStatus(t.row.id,0,t.row.role_id)}}},[e._v("禁用")]):e._e(),e._v(" "),1!=t.row.role_id?r("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(r){e.handDelete(t.row.id)}}},[e._v("删除")]):e._e()]}}])})],1),e._v(" "),r("el-pagination",{staticStyle:{"margin-top":"20px"},attrs:{"current-page":e.currentPage,"page-size":e.showCount,layout:"total, prev, pager, next,jumper",total:e.total},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}}),e._v(" "),r("el-dialog",{attrs:{title:"新增/编辑用户",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.formRules}},[r("el-form-item",{attrs:{label:"名称","label-width":e.formLabelWidth,prop:"name"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),1!=e.form.id?r("el-form-item",{attrs:{label:"角色",prop:"role_id","label-width":e.formLabelWidth}},[r("el-select",{attrs:{placeholder:"请选择角色"},model:{value:e.form.role_id,callback:function(t){e.$set(e.form,"role_id",t)},expression:"form.role_id"}},e._l(e.options,function(t){return 1!=t.id?r("el-option",{key:t.id,attrs:{label:t.name,value:t.id}}):e._e()}))],1):e._e(),e._v(" "),r("el-form-item",{attrs:{label:"密码","label-width":e.formLabelWidth,prop:"pass"}},[r("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.form.pass,callback:function(t){e.$set(e.form,"pass",t)},expression:"form.pass"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"确认密码","label-width":e.formLabelWidth,prop:"rePass"}},[r("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.form.rePass,callback:function(t){e.$set(e.form,"rePass",t)},expression:"form.rePass"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("form")}}},[e._v("提交")]),e._v(" "),r("el-button",{on:{click:function(t){e.resetForm("form")}}},[e._v("重置")])],1)],1)],1)},staticRenderFns:[]},c=r("VU/8")(l,u,!1,null,null,null);t.default=c.exports},vMJZ:function(e,t,r){"use strict";r.d(t,"h",function(){return a}),r.d(t,"d",function(){return i}),r.d(t,"e",function(){return o}),r.d(t,"a",function(){return s}),r.d(t,"g",function(){return l}),r.d(t,"c",function(){return u}),r.d(t,"f",function(){return c}),r.d(t,"b",function(){return d});var n=r("Vo7i"),a=n.a.get("/api/admin/adminUser/getList"),i=n.a.post("/api/admin/adminUser/changeStatus"),o=n.a.post("/api/admin/adminUser/delete"),s=n.a.post("/api/admin/adminUser/add"),l=(n.a.get("/api/admin/adminUser/getUserInfo"),n.a.get("/api/admin/adminUser/getRoleList")),u=n.a.post("/api/admin/adminUser/changeRoleStatus"),c=n.a.post("/api/admin/adminUser/deleteRole"),d=n.a.post("/api/admin/adminUser/addUserRole")}});