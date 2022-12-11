import React, { useState } from 'react'

import './App.css';
import youtube from './api/youtube';
import Grid2 from "@mui/material/Unstable_Grid2";

import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

function App() {

  const [ videos, setVideos ] = useState([]);
  const [ selectedVideos, setSelectedVideos ] = useState({id: {}, snippet: {}});

  return (
		<div className="App">
			<Grid2 style={{ justifyContent: "center" }} container spacing={10}>
				<Grid2 item xs={11}>
					<Grid2 container spacing={10}>
						<Grid2 item xs={12}>
							<SearchBar onSubmit={handleSubmit} />
						</Grid2>
						<Grid2 item xs={8}>
							<VideoDetail video={selectedVideos} />
						</Grid2>
						<Grid2 item xs={4}>
							<VideoList videos={videos} onVideoSelect={setSelectedVideos} />
						</Grid2>
					</Grid2>
				</Grid2>
			</Grid2>
		</div>
	);

  async function handleSubmit(searchTerm) {
		const {data: {items: videos}} = await youtube.get("search", {
			params: {
				part: "snippet",
				maxResults: 5,
				key: "AIzaSyCUYEFKEhskFu7Ye891o85OV7wsptzAGd8",
				q: searchTerm,
			},
		});
    setVideos(videos);
    setSelectedVideos(videos[0]);

	}
}

export default App;
