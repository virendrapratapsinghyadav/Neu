import { mergeProps, Tabs } from "@base-ui/react"
import type { TabsIndicatorProps, TabsListProps, TabsPanelProps, TabsRootProps, TabsTabProps } from "./Tabs.types"
import { tabsRootVariants, tabsListVariants, tabsTabVariants, tabsIndicatorVariants, tabsPanelVariants} from "./Tabs.style"


function NeuTabsRoot(props: TabsRootProps) {
    const mergedProps = mergeProps(props, {
        className: tabsRootVariants(),
    })
    return (<Tabs.Root {...mergedProps}/>)
}
export { NeuTabsRoot }


function NeuTabsList(props: TabsListProps) {
    const mergedProps = mergeProps(props, {
        className: tabsListVariants(),
    })
    return (<Tabs.List {...mergedProps}/>)
}
export { NeuTabsList }


function NeuTabsTab(props: TabsTabProps) {
    const mergedProps = mergeProps(props, {
        className: tabsTabVariants(),
    })
    const {value, ...otherprops} = mergedProps;
    return (<Tabs.Tab value={value} {...otherprops}/>)
}
export { NeuTabsTab }


function NeuTabsIndicator(props: TabsIndicatorProps) {
    const mergedProps = mergeProps(props, {
        className: tabsIndicatorVariants(),
    })
    return (<Tabs.Indicator {...mergedProps}/>)
}
export { NeuTabsIndicator }


function NeuTabsPanel(props: TabsPanelProps) {
    const mergedProps = mergeProps(props, {
        className: tabsPanelVariants(),
    })
    const {value, ...otherprops} = mergedProps;
    return (<Tabs.Panel value={value} {...otherprops}/>)
}
export { NeuTabsPanel }
