<template>
<div>
    <input v-model="search" @keyup="dbSearch" id="searchInput" name="searchInput" type="text" class="form-control m-2" placeholder="Search " />
    <div  v-for=" post in filterData" v-bind:key="post.id">
        <p v-if="search.length > 0">{{ post.title }}</p>

    </div>
</div>
</template>

<script>
export default {
    name: 'SearchBox',
    data() {
        return {
            search: '',
            filterData: null,
        }
    },

    mounted() {
        console.log("Component mounted.");
    },
    methods: {
        async dbSearch() {

            const searchApi = await fetch(`https://dummyjson.com/posts/search?q=${this.search}`)
            const newSearchData = await searchApi.json();
            // this.filterData = newSearchData.posts
            console.log(newSearchData.posts)
             this.filterData = newSearchData.posts.filter((post)=> post.title.toLowerCase().includes(this.search.toLowerCase()))
            //   console.log(this.filterData,"filter Data filterData")

            // fetch('https://dummyjson.com/posts/search?q=love')
            //     .then(res => res.json())
            //     .then(console.log("this is db search response"))
            //     .then(res => {
            //         if (this.search) {
            //             this.filterData = res.results.filter(post =>
            //                 post.title.toLowerCase().includes(this.search.toLowerCase())

            //             );
            //         } else {
            //             this.filterData = res.results;
            //         }
            //     });

        }

    },
    created() {
        this.dbSearch();
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
