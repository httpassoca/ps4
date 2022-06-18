<script lang="ts">
</script>

<div class="header">
  <img src="/assets/icons/psplus.png" alt="PS Plus icon" class="psplus" />
  <img
    src="/assets/icons/notifications.svg"
    alt="notifications icon"
    class="notifications"
  />
  <div class="friends">
    <div class="friends-number">
      <img
        src="/assets/icons/online-ball.svg"
        alt="online-ball icon"
        class="online-ball"
      />
      <span>8</span>
    </div>
    <img src="/assets/icons/friends.png" alt="friends icon" />
  </div>
  <div class="profile">
    <img
      src="/assets/icons/online-ball.svg"
      alt="online-ball icon"
      class="online-ball"
    />
    <img
      src="/assets/icons/profile.webp"
      alt="profile icon"
      class="profile-image"
    />
    <span class="name"> Big boss </span>
    <img src="/assets/icons/psplus.png" alt="PS Plus icon" class="plus-icon" />
  </div>
  <div class="trophies">
    <img src="/assets/icons/trophy.svg" alt="Trophy icon" class="trophy-icon" />
    <img
      src="/assets/icons/trophy-star.png"
      alt="Trophy star icon"
      class="trophy-star-icon"
    />
    <span>12</span>
  </div>
  <span class="time"> 1:24 PM </span>
</div>

<style lang="sass">
.header
  margin-top: 78px
  width: 1720px
  margin-left: 95px
  display: flex
  align-items: center
.psplus
  width: 40px
  height: 40px
.notifications
  width: 40px
  height: 40px
  margin-left: 58px
.friends
  position: relative
  display: inline-flex
  flex-direction: column
  margin-left: 488px
  > img
    width: 40px
    height: 40px
  .friends-number
    display: flex
    gap: 11px
    position: absolute
    bottom: 100%
    margin-bottom: 8px
    span
      font-size: 24px
      line-height: 24px
.profile
  margin-left: 72px
  display: inline-flex
  align-items: center
  .profile-image
    height: 48px
    width: 48px
    margin-left: 27px
    position: absolute
  .name
    margin-left: 71px
    font-size: 26px
    line-height: 26px
  .plus-icon
    height: 26px
    width: 26px
    margin-left: 14px
.trophies
  display: inline-flex
  align-items: center
  margin-left: 261px
  .trophy-icon
    height: 35px
    width: 38px
  .trophy-star-icon
    margin-left: 5px
    height: 26px
    width: 26px
  span
    margin-left: 5px
    font-size: 24px
    line-height: 24px
.time
  margin-left: 245px
  font-size: 35px
  line-height: 35px
</style>
