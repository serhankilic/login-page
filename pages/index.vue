<script setup>
import { ref, onMounted } from 'vue'

const username = ref('')

onMounted(() => {
    // localStorage'dan kullanıcı adını al
    try {
        const loggedInUser = localStorage.getItem('loggedInUser')
        console.log("localStorage'dan alınan kullanıcı:", loggedInUser)

        if (loggedInUser) {
            username.value = loggedInUser
        } else {
            console.log("localStorage'da kullanıcı bulunamadı")
            username.value = 'Kullanıcı bulunamadı'
        }
    } catch (error) {
        console.error('localStorage erişim hatası:', error)
        username.value = 'Hata oluştu'
    }
})
</script>

<template>
    <div class="home-container">
        <div class="welcome-message">
            <h1>Hoş Geldiniz!</h1>
            <p>Başarıyla giriş yaptınız.</p>
        </div>

        <div class="user-info">
            <button class="user-button">
                <Icon name="iconamoon:profile-light" class="user-icon" />
                {{ username }}
            </button>
        </div>
    </div>
</template>

<style>
.home-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
}

.welcome-message {
    text-align: center;
    margin-bottom: 40px;
}

.welcome-message h1 {
    font-size: 36px;
    margin-bottom: 10px;
}

.user-info {
    display: flex;
    justify-content: center;
}

.user-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    background-color: #355bff;
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 18px;
    cursor: pointer;
}

.user-icon {
    margin-right: 10px;
    font-size: 22px;
}
</style>
