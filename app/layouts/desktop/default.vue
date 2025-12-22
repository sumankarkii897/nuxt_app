<template>
    <div class="bg-blue-400 flex flex-col min-h-screen ">
        <Header/>
        <main class="flex-1 p-6 ">
            <slot />
        </main>
        <Footer/>
    </div>
</template>