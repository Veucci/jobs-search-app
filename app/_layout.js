import React, { useCallback, useEffect } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

const Layout = () => {
    
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    useEffect(() => {
        const loadFontsAndHideSplash = async () => {
            try {
                await SplashScreen.preventAutoHideAsync();
                await SplashScreen.hideAsync();
            } catch (e) {
                console.warn(e);
            }
        };

        loadFontsAndHideSplash();
    }, []);

    if (!fontsLoaded) return null;

    return <Stack onLayout={onLayoutRootView} />;
}

export default Layout;
