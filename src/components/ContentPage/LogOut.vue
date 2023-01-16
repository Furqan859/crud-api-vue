<template>
<router-link to="/login" class="nav-a">
    <font-awesome-icon icon="right-from-bracket" />
    <span class="fs-4 d-none d-xl-inline" @click="logOut()" > LogOut</span></router-link>
</template>

<script>
export default {
    name: 'LogOut',

    methods:{
        logOut(){
            localStorage.removeItem('userData');
            localStorage.removeItem('authUser');
            window.location.replace('/login')
        }
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

