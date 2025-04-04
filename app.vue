<template>
    <div class="login-container">
        <div class="login-content-container">
            <section class="login-page-image"></section>
            <div class="login-page-content">
                <div class="login-action-items">
                    <section class="header-area">
                        <p class="header">GİRİŞ YAP</p>
                        <p class="header-description">
                            Lütfen giriş yapmak için bilgilerinizi giriniz.
                        </p>
                    </section>
                    <section class="login-input-area">
                        <div class="input-box">
                            <div class="username input-section">
                                <input
                                    type="text"
                                    placeholder="Kullanıcı Adı"
                                    class="username-input input"
                                    v-model="username"
                                />
                                <span class="input-details">
                                    <span class="separate">|</span>
                                    <Icon
                                        name="iconamoon:profile-light"
                                        class="input-icon"
                                    />
                                </span>
                            </div>
                            <div class="password input-section">
                                <input
                                    :type="showPassword ? 'text' : 'password'"
                                    placeholder="Şifre"
                                    class="password-input input"
                                    v-model="password"
                                />
                                <span class="input-details">
                                    <span class="separate">|</span>
                                    <button
                                        class="password-show"
                                        @click="showPassword = !showPassword"
                                    >
                                        <Icon
                                            :name="
                                                showPassword
                                                    ? 'iconoir:eye'
                                                    : 'iconoir:eye-closed'
                                            "
                                            class="input-icon"
                                        />
                                    </button>
                                </span>
                            </div>
                            <div v-if="loginError" class="error-message">
                                Yanlış kullanıcı adı veya parola
                            </div>
                            <div class="confirm-button-input input-section">
                                <button
                                    class="confirm-button"
                                    @click="validateLogin"
                                >
                                    ONAYLA
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
* {
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
}
.login-container {
    width: 100vw;
    height: 100vh;
    .login-content-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        .login-page-image {
            width: 700px;
            height: 100%;
            background: rgb(74, 127, 187);
            background: linear-gradient(
                180deg,
                rgba(74, 127, 187, 1) 0%,
                rgba(217, 234, 253, 1) 100%
            );
        }
        .login-page-content {
            width: calc(100% - 700px);
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .login-action-items {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                row-gap: 40px;
                align-items: center;
                justify-content: center;
                .header-area {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    row-gap: 20px;
                    .header {
                        font-size: 50px;
                        font-weight: 600;
                    }
                    .header-description {
                        font-size: 20px;
                        font-weight: 300;
                    }
                }
                .login-input-area {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    .input-box {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        row-gap: 20px;
                        justify-content: center;
                        align-items: center;
                        .input-section {
                            width: 500px;
                            height: 50px;
                            position: relative;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            .input {
                                width: 500px;
                                height: 50px;
                                position: relative;
                                padding-left: 10px;
                                border: 1px solid black;
                                border-radius: 12px;
                                font-size: 18px;
                                color: dimgray;
                            }
                            .input-details {
                                display: flex;
                                flex-direction: row;
                                column-gap: 10px;
                                justify-content: center;
                                align-items: center;
                                position: absolute;
                                right: 10px;
                                top: 50%;
                                bottom: 50%;
                                .separate {
                                    font-size: 24px;
                                    font-weight: 300;
                                    color: dimgray;
                                }
                                .input-icon {
                                    font-size: 26px;
                                    color: dimgray;
                                }
                                .password-show {
                                    width: 30px;
                                    height: 30px;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    cursor: pointer;
                                    background-color: transparent;
                                    border: none;
                                    .input-icon {
                                        text-align: center;
                                    }
                                }
                            }
                            .confirm-button {
                                width: 500px;
                                height: 50px;
                                border-radius: 12px;
                                font-size: 20px;
                                font-weight: 500;
                                color: white;
                                background-color: #355bff;
                                border: 1px solid #161886;
                                cursor: pointer;
                            }
                        }
                        .error-message {
                            color: red;
                            font-size: 14px;
                            margin-top: -10px;
                            margin-bottom: -10px;
                        }
                    }
                }
            }
        }
    }
}
</style>
<script setup lang="ts">
import { ref } from 'vue'

// Kullanıcı bilgileri
const users = [
    { username: 'han', password: 'bruna' },
    { username: 'eren', password: 'meva' },
]

// Şifrenin görünürlüğünü kontrol eden değişken
const showPassword = ref(false)

// Kullanıcı giriş bilgileri
const username = ref('')
const password = ref('')
const loginError = ref(false)

// Giriş doğrulama fonksiyonu
const validateLogin = () => {
    // Girilen bilgilere sahip kullanıcıyı ara
    const foundUser = users.find(
        (user) =>
            user.username === username.value && user.password === password.value
    )

    if (foundUser) {
        loginError.value = false
        alert('Hoşgeldiniz!')
    } else {
        loginError.value = true
    }
}
</script>
