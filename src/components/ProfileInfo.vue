<template>
  <div class="profile-header">
    <img :src="profileInfo.imageSrc" :alt="profileInfo.imageAlt" class="avatar">
    <div class="profile-header-text">
      <h1>{{ profileInfo.name }}</h1>
      <p class="subtitle">{{ profileInfo.title }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProfileInfo',
  props: {
    profileInfo: {
      type: Object,
      required: true
    }
  }
};

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
