
import { App } from "vue";
import { setupElemementplus } from "./element-plus";
import { setupFontawesome } from "./font-awesome";
import { setupTailwindcss } from "./tailwindcss";

function autoComponent(app:App){
    const components = import.meta.glob('@/components/**/*.vue')
    
    Object.keys(components).forEach((key)=>{
        const name = key.split('/').pop()?.split('.').shift() as string
        for (const [key, component] of Object.entries(components)) {
            app.component(name, component)
        }
    })

}

export function setupPlugin(app:App){
    setupFontawesome()
    setupTailwindcss()
    setupElemementplus(app)
    autoComponent(app)
}