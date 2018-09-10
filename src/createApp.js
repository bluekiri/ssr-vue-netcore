import Vue from 'vue';


// export a factory function for creating fresh app, router and store
// instances
export default function createApp(pageComponent) {
    // create router instance
    const app = new Vue({
        // the root instance simply renders the App component.
        render: h => h(pageComponent)
    });

    return app;
}
