<template>
  <v-container fluid class="fluid text-center" >
        <!-- style="height: 100vh" -->
        <h1>Welcome to LogRockets</h1>
        <p>Please complete this form to create an account</p>
        <v-form ref="form" class="mx-2" lazy-validation>
            <v-row>
                <v-col cols="6">
                    <v-text-field v-model="firstname" :rules="nameRules" label="First Name">
                    </v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field v-model="lastname" :rules="nameRules" label="Last Name">
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row>
  <v-col cols="12">
    <v-text-field v-model="email" :rules="emailRules" label="Email" required>
    </v-text-field>
  </v-col>
</v-row>
<v-row>
  <v-col cols="6">
    <v-text-field v-model="phone" type="tel"
     label="Mobile" required></v-text-field>
  </v-col>
  <!-- <v-col cols="6">
    <v-text-field v-model="DOB" type="number" :rules="dobRules"
     label="DOB" required></v-text-field>
  </v-col> -->
</v-row>
        <v-btn class="purple darken-2 white--text mt-5"  @click="submitForm"> Register </v-btn>
        </v-form>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      firstname: '',
      lastname: '',
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail must be valid',
      ],
      phone: '',
      phoneRules: [
        (v) => v || 'Phone number  is required',
        // (v) => /^[2-9]\d{2}[2-9]\d{2}\d{4}$/.test(v) || 'Please Enter Valid Phone Number',
      ],
      DOB: '',
      dobRules: [
        (v) => v || 'DOB  is required',
        // (v) => /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/.test(v) ||
        // 'Please Enter Valid DOB',
      ],
    };
  },
  methods: {
    async submitForm(e) {
      e.preventDefault();
      if (this.$refs.form.validate()) {
        const tempObj = {
          name: this.lastname,
          email: this.email,
          phone: this.phone,
          DOB: this.DOB,
        };
        const headers = {
          'Content-type': 'application/json',
          charset: 'UTF-8',
        };
        const myResponse = await axios.post('https://jsonplaceholder.typicode.com/users', tempObj, { headers });
        console.log(myResponse);
        this.$store.dispatch('submittedUser', myResponse.data);
        this.$router.push({ name: 'User-details' });
      }
    },
  },
};
</script>
