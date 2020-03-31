import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchBar from './search_bar';
import youtubeSearch from '../youtube-api';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import { selectVideo } from '../actions';

class YouTube extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
    };

    this.search = debounce(this.search, 300);
    this.search('pixar');
  }

        search = (text) => {
          youtubeSearch(text).then((videos) => {
            this.setState({
              videos,
            });
            this.props.selectVideo(videos[0]);
          });
        }

        render() {
          return (
            <div>
              <SearchBar onSearchChange={this.search} />
              <div id="video-section">
                <VideoDetail video={this.props.video} />
                <VideoList videos={this.state.videos} />
              </div>
            </div>
          );
        }
}

const mapStateToProps = (state) => (
  {
    video: state.video,
  }
);

export default withRouter(connect(mapStateToProps, { selectVideo })(YouTube));
