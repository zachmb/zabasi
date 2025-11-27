<script lang="ts">
    import Card3d from "card3d";

    const init3DEffect = (e: any) => {
        new Card3d(e, { perspective: 1000, fullPageListening: true });
    };
</script>

<section class="py-8 lg:py-20" id="home">
    <div class="container">
            <div class="max-lg:order-2">
                <h1 class="text-4xl font-bold tracking-tight lg:text-6xl lg:leading-none">
                    We build, refine, and scale
                    <span class="text-primary">software</span>
                    companies.
                </h1>
                <p class="text-base-content/80 mt-8 sm:text-lg">
                    Zabasi Group is a holding company that builds B2C and B2B software. We've garnered millions of users, ran sub $0.50 CPM UGC campaigns to millions of views, and much more.
                </p>
                <div class="mt-8 inline-flex gap-3 sm:mt-8">
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLScejF-TZ1ciu3a37bhMIeA00mrdAo98zzIK0CqaY-zgBMdwmw/viewform?usp=publish-editor"
                        target="_blank">
                        <button class="btn btn-primary">
                            <span class="iconify lucide--handshake size-4"></span>
                            Join Us
                        </button>
                    </a>
                     <a
                        href="https://www.linkedin.com/company/zabasigroup/"
                        target="_blank">
                        <button class="btn btn-ghost">
                            <span class="iconify lucide--linkedin size-4"></span>
                            See us on LinkedIn
                        </button>
                    </a>
                    <a
                        href="mailto:crew@looplessapp.com"
                        target="_blank">
                        <button class="btn btn-ghost">
                            <span class="iconify lucide--mail size-4"></span>
                            Contact us
                        </button>
                    </a>
                </div>
            </div>
    </div>
</section>
