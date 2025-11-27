<script lang="ts">
    const changeTheme = (theme: string) => {
        const html = document.documentElement;
        if (theme === "system") {
            html.removeAttribute("data-theme");
        } else {
            html.setAttribute("data-theme", theme);
        }
    };
</script>

<div class="fixed end-5 bottom-5 z-10 flex flex-col items-center">
    <div class="dropdown dropdown-end dropdown-top">
        <div class="btn mt-2" role="button" tabIndex={0}>
            Theme
            <span class="iconify lucide--chevron-up size-3.5"></span>
        </div>
        <ul class="menu dropdown-content rounded-box bg-base-100 w-52 shadow" tabIndex={0}>
            <li>
                <div
                    class="group-[:not([data-theme])]/html:bg-base-200 flex items-center"
                    onclick={() => changeTheme("system")}>
                    <span class="iconify lucide--laptop size-4.5"></span>
                    System
                </div>
            </li>
            <li>
                <div
                    class="group-data-[theme=light]/html:bg-base-200 flex items-center"
                    onclick={() => changeTheme("light")}>
                    <span class="iconify lucide--sun size-4.5"></span>
                    Light
                </div>
            </li>
            <li>
                <div
                    class="group-data-[theme=dark]/html:bg-base-200 flex items-center"
                    onclick={() => changeTheme("dark")}>
                    <span class="iconify lucide--moon size-4.5"></span>
                    Dark
                </div>
            </li>
        </ul>
    </div>
</div>
