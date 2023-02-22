# element树形结构+穿梭框实例

[TOC]

- 下载依赖

```
npm i el-tree-transfer -S
or 
yarn add el-tree-transfer
```

- 使用

```
<template>
  <div>
    // 其他代码
    ...
    // 使用树形穿梭框组件
    <tree-transfer 
        :title="title"                 //标题 类型：Array 必填：false 默认：["源列表", "目标列表"]
        :from_data='fromData'         //源数据 类型：Array 必填：true 补充：数据格式同element-ui tree组件，但必须有id和pid
        :to_data='toData'             //目标数据 类型：Array 必填：true 补充：数据格式同element-ui tree组件，但必须有id和pid
        :defaultProps="{label:'label'}" //配置项-同el-tree中props 必填： false 补充：用法和el-tree的props一样
        @addBtn='add'                 //点击添加按钮时触发的事件 回调参数：function(fromData,toData,obj),树形穿梭框transfer模式分别为1.移动后左侧数据，2.移动后右侧数据，3.移动的节点keys、nodes、halfKeys、halfNodes对象；通讯录addressList模式时返回参数为右侧收件人列表、右侧抄送人列表、右侧密送人列表
        @removeBtn='remove'            //点击移除按钮时触发的事件 回调参数：function(fromData,toData,obj),树形穿梭框transfer模式分别为1.移动后左侧数据，2.移动后右侧数据，3.移动的节点keys、nodes、halfKeys、halfNodes对象；通讯录addressList模式时返回参数为右侧收件人列表、右侧抄送人列表、右侧密送人列表
        :mode='mode'                 //设置模式，字段可选值为transfer|addressList 类型：String 必填：false 补充：mode默认为transfer模式，即树形穿梭框模式，可配置字段为addressList改为通讯录模式，通讯录模式时按钮不可自定义名字，如要自定义标题名在title数组传入四个值即可，addressList模式时标题默认为通讯录、收件人、抄送人、密送人
        height='400px'             //高度 类型：String 必填：false 默认：320px
        filter                     //是否开启筛选功能 类型：Boolean 必填：false
        openAll>                  //是否默认展开全部 类型：Boolean 必填：false
    </tree-transfer>
  </div>
</template>

<script>
  import treeTransfer from 'el-tree-transfer'    // 引入
 
  export defult {
    data(){
      return:{
        title: ["待选","已选"],    //标题 类型：Array 必填：false 默认：["源列表", "目标列表"]
        mode: "transfer", //设置模式，字段可选值为transfer|addressList 类型：String 必填：false 补充：mode默认为transfer模式，即树形穿梭框模式，可配置字段为addressList改为通讯录模式，通讯录模式时按钮不可自定义名字，如要自定义标题名在title数组传入四个值即可，addressList模式时标题默认为通讯录、收件人、抄送人、密送人
        fromData:[    //源数据 类型：Array 必填：true 补充：数据格式同element-ui tree组件，但必须有id和pid
          {
            id: "1",
            pid: 0,    //自定义pid的参数名，默认为"pid" 必填：false
            label: "一级 1",
            children: [
              {
                id: "1-1",
                pid: "1",
                label: "二级 1-1",
                disabled: true,
                children: []
              },
              {
                id: "1-2",
                pid: "1",
                label: "二级 1-2",
                children: [
                  {
                    id: "1-2-1",
                    pid: "1-2",
                    children: [],
                    label: "二级 1-2-1"
                  },
                  {
                    id: "1-2-2",
                    pid: "1-2",
                    children: [],
                    label: "二级 1-2-2"
                  }
                ]
              }
            ]
          },
        ],
        toData:[]    //目标数据 类型：Array 必填：true 补充：数据格式同element-ui tree组件，但必须有id和pid
      }
    },
    methods:{
      // 切换模式 现有树形穿梭框模式transfer 和通讯录模式addressList
      changeMode() {
        if (this.mode == "transfer") {
          this.mode = "addressList";
        } else {
          this.mode = "transfer";
        }
      },
      // 监听穿梭框组件添加
      add(fromData,toData,obj){
        // 树形穿梭框模式transfer时，返回参数为左侧树移动后数据、右侧树移动后数据、移动的{keys,nodes,halfKeys,halfNodes}对象
        // 通讯录模式addressList时，返回参数为右侧收件人列表、右侧抄送人列表、右侧密送人列表
        console.log("fromData:", fromData);
        console.log("toData:", toData);
        console.log("obj:", obj);
      },
      // 监听穿梭框组件移除
      remove(fromData,toData,obj){
        // 树形穿梭框模式transfer时，返回参数为左侧树移动后数据、右侧树移动后数据、移动的{keys,nodes,halfKeys,halfNodes}对象
        // 通讯录模式addressList时，返回参数为右侧收件人列表、右侧抄送人列表、右侧密送人列表
        console.log("fromData:", fromData);
        console.log("toData:", toData);
        console.log("obj:", obj);
      }
    },
    components:{ treeTransfer } // 注册
  }
</script>
```

## 实战代码

