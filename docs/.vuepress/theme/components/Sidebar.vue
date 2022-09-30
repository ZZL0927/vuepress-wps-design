<template>
    <div>
        <div class="group" v-for="item in Object.keys($site.themeConfig.sidebar)" v-if="$page.path.startsWith(item)">
            <div class="group-item" v-for="temp in $site.themeConfig.sidebar[item]">
                <span class="title">{{temp.title}}</span>
                <div class="group-list">
                    <router-link v-for="listitem in temp.children" :to="item+listitem" active-class="active" class="sidebar-link">{{$site.pages.find(page=>("/"+page.relativePath)===(item+listitem+'.md')).title}}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .group-list {
        display: flex;
        flex-direction: column;
    }
    .group .active {
        color: #417ff9;
        background-color: #417ff9;
    }
    .title {
        display: block;
        margin: 6px 0;
        color: #4e5969;
        font-size: 12px;
        font-weight: 400;
    }
</style>