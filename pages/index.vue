<script setup>
import { ref, onMounted } from 'vue'

const username = ref('')
const isDropdownOpen = ref(false) // Dropdown durumunu tutacak değişken

// Toggle fonksiyonu - dropdown'ı açıp kapatır
const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value
}

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
            <h1 class="welcome-message-header">Hoş Geldiniz!</h1>
        </div>

        <div class="user-info">
            <div class="dropdown-box">
                <button class="user-button" @click="toggleDropdown">
                    <Icon name="iconamoon:profile-light" class="user-icon" />
                    {{ username }}
                </button>
                <div class="dropdown-content" v-show="isDropdownOpen">
                    <button class="dropdown-button">
                        <Icon name="mdi:cog-outline" class="dropdown-icon" />
                        <span class="dropdown-button-text">Ayarlar</span>
                    </button>
                    <button class="dropdown-button">
                        <Icon name="mdi:exit-to-app" class="dropdown-icon" />
                        <span class="dropdown-button-text">Exit</span>
                    </button>
                </div>
            </div>
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
    .welcome-message {
        text-align: center;
        margin-bottom: 40px;
    }
    .welcome-message-header {
        font-size: 36px;
        margin-bottom: 10px;
    }
    .user-info {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        justify-content: center;
        .dropdown-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            padding-bottom: 2px;
            position: relative;
            .user-button {
                width: 100%;
                min-width: 105px;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                padding: 10px 20px;
                background-color: #355bff;
                color: white;
                border: none;
                border-radius: 12px;
                font-size: 18px;
                cursor: pointer;
                position: relative;
                .user-icon {
                    margin-right: 10px;
                    font-size: 22px;
                    position: absolute;
                    left: 5px;
                }
            }
            .dropdown-content {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                .dropdown-button {
                    width: 105px;
                    border-radius: 12px;
                    padding: 5px 10px;
                    display: flex;
                    align-items: center;
                    justify-content: right;
                    flex-direction: row;
                    column-gap: 5px;
                    position: relative;
                    border: none;
                    cursor: pointer;
                    transition: 0.3s all ease;
                    .dropdown-button-text {
                        font-size: 16px;
                        font-weight: 500;
                        position: relative;
                        text-align: right;
                    }
                    .dropdown-icon {
                        position: absolute;
                        left: 2px;
                        font-size: 24px;
                    }
                }
                .dropdown-button:hover {
                    background-color: lightgray;
                }
            }
        }
    }
}
</style>