```
<template>
  <!-- 商品/服务新增 -->
  <div>
    <tree-transfer
      :title="title"
      :from_data="fromData"
      :to_data="toData"
      :defaultProps="defaultProps"
      :defaultCheckedKeys="defaultCheckedKeys"
      :defaultTransfer="true"
      @addBtn="add"
      @removeBtn="remove"
      :mode="mode"
      height="400px"
      openAll
    ></tree-transfer>
    <div class="foot">
      <el-button @click="cancel" size="big">取消</el-button>
      <el-button type="primary" @click="onSubmit" size="big">确定</el-button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import treeTransfer from "el-tree-transfer"; // 引入
import { SERVICE_URLS } from "../../../../libs/service.url";
export default {
  components: { treeTransfer }, // 注册
  props:['id'],
  data() {
    return {
      title: ["权限总列表", "当前角色权限"], //标题 类型：Array 必填：false 默认：["源列表", "目标列表"]
      mode: "transfer", //设置模式，字段可选值为transfer|addressList 类型：String 必填：false 补充：mode默认为transfer模式，即树形穿梭框模式，可配置字段为addressList改为通讯录模式，通讯录模式时按钮不可自定义名字，如要自定义标题名在title数组传入四个值即可，addressList模式时标题默认为通讯录、收件人、抄送人、密送人
      defaultProps:{
        children: "childMenu",
        label: "menuName"
      },
      defaultCheckedKeys:[],
      fromData: [
        //源数据 类型：Array 必填：true 补充：数据格式同element-ui tree组件，但必须有id和pid
        {
          id: "1",
          pid: 0, //自定义pid的参数名，默认为"pid" 必填：false
          label: "一级 1",
          children: [
            {
              id: "1-1",
              pid: "1",
              label: "二级 1-1",
              disabled: true,
              children: []
            },
            {
              id: "1-2",
              pid: "1",
              label: "二级 1-2",
              children: [
                {
                  id: "1-2-1",
                  pid: "1-2",
                  children: [],
                  label: "二级 1-2-1"
                },
                {
                  id: "1-2-2",
                  pid: "1-2",
                  children: [],
                  label: "二级 1-2-2"
                }
              ]
            }
          ]
        }
      ],
      toData: [], //目标数据 类型：Array 必填：true 补充：数据格式同element-ui tree组件，但必须有id和pid
      sendArr:[],
      left: false,
    };
  },
  created(){
    this.getData()
  },
  methods: {
    cancel(){
      this.$emit('sendValue', true)
    },
    onSubmit(){
      // console.log(this.sendArr);
      let send = [];
      if(this.sendArr && this.sendArr.length){
        const mapArr = arr =>{
          if(arr && arr.length){
            arr.map(it=>{
              send.push(it.uid);
              mapArr(it.childMenu);
              return it
            })
          }
        }
        mapArr(this.sendArr);
      }

      // 有默认值 并且没有左右切换数据的时候（直接关闭）
      if(this.defaultCheckedKeys.length && !send.length && !this.left){
        this.$message.success("权限设置成功");
        this.cancel();
        return;
      }

      Vue.submit(this, {
        loading: "loading",
        url: SERVICE_URLS.team.role.config,
        data: {
          roleId: this.id,
          menuId: send,
        },
        callback: data => {
          this.$message.success("权限设置成功");
          this.cancel();
        },
        error: err => {}
      });
    },
    //请求数据
    getData() {
      Vue.submit(this, {
        loading: "loading",
        url: SERVICE_URLS.team.role.menuRole,
        data: {
          roleId: this.id
        },
        callback: data => {
          const mapArr = (arr, it) => {
            if(arr && arr.length){
              return arr.map((item, j)=>{
                item.uid = item.id;
                item.id = it.id+'-'+(j-0+1);
                item.pid = it.id;
                if(item.childMenu && !item.childMenu.length && item.hasPermission) this.defaultCheckedKeys.push(item.id);
                mapArr(item.childMenu, item)
                return item
              })
            }
          }
          // 遍历添加 id 和 pid(并回显原数据 = defaultCheckedKeys)
          this.fromData = data.map((it, i)=>{
            it.uid = it.id;
            it.id = i-0+1;
            it.pid = i;
            if(it.childMenu && !it.childMenu.length && it.hasPermission) this.defaultCheckedKeys.push(it.id);
            mapArr(it.childMenu, it);
            return it
          })
          // console.log('fromData', this.fromData);
          console.log('defaultCheckedKeys', this.defaultCheckedKeys);
        },
        error: err => {}
      });
    },
    // 切换模式 现有树形穿梭框模式transfer 和通讯录模式addressList
    changeMode() {
      if (this.mode == "transfer") {
        this.mode = "addressList";
      } else {
        this.mode = "transfer";
      }
    },
    // 监听穿梭框组件添加
    add(fromData, toData, obj) {
      // 树形穿梭框模式transfer时，返回参数为左侧树移动后数据、右侧树移动后数据、移动的{keys,nodes,halfKeys,halfNodes}对象
      // 通讯录模式addressList时，返回参数为右侧收件人列表、右侧抄送人列表、右侧密送人列表
      // console.log("fromData:", fromData);
      // console.log("toData:", toData);
      // console.log("obj:", obj);
      this.sendArr = toData;
    },
    // 监听穿梭框组件移除
    remove(fromData, toData, obj) {
      // 树形穿梭框模式transfer时，返回参数为左侧树移动后数据、右侧树移动后数据、移动的{keys,nodes,halfKeys,halfNodes}对象
      // 通讯录模式addressList时，返回参数为右侧收件人列表、右侧抄送人列表、右侧密送人列表
      // console.log("fromData:", fromData);
      // console.log("toData:", toData);
      // console.log("obj:", obj);
      this.left = true;
      this.sendArr = toData;
    }
  }
};
</script>

<style scoped lang="scss">
.foot{
  padding: 40px 0 10px;
  text-align: center;
}
</style>

```