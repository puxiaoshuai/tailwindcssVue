<template>
  <div>
    <roo-alert type="info">温馨提醒：指定入口链接拼接口径规则:平台+界面+参数,提交进行自动生成</roo-alert>

    <div class="wrapper">
      <div class="header-select">
        <div class="main-link">
          <span class="tag">平台:</span>
          <roo-select :options="platform.options" v-model="platform.value" @change="handlePlatformChange" />
        </div>
        <div class="main-link">
          <span class="tag">界面:</span>
          <roo-select :options="page.options" v-model="page.value" @change="handlePageChange" />
        </div>
      </div>
      <div class="json-select">
        <h3>参数配置</h3>
        <vue-form v-model="formData" :ui-schema="uiSchema" :schema="schema">
        </vue-form>
      </div>
    </div>
  </div>
</template>

<script>
  import { PLATFORM_ZHONGBAO, PLATFORM_QISHOU, PLATFORM_XINGHUO } from '../utils/Constant.js'
  import {
    PAGE_HOME, PAGE_HOME_SEARCH, PAGE_SEARCH, PAGE_CATEGORY, PAGE_CART,
    PAGE_ACCOUNT, PAGE_PROVIDER, PAGE_PROVIDER_CATEGORY, PAGE_GOODS_DETAIL, PAGE_PREVIEW_ORDER, PAGE_ADDRESS, PAGE_PAYMENT,
    PAGE_ORDER_DETAIL, PAGE_BACKSELECT, PAGE_MONEYPAGE, PAGE_EXPRESSLIST, PAGE_IM_LIST
  } from '../utils/Constant.js'
  export default {
    data() {
      return {
        platform: {
          value: PLATFORM_ZHONGBAO,
          options: [
            { value: PLATFORM_ZHONGBAO, label: '众包' },
            { value: PLATFORM_QISHOU, label: '骑手' },
            { value: PLATFORM_XINGHUO, label: '星火' },
          ],
        },
        page: {
          value: PAGE_HOME,
          options: [
            { value: PAGE_HOME, label: '首页' },
            { value: PAGE_HOME_SEARCH, label: '搜索首页' },
            { value: PAGE_SEARCH, label: '搜索页面' },
            { value: PAGE_CATEGORY, label: '主类目' },
            { value: PAGE_CART, label: '购物车' },
            { value: PAGE_ACCOUNT, label: '我的' },
            { value: PAGE_PROVIDER, label: '商家' },
            { value: PAGE_PROVIDER_CATEGORY, label: '商家类目' },
            { value: PAGE_GOODS_DETAIL, label: '商品详情' },
            { value: PAGE_PREVIEW_ORDER, label: '预览订单' },
            { value: PAGE_ADDRESS, label: '选择地址' },
            { value: PAGE_PAYMENT, label: '唤起支付' },
            { value: PAGE_ORDER_DETAIL, label: '订单详情' },
            { value: PAGE_BACKSELECT, label: '售后选择' },
            { value: PAGE_MONEYPAGE, label: '退货退款' },
            { value: PAGE_EXPRESSLIST, label: '物流列表' },
            { value: PAGE_IM_LIST, label: '消息列表' },
          ],
        },
        formData: {},
        schema: {
          type: 'object',
          required: [
            'userName',
            'age',
          ],
          properties: {
            userName: {
              type: 'string',
              title: '用户名',
              default: 'Liu.Jun',
            },
            age: {
              type: 'number',
              title: '年龄'
            },
            bio: {
              type: 'string',
              title: '签名',
              minLength: 10,
              default: '知道的越多、就知道的越少',
            }
          }
        },
        uiSchema: {
          bio: {
            'ui:options': {
              placeholder: '请输入你的签名',
              type: 'textarea',
              rows: 1
            }
          }
        }
      }
    },

    methods: {
      handlePlatformChange(option) {
        console.debug(option);
      },
      handlePageChange(value) {
        console.debug("page", value);
      },
      sortNumber(a,b){
        return a-b
      }
    },

    mounted() {
      const a=[{"name":"11"}]
      const b= a.splice(0,0,{"name":'pu'})
      console.log(b);
      console.log(a);
      let x=[1,2]
      let y=[2,1]
      console.log(y.sort(this.sortNumber));
      console.log(JSON.stringify(x.sort(this.sortNumber))===JSON.stringify(y.sort(this.sortNumber)));
      let ph={"name":[1,3]}
      console.log(ph?.name??[]);
      undefined.map(item=>item)
    },
    watch: {
      formData: function (val) {
        console.log("watch", val);
      },

    }


  }
</script>
<style scoped>
  .wrapper {}

  .roo-alert {}

  .header-select {
    display: flex;
    justify-content: space-around;
    margin: 20px;
  }

  .main-link {
    display: flex;
    align-items: center;
  }

  .tag {
    margin-right: 20px;
    font-weight: bold;
  }

  .json-select {
    margin: 10px;

  }
</style>