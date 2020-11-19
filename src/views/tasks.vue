<template>
  <div class="parent">
    <div class="div1" />
    <div class="div2">
      <table>
        <p><th>events</th>
        <ol>
          <tr v-for="item in events" :key="item">
            <td>
              <li>{{ item.title }}</li>
            </td>
          </tr>
        </ol>
        <button type="button" class="btn btn-primary" @click="showModal = true">
          Add a task
        </button>
      </table>

      <Modal v-model="showModal" title="planner">
        <form action="submit">
          <p>Enter the date</p>
          <input type="date" v-model="date" required />
          <p>Enter the task</p>
          <input type="text" v-model="title" required />
          <p>
            <button @click="add" type="button">fix the date!!</button>
          </p>
        </form>
      </Modal>
    </div>
    <div class="div3">
      <vue-cal
        class="vuecal--rounded-theme vuecal--red-theme"
        xsmall
        :time="false"
        active-view="month"
        :disable-views="['week', 'years']"
        :events="events"
        style="width: 400px; height: 420px"
      >
      </vue-cal>
    </div>
    .
  </div>
</template>

<script>
import VueModal from "@kouts/vue-modal";
import "@kouts/vue-modal/dist/vue-modal.css";
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";
export default {
  components: {
    Modal: VueModal,
    VueCal,
  },
  data: function () {
    return {
      showModal: false,
      title: null,
      date: null,
      events: [
        {
          start: "2020-11-21",
          end: "2020-11-21",
          title: "Need to go shopping",
        },
        {
          start: "2020-11-21",
          end: "2020-11-21",
          title: "Golf with John",
        },
        {
          start: "2020-11-22",
          end: "2020-11-22",
          title: "Dad's birthday!",
        },
      ],
    };
  },
  methods: {
    add() {
      const obj = {
        start: this.date,
        end: this.date,
        title: this.title,
      };
      this.events.push(obj);
      this.title = null;
      this.date = null;
    },
  },
};
</script>

<style>
.parent {
  display: grid;
  grid-template-columns: 0.25fr repeat(4, 1fr);
  grid-template-rows: 0.5fr repeat(4, 1fr);
  grid-column-gap: 36px;
  grid-row-gap: 0px;
  font-size: 20px;
}
.div1 {
  grid-area: 1 / 1 / 6 / 6;
  background-image: url("../assets/pan1.jpg");
  background-size: cover;
  background-position: center center;
}
table {
}
.div2 {
  grid-area: 2 / 2 / 4 / 3;
  background-color: #ffffff;
  padding-bottom: 300px;
  border: 1px solid black;
}
.div3 {
  grid-area: 2 / 4 / 4 / 5;
  background-color: #ffffff;
}
</style>