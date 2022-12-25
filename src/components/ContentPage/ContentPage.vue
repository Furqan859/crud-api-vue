<template>
<div class="container-xl">
    <div class="row">
        <div class="col-6 col-lg-1 col-xl-2 border-end">
            <div class="left_nav_section d-flex flex-column position-sticky align-items-end align-items-xl-start">
                <leftNavBar />
            </div>
        </div>

        <div class="col-6 col-lg-7 col-xl-10">
            <div class="row align-items-center mt-3">
                <div class="col">
                    <strong class="fs-4">Home</strong>
                </div>
                <div class="col text-end">
                    <font-awesome-icon icon="bell" />
                </div>
            </div>

            <SearchBox />
            <PostData v-bind:post=post />

            <div class="row">
                <div class="col-11 d-flex">
                    <div class="tweet mt-5 d-flex">
                        <div class="row">

                            <div v-for="data in datas" :key="data.userId" class="col-12" id="card">

                                <p style="background-color:#f5f5f5; border-radius:20px; padding:30px" role="button">
                                    {{ data.body }}
                                </p>
                                <div>
                                    <div class="d-flex justify-content-between">
                                        <h6>Reactions:<span class="badge bg-secondary">{{ data.reactions }}</span>
                                        </h6>

                                        <button v-on:click="userDataId(data.userId)" type="button" class="btn btn-dark mb-3">
                                            Comments
                                        </button>
                                        <div v-for="tag in data.tags" :key="tag.id" style="display:flex">
                                            <div style="margin-right: 10px;margin-left: 10px;">
                                                <span class="badge rounded-pill bg-light mb-3">{{ tag }}</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div v-if="show" class="col-4 my-2" id="card">
                        <UserComments v-bind:userId=userId />
                    </div>
                    <div v-else>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import leftNavBar from './leftNavBar.vue'
import UserComments from './UserComments.vue'
import SearchBox from './SearchBox.vue'
import PostData from './PostData.vue'
export default {
    name: 'ContentPage',
    components: {
        leftNavBar,
        UserComments,
        SearchBox,
        PostData,
    },
    data() {
        return {
            datas: {},
            show: null,
            tags: '',
            id: '',
            userId: null,
            component: {

            }
        };
    },

    methods: {
        async getData() {
            try {
                let response = await fetch("https://dummyjson.com/posts");
                let newData = await response.json();
                this.datas = newData.posts;
                this.tags = newData.posts.tags;
                this.id = newData.posts.userId;
                // console.log(localPosts.posts, "response")
            } catch (error) {
                console.log(error);
            }
        },
        async userDataId(id) {
            // console.log(id,"userId")
            this.userId = id
            this.show = !this.show
        }
    },

    created() {
        this.getData();

    }

};
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
