import { colors, fontSize } from '@/constants/tokens'
import { BlurView } from 'expo-blur'
import { Tabs } from 'expo-router'
import { StyleSheet, Text } from 'react-native'
import { FontAwesome, FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { FloatingPlayer } from '@/components/FloatingPlayer'

const TabsNavigation = () => {
	return (
		<>
			<Tabs
				screenOptions={{
					tabBarActiveTintColor: colors.primary,
					tabBarLabelStyle: {
						fontSize: fontSize.xs,
						fontWeight: 500,
					},
					headerShown: false,
					tabBarStyle: {
						position: 'absolute',
						borderTopLeftRadius: 20,
						borderTopRightRadius: 20,
						borderTopWidth: 0,
					},
					tabBarBackground: () => (
						<BlurView
							intensity={95}
							style={{
								...StyleSheet.absoluteFillObject,
								borderTopLeftRadius: 20,
								borderTopRightRadius: 20,
								overflow: 'hidden',
							}}
						/>
					),
				}}
			>
				<Tabs.Screen
					name="favorites"
					options={{
						title: 'Favorites',
						tabBarIcon: () => <FontAwesome name="heart" size={20} color={colors.primary} />,
					}}
				/>
				<Tabs.Screen
					name="playlists"
					options={{
						title: 'Playlists',
						tabBarIcon: () => (
							<MaterialCommunityIcons name="playlist-play" size={28} color={colors.primary} />
						),
					}}
				/>
				<Tabs.Screen
					name="(songs)"
					options={{
						title: 'Songs',
						tabBarIcon: () => (
							<Ionicons name="musical-notes-sharp" size={24} color={colors.primary} />
						),
					}}
				/>
				<Tabs.Screen
					name="artists"
					options={{
						title: 'Artists',
						tabBarIcon: () => <FontAwesome6 name="users-line" size={20} color={colors.primary} />,
					}}
				/>
			</Tabs>
			<FloatingPlayer />
		</>
	)
}

export default TabsNavigation
