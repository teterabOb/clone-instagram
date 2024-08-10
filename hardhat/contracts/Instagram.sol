// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

contract Instagram {

    uint256 public s_postCounterId;
    // crear posts
    // dar likes
    // quitar likes
    // tenemos un feed

    struct Post {
        string description;
        string uri;
    }


    // Llave -> valor
    // ID -> Post
    mapping(uint256 => Post) private s_posts;
    // Posts del usuario
    mapping(address => mapping(uint256 => Post)) private s_postsUser;
    // Conteo de posts por usuario
    mapping(address => uint256) private s_postsCounterByUser;
    // Likes en las publicaciones segun PostId
    mapping(uint256 => address[]) private s_likesOfPost;

    event PostAdded(uint256 indexed postId, string description, address owner);
    event Like(uint256 indexed postId, address user);
    event Unlike(uint256 indexed postId, address user);
    error PostDoesNotExist(uint256);

    function addPost(Post memory _post) external {
        require(bytes(_post.uri).length > 0, "Uri can't be empty");
        s_postCounterId++;
        s_posts[s_postCounterId] = _post;
        s_postsUser[msg.sender][s_postCounterId] = _post;
        s_postsCounterByUser[msg.sender]++;
        emit PostAdded(s_postCounterId, _post.description, msg.sender);
    }

    function like(uint256 _postId) external postsExists(_postId) {
        s_likesOfPost[_postId].push(msg.sender);
        emit Like(_postId, msg.sender);
    }

    function unlike(uint256 _postId) external postsExists(_postId) {
        address[] storage addresses = s_likesOfPost[_postId];

        for (uint256 index = 0; index < addresses.length; index++) {
            if(addresses[index] == msg.sender){
                address lastLike = addresses[addresses.length - 1];
                addresses[index] = lastLike;
                addresses.pop();
                break;
            }
        }

        emit Unlike(_postId, msg.sender);
    }

    function getPost(uint256 _postId) public view postsExists(_postId) returns(Post memory){
        return s_posts[_postId];
    }

    function getPostUser(address _user, uint256 _postId) public view postsExists(_postId) returns(Post memory){
        return s_postsUser[_user][_postId];
    }

    function getPostsCounterByUser(address _user) public view returns(uint256){
        return s_postsCounterByUser[_user];
    }

    function getLikesOfPost(uint256 _postId) public view postsExists(_postId) returns(uint256){
        return s_likesOfPost[_postId].length;
    }

    function getUri(uint256 _postId) public view postsExists(_postId) returns(string memory){
        return s_posts[_postId].uri;
    }

    // 10 -> 50
    // 50 - 10 = 40
    // length = 40
    function getAllPosts(uint256 _start, uint256 _end) public view returns(Post[] memory){
        uint256 length = _end - _start + 1;
        Post[] memory posts = new Post[](length);
        for (uint256 index = 0; index < length; index++) {
            posts[index] = s_posts[_start + index];
        }

        return posts;
    }

    modifier postsExists(uint256 _postId){
        if(_postId > s_postCounterId || _postId == 0) revert PostDoesNotExist(_postId);
        _;
    }

}