<template>
  <v-container id="regular-tables" fluid tag="section">
    <base-v-component heading="Projects List" link="components/simple-tables" />

    <base-material-card
      color="success"
      icon="mdi-clipboard-plus"
      title="Edit a project, or view a project's change logs."
      class="px-5 py-3"
    >
      <vxe-table :align="allAlign" :data="tableData">
        <vxe-table-column type="seq" width="60"></vxe-table-column>
        <vxe-table-column field="name" title="Name"></vxe-table-column>
        <vxe-table-column field="sex" title="Sex"></vxe-table-column>
        <vxe-table-column field="age" title="Age"></vxe-table-column>
      </vxe-table>
    </base-material-card>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      allAlign: null,
      tableData: [
        {
          id: 10001,
          name: "Test1",
          role: "Develop",
          sex: "Man",
          age: 28,
          address: "vxe-table 从入门到放弃",
        },
        {
          id: 10002,
          name: "Test2",
          role: "Test",
          sex: "Women",
          age: 22,
          address: "Guangzhou",
        },
        {
          id: 10003,
          name: "Test3",
          role: "PM",
          sex: "Man",
          age: 32,
          address: "Shanghai",
        },
        {
          id: 10004,
          name: "Test4",
          role: "Designer",
          sex: "Women ",
          age: 24,
          address: "Shanghai",
        },
      ],
    };
  },
};
</script>
