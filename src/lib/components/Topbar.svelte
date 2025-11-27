<script lang="ts">
    let atTop = true;
    const onWindowScroll = () => {
        atTop = window.scrollY < 30;
    };

    window.addEventListener("scroll", onWindowScroll);
    onWindowScroll();

</script>

<div
    id="layout-topbar"
    data-at-top={atTop}
    class="bg-base-100 lg:bg-base-100/90 border-base-300 sticky top-0 z-10 border-b data-[at-top=true]:border-transparent lg:backdrop-blur-sm">
    <div class="container">
        <nav class="flex items-center justify-between py-2">
            <div class="flex items-center gap-2">
                <label
                    for="menu-drawer"
                    id="menu-drawer-trigger"
                    aria-label="open sidebar"
                    class="btn btn-square btn-ghost btn-sm lg:hidden">
                    <span class="iconify lucide--menu size-5"></span>
                </label>

                <a href="#" class="flex items-center gap-2">
                    <img src="/images/landing/zabasi-hero.png" alt="Zabasi Group Logo" class="h-6 w-auto" />
                    <span class="text-xl font-semibold">Zabasi Group</span>
                </a>
            </div>

            <div class="max-lg:hidden">
                <ul class="menu menu-horizontal gap-2 px-1">
                    <li class="font-medium"><a href="#home">Home</a></li>
                    <li class="font-medium"><a href="#features">Properties</a></li>
                    <li class="font-medium"><a href="#integrations">Tools</a></li>
                    <li class="font-medium"><a href="#pricing">Consulting</a></li>
                    <li class="font-medium"><a href="#faq">FAQ</a></li>
                </ul>
            </div>
        </nav>

        <div class="drawer">
            <input id="menu-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-side">
                <label for="menu-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
                <div class="bg-base-100 min-h-full w-60 p-5">
                    <a href="#" class="text-xl font-semibold">Zabasi Group</a>
                    <ul class="menu w-full gap-2 p-0 pt-4">
                        <li class="font-medium"><a href="#home">Home</a></li>
                        <li class="font-medium"><a href="#features">Properties</a></li>
                        <li class="font-medium"><a href="#integrations">Tools</a></li>
                        <li class="font-medium"><a href="#pricing">Consulting</a></li>
                        <li class="font-medium"><a href="#faq">FAQ</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>