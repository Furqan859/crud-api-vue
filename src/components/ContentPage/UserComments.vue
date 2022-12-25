<template>
    <div id="userComments" class="m-2">
        <div class="container justify-content-center mt-5 border-left border-right">
            <div class="d-flex justify-content-center pt-3 pb-2">
                <input v-model="newComment" type="text" name="text" placeholder="+ AddComment"
                    class="form-control addtxt">
            </div>
            <div v-if="show" class="d-flex justify-content-center pt-3 pb-2">
                <input v-model="editCommentInput" type="text" name="text" placeholder="+ EditComment"
                    class="form-control addtxt">
                <button v-on:click="updateNewComment" class="btn btn-dark mb-3 ">Update</button>
            </div>
            <button v-on:click="postNewComment"
                class="d-flex justify-content-center py-2 btn btn-dark mb-3">Submit</button>
            <div class="d-flex flex-column justify-content-center py-2">

                <div v-for="data in dataComment" :key="data.id" class="second py-2 px-2 m-1">

                    <span class="text1">{{ data.body }}</span>
                    <div class="d-flex justify-content-between py-1 pt-2">
                        <div>
                            <div v-for="user in data.user" :key="user.id">
                                <span class="text2">{{ user.username }}</span>
                            </div>
                            <div>
                                <span class="text3">Upvote?</span>
                                <span class="thumbup"><i class="fa fa-thumbs-o-up"></i></span>
                                <span class="text4">3</span>
                            </div>
                        </div>

                        <div>
                            <button v-on:click="editComment(data.id)" class="btn btn-dark mb-3 mx-2">Edit</button>
                            <button v-on:click="deleteComment(data.id)" class="btn btn-dark mb-3">Delete</button>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'UserComments',
    props: {
        userId: Number
    },
    data() {
        return {
            dataComment: null,
            newComment: null,
            show: null,
            editCommentInput: null,
            newUserDataId: null,
            allComments: null,
            image: "",
        }
    },
    methods: {
        async mountComments() {
            // console.log(this.userId,"postId")
            const newComments = await fetch('https://dummyjson.com/comments?limit=340&select=body,postId')
            const jsonComments = await newComments.json()
            this.allComments = jsonComments
            // console.log(jsonComments,"json comments")
            let data = jsonComments.comments.filter(obj => obj.postId === this.userId);
            this.dataComment = data
            // console.log(data, "this is data")
        },
        async postNewComment() {
            const userData = JSON.parse(localStorage.getItem("userData"));
            // console.log(userData.id, "user id data show localStorage")
            await fetch('https://dummyjson.com/comments/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    body: this.newComment,
                    postId: this.dataComment[0].postId,
                    userId: userData.id,
                })
            })
                .then(res => res.json())
                .then(console.log);
            this.newComment = ''
        }

        ,
        async editComment(id) {
            this.show = !this.show
            this.newUserDataId = id
            const newComments = await fetch('https://dummyjson.com/comments?limit=340&select=body,postId')
            const jsonComments = await newComments.json();
            console.log(jsonComments, "jsonComments jsonComments jsonComments jsonComments")
            const data = jsonComments?.comments.find((item) => item.id === id);
            console.log(data, "this is data object")
            this.editCommentInput = data?.body

        },

        updateNewComment() {
            console.log(this.newUserDataId, "this is new user id")
            fetch(`https://dummyjson.com/comments/${this.newUserDataId}`, {
                method: 'PUT',
                /* or PATCH */
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    body: this.editCommentInput,
                })
            })
                .then(res => res.json())
                .then(console.log);

            this.show = !this.show
        },

        async deleteComment(id) {
            // let newDataComment = this.dataComment.splice(id, 1)
            // console.log(newDataComment, "return splice data")
            fetch(`https://dummyjson.com/comments/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(console.log);
            // console.log(id, "delete id")
            // let data = this.dataComment.find(obj => obj.id === id);
            // console.log(data, "data new comment")
            // await fetch(`https://dummyjson.com/comments/{data.id}`, {
            //         method: 'DELETE',
            //         body: JSON.stringify({
            //             body:
            //         })
            //     })
            //     .then(res => res.json())
            //     .then(console.log);

        },
        getImages() {
            const userData = JSON.parse(localStorage.getItem('userData'));
            console.log(userData, "userdata")
            this.image = userData.image;
        }
    },

    created() {
        this.mountComments();

    }

}
</script>

<style>
body {
    background-color: #fff;
}

.container {
    background-color: #eef2f5;
    width: 400px;
}

.addtxt {
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    font-size: 13px;
    width: 350px;
    background-color: #e5e8ed;
    font-weight: 500;
}

.form-control:focus {
    color: #000;
}

.second {
    width: 350px;
    background-color: white;
    border-radius: 4px;
    box-shadow: 10px 10px 5px #aaaaaa;
}

.text1 {
    font-size: 13px;
    font-weight: 500;
    color: #56575b;
}

.text2 {
    font-size: 13px;
    font-weight: 500;
    margin-left: 6px;
    color: #56575b;
}

.text3 {
    font-size: 13px;
    font-weight: 500;
    margin-right: 4px;
    color: #828386;
}

.text3o {
    color: #00a5f4;

}

.text4 {
    font-size: 13px;
    font-weight: 500;
    color: #828386;
}

.text4i {
    color: #00a5f4;
}

.text4o {
    color: white;
}

.thumbup {
    font-size: 13px;
    font-weight: 500;
    margin-right: 5px;
}

.thumbupo {
    color: #17a2b8;
}
</style>
