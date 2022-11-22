<script setup lang="ts">
    import router from '@/router'
    import { ref,reactive } from 'vue'

    const form = reactive({username: 'admin',password: 'admin'})

    const submit = () => {
        if(form.username == ''){
            alert('用户名不能为空')
            return false
        }
        if(form.password == ''){
            alert('请输入密码')
            return false
        }

        localStorage.setItem('uid',form.username)

        router.push('/')
    }
</script>

<template>
    <el-container class="h-screen">
        <el-header class="flex items-center bg-blue-300">
            <div class="container mx-auto flex justify-between">
                <div>
                    <a href="/" class="ml-2">网站名称</a>
                </div>
                <div>
                    <a href="/">帮助中心</a>
                </div>
            </div>
        </el-header>
        <el-main class="bg-gray-100">
            <div class="container mx-auto">
                <el-row :gutter="20">
                    <el-col :span="8" :offset="15">
                        <div class="bg-white mt-[100px] p-10">
                            <el-form :model="form" size="large" label-width="70px">
                                <el-form-item label="用户名">
                                    <el-input v-model.trim="form.username" />
                                </el-form-item>
                                <el-form-item label="密码">
                                    <el-input type="password" v-model.trim="form.password" />
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="submit" class="bg-blue-400">登录</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </el-main>
        <el-footer class="flex items-center justify-center bg-blue-300">
            <div>footer</div>
        </el-footer>
    </el-container>
</template>