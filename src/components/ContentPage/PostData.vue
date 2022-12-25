<template>
<div class="row mt-4">
    <div class="col-2 col-lg-1">
        <img id="nav-img-1" :src="image" height="60px" width="60px" class="img-fluid" />
    </div>
    <div class="col-10 col-lg-11">
        <input ref="clear" v-model="newPost" id="input-post" class="form-control" />
        <Button id="post-button" v-on:click="DataPost" value="post" type="button" class="btn btn-primary mt-2">Post</Button>
    </div>

</div>
</template>

<script>
export default {
    name: 'PostData',
    props: {
        post: String,

    },

    data() {
        return {
            newPost: '',
            userId: Math.floor(Math.random() * 100),
            image: "",

        }
    },
    methods: {
        async DataPost() {
            const userData = JSON.parse(localStorage.getItem('userData'));
            await fetch('https://dummyjson.com/posts/add', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        title: this.newPost,
                        userId: userData.id,

                    })
                })

                .then(res => res.json())
                .then(console.log);
            // console.log(this.newPost, "this is new post")
            this.newPost = ''
        },
        getImages() {
            const userData = JSON.parse(localStorage.getItem('userData'));
            this.image = userData.image;
        }

    },
    created() {
        this.getImages()

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
