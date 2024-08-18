<template>
  <div
    class="shdow flex w-full items-center gap-12 rounded-2xl bg-[#d9d9d9] px-20 py-10"
  >
    <img src="../assets/avatar.svg" alt="avatar" width="170" height="170" />
    <div class="flex flex-col items-center gap-7">
      <p class="text-center">
        👋 Sup! I&apos;m <span class="font-bold">@kerbethecoder</span>, the
        mastermind behind <span class="font-bold">DevToolBox</span>. Hope you
        find this site as useful as I&apos;ve imagined. Let&apos;s connect —
        whether it&apos;s feedback, collaboration, or just to geek out.
      </p>
      <a
        href="https://github.com/kerbethecoder"
        target="_blank"
        rel="noopener noreferrer"
        className="transition duration-300 ease-in-out hover:scale-125"
      >
        <i class="fa-brands fa-github fa-2x text-[#1a1a1a]"></i>
      </a>
    </div>
  </div>
</template>

<style scoped>
.shdow {
  /* box-shadow: 0 8px 8px -4px rgb(0 0 0 / 0.2); */
  box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
}
</style>
