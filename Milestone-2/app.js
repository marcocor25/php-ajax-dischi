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
    disc: [],
  },
  created() {
    axios.get("./database.php").then((res) => {
      this.disc = res.data;
      console.log(this.disc);
    });
  },
  methods: {},
});

console.log(app);
