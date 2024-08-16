<template>
  <div class="flex w-full items-center gap-16 rounded-2xl bg-[#d9d9d9] p-24">
    <img src="../assets/avatar.svg" alt="avatar" width="170" height="170" />
    <div class="flex flex-col gap-7">
      <p class="text-center">
        👋 Sup! I&apos;m <span class="font-bold">@kerbethecoder</span>, the
        mastermind behind <span class="font-bold">DevToolBox</span>. Hope you
        find this site as useful as I&apos;ve imagined. Let&apos;s connect —
        whether it&apos;s feedback, collaboration, or just to geek out. 🙌
      </p>
      <!-- TODO: add icons -->
      <div class="flex items-center justify-center gap-4">
        <a
          href="https://github.com/kerbethecoder"
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-300 ease-in-out hover:scale-125"
        >
          <i class="fa-brands fa-github fa-2x text-[#1a1a1a]"></i>
        </a>
        <a
          href="https://kerbethecoder.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-300 ease-in-out hover:scale-125"
        >
          <i class="fa-regular fa-id-badge fa-2x text-[#1a1a1a]"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.borderGuide {
  border: 1px solid red;
}
</style>
