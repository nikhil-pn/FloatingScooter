import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'

//screen component for safeAreaView an styling component not that much neccessary
export default function Screen({children, style }) {
    return (
        <SafeAreaView style={[styles.container, style]}>
            <View style={[styles.view, style]}>
                {children}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1
    },
    view: {
        // flex: 1
    }
})