<template>
<div class="my-3">
    <router-link to="/" class="nav-a">
        <font-awesome-icon icon="home" />
        <span class="fs-4 d-none d-xl-inline">Home</span></router-link>
</div>

<div class="my-3">
    <a class="nav-a" href="#">
        <font-awesome-icon icon="bell" />
        <span class="fs-4 d-none d-xl-inline">Notification</span></a>
</div>
<div class="my-3">
    <a class="nav-a" href="#">
        <font-awesome-icon icon="envelope" />
        <span class="fs-4 d-none d-xl-inline">Message</span></a>
</div>

<div class="my-3">
    <LogOut />
</div>

<div class="profile_icon position-absolute">
    <router-link to="/profile"><img id="nav-img" class="nav-a img-fluid" :src="image" style="height:60px;width:60px" /></router-link>
</div>
</template>

<script>
import LogOut from './LogOut.vue';
export default {
    name: 'leftNavBar',
    components: {
        LogOut
    },
    data() {
        return {
            image: "",
        }
    },
    methods: {
        getUserData() {
            const userData = JSON.parse(localStorage.getItem('userData'));
            this.image = userData.image;
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
    height: 45px;
    width: 45px;
}

.nav-a {
    cursor: pointer;
    text-decoration: none;
    color: black
}

.nav-a:hover {
    color: cornflowerblue;
}

#delete {
    margin-top: -50px;
}

#delete:hover {
    border: black;

}

#update-body {
    cursor: pointer;

}
</style>
