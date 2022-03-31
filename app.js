// COLLEGAMENTO VUE
const app = new Vue({
  el: "#app",
  data: {
    options: [
      {
        value: 0,
        selected: "selected",
        disabled: "disabled",
        text: "generi",
      },
      {
        value: 1,
        selected: null,
        disabled: null,
        text: "rock",
      },
      {
        value: 2,
        selected: null,
        disabled: null,
        text: "jazz",
      },
      {
        value: 3,
        selected: null,
        disabled: null,
        text: "metal",
      },
      {
        value: 4,
        selected: null,
        disabled: null,
        text: "pop",
      },
    ],
  },
  methods: {},
  created() {},
});

console.log(app);
