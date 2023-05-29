"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6206],{37921:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=a(87462),i=(a(67294),a(3905)),o=a(74866),r=a(85162);const l={title:"Theming with React Navigation"},m="Theming with React Navigation",s={unversionedId:"guides/theming-with-react-navigation",id:"guides/theming-with-react-navigation",title:"Theming with React Navigation",description:"In this guide we will look into how to apply theming for an application using React Native Paper and React Navigation at the same time.",source:"@site/docs/guides/08-theming-with-react-navigation.md",sourceDirName:"guides",slug:"/guides/theming-with-react-navigation",permalink:"/react-native-paper/docs/guides/theming-with-react-navigation",draft:!1,editUrl:"https://github.com/callstack/react-native-paper/tree/main/docs/docs/guides/08-theming-with-react-navigation.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Theming with React Navigation"},sidebar:"tutorialSidebar",previous:{title:"Contributing",permalink:"/react-native-paper/docs/guides/contributing"},next:{title:"Integrate AppBar with React Navigation",permalink:"/react-native-paper/docs/guides/react-navigation"}},h={},c=[{value:"Themes adaptation",id:"themes-adaptation",level:2},{value:"Material Design 2",id:"material-design-2",level:3},{value:"Material Design 3",id:"material-design-3",level:3},{value:"Combining theme objects",id:"combining-theme-objects",level:2},{value:"Material Design 2",id:"material-design-2-1",level:3},{value:"Material Design 3",id:"material-design-3-1",level:3},{value:"Material Design 2",id:"material-design-2-2",level:3},{value:"Material Design 3",id:"material-design-3-2",level:3},{value:"Passing theme with Providers",id:"passing-theme-with-providers",level:2},{value:"Customizing theme",id:"customizing-theme",level:2},{value:"React Context for theme customization",id:"react-context-for-theme-customization",level:2},{value:"Creating Context",id:"creating-context",level:2},{value:"Using Context",id:"using-context",level:2}],p={toc:c};function g(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"theming-with-react-navigation"},"Theming with React Navigation"),(0,i.kt)("p",null,"In this guide we will look into how to apply theming for an application using React Native Paper and React Navigation at the same time."),(0,i.kt)("p",null,"Offering different theme options, especially dark/light ones, becomes increasingly a standard requirement of the modern mobile application. Fortunately, both React Navigation and React Native Paper support configurable theming out-of-the-box.\nBut how to make them work together?"),(0,i.kt)("h2",{id:"themes-adaptation"},"Themes adaptation"),(0,i.kt)("h3",{id:"material-design-2"},"Material Design 2"),(0,i.kt)("p",null,"Fortunately, in Material Design 2, both React Navigation and React Native Paper offer very similar API when it comes to theming and theme color structure. It's possible to import them in light and dark variants from both."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  DarkTheme as NavigationDarkTheme,\n  DefaultTheme as NavigationDefaultTheme,\n} from '@react-navigation/native';\n\nimport {\n  MD2LightTheme,\n  MD2DarkTheme,\n} from 'react-native-paper';\n")),(0,i.kt)("h3",{id:"material-design-3"},"Material Design 3"),(0,i.kt)("p",null,"From v5, React Native Paper theme colors structure is following the Material Design 3 ",(0,i.kt)("i",null,"(known as Material You)")," colors system, which differs significantly from both previous Paper's theme and React Navigation theme. "),(0,i.kt)("p",null,"However, to simplify adapting React Navigation theme colors, to use the ones from React Native Paper, it's worth using a utility called ",(0,i.kt)("inlineCode",{parentName:"p"},"adaptNavigationTheme")," \u2013 it accepts navigation compliant themes in both modes and returns their equivalents adjusted to Material Design 3."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  DarkTheme as NavigationDarkTheme,\n  DefaultTheme as NavigationDefaultTheme,\n} from '@react-navigation/native';\n\nconst { LightTheme, DarkTheme } = adaptNavigationTheme({\n  reactNavigationLight: NavigationDefaultTheme,\n  reactNavigationDark: NavigationDarkTheme,\n});\n")),(0,i.kt)("p",null,"Library exports also Material Design 3 themes in both modes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  MD3LightTheme,\n  MD3DarkTheme,\n} from 'react-native-paper';\n")),(0,i.kt)("h2",{id:"combining-theme-objects"},"Combining theme objects"),(0,i.kt)("p",null,"Both libraries require a wrapper to be used at the entry point of the application.\nReact Navigation exposes ",(0,i.kt)("inlineCode",{parentName:"p"},"NavigationContainer")," which ensures that navigation works correctly, but also accepts ",(0,i.kt)("inlineCode",{parentName:"p"},"theme")," as an optional property. Read more about setting up navigation ",(0,i.kt)("a",{parentName:"p",href:"https://reactnavigation.org/docs/getting-started/"},"here"),".\nFor React Native Paper theme to work, we need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"PaperProvider")," also at application's entry point."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { NavigationContainer } from '@react-navigation/native';\nimport { createStackNavigator } from '@react-navigation/stack';\nimport { TouchableOpacity } from 'react-native';\nimport {\n  Card,\n  Title,\n  Paragraph,\n  List,\n  PaperProvider,\n} from 'react-native-paper';\n\nconst Stack = createStackNavigator();\n\nconst HomeScreen = ({ navigation }) => (\n  <TouchableOpacity\n    onPress={() =>\n      navigation?.push('Details', {\n        title,\n        content,\n      })\n    }\n  >\n    <Card>\n      <Card.Content>\n        <Title>{title}</Title>\n        <Paragraph>{content}</Paragraph>\n      </Card.Content>\n    </Card>\n  </TouchableOpacity>\n);\n\nconst DetailsScreen = (props) => {\n  const { title, content } = props?.route?.params;\n  return (\n    <List.Section>\n      <List.Subheader>{title}</List.Subheader>\n      <List.Item title={content} />\n    </List.Section>\n  );\n};\n\nexport default function App() {\n  return (\n    <PaperProvider>\n      <NavigationContainer>\n        <Stack.Navigator initialRouteName=\"Home\">\n          <Stack.Screen name=\"Home\" component={HomeScreen} />\n          <Stack.Screen name=\"Details\" component={DetailsScreen} />\n        </Stack.Navigator>\n      </NavigationContainer>\n    </PaperProvider>\n  );\n}\n")),(0,i.kt)("p",null,"Our goal here is to combine those two themes, so that we could control the theme for the entire application from a single place."),(0,i.kt)("p",null,"To make things easier we can use ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/deepmerge"},"deepmerge")," package. With ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn")," we can install it like this"),(0,i.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install deepmerge\n"))),(0,i.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add deepmerge\n")))),(0,i.kt)("h3",{id:"material-design-2-1"},"Material Design 2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  NavigationContainer,\n  DarkTheme as NavigationDarkTheme,\n  DefaultTheme as NavigationDefaultTheme,\n} from '@react-navigation/native';\nimport {\n  MD2DarkTheme,\n  MD2LightTheme,\n} from 'react-native-paper';\nimport merge from 'deepmerge';\n\nconst CombinedDefaultTheme = merge(MD2LightTheme, NavigationDefaultTheme);\nconst CombinedDarkTheme = merge(MD2DarkTheme, NavigationDarkTheme);\n")),(0,i.kt)("h3",{id:"material-design-3-1"},"Material Design 3"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  NavigationContainer,\n  DarkTheme as NavigationDarkTheme,\n  DefaultTheme as NavigationDefaultTheme,\n} from '@react-navigation/native';\nimport {\n  MD3DarkTheme,\n  MD3LightTheme,\n} from 'react-native-paper';\nimport merge from 'deepmerge';\n\nconst { LightTheme, DarkTheme } = adaptNavigationTheme({\n  reactNavigationLight: NavigationDefaultTheme,\n  reactNavigationDark: NavigationDarkTheme,\n});\n\nconst CombinedDefaultTheme = merge(MD3LightTheme, LightTheme);\nconst CombinedDarkTheme = merge(MD3DarkTheme, DarkTheme);\n")),(0,i.kt)("p",null,"Alternatively, we could merge those themes using vanilla JavaScript:"),(0,i.kt)("h3",{id:"material-design-2-2"},"Material Design 2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const CombinedDefaultTheme = {\n  ...MD2LightTheme,\n  ...NavigationDefaultTheme,\n  colors: {\n    ...MD2LightTheme.colors,\n    ...NavigationDefaultTheme.colors,\n  },\n};\nconst CombinedDarkTheme = {\n  ...MD2DarkTheme,\n  ...NavigationDarkTheme,\n  colors: {\n    ...MD2DarkTheme.colors,\n    ...NavigationDarkTheme.colors,\n  },\n};\n")),(0,i.kt)("h3",{id:"material-design-3-2"},"Material Design 3"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { LightTheme, DarkTheme } = adaptNavigationTheme({\n  reactNavigationLight: NavigationDefaultTheme,\n  reactNavigationDark: NavigationDarkTheme,\n});\n\nconst CombinedDefaultTheme = {\n  ...MD3LightTheme,\n  ...LightTheme,\n  colors: {\n    ...MD3LightTheme.colors,\n    ...LightTheme.colors,\n  },\n};\nconst CombinedDarkTheme = {\n  ...MD3DarkTheme,\n  ...DarkTheme,\n  colors: {\n    ...MD3DarkTheme.colors,\n    ...DarkTheme.colors,\n  },\n};\n")),(0,i.kt)("h2",{id:"passing-theme-with-providers"},"Passing theme with Providers"),(0,i.kt)("p",null,"After combining the themes, we will be able to control theming in both libraries from a single source, which will come in handy later."),(0,i.kt)("p",null,"Next, we need to pass merged themes into the Providers. For this part, we use the dark one - ",(0,i.kt)("inlineCode",{parentName:"p"},"CombinedDarkTheme"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const Stack = createStackNavigator();\n\nexport default function App() {\n  return (\n    <PaperProvider theme={CombinedDarkTheme}>\n      <NavigationContainer theme={CombinedDarkTheme}>\n        <Stack.Navigator initialRouteName="Home">\n          <Stack.Screen name="Home" component={HomeScreen} />\n          <Stack.Screen name="Details" component={DetailsScreen} />\n        </Stack.Navigator>\n      </NavigationContainer>\n    </PaperProvider>\n  );\n}\n')),(0,i.kt)("h2",{id:"customizing-theme"},"Customizing theme"),(0,i.kt)("p",null,"We don't need to limit ourselves to the themes offered by the libraries in default. Both packages allow for custom themes to be applied.\nYou can learn all about it their documentations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://reactnavigation.org/docs/themes/"},"Theming in React Navigation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://callstack.github.io/react-native-paper/docs/guides/theming"},"Theming in React Native Paper"))),(0,i.kt)("h2",{id:"react-context-for-theme-customization"},"React Context for theme customization"),(0,i.kt)("p",null,"Now, we wouldn't want to stay forever with dark theme being on, which is why we need to gain the ability to control theme dynamically. A bit of state management is needed for this purpose."),(0,i.kt)("p",null,"React Context proves itself very useful in handling cross-cutting concerns like global theme handling, so we will use just that."),(0,i.kt)("h2",{id:"creating-context"},"Creating Context"),(0,i.kt)("p",null,"First, we define our Context."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\n\nexport const PreferencesContext = React.createContext({\n  toggleTheme: () => {},\n  isThemeDark: false,\n});\n")),(0,i.kt)("h2",{id:"using-context"},"Using Context"),(0,i.kt)("p",null,"Context Provider should be imported also at the entry point, as we want it to wrap the whole app, for the theme values to be accessible at every component that we have."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import React from \'react\';\nimport { PreferencesContext } from \'./PreferencesContext\';\n\nconst Stack = createStackNavigator();\n\nexport default function App() {\n  const [isThemeDark, setIsThemeDark] = React.useState(false);\n\n  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;\n\n  const toggleTheme = React.useCallback(() => {\n    return setIsThemeDark(!isThemeDark);\n  }, [isThemeDark]);\n\n  const preferences = React.useMemo(\n    () => ({\n      toggleTheme,\n      isThemeDark,\n    }),\n    [toggleTheme, isThemeDark]\n  );\n\n  return (\n    // Context is wired into the local state of our main component, so that its values could be propagated throughout the entire application\n    <PreferencesContext.Provider value={preferences}>\n      <PaperProvider theme={theme}>\n        <NavigationContainer theme={theme}>\n          <Stack.Navigator initialRouteName="Home">\n            <Stack.Screen name="Home" component={HomeScreen} />\n            <Stack.Screen name="Details" component={DetailsScreen} />\n          </Stack.Navigator>\n        </NavigationContainer>\n      </PaperProvider>\n    </PreferencesContext.Provider>\n  );\n}\n')),(0,i.kt)("p",null,"Now that the Context is available at every component, all we need to do is import it. Next thing is to provide the user with some UI element to control changing the theme. We will use ",(0,i.kt)("inlineCode",{parentName:"p"},"Paper"),"'s ",(0,i.kt)("a",{parentName:"p",href:"https://callstack.github.io/react-native-paper/docs/components/Switch"},"Switch")," for this purpose."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { useTheme, Appbar, TouchableRipple, Switch } from 'react-native-paper';\nimport { PreferencesContext } from './PreferencesContext';\n\nconst Header = ({ scene }) => {\n  const theme = useTheme();\n  const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);\n\n  return (\n    <Appbar.Header\n      theme={{\n        colors: {\n          primary: theme?.colors.surface,\n        },\n      }}\n    >\n      <Appbar.Content title={scene.route?.name} />\n        <Switch\n          color={'red'}\n          value={isThemeDark}\n          onValueChange={toggleTheme}\n        />\n    </Appbar.Header>\n  );\n};\n")),(0,i.kt)("p",null,"And now you can switch between light and dark theme!"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"paperGuide1",src:a(9158).Z,width:"405",height:"857"})),(0,i.kt)("p",null,"Thanks to the linking of themes that we did earlier, switching themes can be controlled with only one piece of state."),(0,i.kt)("p",null,"React Native Paper components will automatically use provided theme thanks to the ",(0,i.kt)("inlineCode",{parentName:"p"},"PaperProvider")," that is wrapped around the entry point of our application, but we can also access theme values manually with ",(0,i.kt)("inlineCode",{parentName:"p"},"useTheme")," hook,\nexposed by the library. You can see how it's done in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Header")," component code above."),(0,i.kt)("p",null,"If light/dark themes are not enough for your use case, you can learn more about creating Material Design themes ",(0,i.kt)("a",{parentName:"p",href:"https://material.io/design/material-theming/implementing-your-theme.html#color"},"here"),".\nOn ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch of the example app, you will find implemented ",(0,i.kt)("a",{parentName:"p",href:"https://callstack.github.io/react-native-paper/docs/components/Menu"},"Menu")," component, which allows to choose a few custom themes. Inspecting code in ",(0,i.kt)("inlineCode",{parentName:"p"},"utils")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Header")," may give you some idea how to use your own themes with ",(0,i.kt)("inlineCode",{parentName:"p"},"Paper"),", in addition to dedicated ",(0,i.kt)("a",{parentName:"p",href:"https://callstack.github.io/react-native-paper/docs/components/Menu"},"docs"),"."),(0,i.kt)("p",null,"Read more about integrating ",(0,i.kt)("inlineCode",{parentName:"p"},"Paper")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"React Navigation")," in a brilliant ",(0,i.kt)("a",{parentName:"p",href:"https://reactnavigation.org/blog/2020/01/29/using-react-navigation-5-with-react-native-paper/"},"article")," by ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/trensik"},"@trensik")))}g.isMDXComponent=!0},9158:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/themingWithReactNavigationDarkLightSwitch-e696c17bf7b8dbcc07deda37d069578e.gif"}}]);