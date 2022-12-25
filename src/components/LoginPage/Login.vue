<template>
<section @submit.prevent="getDataApi" class=" text-center text-lg-start">
    <div class="card mb-3 m-5">
        <div class="row g-0 d-flex align-items-center">
            <div class="col-lg-4 d-none d-lg-flex">
                <img src="../../assets/login.jpg" alt="Trendy Pants and Shoes" class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
            </div>
            <div class="col-lg-8">
                <div class="card-body py-5 px-md-5">

                    <form class="form">
                        <h2>Sign In Social Media Web</h2>
                        <!-- Email input -->
                        <div class="form-outline mb-4">
                            <input v-model="userData.userName" type="text" id="username" name="username" placeholder="Your username.." class="form-control" />
                            <label class="form-label" for="form2Example1">Email address</label>
                        </div>

                        <!-- Password input -->
                        <div class="form-outline mb-4">
                            <input v-model="userData.password" type="password" id="password" name="password" placeholder="Your password.." class="form-control" />
                            <label class="form-label" for="form2Example2">Password</label>
                        </div>

                        <!-- 2 column grid layout for inline styling -->

                        <!-- Submit button -->
                        <div class="form-outline mb-4">
                            <input @click="getDataApi" type="submit" value="Submit" class="btn btn-dark btn-lg form-control" id="button" />

                        </div>

                    </form>

                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            userData: {
                userName: '',
                password: '',
            }
        };
    },
    methods: {
        async getDataApi() {
            const getData = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.userData.userName,
                    password: this.userData.password,
                })

            })
            const data = await getData.json();
            if (!data.token) {
                alert("Invalid Email or Password");

            } else {
                localStorage.setItem('userData', JSON.stringify(data));
                this.$router.push({
                    name: 'ContentPage'
                })

            }

        }

    }
}
</script>

<style scoped>
.rounded-t-5 {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
}

@media (min-width: 992px) {
    .rounded-tr-lg-0 {
        border-top-right-radius: 0;
    }

    .rounded-bl-lg-5 {
        border-bottom-left-radius: 0.5rem;
    }
}
</style>
