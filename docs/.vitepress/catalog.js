export function getBackendSidebar() {
    return [
        {
            text: 'java基础',
            collapsible: true,
            items: [
                {text: '面向对象', link: '/backend/java/'},
                {text: 'Java高级', link: '/backend/java/senior'}
            ]
        }
    ]
}

export function getFrontendSidebar() {

}

export function getToolsSidebar() {
    return [
        {
            text: '常用软件',
            collapsible: true,
            items: [
                {text: 'JetBrains', link: '/tools/JetBrains'}
            ]
        }
    ]
}