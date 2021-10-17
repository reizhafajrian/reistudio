<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="submit">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" class="form-control" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model="password"
          class="form-control"
        />
      </div>
      <button class="btn btn-primary">Login</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submit() {
      axios
        .post("/api/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          this.$router.push("/");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
