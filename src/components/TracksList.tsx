import { FlatList, FlatListProps, View } from 'react-native'
import { TracksListItem } from './TrackListItem'
import library from '@/assets/data/library.json'
import { utilsStyles } from '@/styles'
import { Track } from 'react-native-track-player'

export type TrackListProps = Partial<FlatListProps<Track>> & {
	tracks: Track[]
}

const itemDivider = () => (
	<View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
)

export const TrackList = ({ tracks, ...flatlistProps }: TrackListProps) => {
	const handleTrackSelect = (track: Track) => {
		console.log('Selected track:', track)
	}
	return (
		<FlatList
			data={tracks}
			contentContainerStyle={{ padding: 10, paddingBottom: 128 }}
			ItemSeparatorComponent={itemDivider}
			ListFooterComponent={itemDivider}
			renderItem={({ item: track }) => (
				<TracksListItem track={track} onTrackSelect={handleTrackSelect} />
			)}
			{...flatlistProps}
		/>
	)
}
