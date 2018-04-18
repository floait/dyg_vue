<template>
  <div>
    <header style="margin-bottom: 100px;">
      <div class="empty50"></div>
    </header>
    <div style="margin-top: 150px" v-for="item in uricacid">
      <guage :label="item.label"
             :value="item.value"
             :min="item.min_value"
             :max="item.max_value"
             :alert-min="item.min_alert_value"
             :alert-max="item.max_alert_value"
             :peng-name="item.title"
             field-name="item.title">
      </guage>
    </div>
  </div>
</template>

<script>
    export default {
      name: "index",
      components:{
        'guage': require("../../../components/guage")
      },
      data () {
        return  {
          uricacid: [
              {
                title: '第一个仪表盘(svg)',
                value: 150,
                label: '尿酸值μmol/L',
                min_value: 0,
                max_value: 360,
                min_alert_value:60,
                max_alert_value: 300,
              }
          ]
        }
      },
      methods: {

      }
    }
</script>

<style scoped>

</style>
