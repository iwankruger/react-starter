import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
  componentDidMount() {
    // Can always check if we have already fetched
    // a post
    // ie
    // if(!this.props.post){
    //     const {id} = this.props.match.params;
    //     this.props.fetchPost(id);
    // }

    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

// Function mapStateToProps is called when the
// component PostsShow is about te re render
// The function of mapStateToProps is to figure out
// what props the component PostsShow needs.
// The property ownProps contain the props
// that was already heading to the component
// PostsShow before mapStateToProps is called
function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

//export  default PostsShow;
export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
