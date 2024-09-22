import { FlatList, FlatListProps, View } from 'react-native'
import { TracksListItem } from './TrackListItem'
import library from '@/assets/data/library.json'
import { utilsStyles } from '@/styles'

export type TrackListProps = Partial<FlatListProps<unknown>>

const itemDivider = () => (
	<View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
)

export const TrackList = ({ ...flatlistProps }: TrackListProps = {}) => {
	return (
		<FlatList
			data={library}
			ItemSeparatorComponent={itemDivider}
			keyExtractor={(item) => item.title}
			renderItem={({ item: track }) => (
				<TracksListItem
					track={{
						...track,
						image: track.artwork,
					}}
				/>
			)}
		/>
	)
}
