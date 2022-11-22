<script setup lang="ts">
    import router from '@/router';
    import { ref } from 'vue'

    const logout = () => {
        if(confirm('确定要退出登录么？')){
            localStorage.removeItem('uid')
            localStorage.clear()
            router.push('/login')   
        }
    }
</script>

<template>
    <el-container class="h-screen">
        <el-aside class="bg-blue-400">
            aside
        </el-aside>
        <el-container>
            <el-header class="flex items-center">
                <div class="container mx-auto flex justify-between">
                    <div>
                        <a href="/" class="ml-2">菜单导航</a>
                    </div>
                    <div>
                        <span @click="logout" class="cursor-pointer">退出登录</span>
                    </div>
                </div>
            </el-header>
            <el-main class="bg-gray-100">
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>