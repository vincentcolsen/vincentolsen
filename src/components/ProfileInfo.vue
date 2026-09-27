<template>
  <div class="profile-header">
    <img
      :src="profile.avatar"
      :alt="profile.avatarAlt"
      class="avatar"
      width="100"
      height="100"
    >
    <div class="profile-header-text">
      <h1>{{ profile.name }}</h1>
      <p class="subtitle">{{ profile.title }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  profile: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.profile-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 50px;
}

.avatar {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-right: 25px;
}

.profile-header-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 20px;
  margin-bottom: 5px;
}

.profile-header-text .subtitle {
  font-size: 16px;
  margin-top: 0;
}
</style>
