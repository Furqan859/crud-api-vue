<template>
<div class="container-xl">
    <div class="row">
        <div class="col-6 col-lg-1 col-xl-2 border-end">
            <leftNavBar />
        </div>
        <div class="col-10 col-lg-7 col-xl-6">
            <div class="row align-items-center mt-3">
                <div class="col">
                    <strong class="fs-4">Home</strong>
                </div>
                <div class="col text-end">
                    <font-awesome-icon icon="bell" />
                </div>
            </div>
            <section class="vh-50" style="background-color: #f4f5f7;">
                <div class="container py-5 h-500">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col col-lg-12 mb-4 mb-lg-0">
                            <div class="card mb-3" style="border-radius: .5rem;">
                                <div class="row g-0">
                                    <div class="col-md-4 gradient-custom text-center text-white" style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;">
                                        <p id="userName">{{ userName }}</p>
                                        <img id="nav-img-1" :src="image" alt="Avatar" class="img-fluid my-5" style="width: 80px;" />
                                        <h5 id="firstName">{{ firstName }}</h5>
                                        <div id="gender">{{ gender }}</div>

                                        <i class="far fa-edit mb-5"></i>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body p-4">
                                            <h6>Information</h6>
                                            <hr class="mt-0 mb-4">
                                            <div class="row pt-1">
                                                <div class="col-6 mb-3">
                                                    <h6>{{ email }}</h6>
                                                    <div id="email" class="text-muted">info@example.com</div>
                                                </div>
                                                <div class="col-6 mb-3">
                                                    <h6>Phone</h6>
                                                    <p class="text-muted">Secured</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </div>
</div>
</template>

<script>
import leftNavBar from '../ContentPage/leftNavBar.vue';
export default {
    name: 'Profile',
    components: {
        leftNavBar
    },
    data() {
        return {
            userName: '',
            firstName: '',
            image: '',
            gender: "",
            email: '',
            phone: ""
        }
    },
    methods: {
        getUserData() {
            const userData = JSON.parse(localStorage.getItem('userData'));
            console.log(userData, "this is data from localStorage");
            this.userName = userData.username;
            this.image = userData.image;
            this.gender = userData.gender;
            this.firstName = userData.firstName
            this.email = userData.email
        }
    },
    created() {
        this.getUserData();

    }

}
</script>

<style scoped>
.left_nav_section {
    height: 100vh;
    top: 0px;
}

.profile_icon {
    bottom: 20px;
}

.happening_box {
    background-color: #efefef;
    border-radius: 20px;
}

.img-fluid {
    border-radius: 60px;
}

.nav-a {
    cursor: pointer;
    text-decoration: none;
    color: black
}

.nav-a:hover {
    color: cornflowerblue;
}

.gradient-custom {
    /* fallback for old browsers */
    background: #f6d365;

    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(to right bottom, rgba(246, 211, 101, 1), rgba(253, 160, 133, 1));

    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to right bottom, rgba(246, 211, 101, 1), rgba(253, 160, 133, 1))
}
</style>
